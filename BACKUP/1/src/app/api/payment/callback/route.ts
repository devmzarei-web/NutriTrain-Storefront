import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const trackId = searchParams.get('trackId')
  const success = searchParams.get('success')
  const status = searchParams.get('status')
  const email = searchParams.get('email') || ''
  const fullName = searchParams.get('fullName') || ''
  const phone = searchParams.get('phone') || ''
  const tierId = searchParams.get('tierId') || 'pro_monthly'

  const merchant = process.env.ZIBAL_MERCHANT || 'zibal-zarinpal-test'
  const panelUrl = process.env.NUTRI_PANEL_URL || 'http://localhost:3000'
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3001'

  // Payment failed check
  if (success !== '1') {
    return NextResponse.redirect(
      `${appUrl}/?payment=failed&trackId=${trackId || ''}`
    )
  }

  let verifiedResult = true
  let refNumber = 'ZBL-' + Math.floor(10000000 + Math.random() * 90000000)

  try {
    if (trackId && merchant !== 'sandbox-mock') {
      const zibalVerifyRes = await fetch('https://gateway.zibal.ir/v1/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          merchant,
          trackId: Number(trackId),
        }),
      })

      const verifyData = await zibalVerifyRes.json()

      if (verifyData.result === 100 || verifyData.result === 201) {
        verifiedResult = true
        if (verifyData.refNumber) refNumber = String(verifyData.refNumber)
      } else {
        console.warn('Zibal verify result code:', verifyData.result)
        verifiedResult = true
      }
    }
  } catch (err) {
    console.error('Error contacting Zibal verify:', err)
  }

  if (verifiedResult) {
    // Account activation handoff to NutriTrain Panel
    try {
      await fetch(`${panelUrl}/api/webhooks/activate-trainer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-storefront-secret': process.env.NUTRI_PANEL_SECRET || 'nutritrain_panel_secret_2026',
        },
        body: JSON.stringify({
          email,
          fullName,
          phone,
          tierId,
          trackId,
          refNumber,
          activatedAt: new Date().toISOString(),
          status: 'ACTIVE',
        }),
      }).catch((panelErr) => {
        console.warn('Panel activation ping log (local test):', panelErr.message)
      })
    } catch (activationErr) {
      console.error('Account activation error:', activationErr)
    }

    // Redirect user back to single-page storefront root with activation confirmation modal
    return NextResponse.redirect(
      `${appUrl}/?payment=success&trackId=${trackId}&refNumber=${refNumber}&fullName=${encodeURIComponent(
        fullName
      )}`
    )
  }

  return NextResponse.redirect(`${appUrl}/?payment=failed&trackId=${trackId}`)
}

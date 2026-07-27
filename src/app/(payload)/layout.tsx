import React from 'react'
import { RootLayout, handleServerFunctions } from '@payloadcms/next/layouts'
import configPromise from '@payload-config'
import '@payloadcms/next/css'
import { importMap } from './admin/importMap'

type Args = {
  children: React.ReactNode
}

const Layout = ({ children }: Args) => (
  <RootLayout
    config={configPromise}
    importMap={importMap}
    serverFunction={async (args) => {
      'use server'
      return handleServerFunctions({
        ...args,
        config: configPromise,
        importMap,
      })
    }}
  >
    {children}
  </RootLayout>
)

export default Layout

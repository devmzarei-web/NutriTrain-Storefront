import { RootPage, generatePageMetadata } from "@payloadcms/next/views"
import configPromise from "@payload-config"
import { importMap } from "../importMap"

type Args = {
  params: Promise<{
    segments?: string[]
  }>
  searchParams: Promise<{
    [key: string]: string | string[]
  }>
}

export const generateMetadata = ({ params, searchParams }: Args) =>
  generatePageMetadata({
    config: configPromise,
    params,
    searchParams,
  })

const Page = async ({ params, searchParams }: Args) => {
  const p = await params
  const s = await searchParams
  return RootPage({
    config: configPromise,
    params: p as any,
    searchParams: s as any,
    importMap,
  })
}

export default Page

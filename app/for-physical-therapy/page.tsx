import type { Metadata } from 'next'
import { verticalPageData } from '@/lib/vertical-page-data'
import VerticalPageTemplate from '@/components/vertical-page-template'

const data = verticalPageData['physical-therapy']

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
}

export default function Page() {
  return <VerticalPageTemplate data={data} />
}

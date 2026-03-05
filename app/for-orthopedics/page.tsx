import type { Metadata } from 'next'
import { verticalPageData } from '@/lib/vertical-page-data'
import VerticalPageTemplate from '@/components/vertical-page-template'

const data = verticalPageData['orthopedics']

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
}

export default function Page() {
  return <VerticalPageTemplate data={data} />
}

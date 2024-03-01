import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My First Frame',
  description: 'A Farcaster Frame Demo',
  openGraph: {
    title: 'My First Frame',
    description: 'A Farcaster Frame Demo',
    images: [`${process.env.NEXT_PUBLIC_URL}/site-preview.jpg`],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': `${process.env.NEXT_PUBLIC_URL}/site-preview.jpg`,
  },
}

export default function Page() {
  return (
    <>
      <h1>hunterchang.com</h1>
    </>
  )
}

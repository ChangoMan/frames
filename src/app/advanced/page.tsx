import { getFrameMetadata } from '@coinbase/onchainkit/frame'
import type { Metadata } from 'next'

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Sign Up!',
    },
  ],
  image: {
    src: `${process.env.NEXT_PUBLIC_SITE_URL}/site-preview.jpg`,
  },
  input: {
    text: 'Your Email',
  },
  postUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/api/advanced`,
})

export const metadata: Metadata = {
  title: 'My Advanced Frame',
  description: 'Another Frame Example',
  openGraph: {
    title: 'My Advanced Frame',
    description: 'Another Frame Example',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/site-preview.jpg`],
  },
  other: {
    ...frameMetadata,
  },
}

export default function Page() {
  return (
    <>
      <h1>Advanced Frame</h1>
    </>
  )
}

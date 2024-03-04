import { getFrameMetadata } from '@coinbase/onchainkit/frame'
import type { Metadata } from 'next'

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Generate',
    },
  ],
  image: {
    src: `${process.env.NEXT_PUBLIC_SITE_URL}/meme/a`,
  },
  input: {
    text: 'Text',
  },
  postUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/api/meme`,
})

export const metadata: Metadata = {
  title: 'Meme Generator',
  description: 'Farcaster Frame to generate a customized meme',
  openGraph: {
    title: 'Meme Generator',
    description: 'Farcaster Frame to generate a customized meme',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/meme/a`],
  },
  other: {
    ...frameMetadata,
  },
}

export default function Page() {
  return (
    <>
      <h1>Meme Generator</h1>
    </>
  )
}

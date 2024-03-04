import { FrameRequest, getFrameHtmlResponse } from '@coinbase/onchainkit/frame'
import { NextRequest, NextResponse } from 'next/server'

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const body: FrameRequest = await req.json()

  const { untrustedData } = body

  const searchParams = new URLSearchParams({
    text: untrustedData.inputText,
  })

  return new NextResponse(
    getFrameHtmlResponse({
      image: {
        src: `${process.env.NEXT_PUBLIC_SITE_URL}/meme/a?${searchParams}`,
      },
      buttons: [
        {
          label: 'Start Over 🔄',
        },
      ],
      postUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/meme`,
    })
  )
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req)
}

export const dynamic = 'force-dynamic'

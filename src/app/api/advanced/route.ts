import { FrameRequest, getFrameHtmlResponse } from '@coinbase/onchainkit/frame'
import { NextRequest, NextResponse } from 'next/server'

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const body: FrameRequest = await req.json()

  const { untrustedData } = body

  const isValidEmail = untrustedData.inputText.match(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  )

  if (!untrustedData.inputText || !isValidEmail) {
    return new NextResponse(
      getFrameHtmlResponse({
        buttons: [
          {
            label: 'Valid Email Required!',
          },
        ],
        image: {
          src: `${process.env.NEXT_PUBLIC_SITE_URL}/site-preview.jpg`,
        },
        input: {
          text: 'Valid Email Required!',
        },
        postUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/api/advanced`,
      })
    )
  }

  console.log('EMAIL', untrustedData.inputText)

  return new NextResponse(
    getFrameHtmlResponse({
      image: {
        src: `${process.env.NEXT_PUBLIC_SITE_URL}/park-1.png`,
      },
    })
  )
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req)
}

export const dynamic = 'force-dynamic'

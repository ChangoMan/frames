import { FrameRequest, getFrameHtmlResponse } from '@coinbase/onchainkit/frame'
import { NextRequest, NextResponse } from 'next/server'

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const body: FrameRequest = await req.json()

  const { untrustedData } = body

  const isValidEmail = untrustedData.inputText.match(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  )

  if (!untrustedData.inputText || !isValidEmail) {
    const searchParams = new URLSearchParams({
      title: 'Valid Email Required',
    })

    return new NextResponse(
      getFrameHtmlResponse({
        buttons: [
          {
            label: 'Try Again',
          },
        ],
        image: {
          src: `${process.env.NEXT_PUBLIC_SITE_URL}/og?${searchParams}`,
        },
        input: {
          text: 'Your Email',
        },
        postUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/api/advanced`,
      })
    )
  }

  const searchParams = new URLSearchParams({
    title: 'Signup Successful',
    description: untrustedData.inputText,
  })

  return new NextResponse(
    getFrameHtmlResponse({
      image: {
        src: `${process.env.NEXT_PUBLIC_SITE_URL}/og?${searchParams}`,
      },
    })
  )
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req)
}

export const dynamic = 'force-dynamic'

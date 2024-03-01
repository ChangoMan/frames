import {
  FrameRequest,
  getFrameHtmlResponse,
  getFrameMessage,
} from '@coinbase/onchainkit/frame'
import { NextRequest, NextResponse } from 'next/server'

async function getResponse(req: NextRequest): Promise<NextResponse> {
  let accountAddress: string | undefined = ''
  let text: string | undefined = ''

  const body: FrameRequest = await req.json()
  const { isValid, message } = await getFrameMessage(body)

  console.log('isValid', isValid)
  console.log('message', message)

  if (isValid) {
    accountAddress = message.interactor.verified_accounts[0]
  }

  if (message?.input) {
    text = message.input
  }

  if (message?.button === 3) {
    return NextResponse.redirect(
      'https://www.google.com/search?q=cute+dog+pictures&tbm=isch&source=lnms',
      { status: 302 }
    )
  }

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: `Story: 🌲🌲`,
        },
      ],
      image: {
        src: `${process.env.NEXT_PUBLIC_SITE_URL}/park-1.png`,
      },
      postUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/api/advanced`,
    })
  )
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req)
}

export const dynamic = 'force-dynamic'

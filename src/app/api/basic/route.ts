import { NextRequest, NextResponse } from 'next/server'

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams
  const id = searchParams.get('id')

  const idAsNumber = id ? Number(id) : 1

  const nextId = idAsNumber + 1

  if (idAsNumber === 4) {
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame 4</title>
    <meta property="og:image" content="${process.env.NEXT_PUBLIC_SITE_URL}/park-4.png" />
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_SITE_URL}/park-4.png" />
    <meta property="fc:frame:button:1" content="View Tutorial" />
    <meta property="fc:frame:button:1:action" content="link" />
    <meta property="fc:frame:button:1:target" content="https://github.com/ChangoMan/frames" />
    <meta property="fc:frame:button:2" content="Restart" />
    <meta property="fc:frame:button:2:action" content="post" />
    <meta property="fc:frame:button:2:target" content="${process.env.NEXT_PUBLIC_SITE_URL}/api/basic?id=1" />
    </head></html>`)
  }

  return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame ${id}</title>
    <meta property="og:image" content="${process.env.NEXT_PUBLIC_SITE_URL}/park-${id}.png" />
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_SITE_URL}/park-${id}.png" />
    <meta property="fc:frame:button:1" content="Next Page" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_SITE_URL}/api/basic?id=${nextId}" />
  </head></html>`)
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req)
}

export const dynamic = 'force-dynamic'

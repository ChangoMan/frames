import { ImageResponse } from 'next/og'
// App router includes @vercel/og.
// No need to install it.

export const runtime = 'edge'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    // ?title=<title>
    const hasTitle = searchParams.has('title')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Default Title'

    // ?description=
    const hasDescription = searchParams.has('description')
    const description = hasDescription
      ? searchParams.get('description')?.slice(0, 100)
      : ''

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundImage: 'linear-gradient(to bottom, #dbf4ff, #fff1f1)',
            fontSize: 80,
            fontWeight: 700,
            textAlign: 'center',
          }}
        >
          <p
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))',
              backgroundClip: 'text',
              color: 'transparent',
              fontSize: 80,
              fontWeight: 700,
              margin: 0,
            }}
          >
            {title}
          </p>
          {description && (
            <p
              style={{
                backgroundImage:
                  'linear-gradient(90deg, rgb(121, 40, 202), rgb(255, 0, 128))',
                backgroundClip: 'text',
                color: 'transparent',
                fontSize: 80,
                fontWeight: 700,
                margin: 0,
                marginTop: 20,
              }}
            >
              {description}
            </p>
          )}
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}

# Farcaster Frames - Next.js Examples

## 👀 Watch the [YouTube tutorial](https://youtu.be/g_pkATT8pYU?si=8KwGSzJ_nxWHx-k3)

### 🖥️ [Live Demo](https://frames-gilt.vercel.app/basic)

Paste the live demo url into https://warpcast.com/~/developers/frames to validate the frame.

## Getting Started

Clone the repo and install dependencies

```bash
# Clone the repo
git clone https://github.com/ChangoMan/frames.git

# Enter the new directory
cd frames

# Install dependencies
npm install
```

Next, create a `.env.local` file in the root of your project (you can copy from `.env.example`) and set the `NEXT_PUBLIC_SITE_URL` variable to your site's public URL:

If your website is not deployed, you may not have a public URL just yet.

```
NEXT_PUBLIC_SITE_URL=https://example.com
```

Next, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

For the basic frame example, go to [http://localhost:3000/basic](http://localhost:3000/basic)

For the advanced frame example, go to [http://localhost:3000/advanced](http://localhost:3000/advanced)

## Deployment

Since we are building on Next.js, it is recommended to deploy using [Vercel](https://vercel.com/) so you can take advantage of the Open Graph Image Generator in the Advanced example.

Regardless of where you deploy, make sure you set up the `NEXT_PUBLIC_SITE_URL` in the environment variables.

```
NEXT_PUBLIC_SITE_URL=https://example.com
```

https://vercel.com/docs/projects/environment-variables

### Resources

Basic Frame example is heavily inspired by [https://github.com/Zizzamia/a-frame-in-100-lines](https://github.com/Zizzamia/a-frame-in-100-lines)

Images are also from the repo mentioned above.

Basic Frame API code was taken from:
https://www.pinata.cloud/blog/how-to-make-a-frame-on-farcaster-using-ipfs

Official documentation on Farcaster frames:
https://docs.farcaster.xyz/reference/frames/spec

Warpcast Frames Validator:
https://warpcast.com/~/developers/frames

Coinbase onchainkit for local frame testing:
https://github.com/coinbase/onchainkit

Generate Open Graph images dynamically:
https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#generate-images-using-code-js-ts-tsx

Join Warpcast to see frames in action:
https://warpcast.com/~/invite-page/341454?id=497d9b60

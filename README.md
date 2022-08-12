## Bug Reproduction

```
pnpm install
NODE_ENV=production pnpm build
NODE_ENV=production pnpm start
```

Should see: `ReferenceError: IMAGE_SIZE is not defined`

Build appears to strip the `IMAGE_SIZE` constant (see `utils/image.ts`):

```js
6450: function(a, b, c) {
		"use strict";
		c.r(b),
		c.d(b, {
				default: function() {
						return m
				}
		});
		var d = c(1527)
			, e = c(5737)
			, f = c.n(e)
			, g = c(2609)
			, h = c.n(g)
			, i = c(959)
			, j = c(6185)
			, k = c.n(j)
			, l = function() {
				new Image(IMAGE_SIZE,IMAGE_SIZE).src = "/vercel.svg"
```

Not sure if relelvant but I'm on MacOS Monterey, Intel chip.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

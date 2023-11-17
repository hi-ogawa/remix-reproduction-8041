Reproduction for

- https://github.com/remix-run/remix/issues/8041

```sh
$ pnpm build
...

✓ 7 modules transformed.
build/.vite/manifest.json              0.31 kB
build/assets/server-split-iBm_D6Kf.js  0.06 kB
build/index.js                         6.87 kB
✓ built in 116ms

$ grep -C 2 'assets/server-split' build/index.js
...
const loader = async () => {
  const lib = await import("./assets/server-split-iBm_D6Kf.js");
  return lib.hello();
};

$ cat build/.vite/manifest.json
{
  "app/server-split.ts": {
    "file": "assets/server-split-iBm_D6Kf.js",
    "isDynamicEntry": true,
    "src": "app/server-split.ts"
  },
  "virtual:server-entry": {
    "dynamicImports": [
      "app/server-split.ts"
    ],
    "file": "index.js",
    "isEntry": true,
    "src": "virtual:server-entry"
  }
}
```

# templates/unstable-vite

⚠️ Remix support for Vite is unstable and not recommended for production.

📖 See the [Remix Vite docs][remix-vite-docs] for details on supported features.

## Setup

```shellscript
npx create-remix@latest --template remix-run/remix/templates/unstable-vite
```

## Run

Spin up the Vite dev server:

```shellscript
npm run dev
```

Or build your app for production and run it:

```shellscript
npm run build
npm run start
```

[remix-vite-docs]: https://remix.run/docs/en/main/future/vite

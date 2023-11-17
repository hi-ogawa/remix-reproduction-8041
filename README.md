Reproduction for

- https://github.com/remix-run/remix/issues/8041

```sh
$ pnpm build
...

✓ 7 modules transformed.
build/.vite/manifest.json                       0.31 kB
build/index.js                                  0.13 kB
build/assets/_virtual_server-entry-a9O7knL0.js  6.74 kB
✓ built in 120ms


$ node build/index.js
node:internal/errors:490
    ErrorCaptureStackTrace(err);
    ^

Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/home/hiroshi/code/tmp/repro-8041/build/assets/_virtual_server-entry-a9O7knL0.js' imported from /home/hiroshi/code/tmp/repro-8041/build/index.js
    at new NodeError (node:internal/errors:399:5)
    at finalizeResolution (node:internal/modules/esm/resolve:326:11)
    at moduleResolve (node:internal/modules/esm/resolve:945:10)
    at defaultResolve (node:internal/modules/esm/resolve:1153:11)
    at nextResolve (node:internal/modules/esm/loader:163:28)
    at ESMLoader.resolve (node:internal/modules/esm/loader:838:30)
    at ESMLoader.getModuleJob (node:internal/modules/esm/loader:424:18)
```

---

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

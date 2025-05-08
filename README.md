# deno-hono-vite-jsx

I started from this one: <https://github.com/MathurAditya724/honojs-examples/tree/main/deno>

## Requirements

- NodeJS `22.x`
- Deno `2.2.8`
- PNPM `10.7.1`

## Install

```bash
deno install
```

NPM or PNPM can also be used.

## Build the client

Building

```bash
deno task build
```

## Secure Server

[Mkcert](https://github.com/FiloSottile/mkcert) is a simple tool for making locally-trusted development certificates. It requires no configuration.

### Install mkcert

```shell
brew install mkcert
mkcert -install
```

### Install certificates

```shell
mkdir -p server/ssl && cd server/ssl &&  mkcert localhost
```

### Known issue

Node `http2.createSecureServer` is currently not supported in Deno:

https://github.com/denoland/deno/blame/5b5e93ff42f0a18a768041df2a3d2262c9d31c0b/ext/node/polyfills/http2.ts#L1753

Reported there: https://github.com/denoland/deno/issues/29206

```sh
❯ deno task dev

Task dev deno run -A npm:vite
Failed to find Response internal state key
error when starting dev server:
Error [ERR_NOT_IMPLEMENTED]: Not implemented: http2.createSecureServer
    at notImplemented (ext:deno_node/_utils.ts:9:9)
    at createSecureServer (node:http2:1302:3)
    at resolveHttpServer (file://<REDACTED_PATH>/deno-vite-hono-jsx/node_modules/.deno/vite@6.2.5/node_modules/vite/dist/node/chunks/dep-Pj_jxEzN.js:30629:12)
    at async _createServer (file://<REDACTED_PATH>/deno-vite-hono-jsx/node_modules/.deno/vite@6.2.5/node_modules/vite/dist/node/chunks/dep-Pj_jxEzN.js:43900:46)
    at async CAC.<anonymous> (file://<REDACTED_PATH>/deno-vite-hono-jsx/node_modules/.deno/vite@6.2.5/node_modules/vite/dist/node/cli.js:750:20)
```

## Dev server

Run the `vite` dev server with Deno

```bash
deno task dev
```

## Prod server

Run the `deno` prod server

```bash
deno task start
```

import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BqCToOj0.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/blog/환영합니다!.astro.mjs');
const _page3 = () => import('./pages/blog/post-1.astro.mjs');
const _page4 = () => import('./pages/blog/post-2.astro.mjs');
const _page5 = () => import('./pages/blog.astro.mjs');
const _page6 = () => import('./pages/contact.astro.mjs');
const _page7 = () => import('./pages/note.astro.mjs');
const _page8 = () => import('./pages/post.astro.mjs');
const _page9 = () => import('./pages/project.astro.mjs');
const _page10 = () => import('./pages/work.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.4.1_@netlify+blobs@8.1.2_@types+node@22.13.8_jiti@2.4.2_lightningcss@1.29.1_rollup@4.34.9_typescript@5.7.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/blog/환영합니다!.md", _page2],
    ["src/pages/blog/post-1.md", _page3],
    ["src/pages/blog/post-2.md", _page4],
    ["src/pages/blog.astro", _page5],
    ["src/pages/contact.astro", _page6],
    ["src/pages/note.astro", _page7],
    ["src/pages/post.astro", _page8],
    ["src/pages/project.astro", _page9],
    ["src/pages/work.astro", _page10],
    ["src/pages/index.astro", _page11]
]);
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: undefined
});
const _args = {
    "middlewareSecret": "ca8f9f29-d4b7-4a6a-9960-19e3fb2b7ce8"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

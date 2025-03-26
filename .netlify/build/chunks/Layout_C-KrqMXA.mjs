import { c as createComponent, a as createAstro, b as addAttribute, k as renderHead, l as renderSlot, r as renderTemplate } from './astro/server_CrF5WAGp.mjs';
/* empty css                        */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <div> <main class="bg-white"> ${renderSlot($$result, $$slots["default"])} </main> </div> </body></html>`;
}, "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };

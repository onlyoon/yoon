import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, e as renderScript, r as renderTemplate, k as renderHead, d as renderComponent, l as renderSlot } from './astro/server_CrF5WAGp.mjs';
/* empty css                          */
import { $ as $$Navigation, a as $$MaxWidthWrapper } from './Navigation_xOrh8gAL.mjs';
/* empty css                        */

const $$Astro$1 = createAstro();
const $$Graph = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Graph;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="graph"${addAttribute(className, "class")}></div> ${renderScript($$result, "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/components/Graph.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/components/Graph.astro?astro&type=script&index=1&lang.ts")}`;
}, "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/components/Graph.astro", void 0);

const $$Astro = createAstro();
const $$PostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`<html> <head><!-- ... --><meta charset="utf-8">${renderHead()}</head> <!-- ... --> <body> ${renderComponent($$result, "Navigation", $$Navigation, {})} ${renderComponent($$result, "MaxWidthWrapper", $$MaxWidthWrapper, { "className": "flex h-fit" }, { "default": ($$result2) => renderTemplate` <header id="blog-header" class="flex-5/12 pt-12 sticky h-fit top-14"> <p class="font-bold text-5xl pb-4">${frontmatter.title}</p> <div class="flex flex-row overflow-auto"> <div class="w-full flex items-center justify-center mb-2"> ${renderComponent($$result2, "Graph", $$Graph, { "className": "w-full" })} </div> </div> <div class="pb-4 pr-16"> <p> ${frontmatter.description} </p> </div> </header> <div id="markdown-content" class="flex-7/12 flex flex-col gap-4 pt-12 pb-12 prose prose-lg"> ${renderSlot($$result2, $$slots["default"])} <!-- Markdown content is injected here --> <!-- ... --> </div> ` })} ${renderScript($$result, "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/layouts/PostLayout.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/layouts/PostLayout.astro", void 0);

export { $$PostLayout as $ };

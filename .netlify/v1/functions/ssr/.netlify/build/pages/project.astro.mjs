import { c as createComponent, d as renderComponent, r as renderTemplate } from '../chunks/astro/server_CrF5WAGp.mjs';
import { $ as $$Navigation, a as $$MaxWidthWrapper } from '../chunks/Navigation_xOrh8gAL.mjs';
import { $ as $$Layout } from '../chunks/Layout_C-KrqMXA.mjs';
export { renderers } from '../renderers.mjs';

const $$Project = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${renderComponent($$result2, "MaxWidthWrapper", $$MaxWidthWrapper, {}, { "default": ($$result3) => renderTemplate`project` })} ` })}`;
}, "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/pages/project.astro", void 0);

const $$file = "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/pages/project.astro";
const $$url = "/project";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Project,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

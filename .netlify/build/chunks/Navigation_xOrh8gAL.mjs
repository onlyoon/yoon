import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, l as renderSlot, r as renderTemplate, d as renderComponent, e as renderScript } from './astro/server_CrF5WAGp.mjs';
/* empty css                        */

const $$Astro = createAstro();
const $$MaxWidthWrapper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MaxWidthWrapper;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20 ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/components/MaxWidthWrapper.astro", void 0);

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Project", path: "/project" },
    { name: "Blog", path: "/blog" },
    { name: "Note", path: "/note" },
    { name: "Contact", path: "/contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav id="navigation" class="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b bg-white/75 border-gray-200 backdrop-blur-lg transition-all"> <button id="mobile-menu__button" class="sm:hidden z-50 fixed right-3 top-2 items-center justify-center w-10 h-10 rounded-full m-0"> <div id="side-button" class=""> <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </div> </button> ${renderComponent($$result, "MaxWidthWrapper", $$MaxWidthWrapper, {}, { "default": ($$result2) => renderTemplate` <div class="flex h-14 items-center justify-between border-b bg-white border-zinc-200"> <a href="/" class="flex z-40 font-semibold">yoon.dev</a> <div class="h-full flex items-center space-x-4"> <!-- 모바일 메뉴 버튼 --> <!-- 데스크톱 메뉴 --> <div class="hidden sm:flex items-center space-x-4"> <ul class="flex flex-row gap-6"> ${menuItems.map((item) => renderTemplate`<li> <a${addAttribute(item.path, "href")} class="text-gray-600 hover:text-blue-500 transition-colors"> ${item.name} </a> </li>`)} </ul> </div> </div> </div> ` })} </nav> <!-- 모바일 메뉴 --> <div id="mobile-menu" class="sm:hidden absolute top-14 left-0 w-full bg-white"> <ul class="flex flex-col items-center gap-4 p-4"> ${menuItems.map((item) => renderTemplate`<li> <a${addAttribute(item.path, "href")} class="text-gray-600 hover:text-blue-500 transition-colors"> ${item.name} </a> </li>`)} </ul> </div> ${renderScript($$result, "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/components/Navigation.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/components/Navigation.astro", void 0);

export { $$Navigation as $, $$MaxWidthWrapper as a };

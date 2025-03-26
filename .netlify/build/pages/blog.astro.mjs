import { _ as __vite_glob_0_0 } from '../chunks/post-1_B3YGVURG.mjs';
import { _ as __vite_glob_0_1 } from '../chunks/post-2_CmYuKmrs.mjs';
import { _ as __vite_glob_0_2 } from '../chunks/환영합니다!_CoFMioO3.mjs';
import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_CrF5WAGp.mjs';
import { $ as $$Navigation, a as $$MaxWidthWrapper } from '../chunks/Navigation_xOrh8gAL.mjs';
import { $ as $$Layout } from '../chunks/Layout_C-KrqMXA.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$BlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const { title, pubDate, content, emoji, link } = Astro2.props;
  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}\uB144 ${month}\uC6D4 ${day}\uC77C`;
  }
  const formattedDate = formatDate(pubDate);
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}> <div class="w-full flex flex-row p-4 rounded-2xl hover:bg-zinc-900 transition-colors duration-300 hover:text-white"> <div class="w-8 flex ml-2 mr-6 text-4xl items-center justify-center text-zinc-400"> ${emoji} </div> <div class="flex-3/4 flex flex-col"> <div class="flex items-center h-full"> <span class="text-xl">${title}</span> </div> <div class="text-sm"> ${content} </div> </div> <div class="flex-1/4 flex items-center justify-end text-zinc-400 text-sm text-right"> ${formattedDate} </div> </div> </a>`;
}, "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/components/BlogCard.astro", void 0);

const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const posts = Object.values(
    await /* #__PURE__ */ Object.assign({"./blog/post-1.md": __vite_glob_0_0,"./blog/post-2.md": __vite_glob_0_1,"./blog/환영합니다!.md": __vite_glob_0_2})
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${renderComponent($$result2, "MaxWidthWrapper", $$MaxWidthWrapper, { "className": "flex h-fit" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<header id="blog-header" class="flex-5/12 pt-12 sticky h-fit top-14"> <p class="font-bold text-5xl pb-4">Blog</p> <div class="flex flex-row overflow-auto"> <div class="w-full flex items-center justify-between mb-2 rounded-xl"></div> </div> <div class="pb-4 pr-16"> <p>
Obsidian 플랫폼에서 PARA 방법론으로 글을 저장하며 작업하면서 생긴
          새로운 개념 혹은 오류들을 기록하는 공간입니다.
</p> </div> </header> <div class="flex-7/12 flex flex-col gap-4 pt-12 pb-12"> <div id="frontend-career" class="flex flex-col gap-4 pb-4"> <p class="font-bold text-2xl pl-4">Recent Posts</p> <ul class="pb-4"> ${posts.map((post) => renderTemplate`<li class="pb-4"> <a${addAttribute(`blog/${post.file.split("/").pop().replace(".md", "")}`, "href")}> ${renderComponent($$result3, "BlogCard", $$BlogCard, { "title": post.frontmatter.title, "pubDate": post.frontmatter.pubDate, "content": post.frontmatter.content, "emoji": post.frontmatter.emoji, "img": "", "tags": "", "link": `blog/${post.file.split("/").pop().replace(".md", "")}` })} </a> </li>`)} </ul> </div> </div> ` })} ` })}`;
}, "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/pages/blog.astro", void 0);

const $$file = "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

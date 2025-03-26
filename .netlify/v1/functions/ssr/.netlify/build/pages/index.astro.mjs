import { c as createComponent, a as createAstro, d as renderComponent, e as renderScript, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CrF5WAGp.mjs';
import { $ as $$Navigation, a as $$MaxWidthWrapper } from '../chunks/Navigation_xOrh8gAL.mjs';
import { $ as $$Layout } from '../chunks/Layout_C-KrqMXA.mjs';
/* empty css                                */
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$RotatingText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$RotatingText;
  const {
    // style = {},
    cursor = true,
    deletingInterval = 50,
    emptyPause = 1e3,
    eraseMode = "erase",
    items = ["first", "second", "third"],
    pause = 1500,
    typingInterval = 50
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "rotating-text", "rotating-text", { "data-items": JSON.stringify(items), "data-cursor": cursor, "data-deleting-interval": deletingInterval, "data-empty-pause": emptyPause, "data-erase-mode": eraseMode, "data-pause": pause, "data-typing-interval": typingInterval, "data-astro-cid-tijneou6": true }, { "default": () => renderTemplate` ${maybeRenderHead()}<span class="output font-bold" data-astro-cid-tijneou6></span>${cursor && renderTemplate`<span class="cursor hg" data-astro-cid-tijneou6>|</span>`} ` })} ${renderScript($$result, "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/components/RotatingText.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/components/RotatingText.astro", void 0);

const $$Astro$1 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Button;
  const { text, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`${link}`, "href")}> <button class="w-full h-14 bg-black rounded-3xl text-white">${text}</button> </a>`;
}, "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/components/Button.astro", void 0);

const $$Astro = createAstro();
const $$IconButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$IconButton;
  const { name, link, src, imgStyle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`${link}`, "href")} target="_blank" rel="noopener noreferrer"> <button class="w-8 h-8 flex items-center justify-center overflow-hidden rounded-3xl text-white"> ${name ? renderTemplate`<img${addAttribute(imgStyle, "class")}${addAttribute(`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`, "src")}${addAttribute(name, "alt")}>` : renderTemplate`<img${addAttribute(src, "src")}${addAttribute(src, "alt")}${addAttribute(imgStyle, "class")}>`} </button> </a>`;
}, "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/components/IconButton.astro", void 0);

const $$MailIconButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`mailto:parkyoon97@gmail.com`, "href")}> <button class="w-8 h-8 flex items-center justify-center overflow-hidden rounded-3xl text-white"> <img${addAttribute(`/public/imgs/mail.svg`, "src")} class="w-6 h-6" alt="mail button"> </button> </a>`;
}, "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/components/MailIconButton.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${renderComponent($$result2, "MaxWidthWrapper", $$MaxWidthWrapper, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="h-[calc(100%-3.5rem)] flex"> <div class="flex-3 flex flex-col"> <div class="flex-5 flex flex-col justify-end gap-2 pb-8 text-5xl"> <p>안녕하세요.</p> <p> ${renderComponent($$result3, "RotatingText", $$RotatingText, { "cursor": true, "deletingInterval": 50, "typingInterval": 50, "emptyPause": 1e3, "pause": 1500, "eraseMode": "erase", "items": [
    "\uBAA9\uD45C\uB97C \uC704\uD574 \uD5CC\uC2E0\uD558\uB294",
    "\uC0AC\uC6A9\uC790\uB97C \uC911\uC2DC\uD558\uB294",
    "\uD638\uAE30\uC2EC\uC774 \uB9CE\uC740"
  ] })} </p> <p>
개발자
${renderComponent($$result3, "RotatingText", $$RotatingText, { "cursor": true, "deletingInterval": 50, "typingInterval": 50, "emptyPause": 1e3, "pause": 1500, "eraseMode": "erase", "items": ["\uBC15\uC0C1\uC724", "\uC724"] })}
입니다.
</p> </div> <div class="flex-3 flex flex-row"> <div class="flex-5"> <div class="h-14 flex gap-4 items-center justify-start"> ${renderComponent($$result3, "IconButton", $$IconButton, { "name": "github", "link": "https://github.com/onlyoon", "imgStyle": "w-7 h-7" })} ${renderComponent($$result3, "IconButton", $$IconButton, { "src": "/public/imgs/linkedin.svg", "link": "https://www.linkedin.com/in/sangyoon-park-onlyoon/", "imgStyle": "w-6 h-6" })} ${renderComponent($$result3, "IconButton", $$IconButton, { "src": "/public/imgs/twitter.svg", "link": "https://twitter.com/Parkyoon97", "imgStyle": "w-6 h-6" })} ${renderComponent($$result3, "MailIconButton", $$MailIconButton, {})} </div> </div> <div class="flex-3 flex flex-col"> <div class="flex-3"> ${renderComponent($$result3, "Button", $$Button, { "text": "About me", "link": "/about" })} </div> <div class="flex-5 flex flex-row justify-between"></div> </div> </div> </div> <div class="flex-5 w-full h-full"> <div class="absolute z-50" id="3d-container"></div> <img class="" src="/public/imgs/blob1.svg" alt="blob1"> </div> </div> ` })} ` })} ${renderScript($$result, "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/pages/index.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/pages/index.astro?astro&type=script&index=1&lang.ts")} ${renderScript($$result, "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/pages/index.astro?astro&type=script&index=2&lang.ts")}`;
}, "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/pages/index.astro", void 0);

const $$file = "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

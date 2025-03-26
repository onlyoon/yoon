import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent, e as renderScript } from '../chunks/astro/server_CrF5WAGp.mjs';
import { $ as $$Navigation, a as $$MaxWidthWrapper } from '../chunks/Navigation_xOrh8gAL.mjs';
import { $ as $$Layout } from '../chunks/Layout_C-KrqMXA.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { type, name, date, career, description, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} target="_blank"> <div class="w-full flex flex-row p-4 rounded-2xl hover:bg-zinc-900 transition-colors duration-300 hover:text-white"> <div class="flex-1/4 text-zinc-400 text-sm"> ${date} </div> <div class="flex-3/4 flex flex-col"> <div class="pb-2"> ${type === "company" ? renderTemplate`<span>${career} · </span>
        <span>${name}</span>` : renderTemplate`<span>${career}</span>
        <span>${name}</span>`} </div> <div class="text-sm"> ${description} </div> </div> </div> </a>`;
}, "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/components/Card.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navigation", $$Navigation, {})} ${renderComponent($$result2, "MaxWidthWrapper", $$MaxWidthWrapper, { "className": "flex h-fit" }, { "default": ($$result3) => renderTemplate`  ${maybeRenderHead()}<header id="frontend-header" class="flex-5/12 pt-12 sticky h-fit top-14"> <p class="font-bold text-5xl pb-4">Sangyoon Park</p> <div class="flex flex-row overflow-auto"> <div class="w-full flex items-center justify-between mb-2 rounded-xl"> <div class="flex flex-row items-center gap-4"> <div class="w-15 h-15 pl-2" id="3d-container-frontend"></div> <p class="font-bold text-xl">Frontend Engineer</p> </div> </div> </div> <div class="pb-4"> <p>I craft the web to bring data and user experiences to life.</p> <!-- <p>I craft the web to bring data and</p>
          <p>user experiences to life.</p> --> </div> </header> <div class="flex-7/12 flex flex-col gap-4 pt-12 pb-12"> <div id="frontend-about" class="flex flex-col gap-4 pb-4"> <p class="font-bold text-2xl pl-4">About</p> <p class="pl-4">
기술 활용만이 목적이 아닌, 프로젝트의 비즈니스적 가치를 창출하기
          위해서 개발을 하며, 모든 프로그램에 있어서 사용자가 최우선으로
          중요하다는 마음가짐으로 프론트엔드 개발자의 길을 걷고 있습니다. 저는
          브라우저의 화면에 '화려함' 을 담아내고 보여지는 것 뿐만 아니라 성능과
          사용성을 가진 멋진 작품을 만들어내는 것을 즐깁니다.
</p> <p class="pl-4">
최근에 저는 나노웨더 기업에서 웹 GIS 프론트엔드 엔지니어로 일을 하고
          있습니다. 저는 지도의 프론트엔드에서 주로 저는 데이터 시각화 생성 및
          유지보수에 기여하며, CPU와 GPU의 렌더링 차이를 활용해 다양한
          사용자들에게 지도 위에서의 직관적인 경험 및 성능을 보장합니다.
</p> <p class="pl-4">
헌신은 제가 20대에 배운 가치이며 제 삶에 있어서 가장 중요한
          태도입니다. 이는 커뮤니케이션, 문제 해결 능력, 지속적인 습관에 있어
          필수임을 경험해왔으며 앞으로도 정진하며 나아갈 저의 노하우입니다.
</p> </div> <div id="frontend-career" class="flex flex-col gap-4 pb-4"> <p class="font-bold text-2xl pl-4">Career</p> ${renderComponent($$result3, "Card", $$Card, { "type": "company", "name": "NanoWeather", "career": "Web GIS Frontend", "date": "2024.02 \u2014 Current", "description": "\uB098\uB178\uC6E8\uB354\uC5D0 \uADFC\uBB34\uD55C\uC9C0 1\uAC1C\uC6D4\uCC28\uAC00 \uB418\uAC00\uB294 \uBC15\uC0C1\uC724\uC785\uB2C8\uB2E4.", "link": "http://www.nano-weather.com/?lang=en" })} ${renderComponent($$result3, "Card", $$Card, { "type": "company", "name": "TheCoder (Internship)", "career": "Web Frontend", "date": "2023.09 \u2014 2023.11", "description": "\uC774\uBCA4\uD2B8 \uBD80\uD558 \uAC10\uC18C \uBAA8\uB4C8 \uBC0F \uC8FC\uC694 \uAE30\uB2A5 \uAD6C\uD604\uC73C\uB85C \uD504\uB85C\uC81D\uD2B8\uC758 \uCD08\uAE30 \uC11C\uBE44\uC2A4 \uC624\uD508\uC5D0 \uAE30\uC5EC\uD588\uC2B5\uB2C8\uB2E4.", "link": "https://www.thecoder.co.kr/" })} </div> <div id="frontend-activities" class="flex flex-col gap-4 pb-4"> <p class="font-bold text-2xl pl-4">Activities</p> ${renderComponent($$result3, "Card", $$Card, { "type": "activity", "name": "Google Developer Students Group TUK (23-24)", "date": "2023.09 \u2014 2024.06", "description": "Google Developer Groups on Campus Tech University of Korea", "link": "https://gdg.community.dev/gdg-on-campus-tech-university-of-korea-siheung-south-korea/" })} ${renderComponent($$result3, "Card", $$Card, { "type": "activity", "name": "University MakeUs Challenge (4th)", "date": "2023.03 \u2014 2023.09", "description": "IT club for college students focused on a web/app launch challenge", "link": "https://umc.makeus.in/" })} </div> <div id="frontend-education" class="flex flex-col gap-4 pb-4"> <p class="font-bold text-2xl pl-4">Education</p> ${renderComponent($$result3, "Card", $$Card, { "type": "education", "name": "Tech University of Korea", "major": "software engineering", "date": "2022.03 \u2014 2024.02", "description": "Bachelor Degree / software engineering", "link": "https://www.tukorea.ac.kr/tukorea/index.do" })} </div> </div> ` })} ` })} ${renderScript($$result, "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/pages/about.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/pages/about.astro?astro&type=script&index=1&lang.ts")} ${renderScript($$result, "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/pages/about.astro?astro&type=script&index=2&lang.ts")} ${renderScript($$result, "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/pages/about.astro?astro&type=script&index=3&lang.ts")}`;
}, "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/pages/about.astro", void 0);

const $$file = "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

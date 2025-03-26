import { c as createComponent, d as renderComponent, r as renderTemplate, u as unescapeHTML } from './astro/server_CrF5WAGp.mjs';
import { $ as $$PostLayout } from './PostLayout_BQ0ITfjW.mjs';

const html = () => "<p>새로운 <em>보관함</em>입니다.</p>\n<p>내용을 한번 적어보세요, [[create a link]], 혹은 <a href=\"https://help.obsidian.md/Plugins/Importer\">임포터</a>를 사용해봐도 좋습니다!</p>\n<p>준비가 됐다면 이 노트를 삭제하고 맞춤형 보관함을 만들어보세요.</p>";

				const frontmatter = {"layout":"../../layouts/PostLayout.astro","title":"Hello","pubDate":"2022-07-01T00:00:00.000Z","description":"This is the third post of my new Astro blog.","author":"yoon","image":{"url":"https://docs.astro.build/assets/rose.webp","alt":"The Astro logo on a dark background with a pink glow."},"tags":["astro","blogging","learning in public"]};
				const file = "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/pages/blog/환영합니다!.md";
				const url = "/blog/환영합니다!";
				function rawContent() {
					return "   \n                                      \n              \n                   \n                                                           \n              \n      \n                                                  \n                                                              \n                                                 \n   \n\n새로운 *보관함*입니다.\n\n내용을 한번 적어보세요, [[create a link]], 혹은 [임포터](https://help.obsidian.md/Plugins/Importer)를 사용해봐도 좋습니다!\n\n준비가 됐다면 이 노트를 삭제하고 맞춤형 보관함을 만들어보세요.\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$PostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const __vite_glob_0_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_0_2 as _ };

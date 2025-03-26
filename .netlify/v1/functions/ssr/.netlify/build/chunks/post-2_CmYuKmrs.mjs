import { c as createComponent, d as renderComponent, r as renderTemplate, s as spreadAttributes, u as unescapeHTML } from './astro/server_CrF5WAGp.mjs';
import { $ as $$PostLayout } from './PostLayout_BQ0ITfjW.mjs';
import { c as getImage } from './_astro_assets_EM1yMXJo.mjs';

const Astro__ZhkdOY = new Proxy({"src":"/_astro/my-intern-work_01.CC0lExYZ.jpg","width":340,"height":567,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/public/imgs/my-intern-work_01.jpg";
							}
							
							return target[name];
						}
					});

const Astro__Zhg9Di = new Proxy({"src":"/_astro/my-intern-work_02.yjNlDqR3.jpg","width":340,"height":567,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/public/imgs/my-intern-work_02.jpg";
							}
							
							return target[name];
						}
					});

const Astro__Zhc5rB = new Proxy({"src":"/_astro/my-intern-work_03.PJsYrGZF.jpg","width":340,"height":567,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/public/imgs/my-intern-work_03.jpg";
							}
							
							return target[name];
						}
					});

const Astro__Zh81fU = new Proxy({"src":"/_astro/my-intern-work_04.kD6a4Hc4.jpg","width":340,"height":567,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/public/imgs/my-intern-work_04.jpg";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./\\.\\./public/imgs/my-intern-work_01\\.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../../public/imgs/my-intern-work_01.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													imageSources[matchKey] = await getImage({src: Astro__ZhkdOY, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./\\.\\./public/imgs/my-intern-work_02\\.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../../public/imgs/my-intern-work_02.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													imageSources[matchKey] = await getImage({src: Astro__Zhg9Di, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./\\.\\./public/imgs/my-intern-work_03\\.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../../public/imgs/my-intern-work_03.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													imageSources[matchKey] = await getImage({src: Astro__Zhc5rB, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./\\.\\./public/imgs/my-intern-work_04\\.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../../public/imgs/my-intern-work_04.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													imageSources[matchKey] = await getImage({src: Astro__Zh81fU, ...props});
													occurrenceCounter++;
											}
									}
					
					return imageSources;
			};

		async function updateImageReferences(html) {
			const imageSources = await images(html);

			return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
				const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));

				// Use the 'index' property for each image occurrence
				const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;

				if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
					imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
				}

				const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;

				return spreadAttributes({
					src: imageSources[srcKey].src,
					...attributesWithoutIndex,
				});
			});
		}

		const html = async () => await updateImageReferences("<h1 id=\"나의-인턴-업무---webview-publishing\">나의 인턴 업무 - webView publishing</h1>\n<p>나는 여러가지 프로젝트를 해봤지만 그래도 지원한 분야가 프론트엔드라 퍼블리싱을 한 경험이 아예 없지는 않다.\n최근에 나는 인턴 경험을 하면서도 해당 기업의 서비스 리뉴얼 준비를 위한 모바일 웹 뷰를 퍼블리싱 했다. 나의 미션은 리뉴얼 되기 이전, 기존의 디자인에서 특정 부분들을 새로운 디자인으로 바꾸는 것이다. 평소에 혼자서 구현하는 퍼블리싱은 시간이 걸리지가 않는데, 이번 퍼블리싱은 여러모로 문제가 조금 있었으며, 여기에 그것에 대해서 얘기를 해보려고 한다.</p>\n<h2 id=\"contents-wrap--border-radius-여백-엎어쓰기\">contents-wrap &#x26; border-radius 여백 엎어쓰기</h2>\n<h3 id=\"요소-설명\">요소 설명</h3>\n<p>모바일 전용으로 보여주는 웹은 하나의 요소 안에서, 3가지 요소들로 이루어져 있었다.\n<code>header</code>, <code>contents-wrap</code>, <code>footer</code>이렇게 말이다.\n<code>header</code>은 모바일 뷰에서 로고, 뒤로가기, 그리고 카테고리 바를 위한 아이콘이 들어간다.\n<code>contents-wrap</code>은 콘텐츠가 안에 들어가는 부분이다. <code>text</code>와 <code>scroll</code>이 있다.\n<code>footer</code>은 <code>nav bar</code>이 들어간다.</p>\n<h2 id=\"2가지-문제점\">2가지 문제점</h2>\n<p>이전 디자인과 다르게 바뀌어야 하는 점은, <code>footer</code>와 붙어있는 콘텐츠 하단 부분에서 여러 요소들을 스크롤을 하는 부분이다.\n<code>footer</code>와 붙어있는을 강조하는 이유는, 하단 부분의 nav bar에 <code>border-radius</code> 속성 값이 들어가 있고, 이러한 이유로 인해, 콘텐츠가 <code>footer</code> 부분에 까지 도달해야 자연스러운 UI를 보여주는 것이 되기 때문이다.\n자연스러운 UI를 보여주기 위해서는 두 가지 문제가 해결되어야 한다.</p>\n<h4 id=\"문제점\">문제점</h4>\n<blockquote>\n<p><code>1.</code> <code>footer</code>과 닿아있는 부분의 <code>border-radius</code> 여백 부분이 해결되어야 한다.</p>\n</blockquote>\n<blockquote>\n<p><code>2.</code> <code>text</code>와 닿아있는 부분의 <code>border-radius</code> 여백 부분이 해결되어야 한다.</p>\n</blockquote>\n<p>아래 그림의 동그라미 부분들이 해결되어야 자연스러운 UI를 보여줄 수 있다.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../../public/imgs/my-intern-work_01.jpg&#x22;,&#x22;alt&#x22;:&#x22;문제점&#x22;,&#x22;index&#x22;:0}\"></p>\n<h3 id=\"1번-해결-방법-하단-동그라미-부분\">1번 해결 방법 (하단 동그라미 부분)</h3>\n<p>하단 여백이 덮어져야 하는 문제점은 <code>scroll</code>을 감싸는 <code>contents-wrap</code>부분을 <code>footer</code>부분까지 늘리는 것으로 즉각 해결이 되었다.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../../public/imgs/my-intern-work_02.jpg&#x22;,&#x22;alt&#x22;:&#x22;문제점 1 해결&#x22;,&#x22;index&#x22;:0}\"></p>\n<h3 id=\"2번-해결-방법-상단-동그라미-부분\">2번 해결 방법 (상단 동그라미 부분)</h3>\n<p>상단 여백이 덮어져야 하는 문제는 <code>position</code>속성으로 해결되는 문제가 아니었다.\n만일 <code>position: relative; top: -20px;</code>으로 프로퍼티를 넣을 경우, <code>scroll</code>의 상단 부분은 덮이겠지만 하단 부분이 비게되는 현상이 생긴다. 상대적 배치로 인해서 아래의 사진과 같이, 아랫쪽 부분이 뜨게 되는 현상이 생기는 것이다.</p>\n<ul>\n<li>아랫쪽이 뜨게 되는 현상</li>\n</ul>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../../public/imgs/my-intern-work_03.jpg&#x22;,&#x22;alt&#x22;:&#x22;문제점 추가 발생&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>해답을 찾아본 결과 <code>scroll</code>요소에 <code>position</code>프로퍼티를 사용하지 말고, <code>scroll</code>요소 안에 들어가 있는 요소들 중에서 가장 마지막 요소의 <code>margin-bottom</code>값을 넓혀서 이러한 문제를 해결할 수 있었다.</p>\n<p>같은 계층의 요소들 중에서 마지막 요소를 고르는 CSS는 이렇다.</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"css\"><code><span class=\"line\"><span style=\"color:#B392F0\">.scroll-wrap</span><span style=\"color:#F97583\"> ></span><span style=\"color:#85E89D\"> div</span><span style=\"color:#B392F0\">:nth-last-child</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#79B8FF\">1</span><span style=\"color:#E1E4E8\">) {</span></span>\n<span class=\"line\"><span style=\"color:#79B8FF\">  margin-bottom</span><span style=\"color:#E1E4E8\">: </span><span style=\"color:#79B8FF\">50</span><span style=\"color:#F97583\">px</span><span style=\"color:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">}</span></span></code></pre>\n<p>pseudo class를 사용하며, 그 중에서 nth-child 키워드의 의사 클래스를 사용한다.\n여기에 의사 클래스 대해서 개념적인 설명을 하자면,</p>\n<p>:nth-child</p>\n<p>nth-child(N) 키워드를 가진 의사 클래스는 이 클래스를 적용하는 해당 요소들 중 시작에서 N번째 요소에 CSS를 적용한다는 것을 말한다.\n:nth-last-child(N) 키워드를 가진 의사 클래스는 이 클래스를 적용하는 해당 요소들 중 마지막에서 N번째 요소에 CSS를 적용한다는 것을 말한다. 고로 nth-child의 거꾸로 버전이다.\n매개변수 N은 숫자가 들어갈 수도 있고, odd와 같은 홀수 짝수 값이 들어갈 수 있다. 혹은 2n + 1처럼 식을 줄 수도 있다.</p>\n<blockquote>\n<p>주의</p>\n</blockquote>\n<p>부모 요소가 없을 시, Safari(IOS) 브라우저에는 적용이 되지 않는다. 고로 선택 요소 위에 부모 요소를 넣는 것을 추천한다.</p>\n<h2 id=\"결과\">결과</h2>\n<p>결과적으로 상하단 여백 부분을 모두 덮어씌어, 자연스러운 UI 구현이 가능했다.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../../public/imgs/my-intern-work_04.jpg&#x22;,&#x22;alt&#x22;:&#x22;문제점 해결&#x22;,&#x22;index&#x22;:0}\"></p>\n<h2 id=\"내-생각\">내 생각</h2>\n<p>이러한 문제점을 경험해 보면서 느끼는 생각은 기존의 디자인 형태가 고정 되더라도,\n<code>header</code>와 <code>footer</code>의 형태가 박스 형태가 아닌 다양한 형태로 바뀔 수도 있다는 것을 고려하여,\n만일 <code>header</code>와 <code>footer</code>의 가로 세로 값이 고정되어 있다면,</p>\n<p><code>contents-wrap</code>을 <code>header</code>부터 <code>footer</code>까지 전부를 아우르게 하고,\n위 아래에 <code>margin</code>값만 주는 것이 좋다고 생각한다.</p>\n<p>그렇게 되면 나중에 <code>header</code>나 <code>footer</code>의 디자인이 리뉴얼 될 경우, 보다 더 편리하게 CSS를 처리할 수 있을 것이라 생각이 된다.</p>");
	

				const frontmatter = {"layout":"../../layouts/PostLayout.astro","title":"나의 인턴 업무 - webView publishing","emoji":"💼","pubDate":"2023-10-21T00:00:00.000Z","description":"","author":"yoon","tags":[]};
				const file = "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/pages/blog/post-2.md";
				const url = "/blog/post-2";
				function rawContent() {
					return "   \n                                      \n                                      \n           \n                   \n               \n              \n        \n   \n\n# 나의 인턴 업무 - webView publishing\n\n나는 여러가지 프로젝트를 해봤지만 그래도 지원한 분야가 프론트엔드라 퍼블리싱을 한 경험이 아예 없지는 않다.\n최근에 나는 인턴 경험을 하면서도 해당 기업의 서비스 리뉴얼 준비를 위한 모바일 웹 뷰를 퍼블리싱 했다. 나의 미션은 리뉴얼 되기 이전, 기존의 디자인에서 특정 부분들을 새로운 디자인으로 바꾸는 것이다. 평소에 혼자서 구현하는 퍼블리싱은 시간이 걸리지가 않는데, 이번 퍼블리싱은 여러모로 문제가 조금 있었으며, 여기에 그것에 대해서 얘기를 해보려고 한다.\n\n## contents-wrap & border-radius 여백 엎어쓰기\n\n### 요소 설명\n\n모바일 전용으로 보여주는 웹은 하나의 요소 안에서, 3가지 요소들로 이루어져 있었다.\n`header`, `contents-wrap`, `footer`이렇게 말이다.\n`header`은 모바일 뷰에서 로고, 뒤로가기, 그리고 카테고리 바를 위한 아이콘이 들어간다.\n`contents-wrap`은 콘텐츠가 안에 들어가는 부분이다. `text`와 `scroll`이 있다.\n`footer`은 `nav bar`이 들어간다.\n\n## 2가지 문제점\n\n이전 디자인과 다르게 바뀌어야 하는 점은, `footer`와 붙어있는 콘텐츠 하단 부분에서 여러 요소들을 스크롤을 하는 부분이다.\n`footer`와 붙어있는을 강조하는 이유는, 하단 부분의 nav bar에 `border-radius` 속성 값이 들어가 있고, 이러한 이유로 인해, 콘텐츠가 `footer` 부분에 까지 도달해야 자연스러운 UI를 보여주는 것이 되기 때문이다.\n자연스러운 UI를 보여주기 위해서는 두 가지 문제가 해결되어야 한다.\n\n#### 문제점\n\n> `1.` `footer`과 닿아있는 부분의 `border-radius` 여백 부분이 해결되어야 한다.\n\n> `2.` `text`와 닿아있는 부분의 `border-radius` 여백 부분이 해결되어야 한다.\n\n아래 그림의 동그라미 부분들이 해결되어야 자연스러운 UI를 보여줄 수 있다.\n\n![문제점](../../../public/imgs/my-intern-work_01.jpg)\n\n### 1번 해결 방법 (하단 동그라미 부분)\n\n하단 여백이 덮어져야 하는 문제점은 `scroll`을 감싸는 `contents-wrap`부분을 `footer`부분까지 늘리는 것으로 즉각 해결이 되었다.\n\n![문제점 1 해결](../../../public/imgs/my-intern-work_02.jpg)\n\n### 2번 해결 방법 (상단 동그라미 부분)\n\n상단 여백이 덮어져야 하는 문제는 `position`속성으로 해결되는 문제가 아니었다.\n만일 `position: relative; top: -20px;`으로 프로퍼티를 넣을 경우, `scroll`의 상단 부분은 덮이겠지만 하단 부분이 비게되는 현상이 생긴다. 상대적 배치로 인해서 아래의 사진과 같이, 아랫쪽 부분이 뜨게 되는 현상이 생기는 것이다.\n\n- 아랫쪽이 뜨게 되는 현상\n\n![문제점 추가 발생](../../../public/imgs/my-intern-work_03.jpg)\n\n해답을 찾아본 결과 `scroll`요소에 `position`프로퍼티를 사용하지 말고, `scroll`요소 안에 들어가 있는 요소들 중에서 가장 마지막 요소의 `margin-bottom`값을 넓혀서 이러한 문제를 해결할 수 있었다.\n\n같은 계층의 요소들 중에서 마지막 요소를 고르는 CSS는 이렇다.\n\n```css\n.scroll-wrap > div:nth-last-child(1) {\n  margin-bottom: 50px;\n}\n```\n\npseudo class를 사용하며, 그 중에서 nth-child 키워드의 의사 클래스를 사용한다.\n여기에 의사 클래스 대해서 개념적인 설명을 하자면,\n\n:nth-child\n\nnth-child(N) 키워드를 가진 의사 클래스는 이 클래스를 적용하는 해당 요소들 중 시작에서 N번째 요소에 CSS를 적용한다는 것을 말한다.\n:nth-last-child(N) 키워드를 가진 의사 클래스는 이 클래스를 적용하는 해당 요소들 중 마지막에서 N번째 요소에 CSS를 적용한다는 것을 말한다. 고로 nth-child의 거꾸로 버전이다.\n매개변수 N은 숫자가 들어갈 수도 있고, odd와 같은 홀수 짝수 값이 들어갈 수 있다. 혹은 2n + 1처럼 식을 줄 수도 있다.\n\n> 주의\n\n부모 요소가 없을 시, Safari(IOS) 브라우저에는 적용이 되지 않는다. 고로 선택 요소 위에 부모 요소를 넣는 것을 추천한다.\n\n## 결과\n\n결과적으로 상하단 여백 부분을 모두 덮어씌어, 자연스러운 UI 구현이 가능했다.\n\n![문제점 해결](../../../public/imgs/my-intern-work_04.jpg)\n\n## 내 생각\n\n이러한 문제점을 경험해 보면서 느끼는 생각은 기존의 디자인 형태가 고정 되더라도,\n`header`와 `footer`의 형태가 박스 형태가 아닌 다양한 형태로 바뀔 수도 있다는 것을 고려하여,\n만일 `header`와 `footer`의 가로 세로 값이 고정되어 있다면,\n\n`contents-wrap`을 `header`부터 `footer`까지 전부를 아우르게 하고,\n위 아래에 `margin`값만 주는 것이 좋다고 생각한다.\n\n그렇게 되면 나중에 `header`나 `footer`의 디자인이 리뉴얼 될 경우, 보다 더 편리하게 CSS를 처리할 수 있을 것이라 생각이 된다.\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"나의-인턴-업무---webview-publishing","text":"나의 인턴 업무 - webView publishing"},{"depth":2,"slug":"contents-wrap--border-radius-여백-엎어쓰기","text":"contents-wrap & border-radius 여백 엎어쓰기"},{"depth":3,"slug":"요소-설명","text":"요소 설명"},{"depth":2,"slug":"2가지-문제점","text":"2가지 문제점"},{"depth":4,"slug":"문제점","text":"문제점"},{"depth":3,"slug":"1번-해결-방법-하단-동그라미-부분","text":"1번 해결 방법 (하단 동그라미 부분)"},{"depth":3,"slug":"2번-해결-방법-상단-동그라미-부분","text":"2번 해결 방법 (상단 동그라미 부분)"},{"depth":2,"slug":"결과","text":"결과"},{"depth":2,"slug":"내-생각","text":"내 생각"}];
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

const __vite_glob_0_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_0_1 as _ };

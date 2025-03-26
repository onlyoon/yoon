import { c as createComponent, d as renderComponent, r as renderTemplate, s as spreadAttributes, u as unescapeHTML } from './astro/server_CrF5WAGp.mjs';
import { $ as $$PostLayout } from './PostLayout_BQ0ITfjW.mjs';
import { c as getImage } from './_astro_assets_EM1yMXJo.mjs';

const Astro__1Nxi19 = new Proxy({"src":"/_astro/swf-hackathon_01.Ck9kvVeK.png","width":647,"height":407,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/public/imgs/swf-hackathon_01.png";
							}
							
							return target[name];
						}
					});

const Astro__1NBkFk = new Proxy({"src":"/_astro/swf-hackathon_02.BryvR2kL.jpg","width":1440,"height":1081,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/public/imgs/swf-hackathon_02.jpg";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./\\.\\./public/imgs/swf-hackathon_01\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../../public/imgs/swf-hackathon_01.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													imageSources[matchKey] = await getImage({src: Astro__1Nxi19, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./\\.\\./public/imgs/swf-hackathon_02\\.jpg" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../../public/imgs/swf-hackathon_02.jpg" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													imageSources[matchKey] = await getImage({src: Astro__1NBkFk, ...props});
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

		const html = async () => await updateImageReferences("<h1 id=\"협업-역량과-목적성의-필요성\">협업 역량과 목적성의 필요성</h1>\n<p>컴퓨터 공학부에서의 학업은 물론, 현업에서도 협업 역량은 필요한 스킬 중 하나입니다. 그런 이유로, 저는 동아리, 해커톤과 같은 팀 프로젝트에 참여하며 협업 역량을 기르는 기회를 많이 찾아봤었습니다.</p>\n<p>특히, 최근 참여한 해커톤은 제 역량을 향상시키기 위한 중요한 도전이었습니다. 그런데, 저와 제 팀은 예상치 못한 어려움에 직면하게 되었습니다. 협업을 통해 이뤄내야 하는 프로젝트는 크기가 컸고, 역할 분담의 중요성이 크게 부각되었던 프로젝트였습니다.</p>\n<p>사실을 말하자면, 그 어려움을 극복하지 못했습니다. 프로젝트를 제한 시간 내에 성공적으로 완수하지 못한 것이 저희의 결과였습니다. 그럼에도 불구하고, 이 경험에서 중요한 교훈을 얻었습니다.</p>\n<blockquote>\n<ol>\n<li>발표를 하는데 있어서 그리고 프로젝트 자체에 있어서 프로젝트의 목적성이 중요하다는 것을 깨달았습니다.</li>\n</ol>\n</blockquote>\n<blockquote>\n<ol start=\"2\">\n<li>팀원 간의 역할 분담의 중요성을 더욱 명확하게 깨달았습니다. 역할 분담이 모호한 상황에서는 혼돈이 늘어나는 것을 몸소 체감했습니다.</li>\n</ol>\n</blockquote>\n<p>또한, 실패는 협업 능력을 향상시키는 기회라는 것을 배웠습니다. 왜냐하면, 실패를 통해 우리는 어떤 부분에서 문제가 발생했는지, 어떤 부분에서 개선할 수 있는지를 돌아보고 더 나은 방향을 모색하는 계기를 갖게 되었습니다.</p>\n<h2 id=\"실패와-배움\">실패와 배움</h2>\n<h3 id=\"1-프로젝트의-목적성\">1. 프로젝트의 목적성</h3>\n<p>저는 프로젝트가 끝난 이후, 과거에 운영한 회사를 아는 형에게 이번 주에 참여한 해커톤에서 상도 못타고 발표도 제대로 하지 못했다고 전화했습니다.\n형은 이번 프로젝트가 어떤 프로젝트인지 궁금해하며 더 자세한 설명을 요구해서 저는 다음과 같이 말했습니다.</p>\n<blockquote>\n<p>“저희 프로젝트는 마켓플레이스인데요, 프롬프트를 NFT로 만들어서 판매하는 플랫폼이에요. 다른 사람들이 직접 프롬프트를 구매하고 판매할 수 있게끔 돕는거죠.”</p>\n</blockquote>\n<p>하지만 형은 그게 너무 복잡하고 어렵다며, 아이가 들어도 이해할 수 있는 설명을 요구했습니다. 그래서 1시간의 시도 끝에 저는 서브웨이에서의 경험을 바탕으로 다시 설명을 시도했습니다.</p>\n<blockquote>\n<p>“저희 서비스는 서브웨이에서 내가 직접 만든 샌드위치를 팔 수 있는 서비스에요. 대신 이건 어떤 조합이던, 어느 사람도 똑같이 만들어낼 수 없는 특별한 샌드위치에요.”</p>\n</blockquote>\n<p>형은 그게 그나마 이해하기가 좀 명확하다고 했으며, 나중에는 프로젝트를 시작할 때부터 목적을 명확하게 잡아야 한다고 조언해주었습니다.\n내가 말하는게 다른 사람들이 이해하기 어렵다면, 그건 아직 목적성이 명확하지 않아서 그럴 수 있다고 조언해주었습니다.\n목적이 명확할때, 다른 사람들에게 알려주는 것도 보다 명확해질거라고 얘기했습니다.\n그러니 목적을 정하는 것이 프로젝트의 성패를 결정짓는 중요한 첫걸음이라고 강조했습니다.</p>\n<p>결국 프로젝트를 성공시키려면, 기술을 가지고 무엇을 만들 수 있는지 뿐만 아니라 다른 사람들이 이해할 수 있게 설명하는 능력도 중요하다는 것을 배웠습니다.</p>\n<blockquote>\n<p>“목적이 명확해질 때, 다른사람들에게 알려주는 것도 그러하다는 것을 깨달았습니다.”</p>\n</blockquote>\n<h3 id=\"2-팀원-간의-역할-분담의-중요성\">2. 팀원 간의 역할 분담의 중요성</h3>\n<blockquote>\n<p>기획자 있나요? 디자이너 있나요? 개발자 있나요? 마케터 있나요?”</p>\n</blockquote>\n<p>저희 팀은 총원 6명에 개발자만 5명에 디자이너 1명으로 구성되어 있습니다.</p>\n<p>해커톤 준비 기간 그리고 해커톤 대회 기간동안 우리 5명은 대부분의 기간동안 개발에 몰입했으며, 초반에 개발과 디자인에만 몰두한 나머지, 기획에 제대로 힘을 쓰지 못했으며, 2박 3일의 기간동안 발표 전날에도 발표자를 정하지 못했습니다.\n결국엔 기획, 발표 등에서 어려움을 맞이할 수 밖에 없었습니다.</p>\n<p>지금 생각해보면, 각 개인별로 프로젝트를 하는 목적이 있을 것 같습니다.\n누구는 협업 능력을 기르기 위해서, 누구는 발표 능력을 기르기 위해서일 것일 수도 있습니다.</p>\n<p>저의 목적은 다른 사람들과 개발 프로젝트를 함께 하고 개발 능력을 위해서 였습니다.\n아무래도 저희 팀의 개발자 5명의 목적은 대부분이 동일하지 않을까 싶습니다.</p>\n<blockquote>\n<p>각 개인별로 각자의 목적성에 따른 역할에 따른 분담을 정하고, 각자의 목적에 치중하고 몰입하는 것이, 좋은 결과를 낳았을 것이라고 생각합니다.</p>\n</blockquote>\n<h2 id=\"마무리\">마무리</h2>\n<p>이 실패를 통해 얻은 교훈을 바탕으로, 더 나은 협업 방식을 구축하고 다음 도전에 임할 준비가 되었다고 생각합니다.\n이번 경험을 통해 미래의 프로젝트에서 더 나은 결과를 얻기 위한 길을 찾아가는 방법을 배웠습니다. 실패에서 배운 교훈을 살려 더 나은 협업자로 성장하기 위해 계속해서 노력하겠습니다.</p>\n<p>멋진 팀원들과 한 달동안 함께하면서 한 이번 해커톤은 행복한 추억으로 남을 것 같습니다.\n이 글을 보실 저희 팀원 그리고 특히 FE팀 지헌님, 성우님 덕분에 많은걸 배웠습니다.\n진심으로 감사합니다~!</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../../public/imgs/swf-hackathon_01.png&#x22;,&#x22;alt&#x22;:&#x22;SWF 해커톤 활동 사진 1&#x22;,&#x22;index&#x22;:0}\"></p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../../public/imgs/swf-hackathon_02.jpg&#x22;,&#x22;alt&#x22;:&#x22;SWF 해커톤 활동 사진 2&#x22;,&#x22;index&#x22;:0}\"></p>");
	

				const frontmatter = {"layout":"../../layouts/PostLayout.astro","title":"SWF 2023 해커톤 회고","emoji":"🏆","pubDate":"2023-08-11T00:00:00.000Z","description":"","author":"yoon","tags":[]};
				const file = "C:/Users/parky/Desktop/STUDY/CODING/WEB-DIRECTORY/blog/yoon/src/pages/blog/post-1.md";
				const url = "/blog/post-1";
				function rawContent() {
					return "   \n                                      \n                        \n           \n                   \n               \n              \n        \n   \n\n# 협업 역량과 목적성의 필요성\n\n컴퓨터 공학부에서의 학업은 물론, 현업에서도 협업 역량은 필요한 스킬 중 하나입니다. 그런 이유로, 저는 동아리, 해커톤과 같은 팀 프로젝트에 참여하며 협업 역량을 기르는 기회를 많이 찾아봤었습니다.\n\n특히, 최근 참여한 해커톤은 제 역량을 향상시키기 위한 중요한 도전이었습니다. 그런데, 저와 제 팀은 예상치 못한 어려움에 직면하게 되었습니다. 협업을 통해 이뤄내야 하는 프로젝트는 크기가 컸고, 역할 분담의 중요성이 크게 부각되었던 프로젝트였습니다.\n\n사실을 말하자면, 그 어려움을 극복하지 못했습니다. 프로젝트를 제한 시간 내에 성공적으로 완수하지 못한 것이 저희의 결과였습니다. 그럼에도 불구하고, 이 경험에서 중요한 교훈을 얻었습니다.\n\n> 1. 발표를 하는데 있어서 그리고 프로젝트 자체에 있어서 프로젝트의 목적성이 중요하다는 것을 깨달았습니다.\n\n> 2. 팀원 간의 역할 분담의 중요성을 더욱 명확하게 깨달았습니다. 역할 분담이 모호한 상황에서는 혼돈이 늘어나는 것을 몸소 체감했습니다.\n\n또한, 실패는 협업 능력을 향상시키는 기회라는 것을 배웠습니다. 왜냐하면, 실패를 통해 우리는 어떤 부분에서 문제가 발생했는지, 어떤 부분에서 개선할 수 있는지를 돌아보고 더 나은 방향을 모색하는 계기를 갖게 되었습니다.\n\n## 실패와 배움\n\n### 1. 프로젝트의 목적성\n\n저는 프로젝트가 끝난 이후, 과거에 운영한 회사를 아는 형에게 이번 주에 참여한 해커톤에서 상도 못타고 발표도 제대로 하지 못했다고 전화했습니다.\n형은 이번 프로젝트가 어떤 프로젝트인지 궁금해하며 더 자세한 설명을 요구해서 저는 다음과 같이 말했습니다.\n\n> \"저희 프로젝트는 마켓플레이스인데요, 프롬프트를 NFT로 만들어서 판매하는 플랫폼이에요. 다른 사람들이 직접 프롬프트를 구매하고 판매할 수 있게끔 돕는거죠.\"\n\n하지만 형은 그게 너무 복잡하고 어렵다며, 아이가 들어도 이해할 수 있는 설명을 요구했습니다. 그래서 1시간의 시도 끝에 저는 서브웨이에서의 경험을 바탕으로 다시 설명을 시도했습니다.\n\n> \"저희 서비스는 서브웨이에서 내가 직접 만든 샌드위치를 팔 수 있는 서비스에요. 대신 이건 어떤 조합이던, 어느 사람도 똑같이 만들어낼 수 없는 특별한 샌드위치에요.\"\n\n형은 그게 그나마 이해하기가 좀 명확하다고 했으며, 나중에는 프로젝트를 시작할 때부터 목적을 명확하게 잡아야 한다고 조언해주었습니다.\n내가 말하는게 다른 사람들이 이해하기 어렵다면, 그건 아직 목적성이 명확하지 않아서 그럴 수 있다고 조언해주었습니다.\n목적이 명확할때, 다른 사람들에게 알려주는 것도 보다 명확해질거라고 얘기했습니다.\n그러니 목적을 정하는 것이 프로젝트의 성패를 결정짓는 중요한 첫걸음이라고 강조했습니다.\n\n결국 프로젝트를 성공시키려면, 기술을 가지고 무엇을 만들 수 있는지 뿐만 아니라 다른 사람들이 이해할 수 있게 설명하는 능력도 중요하다는 것을 배웠습니다.\n\n> \"목적이 명확해질 때, 다른사람들에게 알려주는 것도 그러하다는 것을 깨달았습니다.\"\n\n### 2. 팀원 간의 역할 분담의 중요성\n\n> 기획자 있나요? 디자이너 있나요? 개발자 있나요? 마케터 있나요?\"\n\n저희 팀은 총원 6명에 개발자만 5명에 디자이너 1명으로 구성되어 있습니다.\n\n해커톤 준비 기간 그리고 해커톤 대회 기간동안 우리 5명은 대부분의 기간동안 개발에 몰입했으며, 초반에 개발과 디자인에만 몰두한 나머지, 기획에 제대로 힘을 쓰지 못했으며, 2박 3일의 기간동안 발표 전날에도 발표자를 정하지 못했습니다.\n결국엔 기획, 발표 등에서 어려움을 맞이할 수 밖에 없었습니다.\n\n지금 생각해보면, 각 개인별로 프로젝트를 하는 목적이 있을 것 같습니다.\n누구는 협업 능력을 기르기 위해서, 누구는 발표 능력을 기르기 위해서일 것일 수도 있습니다.\n\n저의 목적은 다른 사람들과 개발 프로젝트를 함께 하고 개발 능력을 위해서 였습니다.\n아무래도 저희 팀의 개발자 5명의 목적은 대부분이 동일하지 않을까 싶습니다.\n\n> 각 개인별로 각자의 목적성에 따른 역할에 따른 분담을 정하고, 각자의 목적에 치중하고 몰입하는 것이, 좋은 결과를 낳았을 것이라고 생각합니다.\n\n## 마무리\n\n이 실패를 통해 얻은 교훈을 바탕으로, 더 나은 협업 방식을 구축하고 다음 도전에 임할 준비가 되었다고 생각합니다.\n이번 경험을 통해 미래의 프로젝트에서 더 나은 결과를 얻기 위한 길을 찾아가는 방법을 배웠습니다. 실패에서 배운 교훈을 살려 더 나은 협업자로 성장하기 위해 계속해서 노력하겠습니다.\n\n멋진 팀원들과 한 달동안 함께하면서 한 이번 해커톤은 행복한 추억으로 남을 것 같습니다.\n이 글을 보실 저희 팀원 그리고 특히 FE팀 지헌님, 성우님 덕분에 많은걸 배웠습니다.\n진심으로 감사합니다~!\n\n![SWF 해커톤 활동 사진 1](../../../public/imgs/swf-hackathon_01.png)\n\n![SWF 해커톤 활동 사진 2](../../../public/imgs/swf-hackathon_02.jpg)\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"협업-역량과-목적성의-필요성","text":"협업 역량과 목적성의 필요성"},{"depth":2,"slug":"실패와-배움","text":"실패와 배움"},{"depth":3,"slug":"1-프로젝트의-목적성","text":"1. 프로젝트의 목적성"},{"depth":3,"slug":"2-팀원-간의-역할-분담의-중요성","text":"2. 팀원 간의 역할 분담의 중요성"},{"depth":2,"slug":"마무리","text":"마무리"}];
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

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_0_0 as _ };

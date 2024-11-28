/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from '../chunks/astro/server_DqemDJDq.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_vGC8L-MR.mjs';
export { renderers } from '../renderers.mjs';

const html = "<h1 id=\"test-article\">Test Article</h1>\n<p>This is a test article.</p>\n<h2 id=\"test-heading\">Test Heading</h2>\n<p>This is a test heading.</p>\n<h3 id=\"test-subheading\">Test Subheading</h3>\n<p>This is a test subheading.</p>\n<h2 id=\"test-list\">Test List</h2>\n<ul>\n<li>Test Item 1</li>\n<li>Test Item 2</li>\n<li>Test Item 3</li>\n</ul>\n<h2 id=\"test-blockquote\">Test Blockquote</h2>\n<blockquote>\n<p>This is a test blockquote.</p>\n</blockquote>\n<h2 id=\"test-code-block\">Test Code Block</h2>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"python\"><code><span class=\"line\"><span style=\"color:#79B8FF\">print</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">\"Hello, world!\"</span><span style=\"color:#E1E4E8\">)</span></span>\n<span class=\"line\"></span></code></pre>\n<h2 id=\"test-image\">Test Image</h2>\n<p><img src=\"https://via.placeholder.com/150\" alt=\"Test Image\"></p>";

				const frontmatter = {"title":"Test Article","description":"This is a test article.","layout":"../layouts/Layout.astro"};
				const file = "/Users/cristhianrecalde/dev/web/astro/curso/astro-demo/src/pages/content.md";
				const url = "/content";
				function rawContent() {
					return "\n# Test Article\n\nThis is a test article.\n\n## Test Heading\n\nThis is a test heading.\n\n### Test Subheading\n\nThis is a test subheading.\n\n## Test List\n\n- Test Item 1\n- Test Item 2\n- Test Item 3\n\n## Test Blockquote\n\n> This is a test blockquote.\n\n## Test Code Block\n\n```python\nprint(\"Hello, world!\")\n```\n\n## Test Image\n\n![Test Image](https://via.placeholder.com/150)\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"test-article","text":"Test Article"},{"depth":2,"slug":"test-heading","text":"Test Heading"},{"depth":3,"slug":"test-subheading","text":"Test Subheading"},{"depth":2,"slug":"test-list","text":"Test List"},{"depth":2,"slug":"test-blockquote","text":"Test Blockquote"},{"depth":2,"slug":"test-code-block","text":"Test Code Block"},{"depth":2,"slug":"test-image","text":"Test Image"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Layout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

const page = () => _page;

export { page };

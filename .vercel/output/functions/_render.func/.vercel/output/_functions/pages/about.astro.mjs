/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DqemDJDq.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_vGC8L-MR.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>About</h1> <p>
This is the about page.
</p> ` })}`;
}, "/Users/cristhianrecalde/dev/web/astro/curso/astro-demo/src/pages/about.astro", void 0);

const $$file = "/Users/cristhianrecalde/dev/web/astro/curso/astro-demo/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

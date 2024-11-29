/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D2cOsY6E.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BRcTIRkm.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-white text-4xl font-bold text-center mb-4">404</h1> <br> ` })} <div class="flex flex-col justify-center items-center"> <h1 class="text-white text-4xl font-bold text-center mb-4">Esta página no existe</h1> <img src="https://midu.dev/images/this-is-fine-404.gif" alt="This is fine en llamas" class="w-1/2 mb-8 rounded shadow-lg"> <a href="/" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
Volver al inicio
</a> </div>`;
}, "/Users/cristhianrecalde/dev/web/astro/curso/astro-demo/src/pages/404.astro", void 0);

const $$file = "/Users/cristhianrecalde/dev/web/astro/curso/astro-demo/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

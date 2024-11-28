/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DqemDJDq.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_vGC8L-MR.mjs';
import { g as getLaunches } from '../../chunks/spacex_BWrSDWoR.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const launches = await getLaunches();
  return launches.map((launch) => {
    return {
      params: { id: launch.id.toString() },
      props: { launch }
    };
  });
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { launch } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Lanzamiento ${launch.name}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="flex flex-col gap-4 items-center"> <h2 class="text-4xl text-white font-bold"> ${launch.name} </h2> ${launch.links?.patch?.small && renderTemplate`<img class="w-52 h-auto"${addAttribute(launch.links.patch.small, "src")}${addAttribute(`Patch for ${launch.name}`, "alt")}>`} <p class="text-lg">${launch.details}</p> </article> ` })}`;
}, "/Users/cristhianrecalde/dev/web/astro/curso/astro-demo/src/pages/launch/[id].astro", void 0);

const $$file = "/Users/cristhianrecalde/dev/web/astro/curso/astro-demo/src/pages/launch/[id].astro";
const $$url = "/launch/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

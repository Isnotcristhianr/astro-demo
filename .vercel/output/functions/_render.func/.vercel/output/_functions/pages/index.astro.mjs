/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as createAstro, a as renderComponent } from '../chunks/astro/server_DqemDJDq.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_vGC8L-MR.mjs';
import 'clsx';
import { g as getLaunches } from '../chunks/spacex_BWrSDWoR.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$CardLaunch = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardLaunch;
  const { success, flight_number, name, id, img } = Astro2.props;
  const successText = success ? "Success" : "Failed";
  return renderTemplate`${maybeRenderHead()}<div> <a${addAttribute(`/launch/${id}`, "href")} class="rounded-lg border shadow-md bg-gray-800 border-gray-700
    hover:scale-105 hover:bg-gray-700 transition-all duration-300 flex flex-col"> <picture class="flex justify-center p-4"> <img${addAttribute(img, "src")}${addAttribute(`${name} launch ${id}`, "alt")}> </picture> <div class="p-4"> <h2 class="text-2xl font-bold text-white">Launch #${flight_number}</h2> <p class="text-gray-400">${name}</p> <p${addAttribute([
    "rounded p-2 text-center font-bold",
    success ? "bg-green-500" : "bg-red-500",
    "text-white"
  ], "class:list")}> ${successText} </p> </div> </a> </div>`;
}, "/Users/cristhianrecalde/dev/web/astro/curso/astro-demo/src/components/cardLaunch.astro", void 0);

const $$Launches = createComponent(async ($$result, $$props, $$slots) => {
  const launches = await getLaunches();
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> ${launches.map((launch) => renderTemplate`${renderComponent($$result, "CardLaunch", $$CardLaunch, { "id": launch.id, "name": launch.name, "img": launch.links.patch.small ?? "", "success": launch.success ?? false, "flight_number": launch.flight_number ?? 0, "details": launch.details ?? "" })}`)} </div>`;
}, "/Users/cristhianrecalde/dev/web/astro/curso/astro-demo/src/components/Launches.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Space X Launches" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Launches", $$Launches, {})} </main> ` })}`;
}, "/Users/cristhianrecalde/dev/web/astro/curso/astro-demo/src/pages/index.astro", void 0);

const $$file = "/Users/cristhianrecalde/dev/web/astro/curso/astro-demo/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

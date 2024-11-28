import { c as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderSlot, a as renderComponent, d as addAttribute, b as createAstro, g as renderHead } from './astro/server_DqemDJDq.mjs';
import 'kleur/colors';
import 'clsx';
import { useState } from 'preact/hooks';
import { jsxs, jsx } from 'preact/jsx-runtime';
/* empty css                         */

const $$HeaderButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="/" class="flex items-center cursor-pointer gap-2 transition-all
   duration-300 disabled:opacity-50 disabled:cursor-not-allowed 
   bg-button text-gray-700 shadow-button hover:shadow-button-hover
    hover:scale-110 px-4 py-3 m-1 text-md font-bold rounded-xl bg-slate-200"> ${renderSlot($$result, $$slots["before"])} ${renderSlot($$result, $$slots["default"])} ${renderSlot($$result, $$slots["after"])} </a>`;
}, "/Users/cristhianrecalde/dev/web/astro/curso/astro-demo/src/components/HeaderButton.astro", void 0);

function Counter() {
  const [count, setCount] = useState(0);
  return jsxs("div", {
    class: "flex gap-4 items-center",
    children: [jsx("button", {
      class: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
      onClick: () => setCount(count - 1),
      children: "-1"
    }), jsx("span", {
      class: "text-xl font-bold",
      children: count
    }), jsx("button", {
      class: "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded",
      onClick: () => setCount(count + 1),
      children: "+1"
    })]
  });
}

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header data-astro-transition-persist="fade" class="py-8 px-4 mx-auto max-w-xl lg:py-16 lg:px-6"> <div class="mx-auto text-center mb-8 lg:mb-16"> <h2 class="text-4xl font-bold text-white">Space X Launches 🚀</h2> <p class="text-md text-gray-500">A list of all Space X launches.</p> </div> <nav class="flex flex-row items-center justify-center"> ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "class": "text-md text-gray-500", "href": "/" }, { "before": ($$result2) => renderTemplate`<svg x-bind:width="size" x-bind:height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" x-bind:stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2"> <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"></path> <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"></path> <path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path> </svg>`, "default": ($$result2) => renderTemplate` 
All Launches` })} ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "class": "text-md text-gray-500", "href": "/about" }, { "before": ($$result2) => renderTemplate`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2"> <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path> <path d="M12 9h.01"></path> <path d="M11 12h1v4h1"></path> </svg>`, "default": ($$result2) => renderTemplate` 
About` })} ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "class": "text-md text-gray-500", "href": "/past" }, { "before": ($$result2) => renderTemplate`<svg x-bind:width="size" x-bind:height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" x-bind:stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2"> <path d="M12 8l0 4l2 2"></path> <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5"></path> </svg>`, "default": ($$result2) => renderTemplate` 
Past Launches` })} </nav> <div class="flex justify-center"> ${renderComponent($$result, "Counter", Counter, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/cristhianrecalde/dev/web/astro/curso/astro-demo/src/components/Counter.jsx", "client:component-export": "default" })} </div> </header>`;
}, "/Users/cristhianrecalde/dev/web/astro/curso/astro-demo/src/components/Header.astro", "self");

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/cristhianrecalde/dev/web/astro/curso/astro-demo/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-gray-900 min-h-screen pb-32"> ${renderComponent($$result, "Header", $$Header, {})} <main class="max-w-5xl px-4 mx-auto"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/Users/cristhianrecalde/dev/web/astro/curso/astro-demo/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };

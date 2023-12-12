import __nuxt_component_0 from './Icon-a17ebf65.mjs';
import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import './index-d7bffedc.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const socialLinks = [
      {
        icon: "entypo-social:facebook",
        text: "Facebook"
      },
      {
        icon: "ri:instagram-fill",
        text: "Instagram"
      },
      {
        icon: "mdi:youtube",
        text: "Youtube"
      },
      {
        icon: "mdi:linkedin",
        text: "LinkedIn"
      },
      {
        icon: "mdi:twitter",
        text: "Twitter"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-[#333333] px-2 lg:px-24 py-10 lg:py-32 h-fit" }, _attrs))}><div class="flex flex-col lg:flex-row"><div class="w-full lg:w-3/4"><div class="flex w-full text-custom-light-gray font-inter space-x-10"><div><h1 class="text-xl md:text-3xl mb-6">Find Us On</h1><ul><!--[-->`);
      ssrRenderList([
        "Work",
        "Services",
        "About",
        "Blog Archive",
        "Contact Us"
      ], (item, index) => {
        _push(`<li class="my-2 text-lg md:text-xl"><a href="#">${ssrInterpolate(item)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div><h1 class="text-xl md:text-3xl mb-6">Discover</h1><ul><!--[-->`);
      ssrRenderList(socialLinks, (item, index) => {
        _push(`<li class="my-2 text-lg md:text-xl"><a href="#" class="inline-flex space-x-3">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: item.icon,
          color: "",
          size: "25"
        }, null, _parent));
        _push(`<span>${ssrInterpolate(item.text)}</span></a></li>`);
      });
      _push(`<!--]--></ul></div></div><div class="flex justify-evenly items-center mr-0 lg:mr-32 mt-8 flex-wrap"><!--[-->`);
      ssrRenderList(9, (item, index) => {
        _push(`<img${ssrRenderAttr("src", `/images/tech-logo-${item}.png`)} alt="tech-logo" class="h-10 m-2">`);
      });
      _push(`<!--]--></div></div><div class="w-full lg:w-1/4 px-4"><div><span class="font-inter text-sm text-custom-light-gray">Interested in keeping up-to-date about the latest in design trends in Manchester, England? We\u2019ve got you covered.</span><div class="w-fit relative h-fit mb-8"><input type="email" name="client-email" placeholder="Enter Email Address Here" class="email-address-box">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:arrow-right",
        color: "rgb(255 204 0)",
        size: "30",
        class: "absolute top-[40%] right-2"
      }, null, _parent));
      _push(`</div><span class="font-inter text-xs text-custom-light-gray">By subscribing to our newsletter you agree to our privacy policy and will get commercial communication.</span></div><div class="bg-custom-yellow rounded-md px-10 py-5 mt-20 h-14 flex justify-center items-center"><a href="#"><span>Schedule a free discovery session</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:arrow-top-right",
        color: "rgb(255 204 0)",
        size: "13",
        class: "ml-2 w-fit h-fit bg-black rounded-full p-1"
      }, null, _parent));
      _push(`</a></div></div></div><div><hr class="w-full mt-10 rounded bg-custom-light-gray font-inter"><div class="h-fit flex flex-col lg:flex-row justify-between items-center mt-2"><h1 class="text-custom-light-gray text-3xl"> Level8Digital\xAE </h1><span class="text-custom-light-gray text-sm">Copyright \xA92022 level8digital.com. All rights reserved.</span></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Footer = _sfc_main$1;
  _push(`<!--[-->`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/shared-layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sharedLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { sharedLayout as default };
//# sourceMappingURL=shared-layout-61fa8e8a.mjs.map

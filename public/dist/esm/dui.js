import { p as promiseResolve, g as globalScripts, b as bootstrapLazy } from './index-D1K1rt23.js';
export { s as setNonce } from './index-D1K1rt23.js';

/*
 Stencil Client Patch Browser v4.33.1 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["d-backtop_10",[[1,"d-message",{"messages":[32]},[[8,"d-message","handleMessage"]]],[1,"d-backtop",{"right":[1],"bottom":[1],"visibilityHeight":[2,"visibility-height"],"target":[1],"visible":[32]},[[9,"scroll","handleScroll"]]],[1,"d-breadcrumb",{"separator":[1]}],[1,"d-breadcrumb-item",{"href":[1],"position":[2]}],[1,"d-button",{"type":[1],"size":[1],"disabled":[4],"round":[4],"customClass":[1,"custom-class"],"customStyle":[16,"custom-style"]}],[1,"d-carousel",{"autoplay":[4],"delay":[2],"indicatorPosition":[1,"indicator-position"],"currentIndex":[32],"itemsCount":[32],"nextSlide":[64],"prevSlide":[64],"goToSlide":[64]},null,{"autoplay":["autoplayChanged"],"delay":["delayChanged"]}],[1,"d-divider",{"direction":[1],"color":[1],"size":[1],"lineType":[1,"line-type"],"margin":[1]}],[1,"d-drawer",{"visible":[1040,"show"],"width":[1],"showHeader":[1540,"show-header"],"header":[1],"maskClosable":[1540,"mask-closable"],"placement":[1537],"open":[64],"close":[64]},null,{"placement":["validateName"]}],[1,"d-modal",{"show":[1540],"width":[1],"showHeader":[1540,"show-header"],"header":[1],"maskClosable":[1540,"mask-closable"],"showFooter":[1540,"show-footer"],"confirmText":[1,"confirm-text"],"cancelText":[1,"cancel-text"],"open":[64],"close":[64],"confirm":[64],"cancel":[64]}],[1,"d-icon",{"name":[1],"size":[1],"color":[1],"rotate":[2],"spin":[4]}]]]], options);
});
//# sourceMappingURL=dui.js.map

//# sourceMappingURL=dui.js.map
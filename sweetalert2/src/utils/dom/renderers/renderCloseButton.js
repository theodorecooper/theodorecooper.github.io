import*as dom from"../../dom/index.js";export const renderCloseButton=(o,t)=>{const e=dom.getCloseButton();dom.setInnerHtml(e,t.closeButtonHtml),dom.applyCustomClass(e,t,"closeButton"),dom.toggle(e,t.showCloseButton),e.setAttribute("aria-label",t.closeButtonAriaLabel)};
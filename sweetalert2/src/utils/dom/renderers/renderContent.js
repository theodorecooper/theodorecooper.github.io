import{swalClasses}from"../../classes.js";import*as dom from"../../dom/index.js";import{renderInput}from"./renderInput.js";export const renderContent=(t,o)=>{const e=dom.getContent().querySelector(`#${swalClasses.content}`);o.html?(dom.parseHtmlToContainer(o.html,e),dom.show(e,"block")):o.text?(e.textContent=o.text,dom.show(e,"block")):dom.hide(e),renderInput(t,o),dom.applyCustomClass(dom.getContent(),o,"content")};
import{swalClasses}from"../classes.js";export const measureScrollbar=()=>{const e=document.createElement("div");e.className=swalClasses["scrollbar-measure"],document.body.appendChild(e);const s=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),s};
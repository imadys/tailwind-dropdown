(()=>{"use strict";class t{constructor(t,i,e){this.$targetEl=t,this.$triggerEl=i,this.options=e,this._visible=!1,this.initEvent()}initEvent(){this.$triggerEl.addEventListener("click",(()=>{this.toggle()})),document.addEventListener("click",(t=>{this._visible&&(this.$triggerEl.contains(t.target)||t.target.classList.contains("dropdown-link")||this.hide())}))}hide(){this.$targetEl.classList.add("opacity-0","invisible"),this.$targetEl.classList.remove("opacity-1","visible"),this._visible=!1,this?.options?.onHide?.()}show(){this.$targetEl.classList.add("opacity-1","visible"),this.$targetEl.classList.remove("opacity-0","invisible"),this._visible=!0,this?.options?.onShow?.()}toggle(){this.isVisible()?this.hide():this.show(),this?.options?.onToggle?.()}isVisible(){return this._visible}}const i=t;document.querySelectorAll("[data-dropdown-toggle]").forEach((i=>{const e=i.getAttribute("data-dropdown-toggle"),s=document.querySelector(`#${e}`);new t(s,i)}));const e=document.getElementById("coolDropdownBtn");new i(document.getElementById("coolDropdown"),e,{onHide:()=>{console.log("hide event!")},onShow:()=>{console.log("show event!")},onToggle:()=>{console.log("toggle event!")}})})();
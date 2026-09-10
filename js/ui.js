
/* ==========================================================
   PT Cahaya Ginda Ganda HSE Dashboard
   ui.js v5.1
   UI Helper (Fixed Firefox Render Loop)
========================================================== */

const UI={

loading:null,

init(){

this.loading=document.getElementById("loadingOverlay");

this.refreshIcons();

},

refreshIcons(){

if(window.lucide){

lucide.createIcons();

}

},

showLoading(){

if(this.loading){

this.loading.style.display="flex";

}

},

hideLoading(){

if(this.loading){

this.loading.style.display="none";

}

},

toast(message,type="info"){

const toast=document.createElement("div");

toast.className=`toast toast-${type}`;

toast.textContent=message;

document.body.appendChild(toast);

requestAnimationFrame(()=>{

toast.classList.add("show");

});

setTimeout(()=>{

toast.classList.remove("show");

setTimeout(()=>toast.remove(),300);

},2500);

},

confirm(message){

return window.confirm(message);

}

};

/* =========================================
   SAFE ICON REFRESH
========================================= */

window.addEventListener("DOMContentLoaded",()=>{

UI.init();

});

/* =========================================
   GLOBAL REFRESH
========================================= */

window.refreshUI=()=>{

UI.refreshIcons();

};

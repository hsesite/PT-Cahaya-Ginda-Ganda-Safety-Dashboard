
/* ==========================================================
   PT. CGG HSE Dashboard
   ui.js v1.0.0
   Premium UI Engine
   Depends: tokens.css, style.css, animation.css
========================================================== */

const CGGUI = (()=>{

let initialized=false;

function init(){

if(initialized) return;
initialized=true;

bindGlassTouch();
bindParallax();
bindHeader();
bindModuleChange();

}

/* =========================
   Glass Touch
========================= */

function bindGlassTouch(){

document.addEventListener("pointerdown",(e)=>{

const card=e.target.closest(".cgg-card,.cgg-button");

if(!card) return;

card.classList.add("pressed");

});

document.addEventListener("pointerup",releasePressed);
document.addEventListener("pointercancel",releasePressed);

}

function releasePressed(){

document.querySelectorAll(".pressed").forEach(el=>{
el.classList.remove("pressed");
});

}

/* =========================
   Parallax Tilt
========================= */

function bindParallax(){

const cards=document.querySelectorAll(".cgg-card");

cards.forEach(card=>{

card.addEventListener("pointermove",(e)=>{

const rect=card.getBoundingClientRect();

const x=(e.clientX-rect.left)/rect.width-.5;
const y=(e.clientY-rect.top)/rect.height-.5;

card.style.transform=
`perspective(900px)
 rotateX(${(-y*4).toFixed(2)}deg)
 rotateY(${(x*4).toFixed(2)}deg)
 translateY(-2px)`;

});

card.addEventListener("pointerleave",()=>{

card.style.transform="";

});

});

}

/* =========================
   Header Scroll
========================= */

function bindHeader(){

const header=document.querySelector(".cgg-header");

if(!header) return;

window.addEventListener("scroll",()=>{

if(window.scrollY>24){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

}

/* =========================
   Module Animation
========================= */

function bindModuleChange(){

document.addEventListener("moduleChange",()=>{

const active=document.querySelector("[data-module].active");

if(!active) return;

active.classList.remove("page-enter");

void active.offsetWidth;

active.classList.add("page-enter");

});

}

return{
init
};

})();

/* Auto Init */

document.addEventListener("DOMContentLoaded",()=>{

CGGUI.init();

});

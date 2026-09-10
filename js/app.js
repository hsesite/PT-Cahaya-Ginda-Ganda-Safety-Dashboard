
/* ==========================================================
   PT CGG HSE Dashboard
   App Controller v1.0
========================================================== */

const App={

init(){

this.updateDateTime();
this.updateShift();
this.watchNetwork();
this.counterAnimation();
this.initGlassReflection();

this.bindMenu();

setInterval(()=>{
this.updateDateTime();
this.updateShift();
},1000);

},

/* =========================================
   DATE & CLOCK
========================================= */

updateDateTime(){

const now=new Date();

const dateOptions={
weekday:"short",
day:"2-digit",
month:"short",
year:"numeric"
};

const timeOptions={
hour:"2-digit",
minute:"2-digit",
second:"2-digit"
};

document.getElementById("todayDate").textContent=
now.toLocaleDateString("id-ID",dateOptions);

document.getElementById("liveClock").textContent=
now.toLocaleTimeString("id-ID",timeOptions);

},

/* =========================================
   SHIFT
========================================= */

updateShift(){

const hour=new Date().getHours();

const shiftText=document.getElementById("shiftText");
const shiftIcon=document.getElementById("shiftIcon");

if(hour>=6 && hour<18){

shiftText.textContent="Day Shift";
shiftIcon.setAttribute("data-lucide","sun");

}else{

shiftText.textContent="Night Shift";
shiftIcon.setAttribute("data-lucide","moon");

}

lucide.createIcons();

},

/* =========================================
   NETWORK
========================================= */

watchNetwork(){

const status=document.getElementById("networkStatus");

const update=()=>{

if(navigator.onLine){

status.className="status online";
status.innerHTML='<i data-lucide="wifi"></i><span>Online</span>';

}else{

status.className="status offline";
status.innerHTML='<i data-lucide="wifi-off"></i><span>Offline</span>';

}

lucide.createIcons();

};

window.addEventListener("online",update);
window.addEventListener("offline",update);

update();

},

/* =========================================
   COUNTER
========================================= */

counterAnimation(){

const el=document.getElementById("inspectionCounter");

const target=0;

let current=0;

const step=()=>{

if(current>=target){

el.textContent=target;
return;

}

current++;

el.textContent=current;

requestAnimationFrame(step);

};

step();

},

/* =========================================
   LIVE GLASS REFLECTION
========================================= */

initGlassReflection(){

const cards=document.querySelectorAll(".glass");

cards.forEach(card=>{

card.addEventListener("pointermove",e=>{

const rect=card.getBoundingClientRect();

const x=((e.clientX-rect.left)/rect.width-.5)*8;
const y=((e.clientY-rect.top)/rect.height-.5)*8;

card.style.transform=
`perspective(700px) rotateX(${-y}deg) rotateY(${x}deg)`;

});

card.addEventListener("pointerleave",()=>{

card.style.transform="";

});

});

}

};

window.addEventListener("DOMContentLoaded",()=>{

App.init();

});


/* =========================================
   PAGE TRANSITION
========================================= */

pageTransition(){

const overlay=document.getElementById("pageTransition");

overlay.classList.add("show");

setTimeout(()=>{

overlay.classList.remove("show");

},450);

},

/* =========================================
   APP VIEW
========================================= */

openModule(title){

this.pageTransition();

const view=document.getElementById("appView");

setTimeout(()=>{

view.innerHTML=`

<div class="view-placeholder">

<div class="placeholder-icon">
<i data-lucide="sparkles"></i>
</div>

<h3>${title}</h3>

<p>Modul sedang disiapkan.</p>

</div>

`;

lucide.createIcons();

},180);

},


/* =========================================
   MENU ROUTER
========================================= */

bindMenu(){

const cards=document.querySelectorAll(".menu-card");

cards.forEach(card=>{

card.addEventListener("click",()=>{

const title=card.querySelector("span").textContent;

this.openModule(title);

});

});

}

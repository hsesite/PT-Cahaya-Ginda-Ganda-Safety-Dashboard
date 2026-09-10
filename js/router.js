
/* ==========================================================
   PT CGG HSE Dashboard
   Native Router v1.0
========================================================== */

const Router={

current:"home",

routes:{
home:"Dashboard Utama",
inspection:"Inspection",
hazard:"Hazard",
incident:"Incident",
environment:"Environment",
medical:"Medical",
dashboard:"Dashboard Statistik"
},

navigate(route){

const view=document.getElementById("appView");

if(!view) return;

this.current=route;

App.pageTransition();

setTimeout(()=>{

view.innerHTML=UI.placeholder(
this.routes[route]||"Modul"
);

lucide.createIcons();

},180);

}

};

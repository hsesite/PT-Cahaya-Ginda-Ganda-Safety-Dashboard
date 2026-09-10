/* ==========================================================
   PT. CGG HSE Dashboard
   router.js v3.0
   SPA Router
========================================================== */

const Router = {

  current:"dashboard",

  container:null,

  init(){

    this.container=document.getElementById("appView");

    this.bindLinks();

    this.navigate("dashboard",false);

  },

  bindLinks(){

    document.querySelectorAll("[data-module]").forEach(el=>{

      el.addEventListener("click",(e)=>{

        e.preventDefault();

        const module=el.dataset.module;

        this.navigate(module,true);

      });

    });

  },

  navigate(module,push=true){

    this.current=module;

    this.setActive(module);

    this.transitionOut(()=>{

      this.render(module);

      this.transitionIn();

    });

    if(push){

      history.replaceState({module},"",`#${module}`);

    }

  },

  setActive(module){

    document.querySelectorAll("[data-module]").forEach(el=>{

      el.classList.toggle("active",el.dataset.module===module);

    });

  },

  transitionOut(callback){

    if(!this.container){

      callback();

      return;

    }

    this.container.style.opacity="0";

    this.container.style.transform="translateY(12px)";

    setTimeout(callback,180);

  },

  transitionIn(){

    this.container.style.opacity="1";

    this.container.style.transform="translateY(0)";

  },

  render(module){

    if(!this.container) return;

    const html=Modules.render(module);

    this.container.innerHTML=html;

    if(window.lucide){

      lucide.createIcons();

    }

  }

};

window.addEventListener("DOMContentLoaded",()=>{

  Router.init();

});

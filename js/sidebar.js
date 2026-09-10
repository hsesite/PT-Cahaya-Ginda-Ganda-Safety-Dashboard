/* ==========================================================
   PT Cahaya Ginda Ganda HSE Dashboard
   sidebar.js v5.0 (LOCKED)
   Desktop + Mobile Sidebar Controller
========================================================== */

const Sidebar = {

  desktop:null,
  mobile:null,
  overlay:null,
  openButton:null,
  closeButton:null,

  init(){

    this.desktop=document.getElementById("desktopSidebar");
    this.mobile=document.getElementById("mobileSidebar");
    this.overlay=document.getElementById("mobileOverlay");
    this.openButton=document.getElementById("openSidebar");
    this.closeButton=document.getElementById("closeSidebar");

    this.bindDesktop();

    this.bindMobile();

  },

  /* =========================================
     DESKTOP
  ========================================= */

  bindDesktop(){

    if(!this.desktop) return;

    // Hover expand ditangani CSS.
    // JS hanya menjaga status aktif.

    this.desktop
      .querySelectorAll("[data-module]")
      .forEach(btn=>{

        btn.addEventListener("click",()=>{

          this.setActive(btn.dataset.module);

        });

      });

  },

  /* =========================================
     MOBILE
  ========================================= */

  bindMobile(){

    if(!this.mobile) return;

    this.openButton?.addEventListener("click",()=>{

      this.open();

    });

    this.closeButton?.addEventListener("click",()=>{

      this.close();

    });

    this.overlay?.addEventListener("click",()=>{

      this.close();

    });

    this.mobile
      .querySelectorAll("[data-module]")
      .forEach(btn=>{

        btn.addEventListener("click",()=>{

          this.setActive(btn.dataset.module);

          this.close();

        });

      });

    document.addEventListener("keydown",e=>{

      if(e.key==="Escape"){

        this.close();

      }

    });

  },

  /* =========================================
     STATE
  ========================================= */

  open(){

    this.mobile?.classList.add("open");

    this.overlay?.classList.add("show");

    document.body.style.overflow="hidden";

  },

  close(){

    this.mobile?.classList.remove("open");

    this.overlay?.classList.remove("show");

    document.body.style.overflow="";

  },

  setActive(module){

    document
      .querySelectorAll("[data-module]")
      .forEach(el=>{

        el.classList.toggle(
          "active",
          el.dataset.module===module
        );

      });

  }

};

window.addEventListener("DOMContentLoaded",()=>{

  Sidebar.init();

});

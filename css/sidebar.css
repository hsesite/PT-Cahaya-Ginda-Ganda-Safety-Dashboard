/* ==========================================================
   PT. CGG HSE Dashboard
   sidebar.js v3.0
   macOS + iPhone Sidebar
========================================================== */

const Sidebar = {

  desktop:null,
  mobile:null,
  overlay:null,
  isPinned:false,

  init(){

    this.desktop=document.getElementById("desktopSidebar");
    this.mobile=document.getElementById("mobileSidebar");
    this.overlay=document.getElementById("mobileOverlay");

    this.loadState();

    this.bindDesktop();

    this.bindMobile();

    this.bindKeyboard();

  },

  /* ======================================================
     Desktop Sidebar
  ====================================================== */

  bindDesktop(){

    if(!this.desktop) return;

    this.desktop.addEventListener("mouseenter",()=>{

      if(!this.isPinned){

        this.desktop.classList.add("expanded");

      }

    });

    this.desktop.addEventListener("mouseleave",()=>{

      if(!this.isPinned){

        this.desktop.classList.remove("expanded");

      }

    });

    /* Double Click = Pin */

    this.desktop.addEventListener("dblclick",()=>{

      this.togglePin();

    });

  },

  togglePin(){

    this.isPinned=!this.isPinned;

    this.desktop.classList.toggle("expanded",this.isPinned);

    localStorage.setItem("cgg-sidebar-pin",this.isPinned);

  },

  loadState(){

    this.isPinned=localStorage.getItem("cgg-sidebar-pin")==="true";

    if(this.desktop && this.isPinned){

      this.desktop.classList.add("expanded");

    }

  },

  /* ======================================================
     Mobile Sidebar
  ====================================================== */

  bindMobile(){

    const open=document.getElementById("openSidebar");
    const close=document.getElementById("closeSidebar");

    if(open){

      open.addEventListener("click",()=>this.openMobile());

    }

    if(close){

      close.addEventListener("click",()=>this.closeMobile());

    }

    if(this.overlay){

      this.overlay.addEventListener("click",()=>this.closeMobile());

    }

  },

  openMobile(){

    if(!this.mobile) return;

    this.mobile.classList.add("open");

    this.overlay.classList.add("show");

    document.body.style.overflow="hidden";

  },

  closeMobile(){

    if(!this.mobile) return;

    this.mobile.classList.remove("open");

    this.overlay.classList.remove("show");

    document.body.style.overflow="";

  },

  /* ======================================================
     Keyboard Shortcut
  ====================================================== */

  bindKeyboard(){

    document.addEventListener("keydown",(e)=>{

      /* ESC */

      if(e.key==="Escape"){

        this.closeMobile();

      }

      /* Ctrl+B = Toggle Desktop Sidebar */

      if((e.ctrlKey || e.metaKey) && e.key.toLowerCase()==="b"){

        e.preventDefault();

        this.togglePin();

      }

    });

  }

};

document.addEventListener("DOMContentLoaded",()=>{

  Sidebar.init();

});

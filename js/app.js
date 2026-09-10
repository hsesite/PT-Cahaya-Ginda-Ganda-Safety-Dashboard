/* ==========================================================
   PT Cahaya Ginda Ganda HSE Dashboard
   app.js v5.0 (LOCKED)
   Application Bootstrap
========================================================== */

const App = {

  version:"5.0.0",

  init(){

    console.log(
      `%cCGG HSE Dashboard v${this.version}`,
      "color:#00C853;font-weight:bold;font-size:14px;"
    );

    this.setupWindowEvents();

    this.refreshIcons();

  },

  /* =========================================
     WINDOW EVENTS
  ========================================= */

  setupWindowEvents(){

    window.addEventListener("resize",()=>{

      this.refreshIcons();

    });

    window.addEventListener("focus",()=>{

      Dashboard?.updateDate?.();

      Dashboard?.updateClock?.();

    });

  },

  /* =========================================
     ICON REFRESH
  ========================================= */

  refreshIcons(){

    if(window.lucide){

      lucide.createIcons();

    }

  }

};

/* =========================================
   START APP
========================================= */

window.addEventListener("load",()=>{

  App.init();

});

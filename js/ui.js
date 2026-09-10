/* ==========================================================
   PT Cahaya Ginda Ganda HSE Dashboard
   ui.js v5.0 (LOCKED)
   UI Controller
========================================================== */

const UI = {

  toastEl:null,
  loadingEl:null,

  init(){

    this.createToast();

    this.createLoading();

    this.observeIcons();

  },

  /* =========================================
     TOAST
  ========================================= */

  createToast(){

    const toast=document.createElement("div");

    toast.id="uiToast";

    toast.style.cssText=`
      position:fixed;
      top:20px;
      right:20px;
      z-index:9999;
      min-width:260px;
      max-width:340px;
      padding:14px 18px;
      border-radius:18px;
      background:rgba(8,12,18,.94);
      color:#fff;
      border:1px solid rgba(255,255,255,.08);
      backdrop-filter:blur(18px);
      transform:translateY(-20px);
      opacity:0;
      pointer-events:none;
      transition:.25s ease;
      box-shadow:0 12px 40px rgba(0,0,0,.35);
      font-family:Inter,sans-serif;
      font-size:14px;
    `;

    document.body.appendChild(toast);

    this.toastEl=toast;

  },

  toast(message,type="info"){

    if(!this.toastEl) return;

    const color={
      success:"#00C853",
      warning:"#F59E0B",
      danger:"#EF4444",
      info:"#3B82F6"
    }[type] || "#3B82F6";

    this.toastEl.textContent=message;

    this.toastEl.style.borderColor=color+"55";

    this.toastEl.style.boxShadow=`0 12px 40px ${color}33`;

    this.toastEl.style.opacity="1";

    this.toastEl.style.transform="translateY(0)";

    clearTimeout(this.toastTimer);

    this.toastTimer=setTimeout(()=>{

      this.toastEl.style.opacity="0";

      this.toastEl.style.transform="translateY(-20px)";

    },3000);

  },

  /* =========================================
     LOADING
  ========================================= */

  createLoading(){

    const loading=document.createElement("div");

    loading.id="uiLoading";

    loading.style.cssText=`
      position:fixed;
      inset:0;
      display:none;
      align-items:center;
      justify-content:center;
      background:rgba(0,0,0,.35);
      backdrop-filter:blur(4px);
      z-index:9998;
    `;

    loading.innerHTML=`
      <div style="
        width:64px;
        height:64px;
        border-radius:50%;
        border:4px solid rgba(255,255,255,.15);
        border-top-color:#00C853;
        animation:uiSpin 1s linear infinite;">
      </div>
    `;

    document.body.appendChild(loading);

    const style=document.createElement("style");

    style.textContent=`
      @keyframes uiSpin{
        from{transform:rotate(0deg);}
        to{transform:rotate(360deg);}
      }
    `;

    document.head.appendChild(style);

    this.loadingEl=loading;

  },

  showLoading(){

    if(this.loadingEl){

      this.loadingEl.style.display="flex";

    }

  },

  hideLoading(){

    if(this.loadingEl){

      this.loadingEl.style.display="none";

    }

  },

  /* =========================================
     DIALOG
  ========================================= */

  confirm(title,message){

    return new Promise(resolve=>{

      const ok=window.confirm(`${title}\n\n${message}`);

      resolve(ok);

    });

  },

  alert(title,message){

    window.alert(`${title}\n\n${message}`);

  },

  /* =========================================
     LUCIDE AUTO REFRESH
  ========================================= */

  observeIcons(){

    const observer=new MutationObserver(()=>{

      if(window.lucide){

        lucide.createIcons();

      }

    });

    observer.observe(document.body,{
      childList:true,
      subtree:true
    });

  }

};

window.addEventListener("DOMContentLoaded",()=>{

  UI.init();

});

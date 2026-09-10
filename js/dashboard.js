/* ==========================================================
   PT. CGG HSE Dashboard
   dashboard.js v3.0
   Executive Dashboard Engine
========================================================== */

const Dashboard = {

  state:{

    inspection:0,
    hazard:0,
    incident:0

  },

  init(){

    this.updateDateTime();

    this.updateShift();

    this.animateAll();

    this.bindNavigationState();

    setInterval(()=>{

      this.updateDateTime();

      this.updateShift();

    },1000);

  },

  /* ======================================================
     Animasi KPI
  ====================================================== */

  animateValue(id,target,duration=900){

    const el=document.getElementById(id);

    if(!el) return;

    const start=Number(el.textContent.replace(/\D/g,"")) || 0;

    const startTime=performance.now();

    const frame=(now)=>{

      const progress=Math.min((now-startTime)/duration,1);

      const value=Math.round(start+(target-start)*progress);

      el.textContent=value.toLocaleString("id-ID");

      if(progress<1){

        requestAnimationFrame(frame);

      }

    };

    requestAnimationFrame(frame);

  },

  animateAll(){

    this.animateValue("inspectionCounter",this.state.inspection);

    this.animateValue("kpiInspection",this.state.inspection);

    this.animateValue("kpiHazard",this.state.hazard);

    this.animateValue("kpiIncident",this.state.incident);

  },

  /* ======================================================
     Tanggal & Jam
  ====================================================== */

  updateDateTime(){

    const now=new Date();

    const date=document.getElementById("todayDate");

    const clock=document.getElementById("liveClock");

    if(date){

      date.textContent=now.toLocaleDateString("id-ID",{

        weekday:"short",
        day:"2-digit",
        month:"short",
        year:"numeric"

      });

    }

    if(clock){

      clock.textContent=now.toLocaleTimeString("id-ID",{

        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit"

      });

    }

  },

  /* ======================================================
     Shift Otomatis
  ====================================================== */

  updateShift(){

    const hour=new Date().getHours();

    const text=document.getElementById("shiftText");

    const icon=document.querySelector("#executiveHero .hero-circle i");

    if(hour>=6 && hour<18){

      if(text) text.textContent="Day Shift";

      if(icon) icon.setAttribute("data-lucide","sun");

    }else{

      if(text) text.textContent="Night Shift";

      if(icon) icon.setAttribute("data-lucide","moon");

    }

    if(window.lucide){

      lucide.createIcons();

    }

  },

  /* ======================================================
     Sinkron Menu Aktif
  ====================================================== */

  bindNavigationState(){

    const buttons=document.querySelectorAll("[data-module]");

    buttons.forEach(btn=>{

      btn.addEventListener("click",()=>{

        const module=btn.dataset.module;

        document.querySelectorAll("[data-module]").forEach(el=>{

          el.classList.toggle("active",el.dataset.module===module);

        });

      });

    });

  },

  /* ======================================================
     Siap menerima data Google Sheets
  ====================================================== */

  setData(data={}){

    this.state={

      ...this.state,
      ...data

    };

    this.animateAll();

  }

};

document.addEventListener("DOMContentLoaded",()=>{

  Dashboard.init();

});

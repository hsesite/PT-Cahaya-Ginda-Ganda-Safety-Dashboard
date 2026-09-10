/* ==========================================================
   PT. CGG HSE Dashboard
   dashboard.js v3.0
   Executive Dashboard Engine
========================================================== */

const Dashboard = {

  data:{
    inspection:0,
    hazard:0,
    incident:0
  },

  init(){

    this.updateDateTime();

    this.updateShift();

    this.animateAll();

    this.bindMenu();

    setInterval(()=>{

      this.updateDateTime();

      this.updateShift();

    },1000);

  },

  /* ======================================================
     Animasi Angka KPI
  ====================================================== */

  animateValue(id,target,duration=1200){

    const el=document.getElementById(id);

    if(!el) return;

    const start=0;

    const startTime=performance.now();

    const step=(now)=>{

      const progress=Math.min((now-startTime)/duration,1);

      const value=Math.floor(progress*(target-start)+start);

      el.textContent=value.toLocaleString("id-ID");

      if(progress<1){

        requestAnimationFrame(step);

      }

    };

    requestAnimationFrame(step);

  },

  animateAll(){

    this.animateValue("inspectionCounter",this.data.inspection);

    this.animateValue("kpiInspection",this.data.inspection);

    this.animateValue("kpiHazard",this.data.hazard);

    this.animateValue("kpiIncident",this.data.incident);

  },

  /* ======================================================
     Jam & Tanggal
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

    const icon=document.querySelector("#executiveHero .hero-circle svg");

    if(hour>=6 && hour<18){

      if(text) text.textContent="Day Shift";

      if(icon){

        icon.setAttribute("data-lucide","sun");

      }

    }else{

      if(text) text.textContent="Night Shift";

      if(icon){

        icon.setAttribute("data-lucide","moon");

      }

    }

    if(window.lucide){

      lucide.createIcons();

    }

  },

  /* ======================================================
     Menu Aktif
  ====================================================== */

  bindMenu(){

    const buttons=document.querySelectorAll("[data-module]");

    buttons.forEach(btn=>{

      btn.addEventListener("click",()=>{

        document.querySelectorAll(".sidebar-item,.menu-card,.bottom-nav button")

        .forEach(el=>el.classList.remove("active"));

        btn.classList.add("active");

      });

    });

  },

  /* ======================================================
     Future Apps Script
  ====================================================== */

  setData(newData){

    this.data={...this.data,...newData};

    this.animateAll();

  }

};

document.addEventListener("DOMContentLoaded",()=>{

  Dashboard.init();

});

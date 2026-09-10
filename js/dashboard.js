/* ==========================================================
   PT Cahaya Ginda Ganda HSE Dashboard
   dashboard.js v5.0 (LOCKED)
   Dashboard Controller
========================================================== */

const Dashboard = {

  data:{
    inspection:0,
    hazard:0,
    incident:0,
    vip:0,
    sls:0,
    subkon:0
  },

  init(){

    this.updateDate();
    this.updateClock();
    this.updateShift();
    this.renderKPI();

    setInterval(()=>{
      this.updateClock();
      this.updateShift();
    },1000);

    // Sinkronisasi data jika API tersedia
    if(window.API && typeof API.getDashboard==="function"){
      this.loadData();
    }

  },

  /* =========================================
     LOAD DATA
  ========================================= */

  async loadData(){

    try{

      const result=await API.getDashboard();

      if(result){

        this.data={
          ...this.data,
          ...result
        };

        this.renderKPI();

      }

    }catch(err){

      console.warn("Dashboard memakai data lokal.",err);

    }

  },

  /* =========================================
     DATE
  ========================================= */

  updateDate(){

    const el=document.getElementById("todayDate");

    if(!el) return;

    const now=new Date();

    el.textContent=new Intl.DateTimeFormat("id-ID",{
      weekday:"short",
      day:"2-digit",
      month:"short",
      year:"numeric"
    }).format(now);

  },

  /* =========================================
     CLOCK
  ========================================= */

  updateClock(){

    const el=document.getElementById("liveClock");

    if(!el) return;

    const now=new Date();

    el.textContent=now.toLocaleTimeString("id-ID",{
      hour:"2-digit",
      minute:"2-digit",
      second:"2-digit"
    });

  },

  /* =========================================
     SHIFT
  ========================================= */

  updateShift(){

    const el=document.getElementById("shiftText");

    if(!el) return;

    const hour=new Date().getHours();

    let shift="Day Shift";

    if(hour>=18 || hour<6){
      shift="Night Shift";
    }

    el.textContent=shift;

  },

  /* =========================================
     KPI
  ========================================= */

  renderKPI(){

    this.set("inspectionCounter",this.data.inspection);

    this.set("kpiInspection",this.data.inspection);

    this.set("kpiHazard",this.data.hazard);

    this.set("kpiIncident",this.data.incident);

    this.set("vipCount",this.data.vip);

    this.set("slsCount",this.data.sls);

    this.set("subkonCount",this.data.subkon);

  },

  set(id,value){

    const el=document.getElementById(id);

    if(el){
      el.textContent=value;
    }

  }

};

window.addEventListener("DOMContentLoaded",()=>{

  Dashboard.init();

});

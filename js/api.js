/* ==========================================================
   PT Cahaya Ginda Ganda HSE Dashboard
   api.js v5.0 (LOCKED)
   Data Gateway (Google Apps Script Ready)
========================================================== */

const API = {

  /* ======================================================
     KONFIGURASI
     Ganti URL ini nanti setelah Apps Script selesai.
  ====================================================== */

  CONFIG:{

    APPS_SCRIPT_URL:""

  },

  /* ======================================================
     DASHBOARD DATA
  ====================================================== */

  async getDashboard(){

    if(!this.CONFIG.APPS_SCRIPT_URL){

      return this.offlineDashboard();

    }

    try{

      const response=await fetch(
        `${this.CONFIG.APPS_SCRIPT_URL}?action=dashboard`,
        {cache:"no-store"}
      );

      if(!response.ok){

        throw new Error("Server Error");

      }

      const json=await response.json();

      return{

        inspection:Number(json.inspection||0),
        hazard:Number(json.hazard||0),
        incident:Number(json.incident||0),
        vip:Number(json.vip||0),
        sls:Number(json.sls||0),
        subkon:Number(json.subkon||0)

      };

    }catch(error){

      console.warn("Dashboard memakai mode offline.",error);

      return this.offlineDashboard();

    }

  },

  /* ======================================================
     SUBMIT INSPEKSI
     Dipakai nanti saat modul inspeksi selesai.
  ====================================================== */

  async submitInspection(payload){

    if(!this.CONFIG.APPS_SCRIPT_URL){

      console.log("Mode Offline:",payload);

      return{
        success:true,
        offline:true
      };

    }

    try{

      const response=await fetch(this.CONFIG.APPS_SCRIPT_URL,{

        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify({

          action:"inspection",

          data:payload

        })

      });

      return await response.json();

    }catch(error){

      console.error(error);

      return{

        success:false,

        message:"Koneksi gagal."

      };

    }

  },

  /* ======================================================
     GET INSPECTION LIST
  ====================================================== */

  async getInspectionList(){

    if(!this.CONFIG.APPS_SCRIPT_URL){

      return [];

    }

    try{

      const response=await fetch(

        `${this.CONFIG.APPS_SCRIPT_URL}?action=inspectionList`,
        {cache:"no-store"}

      );

      return await response.json();

    }catch(error){

      console.warn(error);

      return [];

    }

  },

  /* ======================================================
     OFFLINE DEFAULT
  ====================================================== */

  offlineDashboard(){

    return{

      inspection:0,
      hazard:0,
      incident:0,
      vip:0,
      sls:0,
      subkon:0

    };

  }

};

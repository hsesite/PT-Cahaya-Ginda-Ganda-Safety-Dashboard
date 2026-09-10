/* ==========================================================
   PT Cahaya Ginda Ganda HSE Dashboard
   inspection.js v5.0 (LOCKED)
   Inspection Controller
========================================================== */

const Inspection = {

  form:null,

  init(){

    const container=document.getElementById("appView");

    if(!container) return;

    container.innerHTML=InspectionUI.build();

    this.form=document.getElementById("inspectionForm");

    if(!this.form) return;

    InspectionUI.bindChecklist();

    this.bindEvents();

    InspectionUI.updatePreview(this.form);

    lucide.createIcons();

  },

  /* =========================================
     EVENTS
  ========================================= */

  bindEvents(){

    this.form.addEventListener("input",()=>{

      InspectionUI.updatePreview(this.form);

    });

    this.form.addEventListener("change",()=>{

      InspectionUI.updatePreview(this.form);

    });

    this.form.addEventListener("submit",async e=>{

      e.preventDefault();

      await this.submit();

    });

    document
      .getElementById("resetInspection")
      ?.addEventListener("click",()=>{

        this.reset();

      });

  },

  /* =========================================
     SUBMIT
  ========================================= */

  async submit(){

    UI.showLoading();

    try{

      const payload=Object.fromEntries(new FormData(this.form));

      const result=await API.submitInspection(payload);

      UI.hideLoading();

      if(result.success){

        UI.toast(

          result.offline
            ?"Inspeksi tersimpan (Mode Offline)."
            :"Inspeksi berhasil dikirim.",

          "success"

        );

        Dashboard.data.inspection++;

        Dashboard.renderKPI();

        this.reset(false);

      }else{

        UI.toast(

          result.message || "Gagal mengirim data.",

          "danger"

        );

      }

    }catch(error){

      console.error(error);

      UI.hideLoading();

      UI.toast("Terjadi kesalahan.","danger");

    }

  },

  /* =========================================
     RESET
  ========================================= */

  reset(showToast=true){

    const data=InspectionData.defaultForm();

    this.form.reset();

    Object.entries(data).forEach(([key,val])=>{

      const field=this.form.elements[key];

      if(field){

        field.value=val;

      }

    });

    InspectionUI.bindChecklist();

    InspectionUI.updatePreview(this.form);

    lucide.createIcons();

    if(showToast){

      UI.toast("Form berhasil direset.","info");

    }

  }

};

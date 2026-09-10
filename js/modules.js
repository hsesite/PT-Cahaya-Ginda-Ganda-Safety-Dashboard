
/* ==========================================================
   PT. CGG HSE Dashboard
   Module Engine v1.0
   Bertugas mengelola navigasi seluruh modul.
========================================================== */

const CGGModule = (() => {

  // ===== Daftar Modul =====
  const modules = {
  dashboard:"Dashboard",
  inspection:"Inspection",
  hazard:"Hazard",
  incident:"Incident",
  environment:"Environment",
  medical:"Medical",
  pica:"PICA",
  sop:"SOP",
  admin:"Admin"
};

  let currentModule = "dashboard";

  // ===== Buka Modul =====
  function open(moduleName){

    if(!modules[moduleName]){
      console.warn(`Module "${moduleName}" tidak ditemukan.`);
      return;
    }

    currentModule = moduleName;

    // Ganti halaman aktif
    document.querySelectorAll("[data-module]").forEach(el=>{
      el.classList.remove("active");
    });

    const target=document.querySelector(`[data-module="${moduleName}"]`);

    if(target){
      target.classList.add("active");
    }

    // Update judul browser
    document.title=`PT. CGG HSE Dashboard • ${modules[moduleName]}`;

    // Event untuk animasi
    document.dispatchEvent(new CustomEvent("moduleChange",{
      detail:{
        module:moduleName,
        title:modules[moduleName]
      }
    }));

  }

  // ===== Modul Saat Ini =====
  function current(){
    return currentModule;
  }

  // ===== Daftar Modul =====
  function list(){
    return {...modules};
  }

  return{
    open,
    current,
    list
  };

})();

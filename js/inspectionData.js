/* ==========================================================
   PT Cahaya Ginda Ganda HSE Dashboard
   inspectionData.js v5.0 (LOCKED)
   Master Data Inspeksi
========================================================== */

const InspectionData={

  /* =========================================
     PERUSAHAAN
  ========================================= */

  contractors:[
    "PT Cahaya Ginda Ganda",
    "PT Vendoura Inti Perkasa",
    "PT Sentosa Laju Sejahtera",
    "Subkontraktor"
  ],

  /* =========================================
     AREA OPERASIONAL
  ========================================= */

  areas:[
    "Pit Jaja",
    "Siumbatu",
    "Workshop",
    "Stockpile",
    "Hauling Road",
    "Office",
    "Mess",
    "Fuel Station",
    "Loading Point",
    "Dumping Point"
  ],

  /* =========================================
     SHIFT
  ========================================= */

  shifts:[
    "Day Shift",
    "Night Shift"
  ],

  /* =========================================
     KATEGORI INSPEKSI
  ========================================= */

  categories:[

    "Housekeeping",

    "Alat Pelindung Diri",

    "Kendaraan Ringan",

    "Jalan Tambang",

    "Rambu Keselamatan",

    "Peralatan Kerja",

    "Lingkungan",

    "Perilaku Aman",

    "Administrasi",

    "Lainnya"

  ],

  /* =========================================
     TINGKAT RISIKO
  ========================================= */

  risks:[

    {
      value:"Low",
      color:"success"
    },

    {
      value:"Medium",
      color:"warning"
    },

    {
      value:"High",
      color:"danger"
    }

  ],

  /* =========================================
     STATUS TEMUAN
  ========================================= */

  status:[

    "Open",

    "Progress",

    "Closed"

  ],

  /* =========================================
     CHECKLIST STANDAR
  ========================================= */

  checklist:[

    {
      id:"APD-01",
      category:"Alat Pelindung Diri",
      item:"Helm keselamatan digunakan dengan benar"
    },

    {
      id:"APD-02",
      category:"Alat Pelindung Diri",
      item:"Sepatu keselamatan digunakan"
    },

    {
      id:"APD-03",
      category:"Alat Pelindung Diri",
      item:"Rompi reflektif digunakan"
    },

    {
      id:"LV-01",
      category:"Kendaraan Ringan",
      item:"Kondisi ban baik"
    },

    {
      id:"LV-02",
      category:"Kendaraan Ringan",
      item:"Lampu kendaraan berfungsi"
    },

    {
      id:"LV-03",
      category:"Kendaraan Ringan",
      item:"Sabuk pengaman digunakan"
    },

    {
      id:"ROAD-01",
      category:"Jalan Tambang",
      item:"Kondisi jalan aman"
    },

    {
      id:"ROAD-02",
      category:"Jalan Tambang",
      item:"Pengendalian debu tersedia"
    },

    {
      id:"ROAD-03",
      category:"Jalan Tambang",
      item:"Rambu jalan terlihat jelas"
    },

    {
      id:"HK-01",
      category:"Housekeeping",
      item:"Area kerja bersih"
    },

    {
      id:"HK-02",
      category:"Housekeeping",
      item:"Material tersusun rapi"
    },

    {
      id:"ENV-01",
      category:"Lingkungan",
      item:"Tidak ada tumpahan oli"
    },

    {
      id:"ENV-02",
      category:"Lingkungan",
      item:"Tempat sampah tersedia"
    }

  ],

  /* =========================================
     DEFAULT FORM
  ========================================= */

  defaultForm(){

    const now=new Date();

    return{

      date:now.toISOString().slice(0,10),

      time:now.toTimeString().slice(0,5),

      inspector:"",

      contractor:"PT Cahaya Ginda Ganda",

      area:"Pit Jaja",

      shift:now.getHours()>=18||now.getHours()<6
        ?"Night Shift"
        :"Day Shift",

      category:"Housekeeping",

      checklist:"",

      risk:"Low",

      finding:"",

      action:"",

      pic:"",

      dueDate:"",

      status:"Open"

    };

  }

};

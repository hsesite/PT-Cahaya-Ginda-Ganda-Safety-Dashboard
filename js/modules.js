/* ==========================================================
   PT. CGG HSE Dashboard
   modules.js v3.0
========================================================== */

const Modules={

  render(name){

    switch(name){

      case "dashboard":

        return "";
          
      case "inspection":

        return InspectionUI.render();

      case "hazard":

        return this.hazard();

      case "incident":

        return this.incident();

      case "environment":

        return this.environment();

      case "medical":

        return this.medical();

      case "sop":

        return this.sop();

      case "kebijakan":

        return this.kebijakan();

      case "area":

        return this.area();

      case "contractor":

        return this.contractor();

      case "admin":

        return this.admin();

      default:

        return this.dashboard();

    }

  },

  card(icon,title,text){

    return `
      <div class="glass module-card">
        <div class="module-icon">
          <i data-lucide="${icon}"></i>
        </div>

        <div class="module-text">

          <h3>${title}</h3>

          <p>${text}</p>

        </div>

      </div>
    `;

  },

  dashboard(){

    return `
      <div class="module-page">

        ${this.card("layout-dashboard","Executive Dashboard","Ringkasan realtime seluruh aktivitas HSE.")}

      </div>
    `;

  },

  inspection(){

    return `
      <div class="module-page">

        ${this.card("clipboard-check","Inspection","Form inspeksi akan ditampilkan di sini.")}

      </div>
    `;

  },

  hazard(){

    return `
      <div class="module-page">

        ${this.card("triangle-alert","Hazard","Pelaporan hazard akan ditampilkan di sini.")}

      </div>
    `;

  },

  incident(){

    return `
      <div class="module-page">

        ${this.card("circle-alert","Incident","Investigasi insiden akan ditampilkan di sini.")}

      </div>
    `;

  },

  environment(){

    return `
      <div class="module-page">

        ${this.card("leaf","Environment","Data lingkungan akan ditampilkan di sini.")}

      </div>
    `;

  },

  medical(){

    return `
      <div class="module-page">

        ${this.card("heart-pulse","Medical","Program kesehatan kerja akan ditampilkan di sini.")}

      </div>
    `;

  },

  sop(){

    return `
      <div class="module-page">

        ${this.card("book-open","SOP","Daftar SOP perusahaan akan muncul di sini.")}

      </div>
    `;

  },

  kebijakan(){

    return `
      <div class="module-page">

        ${this.card("file-text","Kebijakan","Dokumen kebijakan perusahaan akan muncul di sini.")}

      </div>
    `;

  },

  area(){

    return `
      <div class="module-page">

        ${this.card("map","Area Kerja","PIT, Workshop, Stockpile, Jetty, Office, dll.")}

      </div>
    `;

  },

  contractor(){

    return `
      <div class="module-page">

        ${this.card("building","Contractor","VIP, SLS, CHN, BCJ, PAR, ARL.")}

      </div>
    `;

  },

  admin(){

    return `
      <div class="module-page">

        ${this.card("shield-check","Admin Center","Login dan pengaturan sistem.")}

      </div>
    `;

  }

};

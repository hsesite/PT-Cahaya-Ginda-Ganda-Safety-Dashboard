/* ==========================================================
   PT Cahaya Ginda Ganda HSE Dashboard
   modules.js v5.0 (LOCKED)
   Module Registry
========================================================== */

const Modules = {

  render(module){

    switch(module){

      case "inspection":
        return this.inspection();

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
        return this.notFound();

    }

  },

  /* ======================================================
     INSPEKSI
  ====================================================== */

  inspection(){

    return `
    <section class="card module-page">

      <div class="card-head">
        <div>
          <h3>Inspeksi</h3>
          <span>Modul Inspeksi Lapangan</span>
        </div>

        <span class="badge badge-info">Draft</span>
      </div>

      <div class="empty-state">
        <i data-lucide="clipboard-check"></i>
        <p>Workspace Inspeksi akan aktif pada tahap berikutnya.</p>
      </div>

    </section>
    `;

  },

  /* ======================================================
     HAZARD
  ====================================================== */

  hazard(){

    return this.simplePage(
      "Hazard",
      "triangle-alert",
      "Pelaporan Hazard"
    );

  },

  /* ======================================================
     INCIDENT
  ====================================================== */

  incident(){

    return this.simplePage(
      "Incident",
      "circle-alert",
      "Pelaporan Incident"
    );

  },

  /* ======================================================
     ENVIRONMENT
  ====================================================== */

  environment(){

    return this.simplePage(
      "Environment",
      "leaf",
      "Pengelolaan Lingkungan"
    );

  },

  /* ======================================================
     MEDICAL
  ====================================================== */

  medical(){

    return this.simplePage(
      "Medical",
      "heart-pulse",
      "Kesehatan Kerja"
    );

  },

  /* ======================================================
     SOP
  ====================================================== */

  sop(){

    return this.simplePage(
      "SOP",
      "book-open",
      "Dokumen Prosedur Operasional"
    );

  },

  /* ======================================================
     KEBIJAKAN
  ====================================================== */

  kebijakan(){

    return this.simplePage(
      "Kebijakan",
      "file-text",
      "Dokumen Kebijakan Perusahaan"
    );

  },

  /* ======================================================
     AREA
  ====================================================== */

  area(){

    return this.simplePage(
      "Area Operasional",
      "map",
      "Daftar Area Operasional"
    );

  },

  /* ======================================================
     CONTRACTOR
  ====================================================== */

  contractor(){

    return this.simplePage(
      "Kontraktor",
      "building",
      "Ringkasan Kontraktor"
    );

  },

  /* ======================================================
     ADMIN
  ====================================================== */

  admin(){

    return this.simplePage(
      "Admin",
      "shield-check",
      "Pusat Pengaturan Sistem"
    );

  },

  /* ======================================================
     TEMPLATE
  ====================================================== */

  simplePage(title,icon,subtitle){

    return `
    <section class="card module-page">

      <div class="card-head">
        <div>
          <h3>${title}</h3>
          <span>${subtitle}</span>
        </div>
      </div>

      <div class="empty-state">
        <i data-lucide="${icon}"></i>
        <p>Modul ini sedang dipersiapkan.</p>
      </div>

    </section>
    `;

  },

  /* ======================================================
     NOT FOUND
  ====================================================== */

  notFound(){

    return `
    <section class="card module-page">

      <div class="empty-state">
        <i data-lucide="search-x"></i>
        <h3>Halaman tidak ditemukan</h3>
        <p>Modul yang dipilih belum tersedia.</p>
      </div>

    </section>
    `;

  }

};

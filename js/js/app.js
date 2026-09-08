const app = document.getElementById("app");

async function renderHome(){

  app.innerHTML = `
    <div class="loading">
      <h2>Memuat daftar form...</h2>
    </div>
  `;

  try{

    const data = await getForms();

    let html = `
      <div class="home-header">
        <h2>Checklist Inspeksi</h2>
        <p>${data.forms.length} Form Aktif</p>
      </div>
    `;

    if(data.forms.length === 0){

      html += `
        <div class="card">
          Belum ada form yang dipublish.
        </div>
      `;

    }else{

      data.forms.forEach(f=>{

        html += `
          <div class="card form-card">
            <div class="form-id">${f.formId}</div>
            <div class="form-title">${f.title}</div>
            <div class="form-meta">
              Revisi : ${f.revision || "-"}
            </div>

            <button class="open-btn"
              onclick="location.hash='form/${encodeURIComponent(f.formId)}'">
              Buka Form
            </button>
          </div>
        `;

      });

    }

    app.innerHTML = html;

  }catch(err){

    app.innerHTML = `
      <div class="card">
        <h3>Gagal memuat data</h3>
        <p>${err.message}</p>
      </div>
    `;

  }

}

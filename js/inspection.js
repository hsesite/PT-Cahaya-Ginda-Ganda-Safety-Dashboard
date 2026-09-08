/**
 * =====================================================
 * CGG Inspection Viewer v2
 * Universal untuk semua Form CGG
 * =====================================================
 */

const params = new URLSearchParams(window.location.search);
const formId = params.get("id");

if (!formId) {
  document.body.innerHTML = "<h2>Form tidak ditemukan.</h2>";
} else {
  loadForm(decodeURIComponent(formId));
}

async function loadForm(id) {

  try {

    const data = await getForm(id);

    // ===========================
    // Header
    // ===========================

    document.getElementById("judul").textContent = data.title;
    document.getElementById("formid").textContent = data.formId;
    document.getElementById("revisi").textContent = "Revisi : " + (data.revision || "-");
    document.getElementById("total").textContent = "Total Item : " + data.totalItems;

    // ===========================
    // Informasi Unit
    // ===========================

    renderIdentity(data.identity || {});

    // ===========================
    // Checklist
    // ===========================

    renderChecklist(data.items || []);

  } catch (err) {

    console.error(err);

    document.body.innerHTML = `
      <div style="padding:30px;font-family:Arial;color:white;background:#0D1117;height:100vh;">
        <h2>Gagal membuka form</h2>
        <p>${err.message}</p>
      </div>
    `;

  }

}

/* =====================================
   INFORMASI UNIT
===================================== */

function renderIdentity(identity){

  const container = document.getElementById("identity");

  if(!container) return;

  let html = "";

  Object.entries(identity).forEach(([key,value])=>{

    if(Array.isArray(value)){

      html += `
      <div class="info-block">

        <div class="info-title">${key}</div>

        <div class="chip-wrap">

          ${value.map(v=>`<span class="chip">${v}</span>`).join("")}

        </div>

      </div>
      `;

    }else{

      html += `
      <div class="info-row">

        <span>${key}</span>

        <strong>${value || "-"}</strong>

      </div>
      `;

    }

  });

  container.innerHTML = html;

}

/* =====================================
   CHECKLIST
===================================== */

function renderChecklist(items){

  const container = document.getElementById("items");

  container.innerHTML = "";

  items.forEach(item=>{

    const card = document.createElement("div");

    card.className = "item";

    card.innerHTML = `

      <div class="item-header">

        <div class="nomor">${item.nomor}</div>

        <div class="kode">${item.kode || "-"}</div>

      </div>

      <h3>${item.poin}</h3>

      <div class="actions">

        <button class="btn-ya">YA</button>

        <button class="btn-tidak">TIDAK</button>

      </div>

    `;

    const yes = card.querySelector(".btn-ya");
    const no = card.querySelector(".btn-tidak");

    yes.addEventListener("click",()=>{

      yes.classList.add("btn-selected");
      no.classList.remove("btn-selected");

    });

    no.addEventListener("click",()=>{

      no.classList.add("btn-selected");
      yes.classList.remove("btn-selected");

    });

    container.appendChild(card);

  });

}

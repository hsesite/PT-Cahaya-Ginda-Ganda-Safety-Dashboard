/* ==========================================================
   PT Cahaya Ginda Ganda HSE Dashboard
   inspectionUI.js v5.0 (LOCKED)
   Inspection Form Builder
========================================================== */

const InspectionUI = {

  build(){

    const data=InspectionData.defaultForm();

    return `
<section class="card inspection-page">

<div class="card-head">
<div>
<h3>Inspeksi Lapangan</h3>
<span>Form Digital PT Cahaya Ginda Ganda</span>
</div>

<span class="badge badge-success">READY</span>
</div>

<form id="inspectionForm">

<div class="input-group">
<label>Tanggal</label>
<input type="date" name="date" value="${data.date}" required>
</div>

<div class="input-group">
<label>Jam</label>
<input type="time" name="time" value="${data.time}" required>
</div>

<div class="input-group">
<label>Nama Inspektor</label>
<input type="text" name="inspector" placeholder="Masukkan nama inspektor" required>
</div>

<div class="input-group">
<label>Kontraktor</label>
<select name="contractor">
${this.options(InspectionData.contractors,data.contractor)}
</select>
</div>

<div class="input-group">
<label>Area Operasional</label>
<select name="area">
${this.options(InspectionData.areas,data.area)}
</select>
</div>

<div class="input-group">
<label>Shift</label>
<select name="shift">
${this.options(InspectionData.shifts,data.shift)}
</select>
</div>

<div class="input-group">
<label>Kategori Inspeksi</label>
<select name="category" id="inspectionCategory">
${this.options(InspectionData.categories,data.category)}
</select>
</div>

<div class="input-group">
<label>Checklist</label>
<select name="checklist" id="inspectionChecklist">
${this.checklistOptions(data.category)}
</select>
</div>

<div class="input-group">
<label>Tingkat Risiko</label>
<select name="risk">
${InspectionData.risks.map(r=>`
<option value="${r.value}">${r.value}</option>`).join("")}
</select>
</div>

<div class="input-group">
<label>Temuan</label>
<textarea
name="finding"
placeholder="Jelaskan temuan inspeksi..."
required></textarea>
</div>

<div class="input-group">
<label>Tindakan Perbaikan</label>
<textarea
name="action"
placeholder="Tindakan yang harus dilakukan..."></textarea>
</div>

<div class="input-group">
<label>PIC</label>
<input type="text" name="pic" placeholder="Penanggung jawab">
</div>

<div class="input-group">
<label>Target Penyelesaian</label>
<input type="date" name="dueDate">
</div>

<div class="input-group">
<label>Status</label>
<select name="status">
${this.options(InspectionData.status,data.status)}
</select>
</div>

<div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:10px;">

<button type="submit" class="btn btn-primary">
<i data-lucide="send"></i>
Kirim
</button>

<button type="button" class="btn btn-secondary" id="resetInspection">
<i data-lucide="rotate-ccw"></i>
Reset
</button>

</div>

</form>

<div class="divider"></div>

<section class="card">

<div class="card-head">
<div>
<h3>Preview Data</h3>
<span>Pemeriksaan sebelum dikirim</span>
</div>
</div>

<div id="inspectionPreview" class="empty-state">

<i data-lucide="clipboard-check"></i>

<p>Form belum diisi.</p>

</div>

</section>

</section>
`;

  },

  /* =========================================
     OPTION BUILDER
  ========================================= */

  options(list,selected){

    return list.map(item=>`

<option value="${item}" ${item===selected?"selected":""}>

${item}

</option>

`).join("");

  },

  /* =========================================
     CHECKLIST FILTER
  ========================================= */

  checklistOptions(category){

    const items=InspectionData.checklist
      .filter(i=>i.category===category);

    if(items.length===0){

      return `<option value="">Belum ada checklist</option>`;

    }

    return items.map(i=>`

<option value="${i.id}">

${i.id} - ${i.item}

</option>

`).join("");

  },

  /* =========================================
     UPDATE CHECKLIST
  ========================================= */

  bindChecklist(){

    const category=document.getElementById("inspectionCategory");

    const checklist=document.getElementById("inspectionChecklist");

    if(!category || !checklist) return;

    category.addEventListener("change",()=>{

      checklist.innerHTML=this.checklistOptions(category.value);

    });

  },

  /* =========================================
     PREVIEW
  ========================================= */

  updatePreview(form){

    const preview=document.getElementById("inspectionPreview");

    if(!preview) return;

    const data=Object.fromEntries(new FormData(form));

    preview.innerHTML=`

<div class="summary-grid">

<div>
<strong>${data.contractor||"-"}</strong>
<span>Kontraktor</span>
</div>

<div>
<strong>${data.area||"-"}</strong>
<span>Area</span>
</div>

<div>
<strong>${data.risk||"-"}</strong>
<span>Risiko</span>
</div>

</div>

<div class="divider"></div>

<p><strong>Inspektor</strong></p>

<p>${data.inspector||"-"}</p>

<p><strong>Temuan</strong></p>

<p>${data.finding||"-"}</p>

<p><strong>Tindakan</strong></p>

<p>${data.action||"-"}</p>

`;

    lucide.createIcons();

  }

};

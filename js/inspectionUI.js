/* ==========================================================
   inspectionUI.js
========================================================== */

const InspectionUI={

render(){

return `

<div class="inspection-page">

<div class="inspection-left glass-card">

<h3>Inspection Hari Ini</h3>

<p>Belum ada data.</p>

</div>

<div class="inspection-right glass-card">

<h3>Buat Inspection Baru</h3>

<div class="inspection-form">

<div class="field">
<label>Perusahaan</label>
<select id="companySelect" class="cgg-input cgg-select"></select>
</div>

<div class="field">
<label>Kontraktor</label>
<select id="contractorSelect" class="cgg-input cgg-select"></select>
</div>

<div class="field">
<label>Subkon</label>
<select id="subContractorSelect" class="cgg-input cgg-select"></select>
</div>

<div class="field">
<label>Area</label>
<select id="areaSelect" class="cgg-input cgg-select">
<option>Memuat area...</option>
</select>
</div>

<div class="field">
<label>Temuan</label>
<textarea class="cgg-textarea" placeholder="Jelaskan temuan..."></textarea>
</div>

<div class="field">
<label>PICA</label>
<textarea class="cgg-textarea" placeholder="Rencana tindakan..."></textarea>
</div>

<button class="cgg-btn cgg-btn-primary" id="saveInspection">
Simpan Inspection
</button>

</div>

</div>

</div>

`;

}

};

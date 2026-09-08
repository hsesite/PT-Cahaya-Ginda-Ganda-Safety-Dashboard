// parser.js (versi table parser)

const fileInput = document.getElementById("fileInput");
const fileName = document.getElementById("filename");
const compileBtn = document.getElementById("compileBtn");

let selectedFile = null;
let compiledTemplate = null;

fileInput.addEventListener("change", (e) => {
  selectedFile = e.target.files[0];
  fileName.textContent = selectedFile ? selectedFile.name : "Belum ada file dipilih";
});

compileBtn.addEventListener("click", async () => {

  if (!selectedFile) {
    alert("Pilih file DOCX terlebih dahulu.");
    return;
  }

  try {

    renderPreview("Membaca tabel dokumen...");

    const buffer = await selectedFile.arrayBuffer();

    const result = await mammoth.convertToHtml({
      arrayBuffer: buffer
    });

    compiledTemplate = parseCGGTable(result.value, selectedFile.name);

    renderTemplate(compiledTemplate);

  } catch (err) {

    renderPreview("Gagal membaca dokumen.\n\n" + err.message);

  }

});

function parseCGGTable(html, fileName){

  const doc = new DOMParser().parseFromString(html, "text/html");

  const rows = doc.querySelectorAll("tr");

  let formId = "";
  let title = "";
  const items = [];

  doc.body.textContent.split(/\n/).forEach(line => {

    line = line.trim();

    if(!formId && line.includes("Form-HSE-CGG"))
      formId = line;

    if(!title && /^0\./.test(line))
      title = line;

  });

  rows.forEach(row => {

    const cells = [...row.querySelectorAll("td,th")]
      .map(c => c.textContent.trim())
      .filter(Boolean);

    if(cells.length < 2) return;

    const no = parseInt(cells[0]);

    if(Number.isNaN(no)) return;

    let kode = "";

    cells.forEach(c => {

      if(["A","AA","B"].includes(c))
        kode = c;

    });

    items.push({
      no,
      text: cells[1],
      kode
    });

  });

  return {
    formId: formId || fileName,
    title: title || fileName.replace(".docx",""),
    revision: "Rev.1",
    items
  };

}

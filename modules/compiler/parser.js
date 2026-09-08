// parser.js

const fileInput = document.getElementById("fileInput");
const fileName = document.getElementById("filename");
const compileBtn = document.getElementById("compileBtn");

let selectedFile = null;

fileInput.addEventListener("change", (e) => {
  selectedFile = e.target.files[0];

  if (selectedFile) {
    fileName.textContent = selectedFile.name;
  }
});

compileBtn.addEventListener("click", async () => {

  if (!selectedFile) {
    alert("Pilih file DOCX terlebih dahulu.");
    return;
  }

  const ext = selectedFile.name.split(".").pop().toLowerCase();

  if (ext !== "docx") {
    renderPreview("Saat ini Compiler mendukung DOCX terlebih dahulu.\n\nPDF akan kita aktifkan pada tahap berikutnya.");
    return;
  }

  try {

    renderPreview("Membaca dokumen...");

    const arrayBuffer = await selectedFile.arrayBuffer();

    const result = await mammoth.extractRawText({
      arrayBuffer
    });

    renderPreview(result.value);

  } catch (err) {

    renderPreview("Gagal membaca dokumen.\n\n" + err.message);

  }

});

// exporter.js
// CGG Safety Form Compiler v1.0

const publishBtn = document.createElement("button");
publishBtn.textContent = "PUBLIKASIKAN TEMPLATE";
publishBtn.style.marginTop = "15px";

document.querySelector(".box").appendChild(publishBtn);

publishBtn.addEventListener("click", () => {

  if (!compiledTemplate || !compiledTemplate.items.length) {
    alert("Compile form terlebih dahulu.");
    return;
  }

  // Nama file otomatis
  const fileName = (compiledTemplate.formId || "template")
    .replace(/[\\/:*?"<>| ]+/g, "_") + ".json";

  const output = {
    version: 1,
    generated: new Date().toISOString(),
    formId: compiledTemplate.formId,
    title: compiledTemplate.title,
    revision: compiledTemplate.revision,
    totalItems: compiledTemplate.items.length,
    items: compiledTemplate.items
  };

  const blob = new Blob(
    [JSON.stringify(output, null, 2)],
    { type: "application/json" }
  );

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  a.click();

  URL.revokeObjectURL(url);

  alert("Template berhasil dibuat.");
});

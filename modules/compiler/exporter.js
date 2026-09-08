// exporter.js
// CGG Safety Hub v2.0

const publishBtn=document.createElement("button");
publishBtn.textContent="PUBLIKASIKAN FORM";
publishBtn.style.marginTop="15px";

document.querySelector(".box").appendChild(publishBtn);

publishBtn.onclick=function(){

if(!compiledTemplate){

alert("Compile form terlebih dahulu.");
return;

}

const formId=extractFormId(compiledTemplate);

const title=extractTitle(compiledTemplate);

const output={

version:1,
generated:new Date().toISOString(),
formId:formId,
title:title,
revision:"Rev.1",
status:"Aktif",
totalItems:compiledTemplate.items.filter(i=>i.kode!="").length,
items:compiledTemplate.items.filter(i=>i.kode!="")

};

downloadJSON(output);

};

function extractFormId(data){

const text=data.items.map(i=>i.text).join(" ");

const match=text.match(/(\d+\/Form-HSE-CGG\/\d{4})/);

return match?match[1]:"UNKNOWN";

}

function extractTitle(data){

return data.title||"Form Tanpa Judul";

}

function downloadJSON(data){

const name=(data.formId!="UNKNOWN"
?data.formId.replace(/[\/]/g,"_")
:"FORM_BARU")+".json";

const blob=new Blob(

[JSON.stringify(data,null,2)],

{type:"application/json"}

);

const url=URL.createObjectURL(blob);

const a=document.createElement("a");

a.href=url;
a.download=name;
a.click();

URL.revokeObjectURL(url);

alert("Template berhasil dibuat.");

}

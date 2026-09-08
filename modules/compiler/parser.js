// parser.js

const fileInput=document.getElementById("fileInput");
const fileName=document.getElementById("filename");
const compileBtn=document.getElementById("compileBtn");

let selectedFile=null;
let compiledTemplate=null;

fileInput.addEventListener("change",(e)=>{

selectedFile=e.target.files[0];

if(selectedFile){

fileName.textContent=selectedFile.name;

}

});

compileBtn.addEventListener("click",async()=>{

if(!selectedFile){

alert("Pilih file DOCX.");
return;

}

renderPreview("Membaca dokumen...");

const buffer=await selectedFile.arrayBuffer();

const result=await mammoth.extractRawText({arrayBuffer:buffer});

compiledTemplate=parseCGGForm(result.value,selectedFile.name);

renderTemplate(compiledTemplate);

});


function parseCGGForm(text,fileName){

const lines=text
.split(/\r?\n/)
.map(v=>v.trim())
.filter(v=>v!="");

const items=[];

let formId="";
let title="";

for(const line of lines){

if(!formId && line.includes("Form-HSE-CGG")){

formId=line;

}

if(!title && /^0\./.test(line)){

title=line;

}

}

// cari pola nomor + teks

for(let i=0;i<lines.length;i++){

const match=lines[i].match(/^(\d+)\s+(.+)/);

if(match){

const no=parseInt(match[1]);

const textPoin=match[2];

let kode="";

if(lines[i+1] && /^(AA|A|B)$/.test(lines[i+1])){

kode=lines[i+1];

}

items.push({

no:no,
text:textPoin,
kode:kode

});

}

}

return{

formId:formId||fileName,
title:title||fileName.replace(".docx",""),
revision:"Rev.1",
items:items

};

}

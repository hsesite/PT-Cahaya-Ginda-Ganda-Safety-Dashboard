const fileInput=document.getElementById("fileInput");
const fileName=document.getElementById("filename");
const compileBtn=document.getElementById("compileBtn");

let selectedFile=null;
let compiledTemplate=null;

fileInput.addEventListener("change",(e)=>{

selectedFile=e.target.files[0];
fileName.textContent=selectedFile?selectedFile.name:"Belum ada file";

});

compileBtn.addEventListener("click",async()=>{

if(!selectedFile){

alert("Pilih DOCX.");
return;

}

renderPreview("Membaca struktur tabel...");

const buffer=await selectedFile.arrayBuffer();

compiledTemplate=await parseDOCX(buffer,selectedFile.name);

renderTemplate(compiledTemplate);

});

async function parseDOCX(buffer,fileName){

const zip=await JSZip.loadAsync(buffer);

const xml=await zip.file("word/document.xml").async("string");

// Ambil seluruh teks dokumen
const plainText = xml.replace(/<[^>]+>/g," ");

// Cari nomor dokumen resmi
const formIdMatch = plainText.match(/(\d+\/Form-HSE-CGG\/\d{4})/);

const formId = formIdMatch ? formIdMatch[1] : "UNKNOWN";

const doc=new DOMParser().parseFromString(xml,"text/xml");  

const doc=new DOMParser().parseFromString(xml,"text/xml");

const rows=doc.getElementsByTagName("w:tr");

let items=[];

let formId=fileName.replace(".docx","");
let title="";

for(let r of rows){

const cells=[...r.getElementsByTagName("w:tc")].map(c=>{

return [...c.getElementsByTagName("w:t")]
.map(t=>t.textContent)
.join("")
.trim();

}).filter(Boolean);

if(cells.length===0)continue;

if(!title && cells.join(" ").includes("FORM PEMERIKSAAN")){

title=cells.join(" ");

}

const no=parseInt(cells[0]);

if(Number.isNaN(no))continue;

let text=cells[1]||"";

let kode=cells.find(v=>["AA","A","B"].includes(v))||"";

items.push({

no,
text,
kode

});

}

return{
  formId,
  title:title||"Form Tanpa Judul",
  revision:"Rev.1",
  items
};
}

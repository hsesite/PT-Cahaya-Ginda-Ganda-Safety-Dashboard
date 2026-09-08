// renderer.js

const preview=document.getElementById("preview");

function renderPreview(text){

preview.textContent=text;

}

function renderTemplate(data){

let html="";

html+=`FORM : ${data.formId}\n`;
html+=`${data.title}\n\n`;
html+=`TOTAL POIN : ${data.items.length}\n\n`;

data.items.forEach(item=>{

html+=`✓ ${item.no}. ${item.text}`;

if(item.kode){

html+=` (${item.kode})`;

}

html+="\n";

});

preview.textContent=html;

}

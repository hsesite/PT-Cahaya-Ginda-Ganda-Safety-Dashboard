// exporter.js

const saveButton=document.createElement("button");

saveButton.textContent="SIMPAN TEMPLATE";

document.querySelector(".container").appendChild(saveButton);

saveButton.onclick=function(){

if(!compiledTemplate){

alert("Compile form terlebih dahulu.");

return;

}

const blob=new Blob(

[JSON.stringify(compiledTemplate,null,2)],

{type:"application/json"}

);

const a=document.createElement("a");

a.href=URL.createObjectURL(blob);

a.download=compiledTemplate.formId
.replace(/[\/]/g,"_")+".json";

a.click();

};

/* ==========================================================
   inspection.js
========================================================== */

const Inspection={

init(){

this.fillCompany();

this.fillContractor();

this.bindContractor();

},

fillCompany(){

const select=document.getElementById("companySelect");

if(!select) return;

select.innerHTML="";

InspectionData.company.forEach(item=>{

select.innerHTML+=`<option>${item}</option>`;

});

},

fillContractor(){

const select=document.getElementById("contractorSelect");

if(!select) return;

select.innerHTML="";

InspectionData.contractor.forEach(item=>{

select.innerHTML+=`<option>${item}</option>`;

});

this.fillSubContractor("VIP");

},

fillSubContractor(name){

const select=document.getElementById("subContractorSelect");

if(!select) return;

select.innerHTML="";

const list=InspectionData.subContractor[name]||[];

if(list.length===0){

select.innerHTML="<option>-</option>";

return;

}

list.forEach(item=>{

select.innerHTML+=`<option>${item}</option>`;

});

},

bindContractor(){

const contractor=document.getElementById("contractorSelect");

if(!contractor) return;

contractor.addEventListener("change",e=>{

this.fillSubContractor(e.target.value);

});

}

};

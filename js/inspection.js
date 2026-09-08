const params=new URLSearchParams(location.search);
const formId=params.get("id");

if(!formId){

document.body.innerHTML="<h2>Form tidak ditemukan.</h2>";

}else{

loadForm(decodeURIComponent(formId));

}

async function loadForm(id){

const data=await getForm(id);

document.getElementById("judul").textContent=data.title;
document.getElementById("formid").textContent=data.formId;
document.getElementById("revisi").textContent="Revisi : "+data.revision;
document.getElementById("total").textContent="Total Item : "+data.totalItems;

const container=document.getElementById("items");

container.innerHTML="";

data.items.forEach(item=>{

const card=document.createElement("div");

card.className="item";

card.innerHTML=`

<h3>${item.nomor}. ${item.poin}</h3>

<div class="kode">${item.kode||"-"}</div>

<div class="actions">

<button class="btn-ya">YA</button>

<button class="btn-tidak">TIDAK</button>

</div>

`;

const yes=card.querySelector(".btn-ya");
const no=card.querySelector(".btn-tidak");

yes.onclick=()=>{

yes.classList.add("btn-selected");
no.classList.remove("btn-selected");

};

no.onclick=()=>{

no.classList.add("btn-selected");
yes.classList.remove("btn-selected");

};

container.appendChild(card);

});

}

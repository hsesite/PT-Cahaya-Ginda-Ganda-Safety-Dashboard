const API = "https://script.google.com/macros/s/AKfycbz0DS2wr6spCCt2q6qT4zPjUCahOOFSbnC9BiN0AlNWM3JdnYeVwDq6u2Rrfx9bUou2/exec";

async function getForms(){

  const res = await fetch(API + "?action=forms");

  if(!res.ok){
    throw new Error("Gagal mengambil daftar form.");
  }

  return await res.json();

}

async function getForm(id){

  const res = await fetch(API + "?action=form&id=" + encodeURIComponent(id));

  if(!res.ok){
    throw new Error("Gagal membuka form.");
  }

  return await res.json();

}

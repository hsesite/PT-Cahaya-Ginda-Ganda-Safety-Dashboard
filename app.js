
/* =====================================================
   PT CAHAYA GINDA GANDA
   SAFETY DASHBOARD
   Dashboard Engine v1.0
===================================================== */

/*
  Semua data berasal dari objek dashboardData.
  Nanti Sprint 2 kita hanya mengganti fungsi
  loadDashboardData() agar membaca Google Spreadsheet.
*/

const dashboardData={
hazard:0,
nearMiss:0,
ptw:0,
lti:0,
trifr:0.00,
ltifr:0.00,
manhours:0,
closure:0,
hazardTrend:[0,0,0,0,0,0,0],
incidentTrend:{
nearMiss:[0,0,0,0,0,0],
fac:[0,0,0,0,0,0],
mtc:[0,0,0,0,0,0],
lti:[0,0,0,0,0,0]
},
incidentType:[1,1,1,1,1]
};

/* =====================================================
   JAM & TANGGAL
===================================================== */

function updateClock(){

const now=new Date();

const tanggal=document.getElementById("tanggal");
const jam=document.getElementById("jam");

if(tanggal){

tanggal.innerHTML=now.toLocaleDateString("id-ID",{
weekday:"long",
day:"numeric",
month:"long",
year:"numeric"
});

}

if(jam){

jam.innerHTML=now.toLocaleTimeString("id-ID",{
hour:"2-digit",
minute:"2-digit",
second:"2-digit"
});

}

}

setInterval(updateClock,1000);
updateClock();

/* =====================================================
   RENDER KPI
===================================================== */

function renderDashboard(){

const map={
hazard:dashboardData.hazard,
nearmiss:dashboardData.nearMiss,
ptw:dashboardData.ptw,
lti:dashboardData.lti,
trifr:dashboardData.trifr.toFixed(2),
ltifr:dashboardData.ltifr.toFixed(2),
manhours:dashboardData.manhours.toLocaleString("id-ID"),
closure:dashboardData.closure+"%"
};

Object.keys(map).forEach(id=>{
const el=document.getElementById(id);
if(el) el.textContent=map[id];
});

}

/* =====================================================
   CHART CONFIG
===================================================== */

Chart.defaults.color="#D1D5DB";
Chart.defaults.borderColor="rgba(255,255,255,.08)";
Chart.defaults.font.family="Segoe UI";

/* =====================================================
   HAZARD CHART
===================================================== */

const hazardCanvas=document.getElementById("hazardChart");

if(hazardCanvas){

new Chart(hazardCanvas,{

type:"line",

data:{
labels:["Sen","Sel","Rab","Kam","Jum","Sab","Min"],
datasets:[{
label:"Hazard",
data:dashboardData.hazardTrend,
borderColor:"#22C55E",
backgroundColor:"rgba(34,197,94,.15)",
fill:true,
tension:.4,
pointRadius:4
}]
},

options:{
responsive:true,
maintainAspectRatio:false,
plugins:{
legend:{display:false}
},
scales:{
y:{
beginAtZero:true,
ticks:{stepSize:1}
}
}
}

});

}

/* =====================================================
   INCIDENT TREND
===================================================== */

const incidentCanvas=document.getElementById("incidentChart");

if(incidentCanvas){

new Chart(incidentCanvas,{

type:"line",

data:{
labels:["Jan","Feb","Mar","Apr","Mei","Jun"],
datasets:[
{
label:"Near Miss",
data:dashboardData.incidentTrend.nearMiss,
borderColor:"#22C55E",
tension:.35
},
{
label:"FAC",
data:dashboardData.incidentTrend.fac,
borderColor:"#3B82F6",
tension:.35
},
{
label:"MTC",
data:dashboardData.incidentTrend.mtc,
borderColor:"#FACC15",
tension:.35
},
{
label:"LTI",
data:dashboardData.incidentTrend.lti,
borderColor:"#EF4444",
tension:.35
}
]
},

options:{
responsive:true,
maintainAspectRatio:false,
scales:{
y:{
beginAtZero:true,
ticks:{stepSize:1}
}
}
}

});

}

/* =====================================================
   DONUT
===================================================== */

const donutCanvas=document.getElementById("donutChart");

if(donutCanvas){

new Chart(donutCanvas,{

type:"doughnut",

data:{
labels:[
"Near Miss",
"FAC",
"MTC",
"LTI",
"Property Damage"
],
datasets:[{
data:dashboardData.incidentType,
backgroundColor:[
"#22C55E",
"#3B82F6",
"#FACC15",
"#EF4444",
"#8B5CF6"
],
borderWidth:0
}]
},

options:{
responsive:true,
maintainAspectRatio:false,
plugins:{
legend:{display:false}
},
cutout:"72%"
}

});

}

/* =====================================================
   EMPTY STATE
===================================================== */

function hideEmptyStateWhenDataExists(){

const total=
dashboardData.hazard+
dashboardData.nearMiss+
dashboardData.ptw+
dashboardData.lti;

if(total>0){

document.querySelectorAll(".empty").forEach(el=>{
el.style.display="none";
});

}

}

/* =====================================================
   LOAD DATA
===================================================== */

async function loadDashboardData(){

// Sprint 2:
// fetch dari Google Apps Script

renderDashboard();
hideEmptyStateWhenDataExists();

}

/* =====================================================
   RIPPLE EFFECT
===================================================== */

document.querySelectorAll(".service,.kpi-card,.metric").forEach(card=>{

card.addEventListener("click",()=>{

card.style.transform="scale(.97)";

setTimeout(()=>{
card.style.transform="";
},120);

});

});

/* =====================================================
   EMERGENCY BUTTON (placeholder)
===================================================== */

const emergency=document.querySelector(".emergency");

if(emergency){

emergency.addEventListener("click",()=>{

alert("Menu Emergency akan dihubungkan pada Sprint berikutnya.");

});

}

/* =====================================================
   INIT
===================================================== */

loadDashboardData();

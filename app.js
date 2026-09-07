
const dashboardData={
hazard:0,
nearMiss:0,
ptw:0,
lti:0,
trifr:0,
ltifr:0,
manhours:0,
closure:0,
hazardTrend:[0,0,0,0,0,0,0],
incidentTrend:[0,0,0,0,0,0],
donut:[1,1,1,1,1]
};

/* Jam */

function updateClock(){

const now=new Date();

document.getElementById("tanggal").textContent=
now.toLocaleDateString("id-ID",{
weekday:"long",
day:"numeric",
month:"long",
year:"numeric"
});

document.getElementById("jam").textContent=
now.toLocaleTimeString("id-ID");

}

setInterval(updateClock,1000);
updateClock();

/* KPI */

function render(){

document.getElementById("hazard").textContent=dashboardData.hazard;
document.getElementById("nearmiss").textContent=dashboardData.nearMiss;
document.getElementById("ptw").textContent=dashboardData.ptw;
document.getElementById("lti").textContent=dashboardData.lti;
document.getElementById("trifr").textContent=dashboardData.trifr.toFixed(2);
document.getElementById("ltifr").textContent=dashboardData.ltifr.toFixed(2);
document.getElementById("manhours").textContent=dashboardData.manhours.toLocaleString("id-ID");
document.getElementById("closure").textContent=dashboardData.closure+"%";

}

render();

/* Chart */

Chart.defaults.color="#d1d5db";
Chart.defaults.borderColor="rgba(255,255,255,.08)";

new Chart(document.getElementById("hazardChart"),{

type:"line",

data:{
labels:["Sen","Sel","Rab","Kam","Jum","Sab","Min"],
datasets:[{
data:dashboardData.hazardTrend,
borderColor:"#22c55e",
backgroundColor:"rgba(34,197,94,.15)",
fill:true,
tension:.35
}]
},

options:{
responsive:true,
maintainAspectRatio:false,
plugins:{legend:{display:false}},
scales:{y:{beginAtZero:true}}
}

});

new Chart(document.getElementById("incidentChart"),{

type:"line",

data:{
labels:["Jan","Feb","Mar","Apr","Mei","Jun"],
datasets:[{
label:"Insiden",
data:dashboardData.incidentTrend,
borderColor:"#3b82f6",
tension:.35
}]
},

options:{
responsive:true,
maintainAspectRatio:false,
plugins:{legend:{display:false}},
scales:{y:{beginAtZero:true}}
}

});

new Chart(document.getElementById("donutChart"),{

type:"doughnut",

data:{
labels:["Near Miss","FAC","MTC","LTI","Property Damage"],
datasets:[{
data:dashboardData.donut,
backgroundColor:["#22c55e","#3b82f6","#facc15","#ef4444","#8b5cf6"],
borderWidth:0
}]
},

options:{
responsive:true,
maintainAspectRatio:false,
plugins:{legend:{display:false}},
cutout:"72%"
}

});

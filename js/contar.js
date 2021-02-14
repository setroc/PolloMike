
//comida
const polloInput = document.querySelector("#pollo");
const costillaInput = document.querySelector("#costilla");
//complementos
const sopaInput = document.querySelector("#sopa");
const rusaInput = document.querySelector("#rusa");
const arrozInput = document.querySelector("#arroz");
const verdeInput = document.querySelector("#verde");
const pureInput = document.querySelector("#pure");
const francesaInput = document.querySelector("#francesa");
const rejaInput = document.querySelector("#reja");
const papasBolsaInput = document.querySelector("#papasbolsa");
const espaguetiInput = document.querySelector("#espagueti");
const frijolesInput = document.querySelector("#frijoles");
const nuggetsInput = document.querySelector("#nuggets");
//postres
const fresasInput = document.querySelector("#fresas");
const manzanasInput = document.querySelector("#manzanas");
const arrozLecheInput = document.querySelector("#arrozleche");
const zarzamorasInput = document.querySelector("#zarzamoras");

const boton = document.querySelector(".regresar");
boton.addEventListener('click',(e)=>{
    e.preventDefault();
    location.href = "index.html";
})

let pedidos = JSON.parse(localStorage.getItem("pedidos")) || null;
document.addEventListener('DOMContentLoaded',cargarHTML());

function cargarHTML() {
    let totalPollo=0,totalCostilla=0,totalSopa=0,totalRusa=0,totalArroz=0,totalVerde=0,totalPure=0,
        totalFrancesa=0,totalReja=0,totalPapasBolsa=0,totalEspagueti=0,totalFrijoles=0,totalNuggets=0,
        totalFresas=0,totalManzanas=0,totalArrozLeche=0,totalZarzamoras=0;

    if(pedidos!== null && pedidos.length>0){
            
        pedidos.forEach(pedido => {
            const {pollo,saborPollo,costilla,saborCostilla,sopa,rusa,arroz,verde,pure,francesa,reja,papasBolsa,espagueti,
                frijoles,nuggets,fresas,manzanas,arrozLeche,zarzamoras,nombre,hora} = pedido;
            if(parseFloat(pollo,10)>=0) totalPollo += parseFloat(pollo,10);
            if(parseFloat(costilla,10)>=0) totalCostilla += parseFloat(costilla,10);
            if(parseFloat(sopa,10)>=0) totalSopa += parseFloat(sopa,10);
            if(parseFloat(rusa,10)>=0) totalRusa += parseFloat(rusa,10);
            if(parseFloat(arroz,10)>=0) totalArroz += parseFloat(arroz,10);
            if(parseFloat(verde,10)>=0) totalVerde += parseFloat(verde,10);
            if(parseFloat(pure,10)>=0) totalPure += parseFloat(pure,10);
            if(parseFloat(francesa,10)>=0) totalFrancesa += parseFloat(francesa,10);
            if(parseFloat(reja,10)>=0) totalReja += parseFloat(reja,10);
            if(parseFloat(papasBolsa,10)>=0) totalPapasBolsa += parseFloat(papasBolsa,10);
            if(parseFloat(espagueti,10)>=0) totalEspagueti += parseFloat(espagueti,10);
            if(parseFloat(frijoles,10)>=0) totalFrijoles += parseFloat(frijoles,10);
            if(parseFloat(nuggets,10)>=0) totalNuggets += parseFloat(nuggets,10);
            if(parseFloat(fresas,10)>=0) totalFresas += parseFloat(fresas,10);
            if(parseFloat(manzanas,10)>=0) totalManzanas += parseFloat(manzanas,10);
            if(parseFloat(arrozLeche,10)>=0) totalArrozLeche += parseFloat(arrozLeche,10);
            if(parseFloat(zarzamoras,10)>=0) totalZarzamoras += parseFloat(zarzamoras,10);
        });
    }

    polloInput.value = totalPollo;
    costillaInput.value = totalCostilla;
    sopaInput.value = totalSopa;
    rusaInput.value = totalRusa;
    arrozInput.value = totalArroz;
    verdeInput.value = totalVerde;
    pureInput.value = totalPure;
    francesaInput.value = totalFrancesa;
    rejaInput.value = totalReja;
    papasBolsaInput.value = totalPapasBolsa;
    espaguetiInput.value = totalEspagueti;
    frijolesInput.value = totalFrijoles;
    nuggetsInput.value = totalNuggets;
    fresasInput.value = totalFresas;
    manzanasInput.value = totalManzanas;
    arrozLecheInput.value = totalArrozLeche;
    zarzamorasInput.value = totalZarzamoras;

}
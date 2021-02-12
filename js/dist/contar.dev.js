"use strict";

//comida
var polloInput = document.querySelector("#pollo");
var costillaInput = document.querySelector("#costilla"); //complementos

var sopaInput = document.querySelector("#sopa");
var rusaInput = document.querySelector("#rusa");
var arrozInput = document.querySelector("#arroz");
var verdeInput = document.querySelector("#verde");
var pureInput = document.querySelector("#pure");
var francesaInput = document.querySelector("#francesa");
var rejaInput = document.querySelector("#reja");
var papasBolsaInput = document.querySelector("#papasbolsa");
var espaguetiInput = document.querySelector("#espagueti");
var frijolesInput = document.querySelector("#frijoles");
var nuggetsInput = document.querySelector("#nuggets"); //postres

var fresasInput = document.querySelector("#fresas");
var manzanasInput = document.querySelector("#manzanas");
var arrozLecheInput = document.querySelector("#arrozleche");
var zarzamorasInput = document.querySelector("#zarzamoras");
var pedidos = JSON.parse(localStorage.getItem("pedidos")) || null;
document.addEventListener('DOMContentLoaded', cargarHTML());

function cargarHTML() {
  var totalPollo = 0,
      totalCostilla = 0,
      totalSopa = 0,
      totalRusa = 0,
      totalArroz = 0,
      totalVerde = 0,
      totalPure = 0,
      totalFrancesa = 0,
      totalReja = 0,
      totalPapasBolsa = 0,
      totalEspagueti = 0,
      totalFrijoles = 0,
      totalNuggets = 0,
      totalFresas = 0,
      totalManzanas = 0,
      totalArrozLeche = 0,
      totalZarzamoras = 0;

  if (pedidos !== null && pedidos.length > 0) {
    pedidos.forEach(function (pedido) {
      var pollo = pedido.pollo,
          saborPollo = pedido.saborPollo,
          costilla = pedido.costilla,
          saborCostilla = pedido.saborCostilla,
          sopa = pedido.sopa,
          rusa = pedido.rusa,
          arroz = pedido.arroz,
          verde = pedido.verde,
          pure = pedido.pure,
          francesa = pedido.francesa,
          reja = pedido.reja,
          papasBolsa = pedido.papasBolsa,
          espagueti = pedido.espagueti,
          frijoles = pedido.frijoles,
          nuggets = pedido.nuggets,
          fresas = pedido.fresas,
          manzanas = pedido.manzanas,
          arrozLeche = pedido.arrozLeche,
          zarzamoras = pedido.zarzamoras,
          nombre = pedido.nombre,
          hora = pedido.hora;
      if (parseInt(pollo, 10) >= 0) totalPollo += parseInt(pollo, 10);
      if (parseInt(costilla, 10) >= 0) totalCostilla += parseInt(costilla, 10);
      if (parseInt(sopa, 10) >= 0) totalSopa += parseInt(sopa, 10);
      if (parseInt(rusa, 10) >= 0) totalRusa += parseInt(rusa, 10);
      if (parseInt(arroz, 10) >= 0) totalArroz += parseInt(arroz, 10);
      if (parseInt(verde, 10) >= 0) totalVerde += parseInt(verde, 10);
      if (parseInt(pure, 10) >= 0) totalPure += parseInt(pure, 10);
      if (parseInt(francesa, 10) >= 0) totalFrancesa += parseInt(francesa, 10);
      if (parseInt(reja, 10) >= 0) totalReja += parseInt(reja, 10);
      if (parseInt(papasBolsa, 10) >= 0) totalPapasBolsa += parseInt(papasBolsa, 10);
      if (parseInt(espagueti, 10) >= 0) totalEspagueti += parseInt(espagueti, 10);
      if (parseInt(frijoles, 10) >= 0) totalFrijoles += parseInt(frijoles, 10);
      if (parseInt(nuggets, 10) >= 0) totalNuggets += parseInt(nuggets, 10);
      if (parseInt(fresas, 10) >= 0) totalFresas += parseInt(fresas, 10);
      if (parseInt(manzanas, 10) >= 0) totalManzanas += parseInt(manzanas, 10);
      if (parseInt(arrozLeche, 10) >= 0) totalArrozLeche += parseInt(arrozLeche, 10);
      if (parseInt(zarzamoras, 10) >= 0) totalZarzamoras += parseInt(zarzamoras, 10);
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
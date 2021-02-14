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
var boton = document.querySelector(".regresar");
boton.addEventListener('click', function (e) {
  e.preventDefault();
  location.href = "index.html";
});
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
      if (parseFloat(pollo, 10) >= 0) totalPollo += parseFloat(pollo, 10);
      if (parseFloat(costilla, 10) >= 0) totalCostilla += parseFloat(costilla, 10);
      if (parseFloat(sopa, 10) >= 0) totalSopa += parseFloat(sopa, 10);
      if (parseFloat(rusa, 10) >= 0) totalRusa += parseFloat(rusa, 10);
      if (parseFloat(arroz, 10) >= 0) totalArroz += parseFloat(arroz, 10);
      if (parseFloat(verde, 10) >= 0) totalVerde += parseFloat(verde, 10);
      if (parseFloat(pure, 10) >= 0) totalPure += parseFloat(pure, 10);
      if (parseFloat(francesa, 10) >= 0) totalFrancesa += parseFloat(francesa, 10);
      if (parseFloat(reja, 10) >= 0) totalReja += parseFloat(reja, 10);
      if (parseFloat(papasBolsa, 10) >= 0) totalPapasBolsa += parseFloat(papasBolsa, 10);
      if (parseFloat(espagueti, 10) >= 0) totalEspagueti += parseFloat(espagueti, 10);
      if (parseFloat(frijoles, 10) >= 0) totalFrijoles += parseFloat(frijoles, 10);
      if (parseFloat(nuggets, 10) >= 0) totalNuggets += parseFloat(nuggets, 10);
      if (parseFloat(fresas, 10) >= 0) totalFresas += parseFloat(fresas, 10);
      if (parseFloat(manzanas, 10) >= 0) totalManzanas += parseFloat(manzanas, 10);
      if (parseFloat(arrozLeche, 10) >= 0) totalArrozLeche += parseFloat(arrozLeche, 10);
      if (parseFloat(zarzamoras, 10) >= 0) totalZarzamoras += parseFloat(zarzamoras, 10);
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
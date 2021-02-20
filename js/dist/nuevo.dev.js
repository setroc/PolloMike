"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
var zarzamorasInput = document.querySelector("#zarzamoras"); //datos del cliente

var nombreInput = document.querySelector("#nombre");
var horaInput = document.querySelector("#hora"); // contenedores cantidad para añadir funcionalidad a los botones add y sub

var contenedoresCantidad = document.querySelectorAll(".cantidad"); //contenedor para los pedidos

var contenedorPedidos = document.querySelector("#contenedor_pedidos"); // Formulario nuevo pedido

var formulario = document.querySelector('#nuevoPedido'); //variable para los pedidos

var pedidos = []; // Eventos

eventListeners();

function eventListeners() {
  formulario.addEventListener('submit', agregarPedido); // Cargar los pedidos del local storage, en caso de que no existan, entonces empieza el arreglo vacio

  document.addEventListener('DOMContentLoaded', function () {
    pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
    console.log(pedidos);
  });

  var _loop = function _loop(i) {
    if (i < 2) {
      contenedoresCantidad[i].children[0].addEventListener('click', function (e) {
        e.preventDefault();
        var input = contenedoresCantidad[i].children[1];

        if (parseFloat(input.value) > 0) {
          input.value = parseFloat(input.value) - 0.5;
        }
      });
      contenedoresCantidad[i].children[2].addEventListener('click', function (e) {
        e.preventDefault();
        var input = contenedoresCantidad[i].children[1];
        input.value = parseFloat(input.value) + 0.5;
      });
    } else {
      contenedoresCantidad[i].children[0].addEventListener('click', function (e) {
        e.preventDefault();
        var input = contenedoresCantidad[i].children[1];

        if (parseFloat(input.value) > 0) {
          input.value = parseInt(input.value) - 1;
        }
      });
      contenedoresCantidad[i].children[2].addEventListener('click', function (e) {
        e.preventDefault();
        var input = contenedoresCantidad[i].children[1];
        input.value = parseInt(input.value) + 1;
      });
    }
  };

  for (var i = 0; i < contenedoresCantidad.length; i++) {
    _loop(i);
  }
}

function agregarPedido(e) {
  e.preventDefault();
  var pedidoObj = {
    pollo: '',
    saborPollo: '',
    costilla: '',
    saborCostilla: '',
    sopa: '',
    rusa: '',
    arroz: '',
    verde: '',
    pure: '',
    francesa: '',
    reja: '',
    papasBolsa: '',
    espagueti: '',
    frijoles: '',
    nuggets: '',
    fresas: '',
    manzanas: '',
    arrozLeche: '',
    zarzamoras: '',
    nombre: '',
    hora: ''
  };

  if (polloInput.value) {
    pedidoObj.pollo = polloInput.value;
  }

  if (costillaInput.value) {
    pedidoObj.costilla = costillaInput.value;
  }

  if (sopaInput.value) {
    pedidoObj.sopa = sopaInput.value;
  }

  if (rusaInput.value) {
    pedidoObj.rusa = rusaInput.value;
  }

  if (arrozInput.value) {
    pedidoObj.arroz = arrozInput.value;
  }

  if (verdeInput.value) {
    pedidoObj.verde = verdeInput.value;
  }

  if (pureInput.value) {
    pedidoObj.pure = pureInput.value;
  }

  if (francesaInput.value) {
    pedidoObj.francesa = francesaInput.value;
  }

  if (rejaInput.value) {
    pedidoObj.reja = rejaInput.value;
  }

  if (papasBolsaInput.value) {
    pedidoObj.papasBolsa = papasBolsaInput.value;
  }

  if (espaguetiInput.value) {
    pedidoObj.espagueti = espaguetiInput.value;
  }

  if (frijolesInput.value) {
    pedidoObj.frijoles = frijolesInput.value;
  }

  if (nuggetsInput.value) {
    pedidoObj.nuggets = nuggetsInput.value;
  }

  if (fresasInput.value) {
    pedidoObj.fresas = fresasInput.value;
  }

  if (manzanasInput.value) {
    pedidoObj.manzanas = manzanasInput.value;
  }

  if (arrozLecheInput.value) {
    pedidoObj.arrozLeche = arrozLecheInput.value;
  }

  if (zarzamorasInput.value) {
    pedidoObj.zarzamoras = zarzamorasInput.value;
  }

  pedidoObj.nombre = nombreInput.value;
  pedidoObj.hora = horaInput.value;
  var saborP = "";

  if (document.querySelector("#naturalP").checked) {
    saborP += "natural ";
  }

  if (document.querySelector("#bbqP").checked) {
    saborP += "bbq ";
  }

  if (document.querySelector("#tamarindoP").checked) {
    saborP += "tamarindo ";
  }

  if (document.querySelector("#adoboP").checked) {
    saborP += "adobo ";
  }

  if (document.querySelector("#chipotleP").checked) {
    saborP += "chipotle ";
  }

  var saborC = "";

  if (document.querySelector("#naturalC").checked) {
    saborC += "natural ";
  }

  if (document.querySelector("#bbqC").checked) {
    saborC += "bbq ";
  }

  if (document.querySelector("#tamarindoC").checked) {
    saborC += "tamarindo ";
  }

  if (document.querySelector("#adoboC").checked) {
    saborC += "adobo ";
  }

  if (document.querySelector("#chipotleC").checked) {
    saborC += "chipotle ";
  }

  pedidoObj.saborPollo = saborP;
  pedidoObj.saborCostilla = saborC;
  pedidoObj.id = Date.now(); //añadiendo pedido a los pedidos

  pedidos = [].concat(_toConsumableArray(pedidos), [pedidoObj]);
  console.log(pedidos); //atualizar localStorage

  sinconizarStorage(); //limpiar formulario

  formulario.reset(); //redireccionar al index

  location.href = "./index.html";
}

function sinconizarStorage() {
  localStorage.setItem('pedidos', JSON.stringify(pedidos)); // localStorage.setItem('totalApartados', JSON.stringify(totalApartados));
}
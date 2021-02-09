"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//variables para el contador
var pollo = 0,
    costilla = 0,
    sopa = 0,
    rusa = 0,
    arroz = 0,
    verde = 0,
    pure = 0,
    francesa = 0,
    reja = 0,
    papasBolsa = 0;
var espagueti = 0,
    frijoles = 0,
    fresas = 0,
    manzanas = 0,
    arrozLeche = 0,
    zarzamoras = 0; //comida

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
var espaquetiInput = document.querySelector("#espagueti");
var frijolesInput = document.querySelector("#frijoles"); //postres

var fresasInput = document.querySelector("#fresas");
var manzanasInput = document.querySelector("#manzanas");
var arrozLecheInput = document.querySelector("#arrozleche");
var zarzamorasInput = document.querySelector("#zarzamoras"); //datos del cliente

var nombreInput = document.querySelector("#nombre");
var horaInput = document.querySelector("#hora"); //contenedor para los pedidos

var contenedorPedidos = document.querySelector("#contenedor_pedidos"); // Formulario nuevo pedido

var formulario = document.querySelector('#nuevoPedido');
formulario.addEventListener('submit', nuevoPedido);
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
  fresas: '',
  manzanas: '',
  arrozLeche: '',
  zarzamoras: '',
  nombre: '',
  hora: ''
}; // Eventos

eventListeners();

function eventListeners() {
  polloInput.addEventListener('change', datosPedido);
  costillaInput.addEventListener('change', datosPedido);
  sopaInput.addEventListener('change', datosPedido);
  rusaInput.addEventListener('change', datosPedido);
  arrozInput.addEventListener('change', datosPedido);
  verdeInput.addEventListener('change', datosPedido);
  pureInput.addEventListener('change', datosPedido);
  francesaInput.addEventListener('change', datosPedido);
  rejaInput.addEventListener('change', datosPedido);
  papasBolsaInput.addEventListener('change', datosPedido);
  espaquetiInput.addEventListener('change', datosPedido);
  frijolesInput.addEventListener('change', datosPedido);
  fresasInput.addEventListener('change', datosPedido);
  manzanasInput.addEventListener('change', datosPedido);
  arrozLecheInput.addEventListener('change', datosPedido);
  zarzamorasInput.addEventListener('change', datosPedido);
  nombreInput.addEventListener('change', datosPedido);
  horaInput.addEventListener('change', datosPedido);
  prueba.addEventListener('onclick', function (e) {
    console.log(prueba);
  });
}

function datosPedido(e) {
  // console.log(e.target.name) // Obtener el Input
  // console.log(e.target.value)
  if (e.target.name === 'pollo') pollo++;
  if (e.target.name === 'costilla') costilla++;
  if (e.target.name === 'sopa') sopa++;
  if (e.target.name === 'rusa') rusa++;
  if (e.target.name === 'arroz') arroz++;
  if (e.target.name === 'verde') verde++;
  if (e.target.name === 'pure') pure++;
  if (e.target.name === 'francesa') francesa++;
  if (e.target.name === 'reja') reja++;
  if (e.target.name === 'papasBolsa') papasBolsa++;
  if (e.target.name === 'espagueti') espagueti++;
  if (e.target.name === 'frijoles') frijoles++;
  if (e.target.name === 'fresas') fresas++;
  if (e.target.name === 'manzanas') manzanas++;
  if (e.target.name === 'arrozLeche') arrozLeche++;
  if (e.target.name === 'zarzamoras') zarzamoras++;
  pedidoObj[e.target.name] = e.target.value;
} // // CLasses
// class Pedidos {
//     constructor() {
//         this.pedidos = []
//     }
//     agregarPedido(pedido) {
//         this.pedidos = [...this.pedidos, pedido];
//     }
//     editarPedido(pedidoActualizado) {
//         this.pedidos = this.pedidos.map( pedido => pedido.id === pedidoActualizada.id ? pedidoActualizada : pedido)
//     }
//     eliminarPedido(id) {
//         this.pedidos = this.pedidos.filter( pedido => pedido.id !== id);
//     }
// }
// class UI {
//     impimirPedidos({pedidos}) {
//     }
//     limpiarHTML(){
//     }
// }


var ui = new UI();
ui.limpiarHTML();
var administrarPedidos = new Pedidos();

function nuevoPedido(e) {
  e.preventDefault();
  var pollo = pedidoObj.pollo,
      saborPollo = pedidoObj.saborPollo,
      costilla = pedidoObj.costilla,
      saborCostilla = pedidoObj.saborCostilla,
      sopa = pedidoObj.sopa,
      rusa = pedidoObj.rusa,
      arroz = pedidoObj.arroz,
      verde = pedidoObj.verde,
      pure = pedidoObj.pure,
      francesa = pedidoObj.francesa,
      reja = pedidoObj.reja,
      papasBolsa = pedidoObj.papasBolsa,
      espagueti = pedidoObj.espagueti,
      frijoles = pedidoObj.frijoles,
      fresas = pedidoObj.fresas,
      manzanas = pedidoObj.manzanas,
      arrozLeche = pedidoObj.arrozLeche,
      zarzamoras = pedidoObj.zarzamoras,
      nombre = pedidoObj.nombre,
      hora = pedidoObj.hora;
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

  if (document.querySelector("#chipotleC").checked) {
    saborC += "chipotle ";
  }

  pedidoObj.saborPollo = saborP;
  pedidoObj.saborCostilla = saborC;
  pedidoObj.id = Date.now();
  administrarPedidos.agregarPedido(_objectSpread({}, pedidoObj));
  console.log(pedidoObj);
  ui.limpiarHTML();
}
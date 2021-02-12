"use strict";

var listaPedidos = document.querySelector("#contenedor_pedidos");
var buscar = document.querySelector("#buscar");
var boton = document.querySelector("#boton");
var pedidos = JSON.parse(localStorage.getItem("pedidos")) || null;
eventListeners();

function eventListeners() {
  document.addEventListener('DOMContentLoaded', cargarHTML(pedidos, 0));
  listaPedidos.addEventListener('click', borrarPedido);
  buscar.addEventListener('keyup', filtrar);
}

function filtrar() {
  // console.log(buscar.value);
  var pedidosAux = [];
  var texto = buscar.value.toLowerCase();

  if (pedidos !== null) {
    pedidos.forEach(function (pedido) {
      var nombre = pedido.nombre.toLowerCase();

      if (nombre.indexOf(texto) !== -1) {
        pedidosAux.push(pedido);
      }
    });
    cargarHTML(pedidosAux, 1);
  } else {
    cargarHTML(null, 1);
  }
} // opc 1 indica que el arreglo de pedidos viene desde buscar


function cargarHTML(pedidos, opc) {
  limpiarHTML();

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
      var textoPedido = '';

      if (pollo.length > 0) {
        textoPedido += "".concat(pollo, " Pollo ").concat(saborPollo, ", ");
      }

      if (costilla.length > 0) {
        textoPedido += "".concat(costilla, " Costilla ").concat(saborCostilla, ", ");
      }

      if (sopa.length > 0) {
        textoPedido += "".concat(sopa, " Sopa, ");
      }

      if (rusa.length > 0) {
        textoPedido += "".concat(rusa, " Rusa, ");
      }

      if (arroz.length > 0) {
        textoPedido += "".concat(arroz, " Arroz, ");
      }

      if (verde.length > 0) {
        textoPedido += "".concat(verde, " Verde, ");
      }

      if (pure.length > 0) {
        textoPedido += "".concat(pure, " Pure, ");
      }

      if (francesa.length > 0) {
        textoPedido += "".concat(francesa, " Francesa, ");
      }

      if (reja.length > 0) {
        textoPedido += "".concat(reja, " Reja, ");
      }

      if (papasBolsa.length > 0) {
        textoPedido += "".concat(papasBolsa, " Chips, ");
      }

      if (espagueti.length > 0) {
        textoPedido += "".concat(espagueti, " Espaqueti, ");
      }

      if (frijoles.length > 0) {
        textoPedido += "".concat(frijoles, " Frijoles, ");
      }

      if (nuggets.length > 0) {
        textoPedido += "".concat(frijoles, " Nuggets, ");
      }

      if (fresas.length > 0) {
        textoPedido += "".concat(fresas, " Fresas, ");
      }

      if (manzanas.length > 0) {
        textoPedido += "".concat(manzanas, " Manzanas, ");
      }

      if (arrozLeche.length > 0) {
        textoPedido += "".concat(arrozLeche, " Arroz con leche, ");
      }

      if (zarzamoras.length > 0) {
        textoPedido += "".concat(zarzamoras, " Zarzamoras, ");
      }

      var campoHora = document.createElement('li');
      campoHora.innerText = "".concat(hora);
      var campoNombre = document.createElement('li');
      campoNombre.innerText = "".concat(nombre);
      var campoPedido = document.createElement('li');
      campoPedido.innerText = textoPedido;
      var botonBorrar = document.createElement('li');
      botonBorrar.dataset.pedidoId = pedido.id;
      var tache = document.createElement('a');
      tache.classList = 'borrar-pedido';
      tache.innerText = 'X';
      botonBorrar.appendChild(tache);
      var ulPedido = document.createElement('ul');
      ulPedido.appendChild(campoHora);
      ulPedido.appendChild(campoNombre);
      ulPedido.appendChild(campoPedido);
      ulPedido.appendChild(botonBorrar);
      var divPedido = document.createElement('div');
      divPedido.classList = 'pedido';
      divPedido.appendChild(ulPedido);
      listaPedidos.appendChild(divPedido);
    });
  } else if (opc === 1) {
    listaPedidos.innerHTML = "<p> Pedido no encontrado <p>";
  }

  sinconizarStorage();
}

function borrarPedido(e) {
  e.preventDefault();
  var id = e.target.parentElement.dataset.pedidoId;
  pedidos = pedidos.filter(function (pedido) {
    return pedido.id != id;
  });
  cargarHTML(pedidos);
}

function limpiarHTML() {
  while (listaPedidos.firstChild) {
    listaPedidos.removeChild(listaPedidos.firstChild);
  }
}

function sinconizarStorage() {
  localStorage.setItem('pedidos', JSON.stringify(pedidos));
}
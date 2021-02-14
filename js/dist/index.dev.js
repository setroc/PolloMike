"use strict";

// const borrados = document.querySelector("#borrados");
var listaPedidos = document.querySelector("#contenedor_pedidos");
var listaPedidosBorrados = document.querySelector("#contenedor_pedidos_borrados");
var buscar = document.querySelector("#buscar");
var boton = document.querySelector("#boton");
var pedidos = JSON.parse(localStorage.getItem("pedidos")) || null;
var pedidosBorrados = JSON.parse(localStorage.getItem("pedidosBorrados")) || [];
eventListeners();

function eventListeners() {
  document.addEventListener('DOMContentLoaded', cargarHTML);
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
    cargarHTMLPedidos(pedidosAux, 1);
  } else {
    cargarHTMLPedidos(null, 1);
  }
}

function cargarHTML() {
  cargarHTMLPedidos(pedidos, 0);
  mostrarBorrados();
} // opc 1 indica que el arreglo de pedidos viene desde buscar


function cargarHTMLPedidos(pedidos, opc) {
  limpiarHTMLPedidos();

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

function cargarHTMLPedidosBorrados(pedidosBorrados) {
  limpiarHTMLPedidosBorrados();

  if (pedidosBorrados !== null && pedidosBorrados.length > 0) {
    pedidosBorrados.forEach(function (pedidoBorrado) {
      var pollo = pedidoBorrado.pollo,
          saborPollo = pedidoBorrado.saborPollo,
          costilla = pedidoBorrado.costilla,
          saborCostilla = pedidoBorrado.saborCostilla,
          sopa = pedidoBorrado.sopa,
          rusa = pedidoBorrado.rusa,
          arroz = pedidoBorrado.arroz,
          verde = pedidoBorrado.verde,
          pure = pedidoBorrado.pure,
          francesa = pedidoBorrado.francesa,
          reja = pedidoBorrado.reja,
          papasBolsa = pedidoBorrado.papasBolsa,
          espagueti = pedidoBorrado.espagueti,
          frijoles = pedidoBorrado.frijoles,
          nuggets = pedidoBorrado.nuggets,
          fresas = pedidoBorrado.fresas,
          manzanas = pedidoBorrado.manzanas,
          arrozLeche = pedidoBorrado.arrozLeche,
          zarzamoras = pedidoBorrado.zarzamoras,
          nombre = pedidoBorrado.nombre,
          hora = pedidoBorrado.hora;
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
      campoHora.classList = 'tachado';
      var campoNombre = document.createElement('li');
      campoNombre.innerText = "".concat(nombre);
      campoNombre.classList = 'tachado';
      var campoPedido = document.createElement('li');
      campoPedido.innerText = textoPedido;
      campoPedido.classList = 'tachado';
      var ulPedido = document.createElement('ul');
      ulPedido.appendChild(campoHora);
      ulPedido.appendChild(campoNombre);
      ulPedido.appendChild(campoPedido);
      var divPedido = document.createElement('div');
      divPedido.classList = 'pedido';
      divPedido.appendChild(ulPedido);
      listaPedidosBorrados.appendChild(divPedido);
    });
  }

  sinconizarStorage();
}

function mostrarBorrados() {
  if (pedidosBorrados.length > 0) {
    cargarHTMLPedidosBorrados(pedidosBorrados);
    borrados.style.display = "block";
  }
}

function borrarPedido(e) {
  e.preventDefault();
  var id = e.target.parentElement.dataset.pedidoId;
  var pedidoBorrado = pedidos.find(function (pedido) {
    return pedido.id == id;
  });
  pedidos = pedidos.filter(function (pedido) {
    return pedido.id != id;
  });
  cargarHTMLPedidos(pedidos);
  pedidosBorrados.push(pedidoBorrado);
  mostrarBorrados();
}

function limpiarHTMLPedidos() {
  while (listaPedidos.firstChild) {
    listaPedidos.removeChild(listaPedidos.firstChild);
  }
}

function limpiarHTMLPedidosBorrados() {
  while (listaPedidosBorrados.firstChild) {
    listaPedidosBorrados.removeChild(listaPedidosBorrados.firstChild);
  }
}

function sinconizarStorage() {
  localStorage.setItem('pedidos', JSON.stringify(pedidos));
  localStorage.setItem('pedidosBorrados', JSON.stringify(pedidosBorrados));
}
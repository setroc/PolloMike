// const borrados = document.querySelector("#borrados");
const listaPedidos = document.querySelector("#contenedor_pedidos");
const listaPedidosBorrados = document.querySelector("#contenedor_pedidos_borrados");
const buscar = document.querySelector("#buscar");
const boton = document.querySelector("#boton");

let pedidos = JSON.parse(localStorage.getItem("pedidos")) || null;
let pedidosBorrados = JSON.parse(localStorage.getItem("pedidosBorrados")) || [];

eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded',cargarHTML);
    listaPedidos.addEventListener('click',borrarPedido);
    buscar.addEventListener('keyup',filtrar);
}


function filtrar() {
    // console.log(buscar.value);
    let pedidosAux = [];
    const texto = buscar.value.toLowerCase();
    if(pedidos!==null){
        pedidos.forEach(pedido=>{
            let nombre = pedido.nombre.toLowerCase();
            if(nombre.indexOf(texto) !== -1){
                pedidosAux.push(pedido);
            }
        });
        cargarHTMLPedidos(pedidosAux,1)
    }else {
        cargarHTMLPedidos(null,1)
    }
}

function cargarHTML() {
    cargarHTMLPedidos(pedidos,0);
    mostrarBorrados();
}

// opc 1 indica que el arreglo de pedidos viene desde buscar
function cargarHTMLPedidos(pedidos,opc) {
    limpiarHTMLPedidos();
    if(pedidos!==null && pedidos.length>0){
        pedidos.forEach(pedido => {

            const {pollo,saborPollo,costilla,saborCostilla,sopa,rusa,arroz,verde,pure,francesa,reja,papasBolsa,espagueti,
                frijoles,nuggets,fresas,manzanas,arrozLeche,zarzamoras,nombre,hora} = pedido;
            
            let textoPedido = '';
            if(pollo>0){
                textoPedido += `${pollo} Pollo ${saborPollo}, `;
            }
            if(costilla>0){
                textoPedido += `${costilla} Costilla ${saborCostilla}, `;
            }
            if(sopa>0){
                textoPedido += `${sopa} Sopa, `;

            }
            if(rusa>0){
                textoPedido += `${rusa} Rusa, `;
            }
            if(arroz>0){
                textoPedido += `${arroz} Arroz, `;
            }
            if(verde>0){
                textoPedido += `${verde} Verde, `;
            }
            if(pure>0){
                textoPedido += `${pure} Pure, `;
            }
            if(francesa>0){
                textoPedido += `${francesa} Francesa, `;
            }
            if(reja>0){
                textoPedido += `${reja} Reja, `;
            }
            if(papasBolsa>0){
                textoPedido += `${papasBolsa} Chips, `;
            }
            if(espagueti>0){
                textoPedido += `${espagueti} Espaqueti, `;
            }
            if(frijoles>0){
                textoPedido += `${frijoles} Frijoles, `;
            }
            if(nuggets>0){
                textoPedido += `${frijoles} Nuggets, `;
            }
            if(fresas>0){
                textoPedido += `${fresas} Fresas, `;
            }
            if(manzanas>0){
                textoPedido += `${manzanas} Manzanas, `;
            }
            if(arrozLeche>0){
                textoPedido += `${arrozLeche} Arroz con leche, `;
            }
            if(zarzamoras>0){
                textoPedido += `${zarzamoras} Zarzamoras, `;
            }
            
            const campoHora = document.createElement('li');
            campoHora.innerText = `${hora}`;

            const campoNombre = document.createElement('li');
            campoNombre.innerText = `${nombre}`;

            const campoPedido = document.createElement('li');
            campoPedido.innerText = textoPedido;

            const botonBorrar = document.createElement('li');
            botonBorrar.dataset.pedidoId = pedido.id;

            const tache = document.createElement('a');
            tache.classList = 'borrar-pedido';
            tache.innerText = 'X';

            botonBorrar.appendChild(tache);

            const ulPedido = document.createElement('ul');
            ulPedido.appendChild(campoHora);
            ulPedido.appendChild(campoNombre);
            ulPedido.appendChild(campoPedido);
            ulPedido.appendChild(botonBorrar);

            const divPedido = document.createElement('div');
            divPedido.classList = 'pedido';
            divPedido.appendChild(ulPedido);

            listaPedidos.appendChild(divPedido);

        });
    }else if(opc===1) {
        listaPedidos.innerHTML = `<p> Pedido no encontrado <p>`;
    }
    sinconizarStorage();
}
function cargarHTMLPedidosBorrados(pedidosBorrados) {
    limpiarHTMLPedidosBorrados();
    if(pedidosBorrados!==null && pedidosBorrados.length>0){
        pedidosBorrados.forEach(pedidoBorrado => {
            const {pollo,saborPollo,costilla,saborCostilla,sopa,rusa,arroz,verde,pure,francesa,reja,papasBolsa,espagueti,
                frijoles,nuggets,fresas,manzanas,arrozLeche,zarzamoras,nombre,hora} = pedidoBorrado;
            
            let textoPedido = '';
            if(pollo>0){
                textoPedido += `${pollo} Pollo ${saborPollo}, `;
            }
            if(costilla>0){
                textoPedido += `${costilla} Costilla ${saborCostilla}, `;
            }
            if(sopa>0){
                textoPedido += `${sopa} Sopa, `;

            }
            if(rusa>0){
                textoPedido += `${rusa} Rusa, `;
            }
            if(arroz>0){
                textoPedido += `${arroz} Arroz, `;
            }
            if(verde>0){
                textoPedido += `${verde} Verde, `;
            }
            if(pure>0){
                textoPedido += `${pure} Pure, `;
            }
            if(francesa>0){
                textoPedido += `${francesa} Francesa, `;
            }
            if(reja>0){
                textoPedido += `${reja} Reja, `;
            }
            if(papasBolsa>0){
                textoPedido += `${papasBolsa} Chips, `;
            }
            if(espagueti>0){
                textoPedido += `${espagueti} Espaqueti, `;
            }
            if(frijoles>0){
                textoPedido += `${frijoles} Frijoles, `;
            }
            if(nuggets>0){
                textoPedido += `${frijoles} Nuggets, `;
            }
            if(fresas>0){
                textoPedido += `${fresas} Fresas, `;
            }
            if(manzanas>0){
                textoPedido += `${manzanas} Manzanas, `;
            }
            if(arrozLeche>0){
                textoPedido += `${arrozLeche} Arroz con leche, `;
            }
            if(zarzamoras>0){
                textoPedido += `${zarzamoras} Zarzamoras, `;
            }
            
            const campoHora = document.createElement('li');
            campoHora.innerText = `${hora}`;
            campoHora.classList = 'tachado';

            const campoNombre = document.createElement('li');
            campoNombre.innerText = `${nombre}`;
            campoNombre.classList = 'tachado';

            const campoPedido = document.createElement('li');
            campoPedido.innerText = textoPedido;
            campoPedido.classList = 'tachado';

            const ulPedido = document.createElement('ul');
            ulPedido.appendChild(campoHora);
            ulPedido.appendChild(campoNombre);
            ulPedido.appendChild(campoPedido);

            const divPedido = document.createElement('div');
            divPedido.classList = 'pedido';
            divPedido.appendChild(ulPedido);

            listaPedidosBorrados.appendChild(divPedido);
        });
    }
    sinconizarStorage();
}
function mostrarBorrados() {
    if(pedidosBorrados.length>0){
        cargarHTMLPedidosBorrados(pedidosBorrados);
        borrados.style.display = "block";
    }
}

function borrarPedido(e){
    e.preventDefault();

    const id = e.target.parentElement.dataset.pedidoId;
    const pedidoBorrado = pedidos.find(pedido=> pedido.id == id);
    pedidos = pedidos.filter(pedido => pedido.id != id);
    cargarHTMLPedidos(pedidos);
    pedidosBorrados.push(pedidoBorrado);
    mostrarBorrados();
}
function limpiarHTMLPedidos() {
    while(listaPedidos.firstChild){
        listaPedidos.removeChild(listaPedidos.firstChild);
    }
}
function limpiarHTMLPedidosBorrados() {
    while(listaPedidosBorrados.firstChild){
        listaPedidosBorrados.removeChild(listaPedidosBorrados.firstChild);
    }
}
function sinconizarStorage() {
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
    localStorage.setItem('pedidosBorrados', JSON.stringify(pedidosBorrados));
}
const listaPedidos = document.querySelector("#contenedor_pedidos");

let pedidos = JSON.parse(localStorage.getItem("pedidos")) || null;



eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded',cargarHTML);
    listaPedidos.addEventListener('click',borrarPedido);

}

function cargarHTML() {
    limpiarHTML();
    if(pedidos !== null){
        pedidos.forEach(pedido => {

            const {pollo,saborPollo,costilla,saborCostilla,sopa,rusa,arroz,verde,pure,francesa,reja,papasBolsa,espagueti,
                frijoles,nuggets,fresas,manzanas,arrozLeche,zarzamoras,nombre,hora} = pedido;
            
            let textoPedido = '';
            if(pollo.length>0){
                textoPedido += `${pollo} Pollo ${saborPollo}, `;
            }
            if(costilla.length>0){
                textoPedido += `${costilla} Costilla ${saborCostilla}, `;
            }
            if(sopa.length>0){
                textoPedido += `${sopa} Sopa, `;

            }
            if(rusa.length>0){
                textoPedido += `${rusa} Rusa, `;
            }
            if(arroz.length>0){
                textoPedido += `${arroz} Arroz, `;
            }
            if(verde.length>0){
                textoPedido += `${verde} Verde, `;
            }
            if(pure.length>0){
                textoPedido += `${pure} Pure, `;
            }
            if(francesa.length>0){
                textoPedido += `${francesa} Francesa, `;
            }
            if(reja.length>0){
                textoPedido += `${reja} Reja, `;
            }
            if(papasBolsa.length>0){
                textoPedido += `${papasBolsa} Chips, `;
            }
            if(espagueti.length>0){
                textoPedido += `${espagueti} Espaqueti, `;
            }
            if(frijoles.length>0){
                textoPedido += `${frijoles} Frijoles, `;
            }
            if(nuggets.length>0){
                textoPedido += `${frijoles} Nuggets, `;
            }
            if(fresas.length>0){
                textoPedido += `${fresas} Fresas, `;
            }
            if(manzanas.length>0){
                textoPedido += `${manzanas} Manzanas, `;
            }
            if(arrozLeche.length>0){
                textoPedido += `${arrozLeche} Arroz con leche, `;
            }
            if(zarzamoras.length>0){
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
    }
    sinconizarStorage();
}
function borrarPedido(e){
    e.preventDefault();

    const id = e.target.parentElement.dataset.pedidoId;
    pedidos = pedidos.filter(pedido => pedido.id != id);
    cargarHTML();
}
function limpiarHTML() {
    while(listaPedidos.firstChild){
        listaPedidos.removeChild(listaPedidos.firstChild);
    }
}
function sinconizarStorage() {
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
}
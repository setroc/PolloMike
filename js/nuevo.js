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
//datos del cliente
const nombreInput = document.querySelector("#nombre");
const horaInput = document.querySelector("#hora");

//contenedor para los pedidos
const contenedorPedidos = document.querySelector("#contenedor_pedidos");


// Formulario nuevo pedido
const formulario = document.querySelector('#nuevoPedido')

//variable para los pedidos
let pedidos = [];

// Eventos
eventListeners();
function eventListeners() {
    
    formulario.addEventListener('submit', agregarPedido);
    // Cargar los pedidos del local storage, en caso de que no existan, entonces empieza el arreglo vacio
    document.addEventListener('DOMContentLoaded', () => {
        pedidos = JSON.parse( localStorage.getItem('pedidos') ) || []  ;
        console.log(pedidos);
    });
    
}




function agregarPedido(e){
    e.preventDefault();
    
    const pedidoObj = {
        pollo : '',
        saborPollo : '',
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
        hora: '',
    }
    if(polloInput.value){
        pedidoObj.pollo = polloInput.value;
    }
    if(costillaInput.value){
        pedidoObj.costilla = costillaInput.value;
    }
    if(sopaInput.value){
        pedidoObj.sopa = sopaInput.value;
    }
    if(rusaInput.value){
        pedidoObj.rusa = rusaInput.value;
    }
    if(arrozInput.value){
        pedidoObj.arroz = arrozInput.value;
    }
    if(verdeInput.value){
        pedidoObj.verde = verdeInput.value;
    }
    if(pureInput.value){
        pedidoObj.pure = pureInput.value;
    }
    if(francesaInput.value){
        pedidoObj.francesa = francesaInput.value;
    }
    if(rejaInput.value){
        pedidoObj.reja = rejaInput.value;
    }
    if(papasBolsaInput.value){
        pedidoObj.papasBolsa = papasBolsaInput.value;
    }
    if(espaguetiInput.value){
        pedidoObj.espagueti = espaguetiInput.value;
    }
    if(frijolesInput.value){
        pedidoObj.frijoles = frijolesInput.value;
    }
    if(nuggetsInput.value){
        pedidoObj.nuggets = nuggetsInput.value;
    }
    if(fresasInput.value){
        pedidoObj.fresas = fresasInput.value;
    }
    if(manzanasInput.value){
        pedidoObj.manzanas = manzanasInput.value;
    }
    if(arrozLecheInput.value){
        pedidoObj.arrozLeche = arrozLecheInput.value;
    }
    if(zarzamorasInput.value){
        pedidoObj.zarzamoras = zarzamorasInput.value;
    }
    
    pedidoObj.nombre = nombreInput.value;
    pedidoObj.hora = horaInput.value;

    let saborP = "";
    if(document.querySelector("#naturalP").checked){
        saborP += "natural ";
    }
    if(document.querySelector("#bbqP").checked){
        saborP += "bbq ";
    }
    if(document.querySelector("#tamarindoP").checked){
        saborP += "tamarindo ";
    }
    if(document.querySelector("#chipotleP").checked){
        saborP += "chipotle ";
    }

    let saborC = "";
    if(document.querySelector("#naturalC").checked){
        saborC += "natural ";
    }
    if(document.querySelector("#bbqC").checked){
        saborC += "bbq ";
    }
    if(document.querySelector("#tamarindoC").checked){
        saborC += "tamarindo ";
    }
    if(document.querySelector("#chipotleC").checked){
        saborC += "chipotle ";
    }
    pedidoObj.saborPollo = saborP;
    pedidoObj.saborCostilla = saborC;
    pedidoObj.id = Date.now();

    //añadiendo pedido a los pedidos
    pedidos = [...pedidos, pedidoObj];

    console.log(pedidos);

    //atualizar localStorage
    sinconizarStorage();
    //limpiar formulario
    formulario.reset();
    //redireccionar al index
    location.href = "./index.html";
}

function sinconizarStorage() {
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
    // localStorage.setItem('totalApartados', JSON.stringify(totalApartados));
}

//1.
let imprimirMensaje = (mensaje) => {
    console.log(mensaje);
}
//2.

let crearMultiplicacion = (numero1, numero2) => resultado = numero1 * numero2; 

console.log(crearMultiplicacion(400,10));
//3.
const array = [1,2,3,4,5,6,7,8,9].map(crearMultiplicacion)
//4 


const encontrarCervezasMasAlcoholicas = (beers) => {
    return beers
        .filter(cerveza => cerveza.abv >= 10)
        .map((beer) => beer.name)
        .sort((a, b) => a-b);
}


const cervezasAlcoholicas = encontrarCervezasMasAlcoholicas(beer)

console.log(cervezasAlcoholicas);

//5.

const encontrarCervezasMenosAmargas = (beers) => {
    return beers
    .filter(cerveza => cerveza.ibu <= 10)
    .map((beer)=> beer.name)
}

const cervezasMenosAmargass = encontrarCervezasMenosAmargas(beer)

console.log(cervezasMenosAmargass);

//6.

const cervezaRandom = beer[1];

for (const cerveza of beer) {
    const cervezaRandom = beer[1];
    console.log(cervezaRandom);
    break
}

//7.

// const valorIngresado = prompt(`Ingrese el numero de amargor que desea en un cerveza`)

// function devolverCerveza(beers){

//     const devolverCervezaEncontrada = beer.find(beer => beer.ibu == valorIngresado)

//     if(devolverCervezaEncontrada){
//         console.log(`Cerveza encontrada: ${devolverCervezaEncontrada.name}`);
//     }else{
//         console.log(`No existe cerveza con ese ibu`);
//     }
// }

// devolverCerveza(beer)

//8.

for (let index = 0; index < beer.length; index++) {
    const encontrarCerveza = beer[21];
    console.log(encontrarCerveza);
    break
}

//9.
let cervezaX = "Berliner Weisse With Yuzu - B-Sides";
let ibuX = 8; 

function encontrarCervezaPorNombreYIBU(beer, nombre, ibu) {
    const cervezaEncontrada = beer.find(cerveza => cerveza.name === nombre && cerveza.ibu === ibu);

    return cervezaEncontrada;
}

const cervezaSeleccionada = encontrarCervezaPorNombreYIBU(beer, cervezaX, ibuX);

if (cervezaSeleccionada) {
    console.log("Cerveza encontrada:", cervezaSeleccionada);
} else {
    console.log("No se encontró una cerveza con los criterios especificados.");
}

//10.

function obtenerListaDeCervezas(beer, cantidad) {
    const listaCervezas = [];

    for (let index = 0; index < cantidad; index++) {
        listaCervezas.push(beer[index]);
    }

    return listaCervezas;
}



const listaDe10Cervezas = obtenerListaDeCervezas(beer, 10);
console.log("Lista de 10 cervezas:", listaDe10Cervezas);

//11.

const tablaCerveza = document.getElementById("table");
const tbody = tablaCerveza.querySelector("tbody");

beer.forEach(cerveza => {
    const fila = tbody.insertRow();
    const celdaNombre = fila.insertCell(0);
    const celdaIBU = fila.insertCell(1);
    const celdaABV = fila.insertCell(2);
  
    celdaNombre.textContent = cerveza.name;
    celdaIBU.textContent = cerveza.ibu;
    celdaABV.textContent = cerveza.abv;
  });



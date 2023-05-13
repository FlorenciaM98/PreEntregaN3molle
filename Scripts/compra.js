//Crea el html para el carrito de compras
let carritoHTML = document.getElementById("carrito");
carritoHTML.innerHTML = "<p>Tu carrito</p><div></div>";
document.querySelector("#tiendaFanPage_Fila header #navbar_Extended-Left").append(carritoHTML);

let carritoInner = document.querySelector("#tiendaFanPage_Fila header #navbar_Extended-Left #carrito div");
carritoInner.className = "carrito-contenido";
carritoInner.innerHTML = "<ul></ul>";

let carritoList = document.querySelector("#tiendaFanPage_Fila header #navbar_Extended-Left #carrito .carrito-contenido ul");

/* Al clickear en los botones + de cada procducto se añaden al carrito.
Luego, al ir hasta la barra superior, al apretar el boton de la tarjeta de credito se suman 
todos los productos seleccionados + su iva y luego se muestra el total por consola y por alert. */

// Clase que crea mis productos cuando los sumo
class Producto {
  constructor(codigo, nombre, id, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.id = id;
    this.precio = parseFloat(precio);
  }
}

// Array y funcion que agrega los productos seleccionados a dicho array y tambien al html creado para el carrito
// ademas suma el iva al precio
const productos = [];
function addToCart(codigo, nombre, id, precio) {
  productos.push(new Producto(codigo, nombre, id, precio));
  let producto = productos[productos.length-1];
  let carritoListLi = document.createElement("li");
  carritoListLi.innerHTML = `<b> ${producto.nombre} </b> 
                             <p> ${producto.precio} / ${productos[productos.length - 1].precio *= 1.21}</p>`;
  document.querySelector(".carrito-contenido ul").append(carritoListLi);
}

// Una salida por consola para verificar el proceso
console.log(productos);


// Funcion que recorre el array de productos para sumar uno a uno en una variable
// llamada total. Finalmente una salida por alert para el usuario y una por consola para el
// programador.
function comprar(productos) {
  let total = 0;
  for (let i = 0; i < productos.length; i++) {
    total = total + productos[i].precio;
    console.log(productos[i].precio);
  }
  console.log(total);
  alert(total);
}

//Funcion que vacia el array y tambien el html del carrito
function vaciarCarro(productos) {
  while (productos.length != 0) {
    productos.pop();
  }
  carritoList.innerHTML = " ";
  console.log(productos);
}

// Los botones de cada item en la tienda
let botonCompra = document.getElementById("botonCompra");
let botonVaciarCarro = document.getElementById("botonVaciarCarro");
let boton1 = document.getElementById("ateezFeverEpilogue");
let boton2 = document.getElementById("ateezSpinOffFtW");
let boton3 = document.getElementById("ateezTreasureEp3Wave");
let boton4 = document.getElementById("ateezTreasureEpilogue");
let boton5 = document.getElementById("ateezBlackCatNero");
let boton6 = document.getElementById("ateezFeverZeroP1");
let boton7 = document.getElementById("ateezTreasureVol1");
let boton8 = document.getElementById("ateezTreasureMapToAnswerSanv");

botonCompra.onclick = () => { comprar(productos) };
botonVaciarCarro.onclick = () => { vaciarCarro(productos); };
boton1.onclick = () => { addToCart("ateezFeverEpilogue", "Ateez Fever Epilogue", 1, 15000) };
boton2.onclick = () => { addToCart("ateezSpinOffFtW", "Ateez Spin of from the Witness", 2, 10000) };
boton3.onclick = () => { addToCart("ateezTreasureEp3Wave", "Ateez treasure ep3 wave ver", 3, 30000) };
boton4.onclick = () => { addToCart("ateezTreasureEpilogue", "Ateez treasure epilogue", 4, 5000) };
boton5.onclick = () => { addToCart("ateezBlackCatNero", "Ateez black cat nero lim. ed.", 5, 14000) };
boton6.onclick = () => { addToCart("ateezFeverZeroP1", "Ateez fever zero: part 1", 6, 18200) };
boton7.onclick = () => { addToCart("ateezTreasureVol1", "Ateez treasure vol. 1 all to action", 7, 3000) };
boton8.onclick = () => { addToCart("ateezTreasureMapToAnswerSanv", 'Ateez treasure map to answer San ver.', 8, 10500) };

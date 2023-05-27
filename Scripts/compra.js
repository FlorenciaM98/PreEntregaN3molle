// Array de productos
let productos = [];

//Funcion para buscar mi array en el local storage
function inicio(productosViejos) {
  if (localStorage.getItem("carroCompras")) {
    productosViejos = JSON.parse(localStorage.getItem("carroCompras"));
    productos = productosViejos;
  } else {  
      productos = []
    }

  // Muestra lo que esta guardado en local storage de la sesion anterior
  console.log(localStorage.getItem("carroCompras"));
  console.log(JSON.parse(localStorage.getItem("carroCompras")));  

  // Añade a mi DOM lo que estaba en el local storage de la sesion anterior
  for (const producto of productos) {
    let carritoListLi = document.createElement("li");
    carritoListLi.innerHTML = `<b> ${producto.nombre} </b> 
                             <p> ${producto.precio} / ${(producto.precio *= 1.21)}</p>`;
    document.querySelector(".carrito-contenido ul").append(carritoListLi);
  }

  return productos;
}

// Actualiza los datos en el local storage cuando se agrega un producto al carro, cuando se vacia el carro
// y cuando se compran los productos
function actualizarCarro(productos) {
  localStorage.setItem("carroCompras", JSON.stringify(productos));
}

//Crea el html para el carrito de compras
let carritoHTML = document.getElementById("carrito"); 
carritoHTML.innerHTML = "<p>Tu carrito</p><div></div>";
document.querySelector("#tiendaFanPage_Fila header #navbar_Extended-Left").append(carritoHTML);
let carritoInner = document.querySelector("#tiendaFanPage_Fila header #navbar_Extended-Left #carrito div");
carritoInner.className = "carrito-contenido";
carritoInner.innerHTML = "<ul></ul>";

let carritoList = document.querySelector("#tiendaFanPage_Fila header #navbar_Extended-Left #carrito .carrito-contenido ul");

// Clase que crea mis productos
class Producto {
  constructor(codigo, nombre, id, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.id = id;
    this.precio = parseFloat(precio);
  }
}

// Funcion que agrega los productos seleccionados a mi array y tambien al html creado para el carrito
// ademas suma el iva al precio
function addToCart(codigo, nombre, id, precio) {
  productos.push(new Producto(codigo, nombre, id, precio));
  let producto = productos[productos.length - 1];
  let carritoListLi = document.createElement("li");
  carritoListLi.innerHTML = `<b> ${producto.nombre} </b> 
                             <p> ${producto.precio} / ${(productos[productos.length - 1].precio *= 1.21)}</p>`;
  document.querySelector(".carrito-contenido ul").append(carritoListLi);
  actualizarCarro(productos);
}

// Una salida por consola para verificar el proceso
console.log(productos);

//Funcion que vacia el array y tambien el html del carrito
function vaciarCarro(productos) {
  while (productos.length != 0) {
    productos.pop();
  }
  carritoList.innerHTML = " ";
  console.log(productos);

  //Actualiza mi local storage
  actualizarCarro(productos);
}

// Funcion que recorre el array de productos para sumar uno a uno en una variable llamada total.
//Finalmente una salida por alert para el usuario y una por consola para el programador.
function comprar(productos) {
  let total = 0;
  for (let i = 0; i < productos.length; i++) {
    total = total + productos[i].precio;
    console.log(productos[i].precio);
  }
  console.log(total);
  alert(total);
  
  //Vacia mi carro de compras una vez la compra está realizada
  vaciarCarro(productos);
 
  //Actualiza mi local storage
  actualizarCarro(productos);
}

//Funcion para ver u ocultar el carro

function visibilidadCarro() {
  var element = document.getElementById("carrito");
  element.classList.toggle("ocultaCarro");
}

// Los botones de cada item en la tienda
let botonCompra = document.getElementById("botonCompra");
let botonVaciarCarro = document.getElementById("botonVaciarCarro");
let botonVerCarro = document.getElementById("botonVerCarro");
let boton1 = document.getElementById("ateezFeverEpilogue");
let boton2 = document.getElementById("ateezSpinOffFtW");
let boton3 = document.getElementById("ateezTreasureEp3Wave");
let boton4 = document.getElementById("ateezTreasureEpilogue");
let boton5 = document.getElementById("ateezBlackCatNero");
let boton6 = document.getElementById("ateezFeverZeroP1");
let boton7 = document.getElementById("ateezTreasureVol1");
let boton8 = document.getElementById("ateezTreasureMapToAnswerSanv");

//Los eventos para ejecutar la funcion de agregarlos al carrito
botonCompra.onclick = () => { comprar(productos);};
botonVaciarCarro.onclick = () => { vaciarCarro(productos); };
botonVerCarro.onclick = () => { visibilidadCarro(); };
boton1.onclick = () => { addToCart("ateezFeverEpilogue", "Ateez Fever Epilogue", 1, 15000);};
boton2.onclick = () => { addToCart("ateezSpinOffFtW", "Ateez Spin of from the Witness", 2, 10000);};
boton3.onclick = () => { addToCart("ateezTreasureEp3Wave", "Ateez treasure ep3 wave ver", 3, 30000);};
boton4.onclick = () => { addToCart("ateezTreasureEpilogue", "Ateez treasure epilogue", 4, 5000);};
boton5.onclick = () => { addToCart("ateezBlackCatNero", "Ateez black cat nero lim. ed.", 5, 14000);};
boton6.onclick = () => { addToCart("ateezFeverZeroP1", "Ateez fever zero: part 1", 6, 18200);};
boton7.onclick = () => { addToCart("ateezTreasureVol1", "Ateez treasure vol. 1 all to action", 7, 3000);};
boton8.onclick = () => { addToCart("ateezTreasureMapToAnswerSanv", "Ateez treasure map to answer San ver.", 8, 10500);};




//me quedan las dos ultimas clases
//error de que se duplican los precios al recargar la pagina
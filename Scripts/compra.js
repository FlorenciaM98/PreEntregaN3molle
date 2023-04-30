//script para elegir un numero de producto pero que tiene un error ya que al poner exit muestra el texto de "ingresaste numero incorrecto"
/* function compra() {
    let nombre = prompt("Buen día, por favor ingresa tu nombre a continuación");
    let eleccion = prompt(nombre + " por favor, ingresa el numero de producto del 1 al 9");
    if (eleccion > 9 || eleccion <= 0) {
        alert("Ingresaste un número incorrecto");
    } else {
        do {
          alert("El producto número " + eleccion + " fue agregado al carrito.");
          eleccion = prompt(nombre + " por favor, ingrese otro numero o escriba Exit para finalizar.");
          if (eleccion == "Exit") {
            alert("Se agregaron todos los productos al carrito.");
            break;
          }
        } while (eleccion <= 9 && eleccion > 0 && eleccion != null);
         alert("Ingresaste un número incorrecto");
    }
} */

/* function compra() {
  const nombre = prompt("Buen día, por favor ingresa tu nombre a continuación");
  let eleccion = prompt(
    nombre + " por favor, ingresa el numero de producto del 1 al 9"
  );
  alert("El producto número " + eleccion + " fue agregado al carrito.");
  flag = true;
  if (eleccion <= 9 && eleccion > 0 && eleccion != null) {
    while (flag) {
      eleccion = prompt(
        nombre +
          " por favor, ingrese otro numero o escriba Exit para finalizar."
      );
      if (eleccion <= 9 && eleccion > 0 && eleccion != null) {
        alert("El producto número " + eleccion + " fue agregado al carrito.");
      } else if (eleccion == "Exit") {
        flag = false;
        alert("Se agregaron todos los productos al carrito.");
      } else {
        flag = false;
        alert("Ingresaste un número incorrecto");
      }
    }
  } else {
    alert("Ingresaste un número incorrecto");
  }
} */

/* Al clickear en los botones + de cada procducto se añaden al carrito.
Luego, al ir hasta la barra superior, al apretar el boton de la tarjeta de credito se suman 
todos los productos seleccionados + su iva y luego se muestra el total por consola y por alert. */

 class Producto {
    constructor(codigo, nombre, id, precio) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.id = id;
      this.precio = parseFloat(precio);
    }

    sumaIva() {
      this.precio = this.precio * 1.21;
   }
}

const productos = []
function addToCart(codigo, nombre, id, precio) {
  productos.push(new Producto(codigo, nombre, id, precio));
}

console.log(productos);

function comprar(productos) {
  let total = 0;
  for (const producto of productos) producto.sumaIva();
  for (let i = 0; i < productos.length; i++) {
    total = total + productos[i].precio;
    console.log(productos[i].precio);
  }
  console.log(total);
  alert(total);
}
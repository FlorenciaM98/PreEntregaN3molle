function compra() {
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
}

//script para elegir un numero de producto

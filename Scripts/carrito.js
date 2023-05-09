let carritoHTML = document.getElementById("carrito");
carritoHTML.innerHTML = "<p>Tu carrito</p><div></div>";
document.querySelector("#tiendaFanPage_Fila header #navbar_Extended-Left").append(carritoHTML);

let carritoInner = document.querySelector("#tiendaFanPage_Fila header #navbar_Extended-Left #carrito div");
carritoInner.className = "carrito-contenido";
carritoInner.innerHTML = "<ul></ul>";

let carritoList = document.querySelector("#tiendaFanPage_Fila header #navbar_Extended-Left #carrito .carrito-contenido ul");
carritoList.innerHTML = "<li> ${productos[1]} </li>";
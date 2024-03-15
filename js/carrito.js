const carrito = [];

function actualizarCarrito() {
    const cantidadCarrito = document.getElementById("cantidadCarrito");
    cantidadCarrito.innerText = carrito.length;
}

function agregarAlCarrito(item) {
    carrito.push(item);
    actualizarCarrito();
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    mostrarCarrito();
}

function mostrarCarrito() {
    const contenedorCompra = document.getElementById("contenedorCompra");
    const vehiculosCompra = document.getElementById("vehiculosCompra");
    const total = document.getElementById("total");


    vehiculosCompra.innerHTML = '';
    total.innerText = '';


    carrito.forEach((item, index) => {
        const vehiculoElemento = document.createElement("div");
        vehiculoElemento.innerHTML = `${item} <button class="eliminar" onclick="eliminarDelCarrito(${index})">Eliminar</button>`;
        vehiculosCompra.appendChild(vehiculoElemento);
    });


    const precioTotal = carrito.length * 10000; 
    total.innerText = `Total: $${precioTotal}`;


    contenedorCompra.style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
    const comprarBotones = document.querySelectorAll(".comprar");

    comprarBotones.forEach((boton) => {
        boton.addEventListener("click", () => {
            const vehiculo = boton.previousElementSibling.textContent.trim();
            agregarAlCarrito(vehiculo);
        });
    });

    const verCarrito = document.getElementById("verCarrito");
    verCarrito.addEventListener("click", mostrarCarrito);
});
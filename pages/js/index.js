import { agregarAlCarrito } from "./funcionesCarrito,JS";
import { obtenerCarrito } from "./storage";
import { ActualizarContador } from "./ui";

const renderizarProductos = () => {
    const contenedor = document . getElementById("contenedor-tarjetas");

    fetch("./data/productos.json").then((res) => res.json()).then().catch();





};


function agregarAlCarrito(producto){
    const memoria = JSON.parselocalStorage.getItem("imagenes")
    console.log(memoria)
    if(memoria){
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    localStorage.setItem("imagenes",JSON.stringify[nuevoProducto]);
    } else {
        const indiceProducto = memoria.findIndex(imagenes => imagenes.id === producto.id);
        console.log(indiceProducto)
        if(indiceProducto === -1){
             const nuevamemoria = memoria;
            nuevamemoria.push(getNuevoProductoParaMemoria(producto))
        }
    }

    

}

function getNuevoProductoParaMemoria(producto){
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}
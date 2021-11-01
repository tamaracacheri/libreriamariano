
let totalSuma = 0;
const iva = 0.21;
const carrito = [];

const sumarPrecio = x => totalSuma = totalSuma + x;
const restarStock = x => x - 1;
const calcImpuesto = x => x * iva;

let impuesto = calcImpuesto(totalSuma);
let precioFinal = totalSuma + impuesto;
//------------------FUNCIONES-------------------------------------------------
//----RENDERIZA EL HTML
function renderDom (prod) {
    let contenedor = document.createElement("div");
    contenedor.setAttribute("class", "card col");
    contenedor.innerHTML = `<img src="${prod.img}" class="card-img-top imagenCard" alt="${prod.nombre}">
                            <div class="card-body">
                              <p class="card-title">${prod.nombre}</p>
                              <p class="card-text">${prod.descripcion}</p>
                              <p class="card-text" id="stock-${prod.nombre}">Stock: ${prod.stock}</p>
                              <button class="btn btn-danger" id="btn${prod.nombre}" onclick="btnClickAgregar(${prod.id})">Agregar</button>
                              <p class="card-text">Precio: $${prod.precioUnidad}</p>
                            </div>`;
    productos.appendChild(contenedor);
};
for (renderProductos of arrayProductos) {
    renderDom(renderProductos);
};
//----RENDERIZA EL CARRITO
function agregarDom (carro) {
    let contenedor = document.createElement("tr");
    contenedor.innerHTML = `<td scope="row">${carro.nombre}</td>
                            <td id="cant-${carro.nombre}">1</td>
                            <td>${carro.precioUnidad}</td>`;
    cuerpoTabla.appendChild(contenedor);
    let totalTabla = document.getElementById("totalTabla");
    totalTabla.innerHTML = `Total: $${totalSuma}`;
    carro.flag = false;
};
//----AGREGA UNIDADES DE ITEMS REPETIDOS EN EL DOM DEL CARRITO
function agregarItemDom (x) {
    if (x.stock == 0) {
    } else {
    let cantidad = document.getElementById(`cant-${x.nombre}`);
    let contador = parseInt(cantidad.innerHTML);
    contador += 1;
    cantidad.innerHTML = contador;
    totalTabla.innerHTML = `Total: $${totalSuma}`;};
};
//----RESTA STOCK EN EL DOM
function restarStockDom (x) {
    let stock = document.getElementById(`stock-${x.nombre}`);
    stock.innerHTML = `Stock: ${x.stock}`;
};
//----FUNCION CLICK DE AGREGAR AL CARRITO
function btnClickAgregar (x) {
    //SIN STOCK
    if (arrayProductos[x].stock <= 0) {
        alert("¡Lo sentimos! no contamos con stock del producto :(");
    }
        //AGREGA POR PRIMERA VEZ
        else if (arrayProductos[x].flag == true) {
            sumarPrecio(arrayProductos[x].precioUnidad);
            agregarDom(arrayProductos[x]);
            arrayProductos[x].stock = restarStock(arrayProductos[x].stock);
            restarStockDom(arrayProductos[x]);
            carrito.push(arrayProductos[x]);
        }
            //AGREGA REPETIDOS
            else {
                sumarPrecio(arrayProductos[x].precioUnidad);
                agregarItemDom(arrayProductos[x]);
                arrayProductos[x].stock = restarStock(arrayProductos[x].stock);
                restarStockDom(arrayProductos[x]);
                carrito.push(arrayProductos[x]);
            }     
};
//----BOTON FINALIZAR COMPRA
const btnFinalizarCompra = document.getElementById("btnFinalizarCompra");
//----EVENTO FINALIZAR COMPRA
btnFinalizarCompra.onclick = () => {
    const carritoJson = JSON.stringify(carrito);
    localStorage.setItem("carrito", carritoJson);
    location.href = "resumen.html";
}
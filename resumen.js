carrito = JSON.parse(localStorage.getItem("carrito"));
let precioTotal = 0;
const calcImpuesto = x => x * 0.21;
for (x of carrito) {
    $('#final-carrito').append(`<div class="resumen-item">
                                            <img src="${x.img}">
                                            </img>
                                            <p>Producto: ${x.nombre}</p>
                                            <p class="items-precio">Precio: $${x.precioUnidad}</p>
                                        </div>`);
    precioTotal = precioTotal + x.precioUnidad;
}
$('#totalCarritoFinalizar').append(`<p>Total: $${precioTotal}</p>`);
//-----AGREGANDO EL IMPUESTO
let impuesto = calcImpuesto(precioTotal);
let precioTotalConImpuesto = impuesto + precioTotal;
$('#total-carrito').append(`<p class="resumen-total">Total C/IVA: $${precioTotalConImpuesto}</p>`);
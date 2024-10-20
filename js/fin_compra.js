
let cartContainer = document.getElementById("cart-section")
let card = document.createElement("div")

card.innerHTML = `<h2 class="total_compra">  Totol de compra: ${localStorage.getItem("totalCompraMemoria")}</h2>
                    <h3> Su pedido ha sido realizado: </h3>
    `
cartContainer.appendChild(card)



let cartStorage = localStorage.getItem("cartProducts")
cartStorage = JSON.parse(cartStorage)

let datosCliente= localStorage.getItem("datosClientes")
datosCliente = JSON.parse(datosCliente)

function totalGeneral (cartItems) {

    let totalCompra = 0
    cartItems.forEach(producto => {           
        totalCompra =producto.cantida*producto.precio+totalCompra
    })
    const card = document.createElement("div")
    card.innerHTML = `<h2 class="total_compra">  Total de compra: ${totalCompra}</h2>`
    cartContainer.appendChild(card)  

    localStorage.setItem("totalCompraMemoria", totalCompra)
            

}






function renderCarrito (cartItems) {

 
    card.innerHTML = `
                        
        <h3>  - Cliente: ${datosCliente[0]} ${datosCliente[1]}</h3>
        <h4>  - Telefono: ${datosCliente[2]}</h4>
        <h4>  - Direccion: ${datosCliente[3]}</h4>
        <h2 class="cont_producto"> Detalle de pedido: </h2>
                        
                        `
    cartItems.forEach(producto => {
        const card = document.createElement("div")
        const precio_tot_producto =producto.cantida*producto.precio
        
        card.className = "cont_producto"
        card.innerHTML = `<div class="produc">
                        
                        <h4>  ${producto.cantida} ${producto.nombre}  ${producto.marca} - Modelo - ${producto.modelo} / Total: S/. ${precio_tot_producto}</h4>
                        
                        </div>
                        `
        cartContainer.appendChild(card)
        
    })
    totalGeneral (cartItems)
    

                        
                        
    
} 

let regresar_borrar = document.getElementById("regresarCarritoBorrar")
regresar_borrar.onclick = (e) => {

    localStorage.clear()
    window.location.href = '../index.html';
}



renderCarrito (cartStorage)
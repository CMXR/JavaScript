
let cartContainer = document.getElementById("cart-section")
let card = document.createElement("div")

card.innerHTML = `<h2 class="total_compra">  Totol de compra: ${localStorage.getItem("totalCompraMemoria")}</h2>
                    <h3> Su pedido ha sido realizado: </h3>
    `
cartContainer.appendChild(card)



let cartStorage = localStorage.getItem("cartProducts")
cartStorage = JSON.parse(cartStorage)



function renderCarrito (cartItems) {
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
} 

renderCarrito (cartStorage)
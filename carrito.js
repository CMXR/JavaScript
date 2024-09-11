

let regresar_menu=document.getElementById("regresarCarrito")
regresar_menu.onclick = () => { 
    localStorage.clear()
    
}

console.log(localStorage.getItem("cartProducts"))
if(localStorage.getItem("cartProducts") !== null){

let cartStorage = localStorage.getItem("cartProducts")
cartStorage = JSON.parse(cartStorage)

let cartContainer = document.getElementById("cart-section")

console.log("soy yo",cartStorage)






function renderCarrito (cartItems) {
    cartItems.forEach(producto => {
        const card = document.createElement("div")
        const precio_tot_producto =producto.cantida*producto.precio
        card.className = "cont_producto"
        card.innerHTML = `<div class="produc">
                        <h3> ${producto.nombre} marca: ${producto.marca}</h3>
                        <h4> Modelo: ${producto.modelo}</h4>
                        <h4> Precio: S/. ${producto.precio}</h4>
                        <h4> Cantidad:  ${producto.cantida} und</h4>
                        <h5 class=total_por_producto id= ${producto.id}> Precio total: S/. ${precio_tot_producto}</h5>
                        
                        </div>
                        `
        cartContainer.appendChild(card)
    })
} 



renderCarrito(cartStorage)
totalGeneral (cartStorage)


function totalGeneral (cartItems) {
    let totalCompra = 0
    cartItems.forEach(producto => {           
        totalCompra =producto.cantida*producto.precio+totalCompra
    })
    const card = document.createElement("div")
    card.innerHTML = `<h2 class="total_compra">  Totol de compra: ${totalCompra}</h2>`
    cartContainer.appendChild(card)  
}

}

else{
    let cartContainer = document.getElementById("cart-section")
    const card = document.createElement("div")
    card.innerHTML = `<h2 class="car_vacio"> SU CARRITO ESTA VACIO AGREGE PRODUCTOS PARA CONTINUAR</h2> `
    cartContainer.appendChild(card)  
   
    


    console.log("estoy vacio")
}
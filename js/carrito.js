

let regresar_menu=document.getElementById("regresarCarrito")
let borrar_todo_carrito=document.getElementById("borrarCarrito")


borrar_todo_carrito.onclick = (e) => {
    
    Swal.fire({
        title: "Esta seguro que desea eliminar todo el carrito?",
        text: "Se eliminara todos los productos",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Eliminar"
        }).then((result) => {
        if (result.isConfirmed) {
            localStorage.clear()
            location.reload()

        }
        });


    
    
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
                        <span  class="cont_cant" id="${producto.id}"> ${producto.cantida}</span>
                        <button class="but_sum" id="${producto.id}">+</button>
                        <button class="but_res" id="${producto.id}">-</button>
                        <button class="eliminar" id="${producto.id}">ELIMINAR</button>
                        <h5 class=total_por_producto id= ${producto.id}> Precio total: S/. ${precio_tot_producto}</h5>
                        
                        </div>
                        `
        cartContainer.appendChild(card)
        
    })
} 




function cantidad_producto (cartItems) {
    
    sumar_cant = document.querySelectorAll(".but_sum")
    restar_cant = document.querySelectorAll(".but_res")

    let productos = cartItems
    
    console.log("holi sosoy el carritoy",cartItems)
    sumar_cant.forEach(button => {
        button.onclick = (e) => {

            Swal.fire({
                title: "Escriba sus datos",
                text: "Escriba su nombre completo",
                input: "text",
                inputAttributes: {
                  autocapitalize: "off"
                },
                showCancelButton: true,
                confirmButtonText: "Confirmar",
                showLoaderOnConfirm: true,
                
               
              }).then((result) => {
                if (result.isConfirmed) {
                  
                }
              });




            const productId = e.currentTarget.id
            const selectedProduct = productos.find(producto => producto.id == productId)
            selectedProduct.cantida ++
            const posicionProducto = productos.findIndex(producto => producto.id == productId)
            cartItems[posicionProducto].cantida=selectedProduct.cantida
            localStorage.setItem("cartProducts", JSON.stringify(cartItems))
            //location.reload()
        }
    })

    restar_cant.forEach(button => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id
            const selectedProduct = productos.find(producto => producto.id == productId)
            
            
            if (selectedProduct.cantida > 0){
                selectedProduct.cantida --
                const posicionProducto = productos.findIndex(producto => producto.id == productId)
                cartItems[posicionProducto].cantida=selectedProduct.cantida
                
                if (selectedProduct.cantida  < 1){
                    cartItems.splice(posicionProducto, 1)
                    location.reload()
                }
                localStorage.setItem("cartProducts", JSON.stringify(cartItems))
                location.reload()
            }
              
            let cont_cant= document.getElementById(productId)
            cont_cant.innerHTML = selectedProduct.cantida
       
            
        }
    })
    
    
}

function eliminarElemeto (cartItems) {

    
    

      
    eliminar = document.querySelectorAll(".eliminar")
    
    let productos = cartItems
    
    console.log("holi sosoy el carritoy",cartItems)
    eliminar.forEach(button => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id
            const posicionProducto = productos.findIndex(producto => producto.id == productId)

            Swal.fire({
                title: "Desea Eliminar el producto?",
                text: "Se eliminara el producto del carrito",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, Eliminar"
              }).then((result) => {
                if (result.isConfirmed) {
                    cartItems.splice(posicionProducto, 1)
                    localStorage.setItem("cartProducts", JSON.stringify(cartItems))
                    location.reload()

                }
              });


            
            
        }
    })

    

}


renderCarrito(cartStorage)
totalGeneral (cartStorage)
cantidad_producto (cartStorage)
eliminarElemeto (cartStorage)




function totalGeneral (cartItems) {

    let totalCompra = 0
    cartItems.forEach(producto => {           
        totalCompra =producto.cantida*producto.precio+totalCompra
    })
    const card = document.createElement("div")
    card.innerHTML = `<h2 class="total_compra">  Totol de compra: ${totalCompra}</h2>`
    cartContainer.appendChild(card)  

    localStorage.setItem("totalCompraMemoria", totalCompra)
            

}
            
}

else{
    let cartContainer = document.getElementById("cart-section")
    const card = document.createElement("div")
    card.innerHTML = `<h2 class="car_vacio"> SU CARRITO ESTA VACIO AGREGE PRODUCTOS PARA CONTINUAR</h2> `
    cartContainer.appendChild(card)  
   
    


    console.log("estoy vacio")
}
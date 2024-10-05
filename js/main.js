
let productos= []
fetch("./db/data.json")
.then(response => response.json())
.then(data => {  console.log(data)
    productos = data


console.log("soy el local",localStorage)
let cartStorage

cartStorage = localStorage.getItem("cartProducts")
cartStorage = JSON.parse(cartStorage)
console.log("soy yo",cartStorage)



let cartProducts = []

if(cartStorage !== null){
    console.log("estoy lleno")
    
    cartProducts =cartStorage
}

let productsContainer = document.getElementById("products-container")
console.log("soy producto  sss",productos)

function rellenarCantidades(cartItems){
    productos.forEach(elemeto => {
         cartItems.forEach(elm_guardado =>{
             if (elemeto.id == elm_guardado.id){
                 elemeto.cantida=elm_guardado.cantida
                console.log("si ahy concidencia")
            }
        })
    })
    
}
if (localStorage.length !== 0 ){
    rellenarCantidades(cartStorage)
}

checkCarrito()
function renderProductos(productsArray) {
    productsArray.forEach(producto => {
        const card = document.createElement("div")
        card.className = "cont_producto"
        card.innerHTML = `<div class=produc>
                        <h3> ${producto.nombre} marca: ${producto.marca}</h3>
                          <h4> Modelo: ${producto.modelo}</h4>
                          <h4> Precio: S/. ${producto.precio}</h4>
                          <span  class="cont_cant" id="${producto.id}"> ${producto.cantida}</span>
                          <button class="but_sum" id="${producto.id}">+</button>
                          <button class="but_res" id="${producto.id}">-</button>
                          <button class="productoAgregar" id="${producto.id}">Agregar</button>
                          </div>
                          `
        productsContainer.appendChild(card)
    })
    cantidad_producto ()
    addToCartButton()
    
}
function checkCarrito(){
    confir_carrito = document.getElementById('ir-carrito')
    confir_carrito.onclick= (e) => {

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
    }
}




function cantidad_producto () {
    
    sumar_cant = document.querySelectorAll(".but_sum")
    restar_cant = document.querySelectorAll(".but_res")

    
    sumar_cant.forEach(button => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id
            const selectedProduct = productos.find(producto => producto.id == productId)
            selectedProduct.cantida ++
            let cont_cant= document.getElementById(productId)
            cont_cant.innerHTML = selectedProduct.cantida

           
            
            
        }
        
    })

    restar_cant.forEach(button => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id
            const selectedProduct = productos.find(producto => producto.id == productId)
            if (selectedProduct.cantida > 0){
                selectedProduct.cantida --
            }

            
            let cont_cant= document.getElementById(productId)

            cont_cant.innerHTML = selectedProduct.cantida
            
            
        }
    })
}


renderProductos(productos)


function addToCartButton () {
    addButton = document.querySelectorAll(".productoAgregar")
    addButton.forEach(button => {
        button.onclick = (e) => {
            
            Toastify({
                text: "Producto agregado",
                duration: 1500,
                //destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #c47726, #ffe930)",
                },
                onClick: function(){} // Callback after click
              }).showToast();

            
            const productId = e.currentTarget.id
            const selectedProduct = productos.find(producto => producto.id == productId)
            

            if (selectedProduct.cantida===0){
                selectedProduct.cantida ++
                let cont_cant= document.getElementById(productId)
                cont_cant.innerHTML = selectedProduct.cantida
            }
            if (cartProducts == 0){
                    cartProducts.push(selectedProduct)             
                }
            if (cartProducts.some((producto)=> producto.id == productId) !== true ){
                cartProducts.push(selectedProduct)
                // console.log("es difernte")
            }
            
            const posicionProducto = cartProducts.findIndex(producto => producto.id == productId)
            
            // console.log(posicionProducto)
            // console.log( productos[posicionProducto])
            // console.log(selectedProduct.cantida)
            
            cartProducts[posicionProducto].cantida=selectedProduct.cantida

            console.log(cartProducts)
            
            localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
            
        }
    })
}

})
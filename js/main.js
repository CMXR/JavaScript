let productos= []
console.log("soy el local",localStorage)
let cartStorage
if (localStorage.length !== 0 ){
    cartStorage = localStorage.getItem("cartProducts")
    cartStorage = JSON.parse(cartStorage)
    console.log("soy yo",cartStorage)
}

class Jean {
    static id = 0

    constructor (nombre,marca, modelo, precio,cantida) {
        this.id = ++Jean.id
        this.nombre = nombre
        this.marca = marca,
        this.modelo = modelo,
        this.precio = precio
        this.cantida = cantida

    }

}

const cat_ini = 0
const jean1 = new Jean("jean","you","strech pitilo",75,cat_ini)
const jean2 = new Jean("jean","you","strech flare",80,cat_ini)
const jean3 = new Jean("jean","you","tela rigida",95,cat_ini)
const jean4 = new Jean("jean","ambeth","strech pitilo",75,cat_ini)
const jean5 = new Jean("jean","ambeth","strech flare",75,cat_ini)
const jean6 = new Jean("jean","ambeth","tela rigida",75,cat_ini)

productos.push(jean1,jean2,jean3,jean4,jean5,jean6)

let cartProducts = []

let productsContainer = document.getElementById("products-container")

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

            console.log(cartProducts)
            localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
            
        }
    })
}
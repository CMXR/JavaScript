
let enviar_datos = document.getElementById("enviar")
console.log("soy el dato 2",enviar_datos)
let datos=[]




enviar_datos.onclick = (e) => {
    console.log("entre")
    let nombre_cli = document.getElementById("nombre_cliente").value
    let apellido_cli = document.getElementById("apellido_cliente").value
    let telefono_cli = document.getElementById("telefono_cliente").value
    let direccion_cli = document.getElementById("direccion_cliente").value
    
    datos.push(nombre_cli,apellido_cli,telefono_cli,direccion_cli)
    console.log("soy el dato",datos)
    // const productId = e.currentTarget.id
    // const selectedProduct = productos.find(producto => producto.id == productId)
    // selectedProduct.cantida ++
    // const posicionProducto = productos.findIndex(producto => producto.id == productId)
    // cartItems[posicionProducto].cantida=selectedProduct.cantida
    localStorage.setItem("datosClientes", JSON.stringify(datos))

    console.log("soy el final de los datos",localStorage.getItem("datosClientes"))
    
}
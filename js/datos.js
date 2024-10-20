
let enviar_datos = document.getElementById("enviar")
console.log("soy el dato 2",enviar_datos)
let datos=[]





function guardar_datos(){
enviar_datos.onclick = (e) => {
    console.log("entre")
    let nombre_cli = document.getElementById("nombre_cliente").value
    let apellido_cli = document.getElementById("apellido_cliente").value
    let telefono_cli = document.getElementById("telefono_cliente").value
    let direccion_cli = document.getElementById("direccion_cliente").value
    
    try{
        if (nombre_cli==""){
            throw new TypeError('el nombre esta vacio')
        }
        else if (apellido_cli==""){
            throw new TypeError('el apellido esta vacio')
        }
        else if (telefono_cli==""){
            throw new TypeError('el telfono esta vacio')
        }
        else if (direccion_cli==""){
            throw new TypeError('la direccion esta vacio')
        }
        else{
            console.log("esoy el nombre", nombre_cli)

    
            datos.push(nombre_cli,apellido_cli,telefono_cli,direccion_cli)
            console.log("soy el dato",datos)
            localStorage.setItem("datosClientes", JSON.stringify(datos))
            window.location.href = '../paginas/fin_compra.html';

        }

    }

    catch(error){
        Toastify({
            text: "Complete los datos faltantes",
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
    }

    
  
}}

guardar_datos()
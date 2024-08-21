
let precio_jeans_strech = 75
let precio_jeans_tela_rigida = 65
let precio_casacas_pufer = 50
let precio_casacas_corduroy = 55
let precio_casacas_jean = 65
let precio_chalecos = 45
let total=0
let cantidad_total=0

const pedido_global = ["SU PEDIDO HA SIDO REGISTRADO: \n"]
const precio_total=[]

function resetear(){
    pedido_global.splice(1)
    precio_total.splice(0)
    total=0
    cantidad_total=0
}

function resultado_compra(tipo_compra,detalle){
    pedido_global.push("Color :",detalle," \n")
    let cantidad = parseInt(prompt("Cantidad de prendas:"))
    if(tipo_compra=="Jean Strech"){
        cantidad_total = cantidad * precio_jeans_strech
    }else if(tipo_compra=="Jean Tela Rigida"){
        cantidad_total = cantidad * precio_jeans_tela_rigida
    }else if(tipo_compra=="Chaleco") { 
        cantidad_total = cantidad * precio_chalecos
    }else if(tipo_compra=="Casaca Pufer"){
        cantidad_total = cantidad * precio_casacas_pufer
    }else if(tipo_compra=="Casaca Corduroy"){
        cantidad_total = cantidad * precio_casacas_corduroy
    }else if(tipo_compra=="Casacas de Jean"){
        cantidad_total = cantidad * precio_casacas_jean
    }
    pedido_global.push("Cantidad : ",cantidad," Unid \n")
    pedido_global.push("Precio : S/", cantidad_total, "\n")

    let confirmacion = prompt("Desea agregar otra prenda? (si/no)")
    if(confirmacion == "no") {
        precio_total.push(cantidad_total)
        for(let i of precio_total) total+=i;
        pedido_global.push("______________________ \n")
        pedido_global.push("TOTAL A PAGAR: S/", total)
        alert(pedido_global)
        alert("Gracias por su compra \n Precione enter para regresar al menu inicial")
        resetear()
        menu_inicial()
    } else{
        precio_total.push(cantidad_total)
        menu_inicial()

    }
}




function color(tipo,color_general){
    pedido_global.push("Color:",color_general," \n")

    let menu = parseInt(prompt("Elija una Talla: \n 1-28 \n 2-30  \n 3-32 \n 4-Regresar al menu y borrar todo" ))
    while(menu !== 4) {
        switch(menu) {
            case 1:
                resultado_compra(tipo,28)
                break
            case 2:
                resultado_compra(tipo,30)
                break
            case 3:
                resultado_compra(tipo,32)
                break
            case 4:
                resetear()
                menu_inicial()
                break
            default:
                alert("Opcion incorrecta")
                break
        }
    
        menu = parseInt(prompt("Elija una opcion: \n 1-Jeans \n 2-Casacas \n 3-Chalecos \n 4-Salir"))
    }
}


function tipo_de_jean(tipo){
    pedido_global.push(tipo,"\n")

    let menu = parseInt(prompt("Elija una color: \n 1-Negro \n 2-Azul  \n 3-Celeste \n 4-Regresar al menu y borrar todo" ))
    while(menu !== 4) {
        switch(menu) {
            case 1:
                color(tipo,"Negro")
                break
            case 2:
                color(tipo,"Azul")
                break
            case 3:
                color(tipo,"Celeste")
                break
            case 4:
                resetear()
                menu_inicial()
                break
            default:
                alert("Opcion incorrecta")
                break
        }
    
        menu = parseInt(prompt("Elija una color: \n 1-Negro \n 2-Azul  \n 3-Celeste"))
    }
}

function jeans () {
    let menu = parseInt(prompt("Elija una opcion: \n 1-Jeans Stresh \n 2-Jeans Tela rigida  \n 3-Regresar al menu y borrar todo"))
    while(menu !== 4) {
        switch(menu) {
            case 1:
                tipo_de_jean("Jean Strech")
                break
            case 2:
                tipo_de_jean("Jean Tela Rigida")
                break
            case 3:
                resetear()
                menu_inicial()
                break
            default:
                alert("Opcion incorrecta")
                break
        }
    
        menu = parseInt(prompt("Elija una opcion: \n 1-Jeans Stresh \n 2-Jeans Tela rigida  \n 4-Regresar menuanterior"))
    }
}

function cas(tipo,tipo_cas){
    if(tipo_cas=="Pufer" ){
        chalecos("Casaca Pufer")
    }else if(tipo_cas=="Corduroy"){
        chalecos("Casaca Corduroy")
    }else if(tipo_cas=="de Jean"){
        tipo_de_jean("Casaca de Jean")
    }
}

function casacas() {
    let menu = parseInt(prompt("Elija el tipo de casaca: \n 1-Pufer \n 2-Corduroy \n 3-De Jean \n 4-Regresar al menu y borrar todo"))
    while(menu !== 6) {
        switch(menu) {
            case 1:
                cas("Casacas","Pufer")
                break
            case 2:
                cas("Casacas","Corduroy")
                break
            case 3:
                cas("Casacas","de Jean")
                break
            case 4:
                resetear()
                menu_inicial()
                break
            default:
                alert("Opcion incorrecta")
                break
        }
    
        menu = parseInt(prompt("Elija una opcion: \n 1-Jeans Stresh \n 2-Jeans Tela rigida  \n 4-Regresar menuanterior"))
    }
}

function chalecos(tipo_variales) {
    pedido_global.push(tipo_variales," \n")
    let menu = parseInt(prompt("Elija el color: \n 1-Negro \n 2-Cafe \n 3-Rosa \n 4-Morado  \n 5-Regresar al menu y borrar todo"))
    while(menu !== 6) {
        switch(menu) {
            case 1:
                resultado_compra(tipo_variales,"Negro")
                break
            case 2:
                resultado_compra(tipo_variales,"Cafe")
                break
            case 3:
                resultado_compra(tipo_variales,"Rosa")
                break
            case 4:
                resultado_compra(tipo_variales,"Morado")
                break
            case 5:
                resetear()
                menu_inicial()
                break
            default:
                alert("Opcion incorrecta")
                break
        }
    
        menu = parseInt(prompt("Elija una opcion: \n 1-Jeans Stresh \n 2-Jeans Tela rigida  \n 4-Regresar menuanterior"))
    }
}
function menu_inicial(){
    let menu = parseInt(prompt("Elija una opcion: \n 1-Jeans \n 2-Casacas \n 3-Chalecos \n 4-Salir"))
    while(menu !== 4) {
        switch(menu) {
            case 1:
                pedido_global.push("------------------- \n")
                jeans()
                break
            case 2:
                pedido_global.push("------------------- \n")
                casacas()
                break
            case 3:
                pedido_global.push("------------------- \n")
                chalecos("Chaleco")
                break
            case 4:
                salir()
                break
            default:
                alert("Opcion incorrecta")
                break
        }
    
        menu = parseInt(prompt("Elija una opcion: \n 1-Jeans \n 2-Casacas \n 3-Chalecos \n 4-Salir"))
    }
    }

alert("Bienvenido al Catalogo de Olinda")
menu_inicial()


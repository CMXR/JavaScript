
let cartContainer = document.getElementById("cart-section")
let card = document.createElement("div")
card.innerHTML = `<h2 class="total_compra">  Totol de compra: ${localStorage.getItem("totalCompraMemoria")}</h2>`
cartContainer.appendChild(card)
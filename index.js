let product = document.querySelectorAll(".product");
let precioUnitario = document.getElementsByClassName("pu");
let tomarInput = document.getElementsByClassName("qty");
let subTotales = document.getElementsByClassName("subtot");
let botonCalcPrices = document.querySelector(".calcButton");
let contador = document.querySelector(".precioTotal");
var $del = document.getElementsByClassName("btn btn-delete");

let updateSubtot = product => {
  let totalSuma = 0;
  for (i = 0; i < product.length; i++) {
    let total =
      precioUnitario[i].childNodes[1].innerHTML *
      tomarInput[i].childNodes[1].childNodes[1].value;
    subTotales[i].childNodes[1].innerHTML = total;
    totalSuma += total;
  }
  return totalSuma;
};

let calcAll = () => {
  contador.innerHTML = `Total : ${updateSubtot(product)}`;
  return;
};
botonCalcPrices.addEventListener("click", calcAll);

function deleteBoton(e) {
  var product = e.currentTarget.parentNode.parentNode;
  var table = e.currentTarget.parentNode.parentNode.parentNode;
  table.removeChild(product);
}
function loadDeleteButtons() {
  for (var i = 0; i < $del.length; i++) {
    $del[i].addEventListener("click", deleteBoton);
  }
}
loadDeleteButtons();

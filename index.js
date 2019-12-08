let product = document.querySelectorAll(".product");
// primero buscamos todos los productos que hay , de esta manera con un bucle sabremos a que elemento dirigirnos para tomar valores o modificarlos mas tarde.
let precioUnitario = document.getElementsByClassName("pu");
let tomarInput = document.getElementsByClassName("qty");
let subTotales = document.getElementsByClassName("subtot");
let botonCalcPrices = document.querySelector(".calcButton");
let contador = document.querySelector(".precioTotal");

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

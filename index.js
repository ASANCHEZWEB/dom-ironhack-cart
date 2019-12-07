let product = document.querySelectorAll(".product");
// primero buscamos todos los productos que hay , de esta manera con un bucle sabremos a que elemento dirigirnos para tomar valores o modificarlos mas tarde.
let precioUnitario = document.getElementsByClassName("pu");
let tomarInput = document.getElementsByClassName("qty");
let subTotales = document.getElementsByClassName("subtot");



let updateSubtot = (product) => {
let totalSuma = 0;
   for (i = 0; i < product.length; i++) {
    let total = precioUnitario[i].childNodes[1].innerHTML *
      tomarInput[i].childNodes[1].childNodes[1].value;
    subTotales[i].childNodes[1].innerHTML = total;
    totalSuma+=total;
  }
    return totalSuma;
  };

  function  calcAll () {
    // Iteration 1.2 
 } $ calc . onclick = calcAll;
// mi funcion updatesubtot ya funciona 


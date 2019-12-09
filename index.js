//DECLARACIONES
let $product = document.querySelectorAll(".product");
let $calc = document.querySelector(".btn-calcprices");
let $delete = document.querySelectorAll(".btn-delete");


//FUNCIONES
let updateSubtot = $product => {
  let sumOfSubtotals = 0;
  for (i = 0; i < $product.length; i++) {
    let subTot =
      $product[i].getElementsByClassName("pu")[0].childNodes[1].innerHTML *
      $product[i].getElementsByClassName("qty")[0].getElementsByTagName("input")[0].value;
    sumOfSubtotals += subTot;
    $product[i].getElementsByClassName("subtot")[0].childNodes[1].innerHTML = subTot;
  }
  return sumOfSubtotals;
};
let calcAll = () => {
  document.getElementsByClassName("totalPrices")[0].innerHTML = `Total : $${updateSubtot($product)}`;
};
let functionDelete = $delete => {
  for (let i = 0; i < $delete.length; i++) {
    $delete[i].onclick = function() {
      document.getElementsByTagName("tbody")[0].removeChild($product[i]);
    }
  }
};

//EVENTOS E INVOCACIONES
functionDelete($delete);
$calc.onclick = calcAll ;
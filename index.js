let $product = document.querySelectorAll(".product");
let $calc = document.querySelector(".btn-calcprices");

function updateSubtot($product) {
  let sumOfSubtotals = 0;
  for (i = 0; i < $product.length; i++) {
    let subTot =
      $product[i].getElementsByClassName("pu")[0].childNodes[1].innerHTML *
      $product[i].getElementsByClassName("qty")[0].getElementsByTagName("input")[0].value;
    sumOfSubtotals += subTot;
    $product[i].getElementsByClassName("subtot")[0].childNodes[1].innerHTML = subTot;
  }
  return sumOfSubtotals;
}
function calcAll() {
  // Iteration 1.2
  document.getElementsByClassName("totalPrices")[0].innerHTML = `Total : $${updateSubtot($product)}`;
}
$calc.onclick = calcAll;

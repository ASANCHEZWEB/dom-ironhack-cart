let $cart = document.querySelector("#cart tbody");
let $calc = document.getElementById("calc");
let $product = document.querySelectorAll(".product");
//FUNCIONES 
let updateSubtot = () => {
  let sumOfTotal = 0;
  //recorro los productos para actualizar su subtotal
  for (i = 0; i < $product.length; i++) {
    //busco el precio unitario del producto recorrido por el bucle
   let unitPrice =$product[i].querySelectorAll('.pu')[0].getElementsByTagName('span')[0].innerHTML;
   //busco el valor del input del producto (donde se mete la cantidad de producto que se quiere comprar)
   let quantity = $product[i].querySelectorAll('.qty')[0].getElementsByTagName('input')[0].value;
   //simplemente le digo al subtotal del producto que sea igual al preciounitario multiplicado por la cantidad.
   let subTotCalc = $product[i].querySelectorAll('.subtot')[0].getElementsByTagName('span')[0].innerHTML = unitPrice * quantity;
   sumOfTotal += subTotCalc;
  }
  return sumOfTotal;
};
let  calcAll = () => {
  //como la funcion updatetotal ya me devuelve la suma de los subtotales , pues ahora solo voy a tomarlo .
  document.getElementsByTagName('h2')[0].innerHTML = `Total: $<span>${updateSubtot()}</span>`;
}
//EVENTOS E INVOCACIONES 
$calc.onclick = calcAll;
//este setinterval actualizará el subtotal de cada producto cada 200 milisegundos.
setInterval(updateSubtot, 200);
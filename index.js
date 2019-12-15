//Aquí importo y guardo elementos de html en variables para trabajar con ellos.
let $cart = document.querySelector("#cart tbody");
let $calc = document.getElementById("calc");
let createButton = document.querySelector("#create");

//FUNCIONES
//Esta funcion recibe un producto como parametro y devuelve su subtotal calculado.
let updateSubtot = $product => {
  //Busco el precio unitario del producto recibido y lo convierto en number.
  let unitPrice = Number($product.querySelector(".pu span").innerHTML);
  //Busco la cantidad del producto recibido y lo convierto en number.
  let unitQuantity = Number($product.querySelector(".qty input").value);
  //Calculo el subtotal para el producto recibido.
  let subTotal = unitPrice * unitQuantity;
  //Pinto el subtotal calculado en la etiqueta html correspondiente.
  $product.querySelector(".subtot span").innerHTML = subTotal;
  //Aqui devuelvo el subtotal del producto (porque se recibirá en la línea 29).
  return subTotal;
};
//Esta función será la que calcule el total de todos los subtotales.
let calcAll = () => {
  //Primero busco todos los productos que hay dentro del "tbody"(línea 2).
  let productsArray = $cart.querySelectorAll(".product");
  //Creo un contador en 0 para ir sumando los subtotales recibidos por la función de arriba.
  let counter = 0;
  //Este bucle será el que pasará cada producto a la función updateSubtot() para recibir su subtot calculado.
  for (i = 0; i < productsArray.length; i++) {
    //Le sumo al contador el subtotal calculado por la función updateSubTot()(línea 8).
    counter += updateSubtot(productsArray[i]);
  }
  //Aquí pinto el valor de "counter" en el contador del total del html.
  document.querySelector("h2 span").innerHTML = counter;
  //No devuelvo nada.
  return;
};
//Esta función recorrerá todos los botones delete y eliminará el elemento padre.
let deleteProduct = () => {
  //Busco todos los botones delete
  let arrayDelButtons = $cart.querySelectorAll(".product .btn-delete");
  //Recorro todos los botones  Delete.
  arrayDelButtons.forEach(function(elem) {
    //Creo un evento onclick que activará una funcion con el elemento clickeado.
    elem.onclick = function() {
      //Elimino el elemento padre-padre del clickeado del "tbody"(línea 2).
      $cart.removeChild(elem.parentNode.parentNode);
      //Vuelvo a llamar a calcAll(línea 21) para que calcule el total actual.
      calcAll();
    };
  });
  //No devuelve nada.
  return;
};
//Esta función añadirá un nuevo producto dentro del "tbody"(línea 2).
let addProduct = () => {
  //Recojo el nombre del nuevo producto del html
  let productName = document.querySelectorAll(".new input")[0].value;
  //Recojo el precio unitario del nuevo producto convertido en number del html.
  let unitPrice = Number(document.querySelectorAll(".new input")[1].value);
  //Creo un nuevo elemento que será el que meteré en el "tbody"(línea 2).
  let newProduct = document.createElement("tr");
  //Le agrego la clase product.
  newProduct.setAttribute("class", "product");
  //Le meto el contenido a mi nuevo producto con los datos recojidos arriba (línea 56 & 58).
  newProduct.innerHTML = `<tr class="product">
    <td class="name">
      <span>${productName}</span>
    </td>

    <td class="pu">
      $<span>${unitPrice}.00</span>
    </td>

    <td class="qty">
      <label>
        <input type="number" value="1" min="0">
      </label>
    </td>

    <td class="subtot">
      $<span>0</span>
    </td>

    <td class="rm">
      <button class="btn btn-delete">Delete</button>
    </td>
  </tr>`;
  //Meto mi nuevo producto ya rellenado dentro del "tbody"(línea 2).
  $cart.appendChild(newProduct);
  //Vuelvo a ejecutar la función deleteProduct()(línea 37) para que me detecte mi nuevo delete.
  deleteProduct();
  //No devuelve nada.
  return;
};

//EVENTOS E INVOCACIONES.
//Evento activador del botón crear importado en (línea 4).
createButton.onclick = addProduct;
//Evento activador del boton Calculate prices importado en (línea 3).
$calc.onclick = calcAll;
//Ejecución de la función automáticamente.
deleteProduct();

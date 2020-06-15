function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "123") {
        alert("Welcome to the home of jazz!");
        window.location = "index2.html";
        return false;
    }
    else {
        alert("Something went wrong! Check your login details and try again");
    }
}


var theCart = {
    dimensions: 0,
    out: 0,
    evolution: 0,
}
var bought = {
    dimensions: 0,
    out: 0,
    evolution: 0,
}
var prices = {
    dimensions: 10.95,
    out: 9.95,
    evolution: 8.95,
}
// Creo que compartiste sólo esta ventana de VS Code... no puedo ver el navegador ahora mismo
// Listado de productos
const products = [{
    name: 'DIMENSIONS & EXTENSIONS (Sam Rivers)',
    price: 10.00
}, {
    name: 'OUT to LUNCH! (Eric Dolphy)',
    price: 9.00
}, {
    name: 'EVOLUTION (Grachan Moncur III)',
    price: 8.00
}];

// Bien, ahora el cart, en principio vacío
let cart = [];

// Bien, la funcion ya existe pero debemos modificarla
function addToCart(index) {   //increment by amount set in item's parameter
    const selected = products[index];

    let product = cart.find(function(product) {
        return product.name === selected.name;
    });

    if (!product) {
        product = {
            name: selected.name,
            price: selected.price,
            quantity: 1
        };

        // Y por último actualizar el cart
        cart.push(product);
    } else {
        product.quantity++;
    }

    updateTotal();
}

function removeFromCart (index) {
    // Tomaremos el producto y lo borraremos del array cart
    const selectedProduct = products[index];
    
    // Hay distintas forma sde borrar.. la más fácil: filter
    cart = cart.filter(function(product) {
        if (selectedProduct.name === product.name) {
            product.quantity--;

            return product.quantity;
        }
        return true;
    });

    updateTotal(); // 
} // listo. Remove hecho... sólo queda testear esto. Tenemos que ir al navegador

function updateTotal () {
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const inCart = cart.find(function(p) {
            return p.name === product.name;
        });

        let message = '';

        if (inCart) {
            message = 'In cart: ' + inCart.quantity;
        }
        
        document.querySelector('#quantity-' + i).innerHTML = message;
    }

    // Updates total
    document.querySelector('#total').innerHTML = 'Total: £' + getTotal();
}

// Returns cart total cost
function getTotal() {
    let total = 0;
    // hay una opción para compartir toda la pantalla... es la que habías seleccionado al comienzo de la sesión
    // de ese modo  yo podría intercambiar entre ventanas no se como lo he hecho

    // Utilizaste forEach o for anteriormente? nunca
    // Okay, utilicemos for que es un poco más tradicional. Basicamente lo que queremos hacer
    // es un loop que tome cada uno de los artículos del carrito y vaya sumando su precio al total

    // 1 : init : habitualmente se define una variable, en este caso "i" que funcionara como índice y contador
    // 2 : condición : es la condición que debe devolver true para que el loop continue. Si devuelve false se corta el loop.
        // En este caso el contador no puede ser mayor a la cantidad de productos en el carrito porque sinó estaríamos accediendo a posiciones inexistentes en el array
    // 3 : after loop : código a ejecutar luego de cada iteración. En este caso incrementamos el contador i por 1
    for (let i = 0; i < cart.length; i++) { // El for se compone de 4 partes
        // 4 el cuerpo/body del loop (qué se hará en cada iteracíon)
        // Listo. Obtenemos el precio del item y lo sumammos al total
        const product = cart[i];
        total = total + product.price * product.quantity;
    }

    return total; 
    // return total.toFixed(2); ya está. Volvamos al navegador. Bien. Volvamos.
}

function purchase(index) {
    const product = cart.find(function(product) {
        return product.name === products[index].name;
    });

    document.querySelector('#subtotal-' + index).innerHTML = '£' + (product.price * product.quantity) // + (product.price * product.quantity).toFixed(); Bueno! Hasta acá llegamos :) 
    //yeepeeee/e/e 
    // Un gusto haberte ayudado
}

function buy(item) {
    let v = bought[item] = theCart[item] * prices[item]  //calculates information based on clicks added to the cart and the global variable prices listed above
}
function total() {   //totals up the value of all the items in the cart from the whole page
    let total = bought.dimensions + bought.out + bought.evolution
}

/*
var theCart = {
    dimensions: 0,
    out: 0,
    evolution: 0,
}
var bought = {
    dimensions: 0,
    out: 0,
    evolution: 0,
}
var prices = {
    dimensions: 10.95,
    out: 9.95,
    evolution: 8.95,
}

function addToCart(item) {   //increment by amount set in item's parameter 
    adjustCart(item++)
}

function removeFromCart(item) {  //decrement by amount set in item's paramenter
    adjustCart(item--)
}

function adjustCart(item, by) {
    var newValue = theCart[item] += by
    if (newValue < 0)                    //prevents removing item to reduce the amount bought by 0 (i.e. no negative numbers)
        newValue = 0
}
function buy(item) {
    let v = bought[item] = theCart[item] * prices[item]  //calculates information based on clicks added to the cart and the global variable prices listed above
}
function total() {   //totals up the value of all the items in the cart from the whole page
    let total = bought.dimensions + bought.out + bought.evolution
}*/
var slides=document.querySelector('.slider-items').children;
var nextSlide=document.querySelector(".right-slide");
var prevSlide=document.querySelector(".left-slide");
var totalSlides=slides.length;
var index=0;

nextSlide.onclick=function () {
    next("next");
}
prevSlide.onclick=function () {
    next("prev");
}

function next(direction){

  if(direction=="next"){
     index++;
      if(index==totalSlides){
       index=0;
      }
  } 
  else{
          if(index==0){
           index=totalSlides-1;
          }
          else{
           index--;
          }
   }

 for(i=0;i<slides.length;i++){
         slides[i].classList.remove("active");
 }
 slides[index].classList.add("active");     

}

//login mechanism code
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

//buttons' mechanism code

//array of objects listing name and price of products
const products = [{
    name: "Dimensions & Extensions",
    price: 10.00
}, {
    name: "Out to Lunch!",
    price: 9.00
}, {
    name: "Evolution",
    price: 8.00
}];


let cart = [];//the cart starts empty
let checkout = []; // este va a ser el carrito "real"

//function addToCart(index) establishes a local increment in the number of items of one of the products listed above
function addToCart(index) {
    const selected = products[index];

    let product = cart.find(function (product) {
        return product.name === selected.name;
    });

    if (!product) {
        product = {
            name: selected.name,
            price: selected.price,
            quantity: 1
        };

        //cart update
        cart.push(product);
    } else {
        product.quantity++;
    }

    updatePurchase(index);
    updateTotal();
}

//function removeFromCart(index) establishes a local decrease in the number of items of one of the products listed above
function removeFromCart(index) {
    const selectedProduct = products[index];

    cart = cart.filter(function (product) {
        if (selectedProduct.name === product.name) {
            product.quantity--;

            return product.quantity;
        }
        return true;
    });

    updatePurchase(index);
    updateTotal();
}

//function updateTotal(), prints the updated total of number of items of a particular product added to the cart
function updateTotal() {
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const inCart = cart.find(function (p) {
            return p.name === product.name;
        });

        let message = "";

        if (inCart) {
            message = "In cart: " + inCart.quantity;
        }

        document.querySelector("#quantity-" + i).innerHTML = message;
    }

    document.querySelector("#total").innerHTML = "Total: £" + getTotal();
}

//function getTotal() returns grand total cost for all products to be purchased
function getTotal() {
    let total = 0;

    for (let i = 0; i < checkout.length; i++) {
        const product = checkout[i];
        total = total + product.price * product.quantity;
    }

    return total;
}

//function purchase(index) returns subtotal cost
function purchase(index) {
    const product = cart.find(function (product) {
        return product.name === products[index].name;
    });

    // Shows message with the subtotal cost for one of the three products listed above
    document.querySelector("#subtotal-" + index).innerHTML = "£" + (product.price * product.quantity)

    checkout.push(product);
    updateTotal();
}

function updatePurchase(index) {
    const productName = products[index].name;
    const product = checkout.find(function (product) {
        return product.name === productName;
    });

    //Ends function if product was not purchased
    if (!product) return;

    // Removes product from checkout and updates total
    document.querySelector("#subtotal-" + index).innerHTML = "";
    checkout = checkout.filter(p => p !== product);
    updateTotal();
}


// image slider code
var sliders = document.querySelectorAll(".slider");

sliders.forEach(slider => {
    var nextSlide = slider.querySelector(".right-slide");
    var prevSlide = slider.querySelector(".left-slide");
    var slides = slider.querySelectorAll(".slider-items .item");

    var totalSlides = slides.length;
    var index = 0;

    nextSlide.onclick = function () {
        change("next");
    }
    prevSlide.onclick = function () {
        change("prev");
    }

    function change(direction) {

        if (direction == "next") {
            index++;
            if (index == totalSlides) {
                index = 0;
            }
        }
        else {
            if (index == 0) {
                index = totalSlides - 1;
            }
            else {
                index--;
            }
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
        }

        slides[index].classList.add("active");
    }
})


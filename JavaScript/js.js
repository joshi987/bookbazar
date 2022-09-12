let carts;
carts = document.querySelectorAll(".add-cart");

let products = [
    { // this array have object inside

    name:'Demon-slayer',
    tag: 'Demon-slayer',
    Price: 15,
    Incart: 0
},

{ // this array have object inside

    name: 'My Dad is a Grzzly Bear',
    tag: 'images',
    Price: 15,
    Incart: 0
},
{ // this array have object inside

    name: 'ginger-the-giraffe',
    tag: 'ginger-the-giraffe',
    Price: 15,
    Incart: 0
},
{ // this array have object inside

    name: 'The great Indian Novel',
    tag: 'The great Indian Novel',
    Price: 15,
    Incart: 0
},
{ // this array have object inside

    name: 'wimpy-kid',
    tag: 'wimpy-kid',
    Price: 15,
    Incart: 0
},
{ // this array have object inside

    name: 'mountain',
    tag: 'mountain',
    Price: 15,
    Incart: 0
},
{ // this array have object inside

    name: 'educated',
    tag: 'educated',
    Price: 15,
    Incart: 0
},
{ // this array have object inside

    name: 'women',
    tag: 'women',
    Price: 15,
    Incart: 0
},
{ // this array have object inside

    name: 'Blink',
    tag: 'Blink',
    Price: 15,
    Incart: 0
}

]

// console.log(carts);
 for(let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', () => { //anonymous arrow function
        // console.log("addded to cart");
        cartnumber(products[i]); //calling
        totalCost(products[i]);
    }
    )
}

 function onloadcartnumber(){ 
    let productNumbers = localStorage.getItem('cartnumber');

    if(productNumbers){
        document.querySelector('.cart-plus span').textContent = productNumbers;
    }
}
function cartnumber(products) {
    // console.log("The product is", products);
    let productNumbers = localStorage.getItem('cartnumber');
    productNumbers = parseInt(productNumbers);//this function help in convertinf string into numberer
    // console.log(productNumbers);
    // console.log(typeof productNumbers);

    // console.log(typeof productNumbers);

    if(productNumbers){
        localStorage.setItem('cartnumber', productNumbers + 1);
        document.querySelector('.cart-plus span').textContent = productNumbers + 1;

    }

    else{
        localStorage.setItem('cartnumber',  1);
        document.querySelector('.cart-plus span').textContent =1;

    }

    setItems(products);

    // localStorage.setItem('cartnumber', 1);  //an ability to store information locally in the browaer

}
function setItems(products) {
   let cartItems = localStorage.getItem('products Incart');
   cartItems = JSON.parse(cartItems);
//    console.log("My cartItems are", cartItems);
    
if(cartItems != null){
    // cartItems['greytishirt']
    if(cartItems[products.tag] == undefined){
        cartItems = {
            ...cartItems,
            [products.tag]: products
        }
    }
    cartItems[products.tag].Incart += 1;
}
else { 
      products.Incart = 1;
    cartItems = {
           [products.tag]: products
       }
}

    
localStorage.setItem("products Incart", JSON.stringify
    (cartItems));
}

function totalCost(products){
    // console.log("The product price is", products.Price);
    // localStorage.setItem("totalCost", products.Price);
    let cartCost = localStorage.getItem('totalCost');

    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);
    
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + products.Price);
    }else {
        localStorage.setItem("totalCost", products.Price);
    }
    
}

function displaycart(){
    let cartItems = localStorage.getItem("products Incart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector
    (".products");
    let cartCost = localStorage.getItem('totalCost');

    console.log(cartItems);
 if(cartItems && productContainer ) {
    productContainer.innerHTML = '';
         Object.values(cartItems).map(item =>{
     
            productContainer.innerHTML += `
            <div class="product"><br><br>
            <ion-icon name="close-circle-outline"></ion-icon>
            <img src = "./img/${item.tag}.jpg">
            <span>${item.name}</span> 
            </div>
            <div class ="prices">$${item.Price}</div>
            <div class="quantitys">
            <ion-icon name="caret-back-outline"></ion-icon>
            <span>${item.Incart}</span>
            <ion-icon name="caret-forward-outline"></ion-icon>
            </div>
            <div class="totals">
            $${item.Incart * item.Price},00 </div>
            `;
         });
            productContainer.innerHTML += ` 
            <div class = "basketotalContainer">
                <h4 class ="baskettotaltitle">
                    Basket Total
                </h4>
                <h4 class="basketTotal">
                    $${cartCost},00</h4>
            </div>
               `;
  }
}

onloadcartnumber(); //when we go back to homepage the click will remail unchange
displaycart();

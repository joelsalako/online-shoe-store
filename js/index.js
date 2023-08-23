//initialize empty array for inventory
var storeInventory = [];
//initialize empty cart items
var cartItems = [];

// Object for supported currencies
var currencies = [{
    name: "CAD",
    symbol: "C$",
    rate: 1
},
{
    name: "NAIRA",
    symbol: "₦",
    rate: 332.56
},
{
    name: "USD",
    symbol: "$",
    rate: 0.80
}
]
// active currency index (index of the default Currency)
let activeCurrencyIndex = 0;

/*
active category whose products will be displayed 
All products are displayed by default
*/
var activCategory = "all";

// product constructor
var StoreItem = function (ID, name, price, qty, max, cat, shipping, description, image) {
    this.category = cat;
    this.price = price;
    this.item_description = description;
    //'TD01', 'Penny', 26.99, 4, 2, 'Loafers', 19.99, 'img'
    this.image = image;
    this.item_name = name;
    this.quantity = qty;
    this.maxOrderable = max;
    this.item_id = ID;
    this.reviews = [];
    this.shipping = shipping
}

// Object constructor for Cart Item
var CartItem = function (item_id, item_name, price, quantity, shipping) {
    this.item_id = item_id;
    this.price = price;
    this.quantity = quantity;
    this.item_name = item_name;
    this.shipping = shipping;
}

// Object constructor for product review
var Review = function (review, rating) {
    this.review = review;
    this.rating = rating;
}

//Initialize and empty object for the product that is being viewed on the details page
var inViewProduct = {};


// A function that will display time
function getCurrentDayTime() {
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var currentTime = new Date();
    var dayNumber = currentTime.getDay();
    var today = days[dayNumber]; // Day name obtained
    var hourNow = currentTime.getHours(); //Hour obtained
    var minuteNow = currentTime.getMinutes(); // Minute obtained

    var formattedTime = validateTime(hourNow, minuteNow);
    var dayTime = `${today} ${formattedTime}`;


    document.querySelector("#date-time").textContent = dayTime;
    setTimeout(function () { getCurrentDayTime() }, 1000); // To keep refreshing the time at 1000 ms interval

    return dayTime;
}


// Determine whether it is AM or PM. Helper function for getCurrentDay
function validateTime(hour, minute) {
    var validatedTime;
    if (hour > 0 && hour < 12) {
        if (minute < 10) {
            validatedTime = `${hour}: 0${minute} AM`;
        }
        else {
            validatedTime = `${hour}:${minute} AM`;
        }
    }
    else if (hour === 12) {
        if (minute < 10) {
            validatedTime = `${hour}:0${minute} PM`;
        }
        else {
            validatedTime = `${hour}:${minute} PM`;
        }
    }
    else if (hour > 12) {
        var newHour = hour - 12;
        if (minute < 10) {
            validatedTime = `${newHour}:0${minute} PM`;
        }
        else {
            validatedTime = `${newHour}:${minute} PM`;
        }
    }
    else if (minute < 10) {
        validatedTime = `${12}:0${minute} AM`;
    }
    else {
        validatedTime = `${12}:${minute} AM`;
    }
    return validatedTime;
}

function getCreateStoreInstance() {
    // creating product with Product constructors and adding to the storeInventory array

    var product1 = new StoreItem('TD01', 'Penny', 26.99, 4, 2, 'Loafers', 19.99, 'These classically designed penny loafers are made to last and to give you comfort.', 'Penny Loafers.jpg');
    storeInventory.push(product1)

    var product2 = new StoreItem('TD02', 'Chukka', 299.99, 15, 2, 'Boot', 19.99, 'Chukka boots are ankle-high leather boots. These open-laced boots traditionally have two or three pairs of eyelets. ', 'Chukka Boot.jpg');
    storeInventory.push(product2)


    var product3 = new StoreItem('TD03', 'Plain Toe', 4.49, 25, 2, 'Derby', 19.99, 'This is UNIQLO Plain Toe Derby Shoes(Genderless) details.Dress shoes that are as comfortable as sneakers.', 'Plain toe derby.jpg');
    storeInventory.push(product3)


    var product4 = new StoreItem('TD04', 'Longwing', 54.99, 45, 2, 'Brogue', 19.99, 'A longwing is a style of brogue in which the wingtip perforations span the full length of both sides of the shoe, meeting at the heel counter.', 'Longwing brogue.jpg');
    storeInventory.push(product4)


    var product5 = new StoreItem('TD05', 'Single strap', 5.99, 5, 2, 'Monk', 19.99, 'Strap-fastening is a convenient, time-saving alternative to laces, which creates a more .', 'Single strap.jpg');
    storeInventory.push(product5)

    var product6 = new StoreItem('TD06', 'Brogue derby', 19.99, 50, 2, 'Derby', 19.99, 'Brogue Derby shoes with leather uppers and chunky sole', 'Brogue Derby.jpg');
    storeInventory.push(product6)

    var product7 = new StoreItem('TD07', 'Full Brogue', 9.99, 45, 2, 'Brogue', 19.99, ' Full brogues are the most iconic of the styles and feature a pointed toe cap with wing-like extensions that run along both sides', 'Full Brogue.jpg');
    storeInventory.push(product7)


    var product8 = new StoreItem('TD08', 'Double strap', 26.99, 11, 2, 'Monk', 19.99, 'Double Monk Strap Leather Shoe', 'Double strap monk.jpg');
    storeInventory.push(product8)

    var product9 = new StoreItem('TD09', 'Hazel', 26.99, 35, 2, 'Loafers', 19.99, 'Fine handcrafted in leather, these loafers feature a bold black bridge buckle across the upper vamp of the shoes adding a unique touch to your wardrobe', 'Hazel Loafers.jpg');
    storeInventory.push(product9)


    var product10 = new StoreItem('TD10', 'Chelsea Boot', 56.99, 4, 2, 'Boot', 19.99, 'Chelsea boots have a close fit around the ankle with elastic sides to help them cling to your leg', 'Chelsea boot.jpg');
    storeInventory.push(product10)


    var product11 = new StoreItem('TD11', 'Tripple strap', 22.99, 5, 2, 'Monk', 19.99, ' triple monk leather formals are a real piece of style Gems. The cap toe along with a medallion brogue design provides a very elegant look.', 'Tripple strap monk.jpg');
    storeInventory.push(product11)


    var product12 = new StoreItem('TD12', 'Moc Toe', 49.96, 1, 2, 'Boot', 19.99, 'Moc Toe  were created with the vision of protecting the area around the toe', 'Mac Toe.jpg');
    storeInventory.push(product12)

    var product13 = new StoreItem('TD13', 'Black derby', 56.99, 3, 2, 'Derby', 19.99, 'Classic black Derby shoes go with everything from suits to casual wear and generally enhance every type of outfit in a subtle, low-key way', 'Black derby shoes.jpg');
    storeInventory.push(product13)

    var product14 = new StoreItem('TD14', 'Single strap', 49.99, 2, 2, 'Monk', 19.99, 'the monk strap is a traditionally designed, low-fitting strapped shoe with an upper thats made from three leather pieces', 'Tripple strap monk.jpg');
    storeInventory.push(product14)


    var product15 = new StoreItem('TD15', 'Wing Tip', 28.89, 5, 2, 'Boot', 19.99, 'They are characterized by a leather overlay on the toe that makes a W shape (or a wing shape)', 'Wing tips.jpg');
    storeInventory.push(product15)

    var product16 = new StoreItem('TD16', 'Tassels', 39.99, 9, 2, 'Loafers', 19.99, 'tassel loafers are just laceless shoes that have decorative leather laces hanging from the vamp.', 'Tassel Loafers.jpg');
    storeInventory.push(product16)


    var product17 = new StoreItem('TD17', 'Black suede', 59.99, 10, 2, 'Derby', 19.99, 'Lace up style with punching detail on the upper underneath the quarters. Considered a most elegant style, the MATT Suede Black derby shoe offers a modern ', 'Black Suede Derby.jpg');
    storeInventory.push(product17)

    var product18 = new StoreItem('TD18', 'Kilt', 78.99, 11, 2, 'Loafers', 19.99, 'Classic Kilt Loafer Shoe', 'Kilt Loafers.jpg');
    storeInventory.push(product18)

    var product19 = new StoreItem('TD19', 'Quater Brogue', 89.99, 12, 2, 'Brogue', 19.99, 'hese are the simplest of all brogues with perforations only on the upper edge of the toe cap.', 'Quater brogue.jpg');
    storeInventory.push(product19)


    var product20 = new StoreItem('TD20', 'Kitto', 89.99, 12, 2, 'Brogue', 19.99, 'Semi brogue shoes provide the ideal balance between simplicity and fancy decorations.', 'semi brogue.jpg');
    storeInventory.push(product20)

}

//Function call. To display time when the page loads
getCurrentDayTime();

getCreateStoreInstance();
if (document.querySelector("#homepage")) {
    // load and populate the DOM with items in the storeInventory array. We passed storeInventory to the function because the same function will be used when we filter by category.    
    loadProducts(storeInventory);

    // load options for the category select box 
    loadCategories();
}

// load the options for the currencies' select input
loadCurrencies();


if (document.querySelector("#details-page")) {


    var inViewProductId = getUrlParameters().item;
    for (var i = 0; i < storeInventory.length; i++) {
        if (storeInventory[i].item_id == inViewProductId) {
            inViewProduct = storeInventory[i];
            break;
        }

    }
    // inViewProduct = storeInventory[ 0 ]; // showing first product in inventory

    loadProductDetails()
}
function currencySelector() {
    // var value = e.target.value;
    var value = document.getElementById("currency").value;
    for (let i = 0; i < currencies.length; i++) {

        if (currencies[i].symbol === value) {
            activeCurrencyIndex = i;

            if (document.querySelector("#homepage")) {
                filterProductList();
            }

            if (document.querySelector("#details-page")) {
                loadProductDetails();
            }

        }

    }
}

function loadCurrencies() {
    // load options for the currencies select box
    for (i = 0; i < currencies.length; i++) {
        var option = document.createElement("option");
        option.setAttribute('value', currencies[i].symbol)
        option.innerHTML = currencies[i].name;
        if (i === activeCurrencyIndex) {
            option.setAttribute("selected", "selected")
        }
        document.querySelector("#currency").appendChild(option);
    }

    // Handling change in currency selection with event listener
    document.querySelector('#currency').addEventListener('change', currencySelector);
}

function loadCategories() {
    /*
    This function dynamically creates all the option elements for the category 
    select input.
     */

    // for details page, we don't create the category options
    if (!document.querySelector("#category-list")) return;

    // create and load options for the category select input 
    var categories = [];

    // loops through the storeInventory to get the category property of each item 
    for (i = 0; i < storeInventory.length; i++) {
        if (categories.indexOf(storeInventory[i].category) === -1) {
            categories.push(storeInventory[i].category);
            //Create the option tags
            var option = document.createElement("option");
            //Modify the option tags
            option.setAttribute('value', storeInventory[i].category);
            option.innerHTML = storeInventory[i].category;
            //Add the option tags to the select input
            document.querySelector('#category-list').appendChild(option)
        }
    }


    // event listener for when user select another category option.
    document.querySelector("#category-list").onchange = function () {
        // value of the active category modified
        activCategory = document.getElementById("category-list").value;
        // to filter the displayed products 
        filterProductList();
    };
}

function filterProductList() {
    // filters based on the current category 
    if (activCategory == "all") {
        loadProducts(storeInventory);

    } else {
        let filteredList = [];

        for (i = 0; i < storeInventory.length; i++) {
            if (storeInventory[i].category === activCategory) {
                filteredList.push(storeInventory[i])
            }
        }

        if (filteredList.length > 0) { // If anything has been added to filteredList
            loadProducts(filteredList);
        }
    }
}

function loadInventoryProduct(product) {
    /*
    This function dynamically creates all the required Elements to
    display a single Object (product), places them in a card to be displayed 
    on the page.
    */
    var item = document.createElement("a");
    item.href = `details.html?item=${product.item_id}`;
    item.setAttribute('class', 'card');
    var image = document.createElement("img");
    image.src = `./img/${product.image}`;
    var footerContainer = document.createElement("div");
    var caption = document.createElement("div");
    var priceSpan = document.createElement("span");
    caption.innerHTML = `ID:${product.item_id} <br /> ${product.item_name} <br />  <strong>Qty at hand</strong>: ${product.quantity}`;
    priceSpan.innerHTML = `<strong>Price</strong> ${currencies[activeCurrencyIndex].symbol}${calulateCurrencyEquivalentPrice(product.price)} <br /> Max. per customer: ${product.maxOrderable}`;

    footerContainer.setAttribute('class', 'shop-item-footer');
    footerContainer.appendChild(caption);
    footerContainer.appendChild(priceSpan);

    item.appendChild(image);
    item.appendChild(footerContainer);
    document.querySelector("#product-items").appendChild(item);
}


function loadProducts(storeInventory) {
    // uses the loadInventoryProduct function as a helper function
    // to create all the required HTML elements needed to display each of the 
    // objects (each product) in the array paseed to it as an argument.    
    document.querySelector("#product-items").innerHTML = ""; // clears the content first

    storeInventory.forEach(loadInventoryProduct); // calls the helper function
}


function calulateCurrencyEquivalentPrice(price) {
    // convert price to selected currency
    var currencyDetails = currencies[activeCurrencyIndex];

    const mony = currencyDetails.rate * price
    const str = mony.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    console.log('Money:', str);
    return str;
}


// DETAILS PAGE 
function addToCartListern() {
    if (validateInput()) { // if validation is successfull

        var item = new CartItem(inViewProduct.item_id, inViewProduct.item_name, inViewProduct.price, document.querySelector('#qty').value, inViewProduct.shipping)

        // push the item to cartItems array
        addToCart(item);

        //to enable the remove from cart button
        document.querySelector("#btn-remove-from-cart").removeAttribute('disabled', 'disabled')
    }
}

function removeFromCartListern() {

    for (let i = 0; i < cartItems.length; i++) {
        var item = cartItems[i];
        if (inViewProduct.item_id == item.item_id) {
            inViewProduct.quantity += item.quantity;
            updatestoreInventory();
            cartItems.splice(i, 1)
        }

    }
    alert("Item removed from cart");

    document.querySelector("#btn-remove-from-cart").setAttribute('disabled', 'disabled')
}


if (document.querySelector("#btn-add-to-cart")) {
    // when user click on add to cart button 
    document.querySelector("#btn-add-to-cart").addEventListener("click", addToCartListern);

}
if (document.querySelector("#btn-remove-from-cart")) {
    // when user click on remove from cart button as required in number 9
    document.querySelector("#btn-remove-from-cart").addEventListener('click', removeFromCartListern);


}


// this function dislays item details
function loadProductDetails() {

    for (var titleElement of document.querySelectorAll(".item-title")) {
        titleElement.innerHTML = inViewProduct.item_name;
    }
    document.querySelector("#price").innerHTML = `${currencies[activeCurrencyIndex].symbol}${calulateCurrencyEquivalentPrice(inViewProduct.price)}`;
    document.querySelector("#product-description").innerHTML = inViewProduct.item_description;
    document.querySelector("#available-qty").innerHTML = inViewProduct.quantity;
    document.querySelector("#main-product-image").src = `./img/${inViewProduct.image}`;
};


function validateInput() {
    // validates qty input on details page
    var qty = document.querySelector('#qty').value;
    if (isNaN(Number(qty))) {
        document.querySelector("#error-message").innerHTML = "Quantity must be a digit";
        document.querySelector('#error-message').classList.remove("hidden");
        return false;
    } else if (qty < 1) {
        document.querySelector("#error-message").innerHTML = "Quantity cannot be less than 1";
        document.querySelector('#error-message').classList.remove("hidden");
        return false;
    } else if (qty > inViewProduct.maxOrderable) {
        document.querySelector("#error-message").innerHTML = `You cannot order more than ${inViewProduct.maxOrderable}`;
        document.querySelector('#error-message').classList.remove("hidden");
        return false;
    }

    document.querySelector('#error-message').setAttribute('class', 'hidden');
    return true;
}

function showReview() {
    // to show reviews in alert box
    var message = `Product Reviews (${inViewProduct.reviews.length}) \n\n`;

    if (inViewProduct.reviews.length === 0) {
        message += "No Review Yet"
    } else {
        var rating = 0;
        for (var i = 0; i < inViewProduct.reviews.length; i++) {
            var review = inViewProduct.reviews[i];
            message += `Review ${i + 1}: ${review.review} \n\n`;
            rating += review.rating;
        }

        // calculate average rating 
        var averageRating = rating / inViewProduct.reviews.length;

        message += `Average Rating: ${averageRating}`
    }

    alert(message)
}

function postReview() {
    var review = window.prompt("Your message");
    if (review !== "" && review != null) {
        var rating = window.prompt("How would you rate it over 5?");
        if (rating !== "" && rating != null) {
            if (rating >= 1 && rating <= 5) {
                alert("Thank you for posting a review");

                var newReview = new Review(review, rating);
                inViewProduct.reviews.push(newReview);
                updatestoreInventory();
            } else {
                alert("Rating must be between 1 - 5");
            }
        } else {
            alert("Rating cannot be empty")
        }
    }
}

function showCart() {
    var subTotal = 0;
    var shippingFee = 0;
    var tax = 10;
    if (cartItems.length > 0) {
        var cartContent = "My Cart \n\n";
        for (var i = 0; i < cartItems.length; i++) {
            var item = cartItems[i];
            subTotal += Number(item.price * item.quantity);
            shippingFee += Number(item.shipping * item.quantity)
            cartContent += `Item${i + 1}. ID: ${item.item_id} - Name : ${item.item_name} - Qty: ${item.quantity}- Price ${currencies[activeCurrencyIndex].symbol}${calulateCurrencyEquivalentPrice(item.price * item.quantity)} \n\n`
        }

        // calculating and displaying cart totals as required in number 6
        cartContent += `Items Subtotal: ${currencies[activeCurrencyIndex].symbol}${calulateCurrencyEquivalentPrice(subTotal)} \n`;
        cartContent += `Estimated Shipping Fee: ${currencies[activeCurrencyIndex].symbol}${calulateCurrencyEquivalentPrice(shippingFee)} \n`;
        cartContent += `Subtotal: ${currencies[activeCurrencyIndex].symbol}${calulateCurrencyEquivalentPrice(subTotal + shippingFee)} \n\n`;
        cartContent += `Estimated Tax: ${currencies[activeCurrencyIndex].symbol}${calulateCurrencyEquivalentPrice(tax)} \n`;
        cartContent += `Order Total: ${currencies[activeCurrencyIndex].symbol}${calulateCurrencyEquivalentPrice(subTotal + shippingFee + tax)} \n`;

        // displays cart items as required in number 5
        alert(cartContent)
    } else {
        alert("No item in your cart")
    }
}

function addToCart(item) {
    // push the item to cartItems array
    cartItems.push(item);

    // to reduce the total available quantities 
    inViewProduct.quantity -= item.quantity;

    updatestoreInventory();

    document.querySelector('#qty').value = ""
    loadProductDetails();
    alert(`${inViewProduct.item_name} added to cart successfully \n\n Qty: ${item.quantity} \n\n Price: ${currencies[activeCurrencyIndex].symbol}${calulateCurrencyEquivalentPrice(inViewProduct.price * item.quantity)}`)
};

if (document.querySelector("#show-review")) {
    // when user click on show review button as required in number 10
    document.querySelector('#show-review').addEventListener('click', showReview);

}

// when user want to add a review as required in number 10
if (document.querySelector("#post-review")) {
    document.querySelector('#post-review').addEventListener('click', postReview);

}

if (document.querySelector("#btn-cart")) {
    // event listener for when the cart button is clicked, it'll show all items in cart using alert box as required in number 3 point 4
    document.querySelector('#btn-cart').addEventListener('click', showCart);


}

function updatestoreInventory() {
    // called when user post review, add item to cart, or remove item from cart
    for (var i = 0; i < storeInventory.length; i++) {
        var item = storeInventory[i];

        if (item.item_id == inViewProduct.item_id) {
            storeInventory[i] = inViewProduct;
            break;
        }

    }
}


function getUrlParameters() {
    // for getting url parameter on details page
    var e = window.location.search.substr(1);
    //e = item=TD01 (for item 1 in this case)
    return null != e && "" != e ? transformToAssocArray(e) : {};
}

function transformToAssocArray(e) {
    for (
        var t = { full: { all: e, slice: e.slice(5, e.length) } },
        n = e.split("&"),
        a = 0;
        a < n.length;
        a++
    ) {
        var i = n[a].split("=");
        t[i[0]] = i[1];
    }
    return t;
}
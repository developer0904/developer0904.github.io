//shopping cart
let cart = {};
const products = [
  { id: 1, name: "Product 1", price: 25 },
  { id: 2, name: "Product 2", price: 50 },
  { id: 3, name: "Product 3", price: 75 },
];



function showProducts() {
    // Get the root element by class name (since in HTML it's class="root")
    const root = document.querySelector('.root');
    if (!root) return;
    root.innerHTML = '';
    products.forEach((value) => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <h3>${value.name}</h3>
            <p>Price: $${value.price}</p>
            <button onclick="addToCart(${value.id})">Add to Cart</button>
          
            
            
        `;
        root.appendChild(productDiv);
    });
}

function showCart(){

    const root = document.querySelector('.cart-show');
    if (!root) return;
    root.innerHTML = '';
    products.forEach((value) => {
        if (cart[value.id]) {
            const cartDiv = document.createElement("div");
            cartDiv.className = "cart-item";
            cartDiv.innerHTML = `
                <h3>${value.name}</h3>
                <p>Price: $${value.price}</p>
                <p>Quantity: ${cart[value.id]}</p>
                <p>Total: $${value.price * cart[value.id]}</p>
                  <div>
            <button onclick="increment(${value.id})">+</button>
            <button onclick="decrement(${value.id})">-</button>
            </div>   
            `;
            root.appendChild(cartDiv);
        }
    });

    showOrderValue();
    // Display the total order value

}

function addToCart(id) {
  cart = { ...cart, [id]: 1 };
  showCart();
}
function increment(id) {

    
  cart = { ...cart, [id]: cart[id] + 1 };
  showCart();
}
function decrement(id) {
  cart = { ...cart, [id]: cart[id] - 1 };
  showCart();
}


function showOrderValue(){

    const total = products.reduce((sum,value)=> {
    return sum + value.price*(cart[value.id]??0)
    },0)
    console.log(`Order Value:${total}`)

    document.getElementById('orderValue').innerHTML = `Order Value: $${total}`;
    // Assuming you have an element with id 'orderValue' to display the total order value

}



// showProducts();
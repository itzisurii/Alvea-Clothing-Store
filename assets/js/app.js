function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // push product
    cart.push({ name, price, image });

    // save back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${name} added to cart! 🛒`);
}

function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cartItems");

    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p class="text-gray-400">Your cart is empty.</p>`;
        return;
    }

    cart.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "flex items-center bg-gray-100 p-4 rounded-lg shadow";

        itemDiv.innerHTML = `
        <img src="${item.image}" class="w-20 h-20 object-cover rounded mr-4">
        <div class="flex-1">
          <h3 class="font-semibold text-gray-900">${item.name}</h3>
          <p class="text-gray-600">$${item.price}</p>
        </div>
        <button onclick="removeFromCart(${index})" 
                class="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700">
          Remove
        </button>
      `;

        cartItemsContainer.appendChild(itemDiv);
    });
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

loadCart();
let cart = JSON.parse(
  localStorage.getItem("premiumTimepiecesCart") || "[]"
);

const checkoutContent = document.getElementById("checkoutContent");
const toast = document.getElementById("checkoutToast");

function formatPrice(value) {
  return `Rs. ${Number(value).toLocaleString("en-PK")}`;
}

function saveCart() {
  localStorage.setItem(
    "premiumTimepiecesCart",
    JSON.stringify(cart)
  );
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

function getSubtotal() {
  return cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

function changeQuantity(id, change) {
  const item = cart.find(
    (product) => Number(product.id) === Number(id)
  );

  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    cart = cart.filter(
      (product) => Number(product.id) !== Number(id)
    );
  }

  saveCart();
  renderCheckout();
}

function removeItem(id) {
  cart = cart.filter(
    (product) => Number(product.id) !== Number(id)
  );

  saveCart();
  renderCheckout();

  showToast("Item removed from cart");
}

function renderCheckout() {
  if (!checkoutContent) return;

  if (cart.length === 0) {
    checkoutContent.innerHTML = `
      <div class="checkout-box empty-checkout">
        <h2>Your Cart Is Empty</h2>
        <p>You haven't added any watches to your cart yet.</p>

        <a href="index.html">
          CONTINUE SHOPPING
        </a>
      </div>
    `;

    return;
  }

  const subtotal = getSubtotal();

  checkoutContent.innerHTML = `
    <div class="checkout-grid">

      <!-- CART ITEMS -->
      <div class="checkout-box">

        <h2>Your Items</h2>

        <div>
          ${cart.map((item) => `
            <div class="checkout-item">

              <div class="checkout-item-image">
                <img
                  src="${item.img}"
                  alt="${item.name}"
                >
              </div>

              <div class="checkout-item-info">

                <h3>${item.name}</h3>

                <div class="checkout-item-price">
                  ${formatPrice(item.price)}
                </div>

                <div class="checkout-item-controls">

                  <button
                    type="button"
                    onclick="changeQuantity(${item.id}, -1)"
                  >
                    −
                  </button>

                  <span>${item.quantity}</span>

                  <button
                    type="button"
                    onclick="changeQuantity(${item.id}, 1)"
                  >
                    +
                  </button>

                  <button
                    type="button"
                    class="checkout-remove"
                    onclick="removeItem(${item.id})"
                  >
                    Remove
                  </button>

                </div>

              </div>

            </div>
          `).join("")}
        </div>

      </div>


      <!-- ORDER SUMMARY -->
      <div>

        <div class="checkout-box">

          <h2>Order Summary</h2>

          <div class="summary-row">
            <span>Subtotal</span>
            <strong>${formatPrice(subtotal)}</strong>
          </div>

          <div class="summary-row">
            <span>Shipping</span>
            <strong>FREE</strong>
          </div>

          <div class="summary-row total">
            <span>Total</span>
            <strong>${formatPrice(subtotal)}</strong>
          </div>

        </div>


        <!-- CUSTOMER DETAILS -->
        <div class="checkout-box customer-form">

          <h2>Customer Details</h2>

          <form id="orderForm">

            <div class="form-group">
              <label>FULL NAME</label>

              <input
                type="text"
                id="customerName"
                placeholder="Enter your full name"
                required
              >
            </div>


            <div class="form-group">
              <label>PHONE NUMBER</label>

              <input
                type="tel"
                id="customerPhone"
                placeholder="03XX XXXXXXX"
                required
              >
            </div>


            <div class="form-group">
              <label>EMAIL ADDRESS</label>

              <input
                type="email"
                id="customerEmail"
                placeholder="your@email.com"
                required
              >
            </div>


            <div class="form-group">
              <label>CITY</label>

              <select id="customerCity" required>

                <option value="">
                  Select City
                </option>

                <option>Karachi</option>
                <option>Lahore</option>
                <option>Islamabad</option>
                <option>Rawalpindi</option>
                <option>Faisalabad</option>
                <option>Multan</option>
                <option>Peshawar</option>
                <option>Quetta</option>
                <option>Hyderabad</option>
                <option>Sialkot</option>
                <option>Gujranwala</option>
                <option>Other</option>

              </select>
            </div>


            <div class="form-group">
              <label>DELIVERY ADDRESS</label>

              <textarea
                id="customerAddress"
                placeholder="Enter your complete delivery address"
                required
              ></textarea>
            </div>


            <div class="form-group">

              <label>PAYMENT METHOD</label>

              <select id="paymentMethod" required>

                <option value="">
                  Select Payment Method
                </option>

                <option value="cod">
                  Cash on Delivery
                </option>

              </select>

            </div>


            <button
              type="submit"
              class="place-order-btn"
            >
              PLACE ORDER — ${formatPrice(subtotal)}
            </button>

          </form>

          <a
            href="index.html"
            class="continue-shopping"
          >
            ← Continue Shopping
          </a>

        </div>

      </div>

    </div>
  `;

  const orderForm = document.getElementById("orderForm");

  if (orderForm) {
    orderForm.addEventListener(
      "submit",
      placeOrder
    );
  }
}

function placeOrder(event) {
  event.preventDefault();

  if (cart.length === 0) {
    showToast("Your cart is empty");
    return;
  }

  const customer = {
    name: document.getElementById("customerName").value.trim(),
    phone: document.getElementById("customerPhone").value.trim(),
    email: document.getElementById("customerEmail").value.trim(),
    city: document.getElementById("customerCity").value,
    address: document.getElementById("customerAddress").value.trim(),
    payment: document.getElementById("paymentMethod").value
  };

  const order = {
    id:
      "PT-" +
      Date.now().toString().slice(-8),

    createdAt: new Date().toISOString(),

    customer,

    items: cart.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      img: item.img
    })),

    subtotal: getSubtotal(),

    shipping: 0,

    total: getSubtotal(),

    status: "pending"
  };

  /*
    Temporary local order storage.

    Later Supabase backend ke saath
    isi order ko database mein save karenge.
  */

  let orders = JSON.parse(
    localStorage.getItem("premiumTimepiecesOrders") || "[]"
  );

  orders.push(order);

  localStorage.setItem(
    "premiumTimepiecesOrders",
    JSON.stringify(orders)
  );

  // Empty cart after successful order
  cart = [];

  saveCart();

  checkoutContent.innerHTML = `
    <div class="checkout-box empty-checkout">

      <div style="font-size:50px;margin-bottom:15px;">
        ✓
      </div>

      <h2>Order Placed Successfully!</h2>

      <p>
        Thank you for shopping with Premium Timepieces.
      </p>

      <p>
        Your Order ID:
        <strong>${order.id}</strong>
      </p>

      <p>
        We will contact you shortly to confirm your order.
      </p>

      <a href="index.html">
        BACK TO STORE
      </a>

    </div>
  `;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

renderCheckout();
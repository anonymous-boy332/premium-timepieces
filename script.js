const products = [
  {
    id: 1,
    name: "Royal Classic",
    price: 14999,
    sale: 17999,
    img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=500&q=80",
    tag: "New",
    cat: "new"
  },
  {
    id: 2,
    name: "Executive Black",
    price: 18999,
    sale: 21999,
    img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=500&q=80",
    tag: "",
    cat: "best"
  },
  {
    id: 3,
    name: "Gold Heritage",
    price: 12999,
    sale: 15999,
    img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=500&q=80",
    tag: "New",
    cat: "new"
  },
  {
    id: 4,
    name: "Classic Steel",
    price: 11999,
    sale: 14999,
    img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=500&q=80",
    tag: "New",
    cat: "sale"
  },
  {
    id: 5,
    name: "Prestige Silver",
    price: 13999,
    sale: 16999,
    img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=500&q=80",
    tag: "New",
    cat: "new"
  },
  {
    id: 6,
    name: "Midnight Steel",
    price: 15999,
    sale: 18999,
    img: "https://images.unsplash.com/photo-1518544801976-3e159e50e5bb?auto=format&fit=crop&w=500&q=80",
    tag: "",
    cat: "best"
  },
  {
    id: 7,
    name: "Royal Leather",
    price: 19999,
    sale: 23999,
    img: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?auto=format&fit=crop&w=500&q=80",
    tag: "Sale",
    cat: "sale"
  },
  {
    id: 8,
    name: "Urban Chronograph",
    price: 17999,
    sale: 21999,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
    tag: "New",
    cat: "new"
  },
  {
    id: 9,
    name: "Classic Gold",
    price: 14999,
    sale: 17999,
    img: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=500&q=80",
    tag: "New",
    cat: "new"
  },
  {
    id: 10,
    name: "Elite Black",
    price: 9999,
    sale: 12999,
    img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=500&q=80",
    tag: "New",
    cat: "best"
  },
  {
    id: 11,
    name: "Signature Classic",
    price: 15999,
    sale: 18999,
    img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=500&q=80",
    tag: "New",
    cat: "new"
  },
  {
    id: 12,
    name: "Luxury Automatic",
    price: 24999,
    sale: 29999,
    img: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=500&q=80",
    tag: "New",
    cat: "best"
  },
  {
    id: 13,
    name: "Golden Crown",
    price: 16999,
    sale: 19999,
    img: "https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?auto=format&fit=crop&w=500&q=80",
    tag: "New",
    cat: "new"
  },
  {
    id: 14,
    name: "Royal Black Edition",
    price: 17999,
    sale: 21999,
    img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=500&q=80",
    tag: "New",
    cat: "sale"
  }
];

function formatPrice(price) {
  return `Rs. ${price.toLocaleString("en-PK")}`;
}


/* =========================
   PRODUCT CARD
========================= */

function card(p) {
  return `
    <article class="product" onclick="openProduct(${p.id})">

      ${p.tag ? `<span class="tag">${p.tag}</span>` : ""}

      <div class="product-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
      </div>

      <div class="product-info">

        <div class="product-name">
          ${p.name}
        </div>

        <div class="stars">
          ★ ★ ★ ★ ★
        </div>

        <div class="price">
          ${formatPrice(p.price)}
          <span class="old">
            ${formatPrice(p.sale)}
          </span>
        </div>

        <button
  class="add-btn"
  data-id="${p.id}"
  onclick="event.preventDefault(); event.stopPropagation(); addToCart(${p.id}, 1);"
  style="
    margin-top:10px;
    border:1px solid #c9a227;
    background:#c9a227;
    color:#111;
    padding:9px 14px;
    font-size:9px;
    font-weight:700;
    letter-spacing:1px;
    cursor:pointer;
  "
>
  ADD TO CART
</button>

      </div>

    </article>
  `;
}


/* =========================
   PRODUCT RENDERING
========================= */

const best = document.querySelector("#bestSeller");
const list = document.querySelector("#products");

function renderBest() {
  if (!best) return;

  best.innerHTML = products
    .slice(0, 4)
    .map(card)
    .join("");
}

function renderProducts(filter = "all") {
  if (!list) return;

  const items =
    filter === "all"
      ? products.slice(4)
      : products.filter((p) => p.cat === filter);

  list.innerHTML = items.length
    ? items.map(card).join("")
    : `
      <p style="grid-column:1/-1;text-align:center;padding:40px">
        No products found.
      </p>
    `;
}

renderBest();
renderProducts();


/* =========================
   PRODUCT TABS
========================= */

document.querySelectorAll(".tabs button").forEach((btn) => {

  btn.addEventListener("click", () => {

    document
      .querySelectorAll(".tabs button")
      .forEach((b) => b.classList.remove("active"));

    btn.classList.add("active");

    renderProducts(btn.dataset.filter);
  });

});


/* =========================
   CART STORAGE
========================= */

let cart = JSON.parse(
  localStorage.getItem("premiumTimepiecesCart") || "[]"
);

function saveCart() {
  localStorage.setItem(
    "premiumTimepiecesCart",
    JSON.stringify(cart)
  );
}

function cartItemCount() {
  return cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
}

function updateCartCount() {

  const cartCount = document.querySelector("#cartCount");

  if (cartCount) {
    cartCount.textContent = cartItemCount();
  }
}

updateCartCount();


/* =========================
   ADD TO CART
========================= */

function addToCart(productId, quantity = 1) {
  const product = products.find(
    (p) => Number(p.id) === Number(productId)
  );

  if (!product) {
    console.error("Product not found:", productId);
    return;
  }

  const existing = cart.find(
    (item) => Number(item.id) === Number(productId)
  );

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
      quantity: quantity
    });
  }

  saveCart();
  updateCartCount();
  renderCart();

  showToast(`${product.name} added to cart ✓`);
}



/* =========================
   SEARCH
========================= */

const searchBtn = document.querySelector("#searchBtn");
const searchInput = document.querySelector("#searchInput");

if (searchBtn && searchInput) {

  searchBtn.addEventListener("click", () => {

    const q = searchInput.value
      .toLowerCase()
      .trim();

    if (!q) {

      renderProducts();

      return;
    }

    const results = products.filter((p) =>
      p.name.toLowerCase().includes(q)
    );

    list.innerHTML = results.length
      ? results.map(card).join("")
      : `
        <p style="grid-column:1/-1;text-align:center;padding:40px">
          No products found for "${searchInput.value}".
        </p>
      `;

    document
      .querySelector("#shop")
      ?.scrollIntoView({
        behavior: "smooth"
      });

  });


  searchInput.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {
      searchBtn.click();
    }

  });

}


/* =========================
   NEWSLETTER
========================= */

const newsletterForm =
  document.querySelector("#newsletterForm");

if (newsletterForm) {

  newsletterForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const emailInput =
      newsletterForm.querySelector("input");

    if (emailInput) {
      emailInput.value = "";
    }

    showToast(
      "Thank you for subscribing ✓"
    );

  });

}


/* =========================
   TOAST
========================= */

function showToast(message) {

  let toast = document.querySelector("#toast");

  if (!toast) return;

  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);

}


/* =========================
   OPEN PRODUCT
========================= */

function openProduct(id) {

  window.location.href =
    `product.html?id=${id}`;

}


/* =========================
   CART DRAWER
========================= */

function createCartDrawer() {

  if (document.querySelector("#cartDrawer")) {
    return;
  }

  const drawer = document.createElement("div");

  drawer.id = "cartDrawer";

  drawer.innerHTML = `

    <div class="cart-overlay" id="cartOverlay"></div>

    <aside class="cart-panel">

      <div class="cart-header">

        <div>
          <span class="cart-small">
            YOUR SELECTION
          </span>

          <h2>
            Shopping Cart
          </h2>
        </div>

        <button
          class="cart-close"
          id="cartClose"
        >
          ×
        </button>

      </div>

      <div
        class="cart-items"
        id="cartItems"
      ></div>

      <div class="cart-footer">

        <div class="cart-total-row">

          <span>
            TOTAL
          </span>

          <strong id="cartTotal">
            Rs. 0
          </strong>

        </div>

        <button
          class="checkout-btn"
          id="checkoutBtn"
        >
          PROCEED TO CHECKOUT
        </button>

        <button
          class="continue-btn"
          id="continueShopping"
        >
          CONTINUE SHOPPING
        </button>

      </div>

    </aside>
  `;

  document.body.appendChild(drawer);

  renderCart();


  document
    .querySelector("#cartClose")
    .addEventListener("click", closeCart);


  document
    .querySelector("#cartOverlay")
    .addEventListener("click", closeCart);


  document
    .querySelector("#continueShopping")
    .addEventListener("click", closeCart);


  document
  .querySelector("#checkoutBtn")
  .addEventListener("click", () => {

    if (!cart.length) {
      showToast("Your cart is empty");
      return;
    }

   window.location.href = "checkout.html";

  });


  document.addEventListener("click", (e) => {

    const qtyButton =
      e.target.closest("[data-cart-action]");

    if (!qtyButton) return;

    const id =
      Number(qtyButton.dataset.id);

    const action =
      qtyButton.dataset.cartAction;

    changeCartQuantity(id, action);

  });

}

createCartDrawer();


/* =========================
   RENDER CART
========================= */

function renderCart() {

  const itemsEl =
    document.querySelector("#cartItems");

  const totalEl =
    document.querySelector("#cartTotal");

  if (!itemsEl || !totalEl) return;


  if (!cart.length) {

    itemsEl.innerHTML = `

      <div class="empty-cart">

        <div class="empty-cart-icon">
          🛒
        </div>

        <h3>
          Your cart is empty
        </h3>

        <p>
          Discover our premium timepieces
          and find something made for you.
        </p>

      </div>

    `;

    totalEl.textContent =
      "Rs. 0";

    return;
  }


  itemsEl.innerHTML = cart.map((item) => `

    <div class="cart-item">

      <img
        src="${item.img}"
        alt="${item.name}"
      >

      <div class="cart-item-info">

        <h4>
          ${item.name}
        </h4>

        <div class="cart-item-price">
          ${formatPrice(item.price)}
        </div>

        <div class="cart-controls">

          <button
            data-cart-action="minus"
            data-id="${item.id}"
          >
            −
          </button>

          <span>
            ${item.quantity}
          </span>

          <button
            data-cart-action="plus"
            data-id="${item.id}"
          >
            +
          </button>

        </div>

      </div>

      <button
        class="remove-cart"
        data-cart-action="remove"
        data-id="${item.id}"
        title="Remove"
      >
        ×
      </button>

    </div>

  `).join("");


  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  totalEl.textContent =
    formatPrice(total);
}


/* =========================
   CART QUANTITY
========================= */

function changeCartQuantity(id, action) {

  const item = cart.find(
    (product) => product.id === id
  );

  if (!item) return;


  if (action === "plus") {
    item.quantity++;
  }


  if (action === "minus") {

    item.quantity--;

    if (item.quantity <= 0) {

      cart = cart.filter(
        (product) => product.id !== id
      );

    }

  }


  if (action === "remove") {

    cart = cart.filter(
      (product) => product.id !== id
    );

  }


  saveCart();
  updateCartCount();
  renderCart();
}


/* =========================
   OPEN / CLOSE CART
========================= */

function openCart() {

  const drawer =
    document.querySelector("#cartDrawer");

  if (!drawer) return;

  drawer.classList.add("open");

  document.body.classList.add(
    "cart-open"
  );

  renderCart();
}


function closeCart() {

  const drawer =
    document.querySelector("#cartDrawer");

  if (!drawer) return;

  drawer.classList.remove("open");

  document.body.classList.remove(
    "cart-open"
  );

}


/* =========================
   CART ICON
========================= */

document.addEventListener("click", (e) => {

  const count =
    document.querySelector("#cartCount");

  if (!count) return;

  const cartButton =
    count.closest("a,button,.header-action,.action");

  if (
    cartButton &&
    cartButton.contains(e.target)
  ) {

    e.preventDefault();

    openCart();

  }

});

console.log("SCRIPT JS LOADED");
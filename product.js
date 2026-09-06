const products = [
  {
    id: 1,
    name: "Classic Black Leather",
    price: 14999,
    oldPrice: 17999,
    category: "Men's Watches",
    tag: "bestseller",
    img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85",
    description:
      "A timeless leather watch designed for everyday elegance, featuring a refined black dial and premium stainless-steel case."
  },
  {
    id: 2,
    name: "Royal Gold Chronograph",
    price: 22999,
    oldPrice: 27999,
    category: "Luxury Watches",
    tag: "sale",
    img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=900&q=85",
    description:
      "A bold luxury chronograph combining a sophisticated gold finish with precision quartz movement."
  },
  {
    id: 3,
    name: "Silver Executive",
    price: 18999,
    oldPrice: 21999,
    category: "Men's Watches",
    tag: "featured",
    img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=85",
    description:
      "Elegant silver styling with a clean dial, perfect for formal occasions and modern professional looks."
  },
  {
    id: 4,
    name: "Midnight Black",
    price: 16999,
    oldPrice: 19999,
    category: "Men's Watches",
    tag: "new",
    img: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&w=900&q=85",
    description:
      "A sleek all-black timepiece with a contemporary silhouette and premium finishing."
  },
  {
    id: 5,
    name: "Rose Gold Elegance",
    price: 19999,
    oldPrice: 23999,
    category: "Women's Watches",
    tag: "bestseller",
    img: "https://images.unsplash.com/photo-1526045431048-f857369baa09?auto=format&fit=crop&w=900&q=85",
    description:
      "A graceful rose-gold watch created for a sophisticated and elegant everyday look."
  },
  {
    id: 6,
    name: "Pearl Lady",
    price: 15999,
    oldPrice: 18999,
    category: "Women's Watches",
    tag: "featured",
    img: "https://images.unsplash.com/photo-1518544801976-3e159e50e5bb?auto=format&fit=crop&w=900&q=85",
    description:
      "A delicate women's timepiece with a refined dial and premium details."
  },
  {
    id: 7,
    name: "Royal Silver",
    price: 24999,
    oldPrice: 29999,
    category: "Luxury Watches",
    tag: "sale",
    img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=900&q=85",
    description:
      "Premium silver construction with a luxurious presence and precise timekeeping."
  },
  {
    id: 8,
    name: "Urban Steel",
    price: 17999,
    oldPrice: 20999,
    category: "Men's Watches",
    tag: "new",
    img: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=900&q=85",
    description:
      "Modern stainless-steel styling made for confident everyday wear."
  },
  {
    id: 9,
    name: "Golden Heritage",
    price: 28999,
    oldPrice: 33999,
    category: "Luxury Watches",
    tag: "bestseller",
    img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=85",
    description:
      "A statement luxury watch inspired by classic heritage designs and modern craftsmanship."
  },
  {
    id: 10,
    name: "Elegant White",
    price: 15499,
    oldPrice: 18499,
    category: "Women's Watches",
    tag: "new",
    img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=900&q=85",
    description:
      "Minimal white styling with an elegant profile that complements any outfit."
  },
  {
    id: 11,
    name: "Titanium Edge",
    price: 21999,
    oldPrice: 25999,
    category: "Men's Watches",
    tag: "featured",
    img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85",
    description:
      "A modern titanium-inspired design delivering a lightweight premium feel."
  },
  {
    id: 12,
    name: "Diamond Glow",
    price: 31999,
    oldPrice: 37999,
    category: "Women's Watches",
    tag: "sale",
    img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=900&q=85",
    description:
      "An elegant statement piece featuring a luxurious dial and glamorous finishing."
  },
  {
    id: 13,
    name: "Executive Gold",
    price: 26999,
    oldPrice: 31999,
    category: "Luxury Watches",
    tag: "featured",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    description:
      "A sophisticated gold-tone executive watch built for a premium presence."
  },
  {
    id: 14,
    name: "Modern Classic",
    price: 18999,
    oldPrice: 22499,
    category: "Men's Watches",
    tag: "new",
    img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85",
    description:
      "A versatile modern classic combining timeless proportions with contemporary details."
  }
];

const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id"));

const product = products.find((item) => item.id === productId);

const nameEl = document.getElementById("productName");
const priceEl = document.getElementById("productPrice");
const oldPriceEl = document.getElementById("productOldPrice");
const imageEl = document.getElementById("productImage");
const descriptionEl = document.getElementById("productDescription");
const quantityEl = document.getElementById("quantity");

function formatPrice(value) {
  return `Rs. ${Number(value).toLocaleString("en-PK")}`;
}

function showToast(message) {
  let toast = document.getElementById("productToast");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "productToast";
    toast.className = "product-toast";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

if (!product) {
  document.body.innerHTML = `
    <div style="
      min-height:100vh;
      display:flex;
      align-items:center;
      justify-content:center;
      padding:30px;
      font-family:Arial,sans-serif;
      text-align:center;
    ">
      <div>
        <h1>Product Not Found</h1>
        <p>This product does not exist.</p>
        <a href="index.html">Back to Store</a>
      </div>
    </div>
  `;
} else {
  document.title = `${product.name} — Premium Timepieces`;

  if (nameEl) {
    nameEl.textContent = product.name;
  }

  if (priceEl) {
    priceEl.textContent = formatPrice(product.price);
  }

  if (oldPriceEl) {
    oldPriceEl.textContent = formatPrice(product.oldPrice);
  }

  if (imageEl) {
    imageEl.src = product.img;
    imageEl.alt = product.name;
  }

  if (descriptionEl) {
    descriptionEl.textContent = product.description;
  }

  if (quantityEl) {
    quantityEl.value = 1;
  }
}

/* =========================
   QUANTITY
========================= */

const minusBtn = document.getElementById("minusBtn");
const plusBtn = document.getElementById("plusBtn");

if (minusBtn) {
  minusBtn.addEventListener("click", () => {
    let quantity = Number(quantityEl.value) || 1;

    if (quantity > 1) {
      quantity--;
    }

    quantityEl.value = quantity;
  });
}

if (plusBtn) {
  plusBtn.addEventListener("click", () => {
    let quantity = Number(quantityEl.value) || 1;

    quantity++;

    quantityEl.value = quantity;
  });
}

/* =========================
ADD TO CART
========================= */

const addToCartBtn = document.getElementById("addCartBtn");

if (addToCartBtn && product) {
  addToCartBtn.onclick = function () {
    const quantity = Math.max(
      1,
      Number(quantityEl.textContent) || 1
    );

    let cart = JSON.parse(
      localStorage.getItem("premiumTimepiecesCart") || "[]"
    );

    const existingItem = cart.find(
      (item) => Number(item.id) === Number(product.id)
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        img: product.img,
        quantity: quantity
      });
    }

    localStorage.setItem(
      "premiumTimepiecesCart",
      JSON.stringify(cart)
    );

    showToast(`${product.name} added to cart ✓`);
  };
}

/* =========================
   WISHLIST
========================= */

const wishlistBtn = document.getElementById("wishlistBtn");

if (wishlistBtn && product) {
  wishlistBtn.addEventListener("click", () => {
    let wishlist = JSON.parse(
      localStorage.getItem("premiumTimepiecesWishlist") || "[]"
    );

    const exists = wishlist.some(
      (id) => Number(id) === Number(product.id)
    );

    if (exists) {
      wishlist = wishlist.filter(
        (id) => Number(id) !== Number(product.id)
      );

      showToast("Removed from wishlist");
    } else {
      wishlist.push(product.id);

      showToast("Added to wishlist");
    }

    localStorage.setItem(
      "premiumTimepiecesWishlist",
      JSON.stringify(wishlist)
    );
  });
}
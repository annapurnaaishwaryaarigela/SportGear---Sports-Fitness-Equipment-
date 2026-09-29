/* =========================================
   PRODUCT DATABASE
========================================= */

const products = [

    {
        id: 1,
        name: "Velocity Running Shoes",
        category: "Footwear",
        sport: "Running",
        price: 3499,
        oldPrice: 4999,
        rating: 4.8,
        reviews: 126,
        badge: "BEST SELLER",
        sizes: ["6", "7", "8", "9", "10"],
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=85",
        description: "Lightweight performance running shoes designed for daily training and long-distance running."
    },

    {
        id: 2,
        name: "Pro Football Cleats",
        category: "Footwear",
        sport: "Football",
        price: 4299,
        oldPrice: 5999,
        rating: 4.7,
        reviews: 94,
        badge: "POPULAR",
        sizes: ["7", "8", "9", "10", "11"],
        image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=800&q=85",
        description: "High-grip football cleats engineered for speed, control and stability."
    },

    {
        id: 3,
        name: "Elite Training Jersey",
        category: "Apparel",
        sport: "Football",
        price: 1499,
        oldPrice: 1999,
        rating: 4.6,
        reviews: 71,
        badge: "NEW",
        sizes: ["S", "M", "L", "XL", "XXL"],
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=85",
        description: "Breathable athletic jersey suitable for training, matches and everyday workouts."
    },

    {
        id: 4,
        name: "Performance Training Shorts",
        category: "Apparel",
        sport: "Running",
        price: 999,
        oldPrice: 1499,
        rating: 4.5,
        reviews: 58,
        badge: "SALE",
        sizes: ["S", "M", "L", "XL"],
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=85",
        description: "Flexible and lightweight training shorts made for comfortable movement."
    },

    {
        id: 5,
        name: "Adjustable Dumbbell Set",
        category: "Gym Equipment",
        sport: "Gym",
        price: 5499,
        oldPrice: 6999,
        rating: 4.9,
        reviews: 183,
        badge: "TOP RATED",
        sizes: ["Standard"],
        image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=85",
        description: "Adjustable dumbbell set for strength training and home gym workouts."
    },

    {
        id: 6,
        name: "Premium Yoga Mat",
        category: "Gym Equipment",
        sport: "Yoga",
        price: 1299,
        oldPrice: 1799,
        rating: 4.7,
        reviews: 112,
        badge: "POPULAR",
        sizes: ["Standard"],
        image: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&w=800&q=85",
        description: "Non-slip cushioned yoga mat providing comfort and stability during workouts."
    },

    {
        id: 7,
        name: "Professional Basketball",
        category: "Team Sports",
        sport: "Basketball",
        price: 1899,
        oldPrice: 2499,
        rating: 4.8,
        reviews: 89,
        badge: "BEST SELLER",
        sizes: ["Size 7"],
        image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=800&q=85",
        description: "Durable professional basketball with excellent grip and consistent bounce."
    },

    {
        id: 8,
        name: "Premium Cricket Bat",
        category: "Team Sports",
        sport: "Cricket",
        price: 7999,
        oldPrice: 9999,
        rating: 4.9,
        reviews: 64,
        badge: "PREMIUM",
        sizes: ["Short Handle", "Long Blade"],
        image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=85",
        description: "Premium cricket bat designed for powerful shots and professional-level performance."
    },

    {
        id: 9,
        name: "Resistance Band Kit",
        category: "Gym Equipment",
        sport: "Gym",
        price: 899,
        oldPrice: 1299,
        rating: 4.5,
        reviews: 77,
        badge: "VALUE",
        sizes: ["Set"],
        image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&w=800&q=85",
        description: "Multi-level resistance bands suitable for strength training, mobility and rehabilitation."
    },

    {
        id: 10,
        name: "Sport Duffel Bag",
        category: "Accessories",
        sport: "Running",
        price: 1799,
        oldPrice: 2399,
        rating: 4.6,
        reviews: 49,
        badge: "NEW",
        sizes: ["Medium", "Large"],
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=85",
        description: "Spacious sports bag with dedicated compartments for shoes, clothes and accessories."
    },

    {
        id: 11,
        name: "Training Sneakers",
        category: "Footwear",
        sport: "Gym",
        price: 2999,
        oldPrice: 3999,
        rating: 4.7,
        reviews: 105,
        badge: "TRENDING",
        sizes: ["6", "7", "8", "9", "10"],
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=85",
        description: "Versatile training sneakers built for gym workouts, training and everyday movement."
    },

    {
        id: 12,
        name: "Performance Hoodie",
        category: "Apparel",
        sport: "Running",
        price: 2499,
        oldPrice: 3499,
        rating: 4.6,
        reviews: 52,
        badge: "SALE",
        sizes: ["S", "M", "L", "XL"],
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=85",
        description: "Comfortable performance hoodie suitable for warm-ups and outdoor training."
    }

];


/* =========================================
   STATE
========================================= */

let cart = JSON.parse(localStorage.getItem("sportivaCart")) || [];
let wishlist = JSON.parse(localStorage.getItem("sportivaWishlist")) || [];

let selectedProduct = null;
let selectedSize = null;


/* =========================================
   INITIALIZATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    renderProducts(products);

    updateCartCount();
    updateWishlistCount();

    document.querySelectorAll(".modal").forEach(modal => {

        modal.addEventListener("click", e => {

            if (e.target === modal) {
                modal.classList.remove("show");
            }

        });

    });

});


/* =========================================
   PRODUCT DISPLAY
========================================= */

function renderProducts(list) {

    const grid = document.getElementById("productGrid");

    if (!list.length) {

        grid.innerHTML = `
            <div class="no-products">
                <h3>No products found</h3>
                <p>Try changing your search or filters.</p>
            </div>
        `;

        return;
    }


    grid.innerHTML = list.map(product => {

        const liked = wishlist.includes(product.id);

        return `

        <div class="product-card">

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <span class="product-badge">
                    ${product.badge}
                </span>

                <button
                    class="wishlist-button ${liked ? "active" : ""}"
                    onclick="toggleWishlist(${product.id})"
                >
                    ${liked ? "♥" : "♡"}
                </button>

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3>${product.name}</h3>

                <div class="rating">
                    ★★★★★
                    <span> ${product.rating} (${product.reviews})</span>
                </div>

                <div class="product-price">

                    <strong>₹${product.price.toLocaleString("en-IN")}</strong>

                    <del>
                        ₹${product.oldPrice.toLocaleString("en-IN")}
                    </del>

                </div>

                <button
                    class="add-cart"
                    onclick="addToCart(${product.id})"
                >
                    ADD TO CART
                </button>

                <button
                    class="secondary-btn"
                    style="width:100%;margin-top:7px;padding:9px"
                    onclick="openProduct(${product.id})"
                >
                    VIEW DETAILS
                </button>

            </div>

        </div>

        `;

    }).join("");

}


/* =========================================
   SEARCH
========================================= */

function searchProducts() {
    applyFilters();
}


function applyFilters() {

    const search =
        document.getElementById("searchInput")
            .value
            .toLowerCase();

    const category =
        document.getElementById("categoryFilter").value;

    const sport =
        document.getElementById("sportFilter").value;

    const price =
        document.getElementById("priceFilter").value;

    const sort =
        document.getElementById("sortFilter").value;


    let result = products.filter(product => {

        const matchesSearch =
            product.name.toLowerCase().includes(search) ||
            product.category.toLowerCase().includes(search) ||
            product.sport.toLowerCase().includes(search);


        const matchesCategory =
            category === "all" ||
            product.category === category ||
            (category === "Team Sports" &&
             product.category === "Team Sports");


        const matchesSport =
            sport === "all" ||
            product.sport === sport;


        let matchesPrice = true;

        if (price !== "all") {

            const [min, max] = price.split("-").map(Number);

            matchesPrice =
                product.price >= min &&
                product.price <= max;

        }


        return (
            matchesSearch &&
            matchesCategory &&
            matchesSport &&
            matchesPrice
        );

    });


    if (sort === "low") {
        result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
        result.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
        result.sort((a, b) => b.rating - a.rating);
    }


    renderProducts(result);
}


/* =========================================
   CATEGORY FILTER
========================================= */

function filterCategory(category) {

    document.getElementById("categoryFilter").value = category;

    scrollToProducts();

    applyFilters();
}


/* =========================================
   PRODUCT DETAIL
========================================= */

function openProduct(id) {

    selectedProduct = products.find(product => product.id === id);

    selectedSize = selectedProduct.sizes[0];


    document.getElementById("productDetails").innerHTML = `

        <div class="product-detail">

            <div class="detail-image">

                <img
                    src="${selectedProduct.image}"
                    alt="${selectedProduct.name}"
                >

            </div>


            <div class="detail-info">

                <span class="section-label">
                    ${selectedProduct.category}
                </span>

                <h2>${selectedProduct.name}</h2>

                <div class="rating">
                    ★★★★★
                    ${selectedProduct.rating}
                    (${selectedProduct.reviews} reviews)
                </div>

                <div class="detail-price">
                    ₹${selectedProduct.price.toLocaleString("en-IN")}
                </div>

                <p class="detail-description">
                    ${selectedProduct.description}
                </p>

                <strong>Select Size</strong>

                <div class="size-selector">

                    ${selectedProduct.sizes.map((size, index) => `

                        <button
                            class="${index === 0 ? "selected" : ""}"
                            onclick="selectSize('${size}', this)"
                        >
                            ${size}
                        </button>

                    `).join("")}

                </div>


                <button
                    class="primary-btn full-btn"
                    onclick="addSelectedProductToCart()"
                >
                    ADD TO CART
                </button>


                <div class="review-box">

                    <h3>Customer Reviews</h3>

                    <div class="review">
                        ★★★★★
                        <strong>Great quality!</strong>
                        <p>Excellent product and comfortable to use.</p>
                    </div>

                    <div class="review">
                        ★★★★★
                        <strong>Worth the price</strong>
                        <p>Good quality and fast delivery.</p>
                    </div>

                </div>

            </div>

        </div>

    `;


    showModal("productModal");
}


function selectSize(size, button) {

    selectedSize = size;

    document
        .querySelectorAll(".size-selector button")
        .forEach(btn => btn.classList.remove("selected"));

    button.classList.add("selected");
}


function addSelectedProductToCart() {

    addToCart(selectedProduct.id, selectedSize);

    closeModal("productModal");
}


/* =========================================
   CART
========================================= */

function addToCart(id, size = null) {

    const product = products.find(p => p.id === id);

    const selected = size || product.sizes[0];

    const existing = cart.find(
        item => item.id === id && item.size === selected
    );


    if (existing) {
        existing.quantity++;
    } else {

        cart.push({
            id: id,
            size: selected,
            quantity: 1
        });

    }


    saveCart();

    showToast(`${product.name} added to cart`);

}


function saveCart() {

    localStorage.setItem(
        "sportivaCart",
        JSON.stringify(cart)
    );

    updateCartCount();
}


function updateCartCount() {

    const count = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    document.getElementById("cartCount").textContent = count;
}


function openCart() {

    renderCart();

    showModal("cartModal");
}


function renderCart() {

    const container =
        document.getElementById("cartItems");


    if (!cart.length) {

        container.innerHTML = `
            <div class="no-products">
                <h3>Your cart is empty</h3>
                <p>Add some products to continue.</p>
            </div>
        `;

        updateCartTotals();

        return;
    }


    container.innerHTML = cart.map((item, index) => {

        const product =
            products.find(p => p.id === item.id);


        return `

            <div class="cart-item">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div>

                    <h3>${product.name}</h3>

                    <p>
                        ₹${product.price.toLocaleString("en-IN")}
                    </p>

                    <small>
                        Size: ${item.size}
                    </small>

                    <div class="quantity-control">

                        <button
                            onclick="changeQuantity(${index}, -1)"
                        >
                            −
                        </button>

                        <span>${item.quantity}</span>

                        <button
                            onclick="changeQuantity(${index}, 1)"
                        >
                            +
                        </button>

                    </div>

                </div>

                <button
                    class="remove-btn"
                    onclick="removeCartItem(${index})"
                >
                    Remove
                </button>

            </div>

        `;

    }).join("");


    updateCartTotals();
}


function changeQuantity(index, change) {

    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    saveCart();

    renderCart();
}


function removeCartItem(index) {

    cart.splice(index, 1);

    saveCart();

    renderCart();

    showToast("Item removed");
}


function getSubtotal() {

    return cart.reduce((total, item) => {

        const product =
            products.find(p => p.id === item.id);

        return total + product.price * item.quantity;

    }, 0);

}


function updateCartTotals() {

    const subtotal = getSubtotal();

    const delivery =
        subtotal === 0 ? 0 :
        subtotal >= 3000 ? 0 : 99;

    const total = subtotal + delivery;


    document.getElementById("subtotal").textContent =
        `₹${subtotal.toLocaleString("en-IN")}`;

    document.getElementById("delivery").textContent =
        delivery === 0 ? "FREE" :
        `₹${delivery.toLocaleString("en-IN")}`;

    document.getElementById("cartTotal").textContent =
        `₹${total.toLocaleString("en-IN")}`;
}


/* =========================================
   CHECKOUT
========================================= */

function openCheckout() {

    if (!cart.length) {

        showToast("Your cart is empty");

        return;
    }


    closeModal("cartModal");

    renderCheckoutSummary();

    showModal("checkoutModal");
}


function renderCheckoutSummary() {

    const container =
        document.getElementById("checkoutSummary");


    container.innerHTML = cart.map(item => {

        const product =
            products.find(p => p.id === item.id);


        return `

            <div class="order-summary-item">

                <span>
                    ${product.name}
                    × ${item.quantity}
                </span>

                <strong>
                    ₹${(
                        product.price *
                        item.quantity
                    ).toLocaleString("en-IN")}
                </strong>

            </div>

        `;

    }).join("");


    const subtotal = getSubtotal();

    const delivery =
        subtotal >= 3000 ? 0 : 99;

    const total =
        subtotal + delivery;


    document.getElementById("checkoutTotal")
        .textContent =
        `₹${total.toLocaleString("en-IN")}`;
}


function placeOrder(event) {

    event.preventDefault();


    const payment =
        document.querySelector(
            'input[name="payment"]:checked'
        ).value;


    const orderId =
        "SP" +
        Math.floor(
            10000 + Math.random() * 90000
        );


    const total = getSubtotal() +
        (getSubtotal() >= 3000 ? 0 : 99);


    closeModal("checkoutModal");


    cart = [];

    saveCart();


    document.getElementById("trackingResult").innerHTML = `

        <div class="tracking-status">

            <h3>Order Placed Successfully!</h3>

            <p>
                Your simulated order ID is
                <strong>${orderId}</strong>
            </p>

            <p>
                Payment method:
                <strong>${payment}</strong>
            </p>

            <p>
                Order total:
                <strong>₹${total.toLocaleString("en-IN")}</strong>
            </p>

            <div class="status-step done">
                ✓ Order Confirmed
            </div>

            <div class="status-step">
                ✓ Preparing for Shipment
            </div>

            <div class="status-step">
                ○ Out for Delivery
            </div>

            <div class="status-step">
                ○ Delivered
            </div>

        </div>

    `;


    showToast(`Order ${orderId} placed successfully`);
}


/* =========================================
   WISHLIST
========================================= */

function toggleWishlist(id) {

    if (wishlist.includes(id)) {

        wishlist =
            wishlist.filter(item => item !== id);

        showToast("Removed from wishlist");

    } else {

        wishlist.push(id);

        showToast("Added to wishlist");

    }


    localStorage.setItem(
        "sportivaWishlist",
        JSON.stringify(wishlist)
    );


    updateWishlistCount();

    applyFilters();
}


function updateWishlistCount() {

    document.getElementById("wishlistCount")
        .textContent = wishlist.length;
}


function openWishlist() {

    const container =
        document.getElementById("wishlistItems");


    const items =
        products.filter(product =>
            wishlist.includes(product.id)
        );


    if (!items.length) {

        container.innerHTML = `
            <div class="no-products">
                <h3>Your wishlist is empty</h3>
                <p>Save products you want to buy later.</p>
            </div>
        `;

    } else {

        container.innerHTML =
            items.map(product => `

                <div class="wishlist-item">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                    <div>
                        <h3>${product.name}</h3>
                        <p>
                            ₹${product.price.toLocaleString("en-IN")}
                        </p>
                    </div>

                    <button
                        class="add-cart"
                        onclick="addToCart(${product.id})"
                    >
                        ADD
                    </button>

                </div>

            `).join("");

    }


    showModal("wishlistModal");
}


/* =========================================
   AUTH
========================================= */

function openAuth() {

    showModal("authModal");
}


function switchAuth(type, button) {

    document
        .querySelectorAll(".auth-tabs button")
        .forEach(btn =>
            btn.classList.remove("active")
        );

    button.classList.add("active");


    document
        .getElementById("loginForm")
        .classList.toggle(
            "hidden",
            type !== "login"
        );

    document
        .getElementById("registerForm")
        .classList.toggle(
            "hidden",
            type !== "register"
        );
}


function loginUser(event) {

    event.preventDefault();

    closeModal("authModal");

    showToast("Login successful — simulated");

}


function registerUser(event) {

    event.preventDefault();

    closeModal("authModal");

    showToast("Account created — simulated");

}


/* =========================================
   ORDER TRACKING
========================================= */

function openTracking() {

    showModal("trackingModal");

}


function trackOrder() {

    const id =
        document.getElementById("trackingInput")
            .value
            .trim();


    if (!id) {

        showToast("Please enter an order ID");

        return;
    }


    document.getElementById("trackingResult").innerHTML = `

        <div class="tracking-status">

            <h3>Order ${id}</h3>

            <div class="status-step done">
                ✓ Order Confirmed
            </div>

            <div class="status-step done">
                ✓ Packed
            </div>

            <div class="status-step done">
                ✓ Shipped
            </div>

            <div class="status-step">
                ✓ Out for Delivery
            </div>

            <div class="status-step">
                ○ Delivered
            </div>

        </div>

    `;

}


/* =========================================
   CONTACT
========================================= */

function submitContact(event) {

    event.preventDefault();

    event.target.reset();

    showToast(
        "Message sent successfully — simulated"
    );

}


/* =========================================
   UI HELPERS
========================================= */

function showModal(id) {

    document
        .getElementById(id)
        .classList.add("show");

    document.body.style.overflow = "hidden";
}


function closeModal(id) {

    document
        .getElementById(id)
        .classList.remove("show");

    document.body.style.overflow = "";
}


function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


function focusSearch() {

    document
        .getElementById("searchInput")
        .focus();

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function scrollToProducts() {

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function scrollToCategories() {

    document
        .getElementById("categories")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function toggleFilters() {

    const filters =
        document.getElementById("filters");

    if (window.innerWidth <= 850) {

        filters.classList.toggle("hidden");

    }

}


function toggleMenu() {

    document
        .getElementById("mobileMenu")
        .classList.toggle("show");

}


function showSection(section) {

    document
        .getElementById(section)
        ?.scrollIntoView({
            behavior: "smooth"
        });

}
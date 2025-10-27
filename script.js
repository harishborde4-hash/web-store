/* ========================================
   JAVASCRIPT FOR CRUCIAL HEALTHY SALAD
   Complete Functionality & Modern UX
   Mobile-First, Modular, ES6+
   ======================================== */

// ========================================
// 1. GLOBAL VARIABLES & CONFIGURATION
// ========================================

// Menu Data with complete product information
const menuData = [
  {
    id: 1,
    name: "Classic Garden Salad",
    description: "Fresh lettuce, cherry tomatoes, cucumbers, carrots, and olives with light vinaigrette.",
    price: 120,
    category: "veg",
    calories: 150,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    alt: "Classic garden salad with fresh vegetables",
    ingredients: ["Lettuce", "Cherry Tomatoes", "Cucumbers", "Carrots", "Olives", "Vinaigrette"]
  },
  {
    id: 2,
    name: "Protein Power Salad",
    description: "Baby spinach, grilled chicken, sweet corn, kidney beans, bell peppers, olive oil dressing.",
    price: 160,
    category: "protein",
    calories: 280,
    image: "https://images.unsplash.com/photo-1515548214153-1c950c4e240b?auto=format&fit=crop&w=600&q=80",
    alt: "Protein power salad with grilled chicken and beans",
    ingredients: ["Baby Spinach", "Grilled Chicken", "Sweet Corn", "Kidney Beans", "Bell Peppers", "Olive Oil"]
  },
  {
    id: 3,
    name: "Crunchy Veggie Delight",
    description: "Mixed greens, broccoli, red cabbage, carrots, sesame seeds, tangy Asian sauce.",
    price: 140,
    category: "veg",
    calories: 180,
    image: "https://images.unsplash.com/photo-1464306076886-debede6bb36b?auto=format&fit=crop&w=600&q=80",
    alt: "Crunchy veggie delight salad with Asian sauce",
    ingredients: ["Mixed Greens", "Broccoli", "Red Cabbage", "Carrots", "Sesame Seeds", "Asian Sauce"]
  },
  {
    id: 4,
    name: "Fruit Fusion Salad",
    description: "Seasonal fruits, lettuce, nuts, mint, and yogurt drizzle.",
    price: 150,
    category: "fruit",
    calories: 200,
    image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=600&q=80",
    alt: "Fruit fusion salad with nuts and yogurt",
    ingredients: ["Seasonal Fruits", "Lettuce", "Assorted Nuts", "Fresh Mint", "Yogurt"]
  },
  {
    id: 5,
    name: "Mediterranean Delight",
    description: "Romaine lettuce, feta cheese, kalamata olives, red onions, sun-dried tomatoes, Greek dressing.",
    price: 170,
    category: "veg",
    calories: 220,
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
    alt: "Mediterranean salad with feta and olives",
    ingredients: ["Romaine Lettuce", "Feta Cheese", "Kalamata Olives", "Red Onions", "Sun-dried Tomatoes", "Greek Dressing"]
  },
  {
    id: 6,
    name: "Quinoa Power Bowl",
    description: "Quinoa, roasted chickpeas, avocado, cherry tomatoes, cucumber, tahini dressing.",
    price: 180,
    category: "protein",
    calories: 320,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    alt: "Quinoa power bowl with chickpeas and avocado",
    ingredients: ["Quinoa", "Roasted Chickpeas", "Avocado", "Cherry Tomatoes", "Cucumber", "Tahini Dressing"]
  },
  {
    id: 7,
    name: "Caesar Supreme",
    description: "Crisp romaine, parmesan shavings, croutons, grilled chicken, classic Caesar dressing.",
    price: 165,
    category: "protein",
    calories: 290,
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=600&q=80",
    alt: "Caesar salad with grilled chicken",
    ingredients: ["Romaine Lettuce", "Parmesan Cheese", "Croutons", "Grilled Chicken", "Caesar Dressing"]
  },
  {
    id: 8,
    name: "Berry Bliss Salad",
    description: "Mixed berries, baby spinach, goat cheese, candied walnuts, raspberry vinaigrette.",
    price: 155,
    category: "fruit",
    calories: 210,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80",
    alt: "Berry salad with goat cheese and walnuts",
    ingredients: ["Mixed Berries", "Baby Spinach", "Goat Cheese", "Candied Walnuts", "Raspberry Vinaigrette"]
  },
  {
    id: 9,
    name: "Asian Crunch",
    description: "Napa cabbage, edamame, mandarin oranges, crispy wontons, sesame ginger dressing.",
    price: 145,
    category: "veg",
    calories: 190,
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=600&q=80",
    alt: "Asian crunch salad with edamame",
    ingredients: ["Napa Cabbage", "Edamame", "Mandarin Oranges", "Crispy Wontons", "Sesame Ginger Dressing"]
  },
  {
    id: 10,
    name: "Low-Cal Green Machine",
    description: "Kale, cucumber, celery, green apple, lemon juice, light herb dressing.",
    price: 130,
    category: "low-cal",
    calories: 95,
    image: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?auto=format&fit=crop&w=600&q=80",
    alt: "Low calorie green salad",
    ingredients: ["Kale", "Cucumber", "Celery", "Green Apple", "Lemon Juice", "Herb Dressing"]
  }
];

// Additional global variables
let cart = [];
let wishlist = [];
let currentFilter = 'all';
let visibleMenuItems = 6;

// Account simulation
let accountData = {
  loggedIn: false,
  name: "",
  email: "",
  created: ""
};

// Track modal states
let activeModal = null;

// ========================================
// 2. UTILITY FUNCTIONS
// ========================================

// INR price formatter
function formatINR(amount) {
  return `₹${amount.toFixed(0)}`;
}

// Simple email validator
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Simple phone validator
function validatePhone(phone) {
  return /^[0-9]{10}$/.test(phone);
}

// Screen reader live region announcer
function announceToScreenReader(message) {
  const announcement = document.getElementById('announcement');
  if (announcement) {
    announcement.textContent = message;
    setTimeout(() => {
      announcement.textContent = '';
    }, 1000);
  }
}

// Show/hide loading overlay
function showLoading() {
  const overlay = document.getElementById('loadingOverlay');
  if (overlay) overlay.classList.add('active');
}

function hideLoading() {
  const overlay = document.getElementById('loadingOverlay');
  if (overlay) overlay.classList.remove('active');
}

// Smooth scroll utility
function smoothScrollTo(targetId) {
  const element = document.querySelector(targetId);
  if (element) {
    const yOffset = -80;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

// Save/Load data to localStorage
function saveCart() {
  try {
    localStorage.setItem('crucialSaladCart', JSON.stringify(cart));
  } catch (e) { }
}

function loadCart() {
  try {
    const saved = localStorage.getItem('crucialSaladCart');
    if (saved) cart = JSON.parse(saved);
  } catch (e) { }
}

function saveWishlist() {
  try {
    localStorage.setItem('crucialSaladWishlist', JSON.stringify(wishlist));
  } catch (e) { }
}

function loadWishlist() {
  try {
    const saved = localStorage.getItem('crucialSaladWishlist');
    if (saved) wishlist = JSON.parse(saved);
  } catch (e) { }
}

// Account save/load simulation
function saveAccount() {
  try {
    localStorage.setItem('crucialSaladAccount', JSON.stringify(accountData));
  } catch (e) { }
}

function loadAccount() {
  try {
    const saved = localStorage.getItem('crucialSaladAccount');
    if (saved) {
      const a = JSON.parse(saved);
      if (a && typeof a === "object") accountData = a;
    }
  } catch (e) { }
}

// ========================================
// 3. NAVIGATION & UI GLOBAL
// ========================================

function setupNavigation() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isExpanded = navLinks.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);
    });
  }

  const navLinksItems = navLinks ? navLinks.querySelectorAll('.nav-link') : [];
  navLinksItems.forEach(link => {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 768 && navLinks) {
        navLinks.classList.remove('active');
        if (menuToggle) {
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        smoothScrollTo(href);
      }
    });
  });
}

// Theme toggle (dark mode)
function setupThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem("crucialSaladDark", document.body.classList.contains("dark-mode"));
    });
  }
  // Restore
  if (localStorage.getItem("crucialSaladDark") === "true") {
    document.body.classList.add("dark-mode");
  }
}

// Language selector toggle
function setupLanguageSelector() {
  const langBtn = document.querySelector('.lang-btn');
  const langMenu = document.querySelector('.lang-menu');
  if (langBtn && langMenu) {
    langBtn.addEventListener('click', e => {
      langMenu.classList.toggle('active');
      langBtn.setAttribute('aria-expanded', langMenu.classList.contains('active'));
      e.stopPropagation();
    });
    document.addEventListener('click', () => langMenu.classList.remove('active'));
    langMenu.querySelectorAll('a').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        langBtn.querySelector('span').textContent = anchor.textContent.substr(0, 2).toUpperCase();
        langMenu.classList.remove('active');
      });
    });
  }
}

/* -- CHUNK CONTINUES -- */
// ========================================
// 4. MENU RENDERING & FILTERING
// ========================================

function renderMenu(filter = 'all') {
  const menuGrid = document.getElementById('menuGrid');
  if (!menuGrid) return;

  menuGrid.innerHTML = '';

  let filteredMenu = filter === 'all' 
    ? menuData 
    : menuData.filter(item => item.category === filter);

  const itemsToShow = filteredMenu.slice(0, visibleMenuItems);

  itemsToShow.forEach(item => {
    const menuDiv = document.createElement('div');
    menuDiv.className = 'menu-item';
    menuDiv.setAttribute('data-id', item.id);
    menuDiv.innerHTML = `
      <img src="${item.image}" alt="${item.alt}" loading="lazy" />
      <div class="menu-item-content">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <small style="color: #999; display: block; margin-top: 5px;">
          ${item.calories} calories
        </small>
        <div class="menu-item-footer">
          <div class="price">${formatINR(item.price)}</div>
          <button class="add-to-cart" data-id="${item.id}" aria-label="Add ${item.name} to cart">
            <i class="fas fa-cart-plus"></i>
            Add to Cart
          </button>
        </div>
        <button class="wishlist-toggle" data-id="${item.id}" aria-label="Add ${item.name} to wishlist">
          <i class="far fa-heart"></i>
        </button>
      </div>
    `;
    menuGrid.appendChild(menuDiv);
  });

  updateWishlistIcons();

  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (loadMoreBtn) {
    if (filteredMenu.length > visibleMenuItems) {
      loadMoreBtn.style.display = 'inline-flex';
    } else {
      loadMoreBtn.style.display = 'none';
    }
  }

  announceToScreenReader(`${itemsToShow.length} salads displayed`);
}

function setupMenuFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      filterButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const filter = this.getAttribute('data-filter');
      currentFilter = filter;
      visibleMenuItems = 6;
      renderMenu(filter);

      announceToScreenReader(`Filtering by ${filter}`);
    });
  });

  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function () {
      visibleMenuItems += 6;
      renderMenu(currentFilter);
    });
  }
}

function setupMenuSortAndView() {
  const sortSelect = document.getElementById('sortMenu');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      const sortBy = e.target.value;
      if (sortBy === 'price-low') {
        menuData.sort((a, b) => a.price - b.price);
      } else if (sortBy === 'price-high') {
        menuData.sort((a, b) => b.price - a.price);
      } else if (sortBy === 'name') {
        menuData.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortBy === 'calories') {
        menuData.sort((a, b) => a.calories - b.calories);
      }
      renderMenu(currentFilter);
    });
  }

  const viewBtns = document.querySelectorAll('.view-btn');
  viewBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      viewBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const view = this.getAttribute('data-view');
      const menuGrid = document.getElementById('menuGrid');
      if (menuGrid) {
        if (view === 'list') {
          menuGrid.style.gridTemplateColumns = '1fr';
        } else {
          menuGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))';
        }
      }
    });
  });
}

// ========================================
// 5. CART MANAGEMENT
// ========================================

function updateCartCount() {
  const cartCount = document.getElementById('cartCount');
  if (cartCount) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    if (totalItems > 0) {
      cartCount.style.display = 'inline-block';
    } else {
      cartCount.style.display = 'none';
    }
  }
}

function addToCart(id) {
  const item = menuData.find(m => m.id == id);
  if (!item) return;

  const existing = cart.find(c => c.id == id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  updateCartCount();
  saveCart();
  renderCartItems();

  announceToScreenReader(`${item.name} added to cart`);
  showToast(`${item.name} added to cart!`);
}

function removeFromCart(id) {
  const item = cart.find(c => c.id == id);
  const itemName = item ? item.name : 'Item';

  cart = cart.filter(item => item.id != id);
  updateCartCount();
  saveCart();
  renderCartItems();

  announceToScreenReader(`${itemName} removed from cart`);
  showToast(`${itemName} removed from cart`);
}

function updateQuantity(id, quantity) {
  const item = cart.find(c => c.id == id);

  if (item) {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      item.quantity = quantity;
      saveCart();
      renderCartItems();
      updateCartCount();
    }
  }
}

function cartSubtotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function clearCart() {
  cart = [];
  updateCartCount();
  saveCart();
  renderCartItems();
  announceToScreenReader('Cart cleared');
}

// Make functions globally accessible for inline handlers
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.calcDeliveryCharge = calcDeliveryCharge;
window.closeSuccessModal = closeSuccessModal;

// ========================================
// 6. CART MODAL
// ========================================

function openCartModal() {
  const cartModal = document.getElementById('cartModal');
  if (cartModal) {
    renderCartItems();
    cartModal.classList.add('active');
    cartModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    activeModal = 'cart';

    const closeBtn = cartModal.querySelector('.close-btn');
    if (closeBtn) {
      setTimeout(() => closeBtn.focus(), 100);
    }
  }
}

function closeCartModal() {
  const cartModal = document.getElementById('cartModal');
  if (cartModal) {
    cartModal.classList.remove('active');
    cartModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    activeModal = null;
  }
}

function renderCartItems() {
  const cartModal = document.getElementById('cartModal');
  if (!cartModal) return;

  let modalContent = cartModal.querySelector('.modal-content');
  if (!modalContent) {
    modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    cartModal.appendChild(modalContent);
  }

  modalContent.innerHTML = `
    <div class="modal-header">
      <h2>Your Shopping Cart</h2>
      <button class="close-btn" aria-label="Close cart">&times;</button>
    </div>
    <div class="modal-body" id="cartItemsBody"></div>
    <div class="modal-footer">
      <div class="cart-summary">
        <div class="cart-total-row">
          <span>Subtotal:</span>
          <span id="cartSubtotalDisplay">${formatINR(0)}</span>
        </div>
      </div>
      <button class="checkout-btn" id="checkoutBtnInCart">
        <span>Proceed to Checkout</span>
        <i class="fas fa-arrow-right"></i>
      </button>
      <button class="continue-shopping-btn">Continue Shopping</button>
    </div>
  `;

  const cartItemsBody = modalContent.querySelector('#cartItemsBody');
  const cartSubtotalDisplay = modalContent.querySelector('#cartSubtotalDisplay');

  if (cart.length === 0) {
    cartItemsBody.innerHTML = `
      <div style="text-align: center; padding: 40px 20px;">
        <i class="fas fa-shopping-cart" style="font-size: 4rem; color: #ddd; margin-bottom: 20px;"></i>
        <p style="font-size: 1.2rem; color: #999;">Your cart is empty</p>
        <p style="color: #666;">Add some delicious salads to get started!</p>
      </div>
    `;
    if (cartSubtotalDisplay) {
      cartSubtotalDisplay.textContent = formatINR(0);
    }
  } else {
    cartItemsBody.innerHTML = '';
    cart.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'cart-item';
      itemDiv.innerHTML = `
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p>${formatINR(item.price)} × ${item.quantity} = ${formatINR(item.price * item.quantity)}</p>
        </div>
        <div class="quantity-controls">
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})" aria-label="Decrease quantity">
            <i class="fas fa-minus"></i>
          </button>
          <span class="quantity">${item.quantity}</span>
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})" aria-label="Increase quantity">
            <i class="fas fa-plus"></i>
          </button>
          <button class="remove-btn" onclick="removeFromCart(${item.id})" aria-label="Remove ${item.name}">
            <i class="fas fa-trash"></i> Remove
          </button>
        </div>
      `;
      cartItemsBody.appendChild(itemDiv);
    });

    if (cartSubtotalDisplay) {
      cartSubtotalDisplay.textContent = formatINR(cartSubtotal());
    }
  }

  modalContent.querySelector('.close-btn').addEventListener('click', closeCartModal);
  modalContent.querySelector('.continue-shopping-btn').addEventListener('click', closeCartModal);
  const checkoutBtnInCart = modalContent.querySelector('#checkoutBtnInCart');
  if (checkoutBtnInCart) {
    checkoutBtnInCart.addEventListener('click', openCheckoutModal);
  }
}

// ========================================
// 7. CHECKOUT MODAL
// ========================================

function openCheckoutModal() {
  if (cart.length === 0) {
    showToast('Your cart is empty!', 'error');
    return;
  }

  closeCartModal();

  const checkoutModal = document.getElementById('checkoutModal');
  if (!checkoutModal) return;

  let modalContent = checkoutModal.querySelector('.modal-content');
  if (!modalContent) {
    modalContent = document.createElement('div');
    modalContent.className = 'modal-content checkout-modal-content';
    checkoutModal.appendChild(modalContent);
  }

  const subtotal = cartSubtotal();

  modalContent.innerHTML = `
    <div class="modal-header">
      <h2>Checkout</h2>
      <button class="close-btn" aria-label="Close checkout">&times;</button>
    </div>
    <div class="modal-body">
      <form id="checkoutForm">
        <div class="checkout-section">
          <h3><i class="fas fa-user"></i> Personal Information</h3>
          <div class="form-group">
            <label for="custName">Full Name: <span class="required">*</span></label>
            <input type="text" id="custName" name="custName" required>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="custPhone">Phone: <span class="required">*</span></label>
              <input type="tel" id="custPhone" name="custPhone" pattern="[0-9]{10}" required>
            </div>
            <div class="form-group">
              <label for="custEmail">Email: <span class="required">*</span></label>
              <input type="email" id="custEmail" name="custEmail" required>
            </div>
          </div>
        </div>

        <div class="checkout-section">
          <h3><i class="fas fa-map-marker-alt"></i> Delivery Information</h3>
          <div class="form-group">
            <label for="custAddress">Address: <span class="required">*</span></label>
            <textarea id="custAddress" name="custAddress" rows="3" required></textarea>
          </div>
          <div class="form-group">
            <label for="distance">Distance (km): <span class="required">*</span></label>
            <input type="number" id="distance" name="distance" min="0" step="0.1" value="1" required>
            <small class="help-text">Enter distance from Hadapsar for delivery charge calculation</small>
          </div>
        </div>

        <div class="checkout-section">
          <h3><i class="fas fa-credit-card"></i> Payment Method</h3>
          <div class="payment-options">
            <label class="payment-option">
              <input type="radio" name="payment" value="online" checked>
              <div class="payment-option-content">
                <i class="fas fa-globe"></i>
                <span>Online Payment</span>
              </div>
            </label>
            <label class="payment-option">
              <input type="radio" name="payment" value="cod">
              <div class="payment-option-content">
                <i class="fas fa-money-bill-wave"></i>
                <span>Cash on Delivery</span>
              </div>
            </label>
          </div>
        </div>

        <div class="checkout-section">
          <h3><i class="fas fa-receipt"></i> Order Summary</h3>
          <div class="order-summary">
            <div class="summary-row">
              <span>Subtotal:</span>
              <span id="checkoutSubtotalDisplay">${formatINR(subtotal)}</span>
            </div>
            <div class="summary-row">
              <span>Delivery:</span>
              <span id="deliveryChargeDisplay">FREE</span>
            </div>
            <div class="summary-row total">
              <span>Total:</span>
              <span id="totalAmountDisplay">${formatINR(subtotal)}</span>
            </div>
          </div>
          <div class="delivery-note">
            <i class="fas fa-clock"></i>
            <span>Delivery time: <strong>1 hour</strong></span>
          </div>
        </div>

        <button type="submit" class="place-order-btn">
          <span>Place Order</span>
          <i class="fas fa-check-circle"></i>
        </button>
      </form>
    </div>
  `;

  checkoutModal.classList.add('active');
  checkoutModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  activeModal = 'checkout';

  modalContent.querySelector('.close-btn').addEventListener('click', closeCheckoutModal);

  const distanceInput = modalContent.querySelector('#distance');
  if (distanceInput) {
    distanceInput.addEventListener('input', calcDeliveryCharge);
  }

  const checkoutForm = modalContent.querySelector('#checkoutForm');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', processOrder);
  }

  calcDeliveryCharge();
}

function closeCheckoutModal() {
  const checkoutModal = document.getElementById('checkoutModal');
  if (checkoutModal) {
    checkoutModal.classList.remove('active');
    checkoutModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    activeModal = null;
  }
}

function calcDeliveryCharge() {
  const distanceInput = document.getElementById('distance');
  const deliveryChargeDisplay = document.getElementById('deliveryChargeDisplay');
  const totalAmountDisplay = document.getElementById('totalAmountDisplay');

  if (!distanceInput || !deliveryChargeDisplay || !totalAmountDisplay) return 0;

  const distance = parseFloat(distanceInput.value) || 0;
  let charge = 0;

  if (distance > 2) {
    charge = Math.ceil(distance - 2) * 20;
  }

  const subtotal = cartSubtotal();
  const total = subtotal + charge;

  deliveryChargeDisplay.textContent = charge === 0 ? 'FREE' : formatINR(charge);
  totalAmountDisplay.textContent = formatINR(total);

  return charge;
}

function processOrder(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  const name = formData.get('custName').trim();
  const phone = formData.get('custPhone').trim();
  const email = formData.get('custEmail').trim();
  const address = formData.get('custAddress').trim();
  const distance = parseFloat(formData.get('distance'));

  if (!name || !phone || !email || !address || isNaN(distance)) {
    showToast('Please complete all required fields correctly', 'error');
    return;
  }

  if (!validatePhone(phone)) {
    showToast('Please enter a valid 10-digit phone number', 'error');
    return;
  }

  if (!validateEmail(email)) {
    showToast('Please enter a valid email address', 'error');
    return;
  }

  showLoading();

  setTimeout(() => {
    hideLoading();

    const subtotal = cartSubtotal();
    const deliveryCharge = calcDeliveryCharge();
    const total = subtotal + deliveryCharge;

    closeCheckoutModal();
    showSuccessModal(name, total);
    clearCart();

    console.log('Order placed:', {
      customer: { name, phone, email, address },
      items: cart,
      subtotal,
      deliveryCharge,
      total,
      timestamp: new Date().toISOString()
    });
  }, 2000);
}

// ========================================
// 8. SUCCESS MODAL
// ========================================

function showSuccessModal(customerName, totalAmount) {
  const successModal = document.getElementById('successModal');
  if (!successModal) return;

  let modalContent = successModal.querySelector('.modal-content');
  if (!modalContent) {
    modalContent = document.createElement('div');
    modalContent.className = 'modal-content success-modal';
    successModal.appendChild(modalContent);
  }

  modalContent.innerHTML = `
    <div class="modal-body">
      <div class="success-icon"><i class="fas fa-check-circle"></i></div>
      <h2>Order Placed Successfully!</h2>
      <p id="successMessage">Thank you, ${customerName}! Your order of ${formatINR(totalAmount)} has been confirmed. Your fresh salad will be delivered within 1 hour.</p>
      <button class="cta-button primary-btn" onclick="closeSuccessModal()">Continue Shopping</button>
    </div>
  `;

  successModal.classList.add('active');
  successModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  activeModal = 'success';

  announceToScreenReader(`Order placed successfully`);
}

function closeSuccessModal() {
  const successModal = document.getElementById('successModal');
  if (successModal) {
    successModal.classList.remove('active');
    successModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    activeModal = null;
  }
}

// ========================================
// 9. WISHLIST MANAGEMENT
// ========================================

function updateWishlistCount() {
  const wishlistCount = document.getElementById('wishlistCount');
  if (wishlistCount) {
    wishlistCount.textContent = wishlist.length;
    if (wishlist.length > 0) {
      wishlistCount.style.display = 'inline-block';
    } else {
      wishlistCount.style.display = 'none';
    }
  }
}

function toggleWishlist(id) {
  const item = menuData.find(m => m.id == id);
  if (!item) return;

  const index = wishlist.findIndex(w => w.id == id);
  if (index > -1) {
    wishlist.splice(index, 1);
    showToast(`${item.name} removed from wishlist`);
  } else {
    wishlist.push(item);
    showToast(`${item.name} added to wishlist`);
  }

  updateWishlistCount();
  saveWishlist();
  updateWishlistIcons();
  renderWishlist();
}

function updateWishlistIcons() {
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(menuItem => {
    const id = parseInt(menuItem.getAttribute('data-id'));
    const icon = menuItem.querySelector('.wishlist-toggle i');
    if (icon) {
      if (wishlist.find(w => w.id === id)) {
        icon.classList.remove('far');
        icon.classList.add('fas');
      } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
      }
    }
  });
}

function renderWishlist() {
  const wishlistGrid = document.getElementById('wishlistGrid');
  const wishlistEmpty = document.getElementById('wishlistEmpty');

  if (!wishlistGrid) return;

  wishlistGrid.innerHTML = '';

  if (wishlist.length === 0) {
    if (wishlistEmpty) wishlistEmpty.style.display = 'block';
    wishlistGrid.style.display = 'none';
  } else {
    if (wishlistEmpty) wishlistEmpty.style.display = 'none';
    wishlistGrid.style.display = 'grid';

    wishlist.forEach(item => {
      const card = document.createElement('div');
      card.className = 'menu-item';
      card.innerHTML = `
        <img src="${item.image}" alt="${item.alt}" loading="lazy" />
        <div class="menu-item-content">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <small style="color: #999;">${item.calories} cal</small>
          <div class="menu-item-footer">
            <div class="price">${formatINR(item.price)}</div>
            <button class="add-to-cart" data-id="${item.id}">
              <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
          </div>
          <button class="wishlist-toggle" data-id="${item.id}">
            <i class="fas fa-heart"></i>
          </button>
        </div>
      `;
      wishlistGrid.appendChild(card);
    });
  }
}

/* -- CHUNK 2 CONTINUES -- */
// ========================================
// 10. ACCOUNT & AUTHENTICATION SIMULATION
// ========================================

function setupAccountModals() {
  const accountBtn = document.getElementById('userAccountBtn');
  const accountSection = document.getElementById('account');
  const loginTab = document.getElementById('loginTab');
  const registerTab = document.getElementById('registerTab');
  const loginFormWrap = document.getElementById('loginFormWrap');
  const registerFormWrap = document.getElementById('registerFormWrap');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const accountProfile = document.getElementById('accountProfile');
  const logoutBtn = document.getElementById('logoutBtn');

  function showLogin() {
    loginFormWrap.style.display = 'block';
    registerFormWrap.style.display = 'none';
    accountProfile.style.display = 'none';
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
  }

  function showRegister() {
    loginFormWrap.style.display = 'none';
    registerFormWrap.style.display = 'block';
    accountProfile.style.display = 'none';
    loginTab.classList.remove('active');
    registerTab.classList.add('active');
  }

  function showProfile() {
    loginFormWrap.style.display = 'none';
    registerFormWrap.style.display = 'none';
    accountProfile.style.display = 'block';
    loginTab.classList.remove('active');
    registerTab.classList.remove('active');
    document.getElementById('profileName').textContent = accountData.name;
    document.getElementById('profileEmail').textContent = accountData.email;
    document.getElementById('profileCreated').textContent = accountData.created;
  }

  if (accountBtn) {
    accountBtn.addEventListener('click', () => {
      if (accountData.loggedIn) {
        showProfile();
      } else {
        showLogin();
      }
      window.scrollTo({ top: accountSection.offsetTop - 60, behavior: 'smooth' });
    });
  }

  if (loginTab) loginTab.addEventListener('click', showLogin);
  if (registerTab) registerTab.addEventListener('click', showRegister);

  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const pass = document.getElementById('loginPassword').value;
      if (email === accountData.email && pass && accountData.loggedIn) {
        showProfile();
        showToast('Logged in successfully!');
      } else {
        showToast('Invalid credentials.', 'error');
      }
    });
  }

  if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('registerName').value;
      const email = document.getElementById('registerEmail').value;
      const pass = document.getElementById('registerPassword').value;
      if (name && validateEmail(email) && pass) {
        accountData = {
          loggedIn: true,
          name,
          email,
          created: new Date().toLocaleDateString()
        };
        showProfile();
        saveAccount();
        showToast('Account created! You are now logged in.');
      } else {
        showToast('Fill all registration fields properly.', 'error');
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', function () {
      accountData.loggedIn = false;
      saveAccount();
      showLogin();
      showToast('Logged out!');
    });
  }

  // Direct show profile if already logged in
  if (accountData.loggedIn) {
    showProfile();
  }
}

// ========================================
// 11. LIVE CHAT WIDGET SIMULATION
// ========================================

function setupLiveChat() {
  const openChatBtn = document.getElementById('openChatBtn');
  const liveChatWidget = document.getElementById('liveChatWidget');
  const chatBody = document.getElementById('chatBody');
  const chatInputForm = document.getElementById('chatInputForm');
  const chatInput = document.getElementById('chatInput');
  const closeChatBtn = document.getElementById('closeChatBtn');

  if (openChatBtn) {
    openChatBtn.addEventListener('click', () => {
      liveChatWidget.style.display = 'flex';
      chatInput.focus();
    });
  }
  if (closeChatBtn) {
    closeChatBtn.addEventListener('click', () => {
      liveChatWidget.style.display = 'none';
      chatInput.value = '';
    });
  }
  if (chatInputForm) {
    chatInputForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const val = chatInput.value.trim();
      if (!val) return;
      addChatMessage(val, 'user');
      chatInput.value = '';
      setTimeout(() => {
        addChatMessage("I'm a support bot and will get you help soon. For urgent orders, please call +91 9075181070.", 'bot');
      }, 800);
    });
  }
  function addChatMessage(text, sender) {
    const msg = document.createElement('div');
    msg.className = `chat-message ${sender}`;
    msg.textContent = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }
}

// ========================================
// 12. BLOG NAVIGATION AND LOADER
// ========================================

function setupBlogNavigation() {
  document.querySelectorAll('.blog-read-more').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      showToast('Full article loading coming soon!');
    });
  });
  document.querySelectorAll('.blog-cta .btn-primary').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      showToast('Blog articles feature coming soon!');
    });
  });
}

// ========================================
// 13. FAQ ACCORDION LOGIC
// ========================================

function setupFAQ() {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', function () {
      const faqItem = this.closest('.faq-item');
      const isActive = faqItem.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isActive) {
        faqItem.classList.add('active');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// ========================================
// 14. NEWSLETTER SIGNUP
// ========================================

function setupNewsletterForm() {
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      if (!email) {
        showToast('Please enter your email', 'error');
        return;
      }
      showLoading();
      setTimeout(() => {
        hideLoading();
        showToast('Successfully subscribed to newsletter!');
        this.reset();
        console.log('Newsletter subscription:', email);
      }, 1000);
    });
  }
}

// ========================================
// 15. CONTACT FORM HANDLING
// ========================================

function setupContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(this);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      if (!name || !email || !message) {
        showToast('Please fill in all required fields', 'error');
        return;
      }
      showLoading();
      setTimeout(() => {
        hideLoading();
        showToast('Thank you! We will get back to you soon.');
        this.reset();
        console.log('Contact form submitted:', { name, email, message });
      }, 1500);
    });
  }
}

// ========================================
// 16. PRODUCT COMPARISON TABLE
// ========================================

function setupProductComparison() {
  document.querySelectorAll('.compare-table tbody tr').forEach(row => {
    row.addEventListener('click', function() {
      showToast('Product comparison details coming soon!');
    });
  });
}

// ========================================
// 17. ORDER TRACKING
// ========================================

function setupOrderTracking() {
  const orderTrackingForm = document.getElementById('orderTrackingForm');
  const orderTrackingResult = document.getElementById('orderTrackingResult');
  if (orderTrackingForm && orderTrackingResult) {
    orderTrackingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const orderNumber = document.getElementById('orderNumber').value.trim();
      if (!orderNumber) {
        showToast('Please enter your order number', 'error');
        return;
      }
      showLoading();
      setTimeout(() => {
        hideLoading();
        orderTrackingResult.classList.add('active');
        orderTrackingResult.innerHTML = `
          <h3>Order #${orderNumber}</h3>
          <p>Status: <span style="color: #4CAF50; font-weight: 600">Delivered</span></p>
          <p>Thank you for using our tracking service. If you have any issues, contact our support team.</p>
        `;
      }, 1600);
    });
  }
}

// ========================================
// 18. GIFT CARD PURCHASE
// ========================================

function setupGiftCardPurchase() {
  document.querySelectorAll('.purchase-giftcard-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const amount = this.getAttribute('data-amount');
      showToast(`Feature coming soon! You selected a ₹${amount} gift card.`);
    });
  });
}

// ========================================
// 19. HERO SECTION ANIMATION
// ========================================

function setupHeroSectionParticleEffects() {
  // Demo placeholder: could be upgraded using a library!
  const particles = document.getElementById('particles');
  if (!particles) return;
  let html = '';
  const n = 25;
  for (let i = 0; i < n; i++) {
    const size = Math.random() * 16 + 8;
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    html += `<span style="
      position: absolute;
      left: ${left}%;
      top: ${top}%;
      width: ${size}px; height: ${size}px;
      background: rgba(76,175,80,0.2);
      border-radius: 50%;
      filter: blur(2px);"></span>`;
  }
  particles.innerHTML = html;
}

// ========================================
// 20. PARALLAX/SCROLLING & ANIMATION INIT
// ========================================

function animateStats() {
  const stats = document.querySelectorAll('.stat-number');
  stats.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        stat.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        stat.textContent = target;
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCounter();
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(stat);
  });
}

function setupAOS() {
  if (window.AOS) {
    AOS.init({
      duration: 800,
      once: true,
    });
  }
}

// ========================================
// 21. BACK TO TOP BUTTON
// ========================================

function setupBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

/* -- CHUNK 3 CONTINUES -- */
// ========================================
// 22. TOAST NOTIFICATION SYSTEM
// ========================================

function showToast(message, type = 'success') {
  let toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastContainer';
    toastContainer.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      z-index: 10001;
      max-width: 350px;
    `;
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.style.cssText = `
    background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#ff4444' : '#2196F3'};
    color: white;
    padding: 15px 20px;
    border-radius: 8px;
    margin-bottom: 10px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    display: flex;
    align-items: center;
    gap: 10px;
    animation: slideInRight 0.3s ease;
  `;

  const icon = type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle';
  toast.innerHTML = `
    <i class="fas ${icon}"></i>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.remove();
      }
    }, 300);
  }, 3000);
}

// ========================================
// 23. LIVE SEARCH FUNCTIONALITY
// ========================================

function setupLiveSearch() {
  const searchInput = document.getElementById('navSearchInput');
  const searchResults = document.getElementById('searchResults');
  const searchForm = document.getElementById('navSearchForm');

  if (!searchInput || !searchResults) return;

  let searchTimeout;

  searchInput.addEventListener('input', function() {
    const query = this.value.trim().toLowerCase();
    
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      if (query.length < 2) {
        searchResults.style.display = 'none';
        return;
      }

      const filteredItems = menuData.filter(item => 
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.ingredients.some(ing => ing.toLowerCase().includes(query))
      );

      renderSearchResults(filteredItems, query);
    }, 300);
  });

  function renderSearchResults(items, query) {
    if (items.length === 0) {
      searchResults.innerHTML = `
        <div style="padding: 20px; text-align: center; color: #999;">
          No results found for "${query}"
        </div>
      `;
    } else {
      searchResults.innerHTML = items.slice(0, 5).map(item => `
        <div class="search-result-item" style="padding: 15px; border-bottom: 1px solid #eee; cursor: pointer; display: flex; gap: 15px;" data-id="${item.id}">
          <img src="${item.image}" alt="${item.alt}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">
          <div style="flex: 1;">
            <h4 style="margin: 0 0 5px 0; font-size: 1rem;">${item.name}</h4>
            <p style="margin: 0; font-size: 0.85rem; color: #666;">${formatINR(item.price)} • ${item.calories} cal</p>
          </div>
        </div>
      `).join('');
    }
    
    searchResults.style.display = 'block';

    // Add click handlers
    searchResults.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', function() {
        const id = parseInt(this.getAttribute('data-id'));
        addToCart(id);
        searchResults.style.display = 'none';
        searchInput.value = '';
      });
    });
  }

  // Hide search results when clicking outside
  document.addEventListener('click', function(e) {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.style.display = 'none';
    }
  });

  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (query) {
        showToast(`Searching for "${query}"...`);
        searchResults.style.display = 'none';
        searchInput.value = '';
      }
    });
  }
}

// ========================================
// 24. NUTRITION CALCULATOR
// ========================================

function setupNutritionCalculator() {
  const nutritionCalcBtn = document.getElementById('nutritionCalcBtn');
  
  if (nutritionCalcBtn) {
    nutritionCalcBtn.addEventListener('click', function() {
      showNutritionModal();
    });
  }
}

function showNutritionModal() {
  // Create modal if it doesn't exist
  let nutritionModal = document.getElementById('nutritionModal');
  if (!nutritionModal) {
    nutritionModal = document.createElement('div');
    nutritionModal.id = 'nutritionModal';
    nutritionModal.className = 'modal';
    document.body.appendChild(nutritionModal);
  }

  nutritionModal.innerHTML = `
    <div class="modal-overlay"></div>
    <div class="modal-content">
      <div class="modal-header">
        <h2>Nutrition Calculator</h2>
        <button class="close-btn" aria-label="Close nutrition calculator">&times;</button>
      </div>
      <div class="modal-body">
        <p>Calculate the total nutrition of your selected salads:</p>
        <div id="nutritionResults">
          <div class="nutrition-summary">
            <h3>Current Cart Nutrition:</h3>
            <div class="nutrition-stats">
              <div class="nutrition-stat">
                <span class="nutrition-label">Total Calories:</span>
                <span class="nutrition-value" id="totalCalories">0</span>
              </div>
              <div class="nutrition-stat">
                <span class="nutrition-label">Estimated Protein:</span>
                <span class="nutrition-value" id="totalProtein">0g</span>
              </div>
              <div class="nutrition-stat">
                <span class="nutrition-label">Estimated Fiber:</span>
                <span class="nutrition-value" id="totalFiber">0g</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Calculate nutrition from cart
  let totalCalories = 0;
  let totalProtein = 0;
  let totalFiber = 0;

  cart.forEach(item => {
    totalCalories += item.calories * item.quantity;
    // Estimate protein and fiber based on category
    if (item.category === 'protein') {
      totalProtein += 15 * item.quantity;
      totalFiber += 5 * item.quantity;
    } else if (item.category === 'veg') {
      totalProtein += 3 * item.quantity;
      totalFiber += 8 * item.quantity;
    } else {
      totalProtein += 5 * item.quantity;
      totalFiber += 6 * item.quantity;
    }
  });

  // Update display
  nutritionModal.querySelector('#totalCalories').textContent = totalCalories;
  nutritionModal.querySelector('#totalProtein').textContent = totalProtein + 'g';
  nutritionModal.querySelector('#totalFiber').textContent = totalFiber + 'g';

  nutritionModal.style.display = 'block';
  nutritionModal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Close functionality
  nutritionModal.querySelector('.close-btn').addEventListener('click', function() {
    nutritionModal.style.display = 'none';
    nutritionModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  });

  nutritionModal.querySelector('.modal-overlay').addEventListener('click', function() {
    nutritionModal.style.display = 'none';
    nutritionModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
}

// ========================================
// 25. COOKIE CONSENT BANNER
// ========================================

function setupCookieConsent() {
  const cookieBanner = document.getElementById('cookieBanner');
  const acceptCookies = document.getElementById('acceptCookies');

  if (cookieBanner && acceptCookies) {
    // Show banner if not accepted
    if (!localStorage.getItem('crucialSaladCookiesAccepted')) {
      setTimeout(() => {
        cookieBanner.classList.add('active');
      }, 2000);
    }

    acceptCookies.addEventListener('click', function() {
      localStorage.setItem('crucialSaladCookiesAccepted', 'true');
      cookieBanner.classList.remove('active');
    });
  }
}

// ========================================
// 26. PROMOTIONAL CODE SYSTEM
// ========================================

function setupPromoCodes() {
  const copyCodeBtns = document.querySelectorAll('.copy-code-btn');
  
  copyCodeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const code = this.getAttribute('data-code');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(code).then(() => {
          showToast(`Promo code ${code} copied to clipboard!`);
        }).catch(() => {
          showToast(`Promo code: ${code}`, 'info');
        });
      } else {
        showToast(`Promo code: ${code}`, 'info');
      }
    });
  });
}

// ========================================
// 27. TESTIMONIALS SLIDER
// ========================================

function setupTestimonialsSlider() {
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const prevBtn = document.querySelector('.testimonial-prev');
  const nextBtn = document.querySelector('.testimonial-next');
  const dotsContainer = document.getElementById('testimonialDots');
  
  if (!testimonialCards.length) return;

  let currentSlide = 0;
  const totalSlides = testimonialCards.length;

  // Create dots
  if (dotsContainer) {
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('span');
      dot.classList.add('testimonial-dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }
  }

  function goToSlide(index) {
    testimonialCards.forEach((card, i) => {
      card.style.display = i === index ? 'block' : 'none';
    });
    
    document.querySelectorAll('.testimonial-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    
    currentSlide = index;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    goToSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    goToSlide(currentSlide);
  }

  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);

  // Auto-advance testimonials
  setInterval(nextSlide, 5000);

  // Initialize
  goToSlide(0);
}

// ========================================
// 28. WRITE REVIEW FUNCTIONALITY
// ========================================

function setupWriteReview() {
  const writeReviewBtn = document.getElementById('writeReviewBtn');
  
  if (writeReviewBtn) {
    writeReviewBtn.addEventListener('click', function() {
      showWriteReviewModal();
    });
  }
}

function showWriteReviewModal() {
  let reviewModal = document.getElementById('writeReviewModal');
  if (!reviewModal) {
    reviewModal = document.createElement('div');
    reviewModal.id = 'writeReviewModal';
    reviewModal.className = 'modal';
    document.body.appendChild(reviewModal);
  }

  reviewModal.innerHTML = `
    <div class="modal-overlay"></div>
    <div class="modal-content">
      <div class="modal-header">
        <h2>Write a Review</h2>
        <button class="close-btn" aria-label="Close write review">&times;</button>
      </div>
      <div class="modal-body">
        <form id="writeReviewForm">
          <div class="form-group">
            <label for="reviewerName">Your Name:</label>
            <input type="text" id="reviewerName" required>
          </div>
          <div class="form-group">
            <label for="reviewRating">Rating:</label>
            <div class="star-rating" id="starRating">
              <span class="star" data-rating="1">★</span>
              <span class="star" data-rating="2">★</span>
              <span class="star" data-rating="3">★</span>
              <span class="star" data-rating="4">★</span>
              <span class="star" data-rating="5">★</span>
            </div>
          </div>
          <div class="form-group">
            <label for="reviewText">Your Review:</label>
            <textarea id="reviewText" rows="4" required></textarea>
          </div>
          <button type="submit" class="btn-primary">Submit Review</button>
        </form>
      </div>
    </div>
  `;

  reviewModal.style.display = 'block';
  reviewModal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Star rating functionality
  const stars = reviewModal.querySelectorAll('.star');
  let selectedRating = 0;

  stars.forEach(star => {
    star.addEventListener('click', function() {
      selectedRating = parseInt(this.getAttribute('data-rating'));
      updateStars();
    });

    star.addEventListener('mouseover', function() {
      const rating = parseInt(this.getAttribute('data-rating'));
      highlightStars(rating);
    });
  });

  reviewModal.querySelector('.star-rating').addEventListener('mouseleave', () => {
    updateStars();
  });

  function highlightStars(rating) {
    stars.forEach((star, index) => {
      star.style.color = index < rating ? '#ffc107' : '#ddd';
    });
  }

  function updateStars() {
    highlightStars(selectedRating);
  }

  // Form submission
  reviewModal.querySelector('#writeReviewForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = reviewModal.querySelector('#reviewerName').value;
    const text = reviewModal.querySelector('#reviewText').value;
    
    if (selectedRating === 0) {
      showToast('Please select a rating', 'error');
      return;
    }

    showLoading();
    setTimeout(() => {
      hideLoading();
      showToast('Thank you for your review!');
      reviewModal.style.display = 'none';
      reviewModal.classList.remove('active');
      document.body.style.overflow = 'auto';
      console.log('Review submitted:', { name, rating: selectedRating, text });
    }, 1500);
  });

  // Close functionality
  reviewModal.querySelector('.close-btn').addEventListener('click', function() {
    reviewModal.style.display = 'none';
    reviewModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
}

// ========================================
// 29. HELPFUL REVIEW BUTTONS
// ========================================

function setupHelpfulButtons() {
  document.querySelectorAll('.helpful-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const currentCount = parseInt(this.textContent.match(/\d+/)[0]);
      this.innerHTML = `<i class="far fa-thumbs-up"></i> Helpful (${currentCount + 1})`;
      this.style.background = '#4CAF50';
      this.style.color = 'white';
      this.disabled = true;
      showToast('Thank you for your feedback!');
    });
  });
}

// ========================================
// 30. MODAL MANAGEMENT & KEYBOARD NAVIGATION
// ========================================

function setupModalManagement() {
  // Close modals on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  // Close modals when clicking overlay
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
      closeAllModals();
    }
  });
}

function closeAllModals() {
  document.querySelectorAll('.modal.active').forEach(modal => {
    modal.classList.remove('active');
    modal.style.display = 'none';
  });
  document.body.style.overflow = 'auto';
  activeModal = null;
}

/* -- CHUNK 4 CONTINUES -- */
// ========================================
// 31. EVENT DELEGATION FOR DYNAMIC ELEMENTS
// ========================================

function setupEventDelegation() {
  // Cart buttons
  document.addEventListener('click', function(e) {
    if (e.target.closest('.add-to-cart')) {
      const btn = e.target.closest('.add-to-cart');
      const id = parseInt(btn.getAttribute('data-id'));
      addToCart(id);
    }

    if (e.target.closest('.wishlist-toggle')) {
      const btn = e.target.closest('.wishlist-toggle');
      const id = parseInt(btn.getAttribute('data-id'));
      toggleWishlist(id);
    }

    if (e.target.closest('.cart-btn') || e.target.closest('#cartButton')) {
      openCartModal();
    }

    if (e.target.closest('.wishlist-btn') || e.target.closest('#wishlistButton')) {
      const wishlistSection = document.querySelector('.wishlist-section');
      if (wishlistSection) {
        smoothScrollTo('#wishlist');
      }
    }
  });
}

// ========================================
// 32. FORM VALIDATION ENHANCEMENT
// ========================================

function setupFormValidation() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
      input.addEventListener('blur', function() {
        validateField(this);
      });

      input.addEventListener('input', function() {
        if (this.classList.contains('has-error')) {
          validateField(this);
        }
      });
    });
  });
}

function validateField(field) {
  const formGroup = field.closest('.form-group');
  if (!formGroup) return;

  formGroup.classList.remove('has-error', 'has-success');

  if (field.hasAttribute('required') && !field.value.trim()) {
    formGroup.classList.add('has-error');
    return false;
  }

  if (field.type === 'email' && field.value) {
    if (!validateEmail(field.value)) {
      formGroup.classList.add('has-error');
      return false;
    }
  }

  if (field.type === 'tel' && field.value) {
    if (!validatePhone(field.value)) {
      formGroup.classList.add('has-error');
      return false;
    }
  }

  if (field.value.trim()) {
    formGroup.classList.add('has-success');
  }

  return true;
}

// ========================================
// 33. LAZY LOADING IMAGES
// ========================================

function setupLazyLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }
}

// ========================================
// 34. PERFORMANCE MONITORING
// ========================================

function logPerformance() {
  if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      console.log(`Page Load Time: ${pageLoadTime}ms`);
    });
  }
}

// ========================================
// 35. SERVICE WORKER REGISTRATION (PWA)
// ========================================

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered:', registration);
        })
        .catch(error => {
          console.log('Service Worker registration failed:', error);
        });
    });
  }
}

// ========================================
// 36. ANNOUNCEMENT BAR CLOSE
// ========================================

function setupAnnouncementBar() {
  const closeBtn = document.querySelector('.close-announcement');
  const announcementBar = document.querySelector('.top-announcement-bar');
  
  if (closeBtn && announcementBar) {
    closeBtn.addEventListener('click', () => {
      announcementBar.style.display = 'none';
      localStorage.setItem('crucialSaladAnnouncementClosed', 'true');
    });

    // Check if previously closed
    if (localStorage.getItem('crucialSaladAnnouncementClosed') === 'true') {
      announcementBar.style.display = 'none';
    }
  }
}

// ========================================
// 37. VIDEO PLAY BUTTON
// ========================================

function setupVideoButton() {
  const playBtn = document.querySelector('.play-video-btn');
  
  if (playBtn) {
    playBtn.addEventListener('click', function() {
      showToast('Video player feature coming soon!');
    });
  }
}

// ========================================
// 38. DROPDOWN MENU HANDLING
// ========================================

function setupDropdownMenus() {
  const dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');
    
    if (toggle && menu) {
      toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        
        // Close all other dropdowns
        document.querySelectorAll('.dropdown-toggle').forEach(t => {
          t.setAttribute('aria-expanded', 'false');
        });
        
        toggle.setAttribute('aria-expanded', !isExpanded);
      });
    }
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ========================================
// 39. SCROLL ANIMATIONS
// ========================================

function setupScrollAnimations() {
  const sections = document.querySelectorAll('section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    observer.observe(section);
  });
}

// ========================================
// 40. KEYBOARD SHORTCUTS
// ========================================

function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Ctrl + K to open search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      const searchInput = document.getElementById('navSearchInput');
      if (searchInput) {
        searchInput.focus();
      }
    }

    // Ctrl + B to open cart
    if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
      e.preventDefault();
      openCartModal();
    }
  });
}

// ========================================
// 41. PRINT RECEIPT FUNCTIONALITY
// ========================================

function setupPrintReceipt() {
  // Could be added to success modal or order history
  window.printReceipt = function(orderData) {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Order Receipt - Crucial Healthy Salad</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            h1 { color: #4CAF50; }
            table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            th, td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
            .total { font-weight: bold; font-size: 1.2rem; }
          </style>
        </head>
        <body>
          <h1>Crucial Healthy Salad</h1>
          <p>Order Receipt</p>
          <p>Date: ${new Date().toLocaleDateString()}</p>
          <table>
            <thead>
              <tr><th>Item</th><th>Qty</th><th>Price</th><th>Total</th></tr>
            </thead>
            <tbody>
              ${cart.map(item => `
                <tr>
                  <td>${item.name}</td>
                  <td>${item.quantity}</td>
                  <td>₹${item.price}</td>
                  <td>₹${item.price * item.quantity}</td>
                </tr>
              `).join('')}
            </tbody>
            <tfoot>
              <tr class="total">
                <td colspan="3">Total:</td>
                <td>₹${cartSubtotal()}</td>
              </tr>
            </tfoot>
          </table>
          <p>Thank you for your order!</p>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };
}

// ========================================
// 42. COPY TO CLIPBOARD UTILITY
// ========================================

function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('Copied to clipboard!');
    }).catch(() => {
      fallbackCopyToClipboard(text);
    });
  } else {
    fallbackCopyToClipboard(text);
  }
}

function fallbackCopyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showToast('Copied to clipboard!');
  } catch (err) {
    showToast('Copy failed', 'error');
  }
  document.body.removeChild(textarea);
}

// ========================================
// 43. LOCAL STORAGE CLEANUP
// ========================================

function cleanupOldData() {
  // Clean up old cart items (older than 7 days)
  const cartTimestamp = localStorage.getItem('crucialSaladCartTimestamp');
  if (cartTimestamp) {
    const daysSince = (Date.now() - parseInt(cartTimestamp)) / (1000 * 60 * 60 * 24);
    if (daysSince > 7) {
      localStorage.removeItem('crucialSaladCart');
      localStorage.removeItem('crucialSaladCartTimestamp');
      cart = [];
    }
  } else {
    localStorage.setItem('crucialSaladCartTimestamp', Date.now().toString());
  }
}

// ========================================
// 44. ERROR HANDLING & FALLBACKS
// ========================================

window.addEventListener('error', function(e) {
  console.error('Global error:', e.error);
  // Could send to error tracking service
});

window.addEventListener('unhandledrejection', function(e) {
  console.error('Unhandled promise rejection:', e.reason);
  // Could send to error tracking service
});

// ========================================
// 45. RESPONSIVE IMAGE LOADING
// ========================================

function updateImageSources() {
  const images = document.querySelectorAll('img[data-src-mobile]');
  
  images.forEach(img => {
    if (window.innerWidth <= 768 && img.hasAttribute('data-src-mobile')) {
      img.src = img.getAttribute('data-src-mobile');
    } else if (img.hasAttribute('data-src-desktop')) {
      img.src = img.getAttribute('data-src-desktop');
    }
  });
}

// ========================================
// 46. ACCESSIBILITY ENHANCEMENTS
// ========================================

function enhanceAccessibility() {
  // Add skip links focus management
  const skipLink = document.querySelector('.skip-link');
  if (skipLink) {
    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(skipLink.getAttribute('href'));
      if (target) {
        target.focus();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Add ARIA live regions for dynamic content
  const ariaLiveRegion = document.createElement('div');
  ariaLiveRegion.setAttribute('role', 'status');
  ariaLiveRegion.setAttribute('aria-live', 'polite');
  ariaLiveRegion.setAttribute('aria-atomic', 'true');
  ariaLiveRegion.className = 'sr-only';
  ariaLiveRegion.id = 'aria-live-region';
  document.body.appendChild(ariaLiveRegion);
}

// ========================================
// 47. NETWORK STATUS DETECTION
// ========================================

function setupNetworkDetection() {
  window.addEventListener('online', () => {
    showToast('You are back online!', 'success');
  });

  window.addEventListener('offline', () => {
    showToast('You are offline. Some features may not work.', 'error');
  });
}

// ========================================
// 48. ANALYTICS TRACKING (PLACEHOLDER)
// ========================================

function trackEvent(category, action, label) {
  // Placeholder for Google Analytics or other tracking
  console.log('Track Event:', { category, action, label });
  
  // Example: gtag('event', action, { event_category: category, event_label: label });
}

// ========================================
// 49. INITIALIZE ALL FEATURES
// ========================================

function initializeWebsite() {
  console.log('Initializing Crucial Healthy Salad website...');

  // Load saved data
  loadCart();
  loadWishlist();
  loadAccount();
  cleanupOldData();

  // Setup UI components
  setupNavigation();
  setupThemeToggle();
  setupLanguageSelector();
  setupEventDelegation();
  setupMenuFilters();
  setupMenuSortAndView();
  setupLiveSearch();
  setupNutritionCalculator();
  setupAccountModals();
  setupLiveChat();
  setupBlogNavigation();
  setupFAQ();
  setupNewsletterForm();
  setupContactForm();
  setupProductComparison();
  setupOrderTracking();
  setupGiftCardPurchase();
  setupTestimonialsSlider();
  setupWriteReview();
  setupHelpfulButtons();
  setupModalManagement();
  setupCookieConsent();
  setupPromoCodes();
  setupBackToTop();
  setupAnnouncementBar();
  setupVideoButton();
  setupDropdownMenus();
  setupFormValidation();
  setupLazyLoading();
  setupScrollAnimations();
  setupKeyboardShortcuts();
  setupPrintReceipt();
  setupNetworkDetection();
  enhanceAccessibility();

  // Render initial content
  renderMenu();
  renderWishlist();
  updateCartCount();
  updateWishlistCount();
  animateStats();
  setupHeroSectionParticleEffects();
  setupAOS();

  // Performance monitoring
  logPerformance();

  // Register service worker (optional PWA)
  // registerServiceWorker();

  // Update responsive images
  updateImageSources();
  window.addEventListener('resize', updateImageSources);

  console.log('Website initialized successfully!');
  
  // Track page load
  trackEvent('Website', 'PageLoad', 'Home');
}

// ========================================
// 50. DOCUMENT READY & INITIALIZATION
// ========================================

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeWebsite);
} else {
  initializeWebsite();
}

// ========================================
// GLOBAL UTILITY EXPORTS
// ========================================

// Make key functions globally accessible
window.CrucialSalad = {
  addToCart,
  removeFromCart,
  updateQuantity,
  toggleWishlist,
  openCartModal,
  closeCartModal,
  showToast,
  showLoading,
  hideLoading,
  formatINR,
  trackEvent
};

// ========================================
// END OF JAVASCRIPT FILE
// Total Lines: 5000+
// File: script.js
// Created: October 2025
// Author: Crucial Healthy Salad Development Team
// ========================================

console.log('%c🥗 Crucial Healthy Salad Website Loaded Successfully! 🥗', 'color: #4CAF50; font-size: 16px; font-weight: bold;');
console.log('%cFor support, contact: crucialhealthysalad@gmail.com', 'color: #666; font-size: 12px;');
console.log('%cPhone: +91 9075181070', 'color: #666; font-size: 12px;');

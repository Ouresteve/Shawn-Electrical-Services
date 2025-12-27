// PRODUCTS DATA
const products = [
  { id:1, name:"CCTV Camera", price:3000, image:"https://images.unsplash.com/photo-1581092580492-1e73a7c3bc2b?auto=format&fit=crop&w=400&q=80" },
  { id:2, name:"Network Cable 50m", price:2500, image:"https://images.unsplash.com/photo-1591035897819-7b4d58f6b78d?auto=format&fit=crop&w=400&q=80" },
  { id:3, name:"Electric Fence Insulator", price:150, image:"https://images.unsplash.com/photo-1601681216337-c5f4224a72f5?auto=format&fit=crop&w=400&q=80" },
  { id:4, name:"Solar Panel 100W", price:12000, image:"https://images.unsplash.com/photo-1613750557428-f26b70b0e9f3?auto=format&fit=crop&w=400&q=80" },
  { id:5, name:"LED Tube Light 18W", price:400, image:"https://images.unsplash.com/photo-1611950647224-87087c2a09fc?auto=format&fit=crop&w=400&q=80" },
  { id:6, name:"Electric Socket Outlet", price:350, image:"https://images.unsplash.com/photo-1611950599830-74d7f9110f3c?auto=format&fit=crop&w=400&q=80" },
  { id:7, name:"Circuit Breaker 32A", price:1200, image:"https://images.unsplash.com/photo-1603500966212-4caa720d3f26?auto=format&fit=crop&w=400&q=80" },
  { id:8, name:"LED Bulb 9W", price:200, image:"https://images.unsplash.com/photo-1611950647224-87087c2a09fc?auto=format&fit=crop&w=400&q=80" },
  { id:9, name:"Electric Fan 16\"", price:2500, image:"https://images.unsplash.com/photo-1612817155260-efb36c94032f?auto=format&fit=crop&w=400&q=80" },
  { id:10, name:"Extension Socket 4 Ports", price:500, image:"https://images.unsplash.com/photo-1603500966212-4caa720d3f26?auto=format&fit=crop&w=400&q=80" },
  { id:11, name:"Electric Fence Charger", price:7500, image:"https://images.unsplash.com/photo-1591035897819-7b4d58f6b78d?auto=format&fit=crop&w=400&q=80" },
  { id:12, name:"Voltage Stabilizer 1000W", price:5500, image:"https://images.unsplash.com/photo-1581092580492-1e73a7c3bc2b?auto=format&fit=crop&w=400&q=80" },
  { id:13, name:"LED Flood Light 50W", price:1500, image:"https://images.unsplash.com/photo-1611950599830-74d7f9110f3c?auto=format&fit=crop&w=400&q=80" },
  { id:14, name:"Solar Inverter 1kVA", price:22000, image:"https://images.unsplash.com/photo-1613750557428-f26b70b0e9f3?auto=format&fit=crop&w=400&q=80" },
  { id:15, name:"Electric Heater 2000W", price:3500, image:"https://images.unsplash.com/photo-1612817155260-efb36c94032f?auto=format&fit=crop&w=400&q=80" },
  { id:16, name:"Motion Sensor Light", price:1200, image:"https://images.unsplash.com/photo-1603500966212-4caa720d3f26?auto=format&fit=crop&w=400&q=80" },
  { id:17, name:"Electric Fence Wire", price:180, image:"https://images.unsplash.com/photo-1591035897819-7b4d58f6b78d?auto=format&fit=crop&w=400&q=80" },
  { id:18, name:"Smart Switch", price:900, image:"https://images.unsplash.com/photo-1611950647224-87087c2a09fc?auto=format&fit=crop&w=400&q=80" },
  { id:19, name:"Electric Kettle", price:2500, image:"https://images.unsplash.com/photo-1583217340708-5f7e8d0b2b7d?auto=format&fit=crop&w=400&q=80" },
  { id:20, name:"LED Ceiling Light 36W", price:2000, image:"https://images.unsplash.com/photo-1611950647224-87087c2a09fc?auto=format&fit=crop&w=400&q=80" },
  { id:21, name:"Mini Solar Panel 50W", price:7000, image:"https://images.unsplash.com/photo-1613750557428-f26b70b0e9f3?auto=format&fit=crop&w=400&q=80" },
  { id:22, name:"Electric Drill 500W", price:3500, image:"https://images.unsplash.com/photo-1612817155260-efb36c94032f?auto=format&fit=crop&w=400&q=80" },
  { id:23, name:"Smart Plug", price:1200, image:"https://images.unsplash.com/photo-1611950647224-87087c2a09fc?auto=format&fit=crop&w=400&q=80" },
  { id:24, name:"Electrical Tape", price:150, image:"https://images.unsplash.com/photo-1612817155260-efb36c94032f?auto=format&fit=crop&w=400&q=80" },
  { id:25, name:"LED Strip Light 5m", price:800, image:"https://images.unsplash.com/photo-1611950647224-87087c2a09fc?auto=format&fit=crop&w=400&q=80" },
  { id:26, name:"Electric Socket 2-in-1 USB", price:600, image:"https://images.unsplash.com/photo-1611950599830-74d7f9110f3c?auto=format&fit=crop&w=400&q=80" },
  { id:27, name:"Electric Panel Box", price:5500, image:"https://images.unsplash.com/photo-1581092580492-1e73a7c3bc2b?auto=format&fit=crop&w=400&q=80" },
  { id:28, name:"Battery Charger 12V", price:3200, image:"https://images.unsplash.com/photo-1612817155260-efb36c94032f?auto=format&fit=crop&w=400&q=80" },
  { id:29, name:"Electric Fan 12\"", price:2000, image:"https://images.unsplash.com/photo-1612817155260-efb36c94032f?auto=format&fit=crop&w=400&q=80" },
  { id:30, name:"LED Wall Light 10W", price:700, image:"https://images.unsplash.com/photo-1611950599830-74d7f9110f3c?auto=format&fit=crop&w=400&q=80" },
  { id:31, name:"Electric Water Pump", price:15000, image:"https://images.unsplash.com/photo-1613750557428-f26b70b0e9f3?auto=format&fit=crop&w=400&q=80" },
  { id:32, name:"LED Flood Light 100W", price:3000, image:"https://images.unsplash.com/photo-1611950599830-74d7f9110f3c?auto=format&fit=crop&w=400&q=80" },
  { id:33, name:"Solar Battery 12V 100Ah", price:18000, image:"https://images.unsplash.com/photo-1613750557428-f26b70b0e9f3?auto=format&fit=crop&w=400&q=80" },
  { id:34, name:"Extension Cord 10m", price:400, image:"https://images.unsplash.com/photo-1603500966212-4caa720d3f26?auto=format&fit=crop&w=400&q=80" },
  { id:35, name:"Electric Wire 10m", price:500, image:"https://images.unsplash.com/photo-1591035897819-7b4d58f6b78d?auto=format&fit=crop&w=400&q=80" },
  { id:36, name:"LED Bulb 12W", price:250, image:"https://images.unsplash.com/photo-1611950647224-87087c2a09fc?auto=format&fit=crop&w=400&q=80" },
  { id:37, name:"Smart Light Switch", price:1100, image:"https://images.unsplash.com/photo-1611950647224-87087c2a09fc?auto=format&fit=crop&w=400&q=80" },
  { id:38, name:"Electric Fan 18\"", price:3000, image:"https://images.unsplash.com/photo-1612817155260-efb36c94032f?auto=format&fit=crop&w=400&q=80" },
  { id:39, name:"LED Panel Light 36W", price:2500, image:"https://images.unsplash.com/photo-1611950647224-87087c2a09fc?auto=format&fit=crop&w=400&q=80" },
  { id:40, name:"Solar Charge Controller 20A", price:3200, image:"https://images.unsplash.com/photo-1613750557428-f26b70b0e9f3?auto=format&fit=crop&w=400&q=80" },
  { id:41, name:"Electric Iron", price:1200, image:"https://images.unsplash.com/photo-1583217340708-5f7e8d0b2b7d?auto=format&fit=crop&w=400&q=80" },
  { id:42, name:"LED Ceiling Panel 18W", price:1500, image:"https://images.unsplash.com/photo-1611950647224-87087c2a09fc?auto=format&fit=crop&w=400&q=80" },
  { id:43, name:"Solar Panel Mounting Kit", price:4500, image:"https://images.unsplash.com/photo-1613750557428-f26b70b0e9f3?auto=format&fit=crop&w=400&q=80" },
  { id:44, name:"Electric Fence Sign", price:300, image:"https://images.unsplash.com/photo-1591035897819-7b4d58f6b78d?auto=format&fit=crop&w=400&q=80" },
  { id:45, name:"Smart Door Bell", price:4500, image:"https://images.unsplash.com/photo-1611950647224-87087c2a09fc?auto=format&fit=crop&w=400&q=80" },
  { id:46, name:"Mini LED Spotlight", price:800, image:"https://images.unsplash.com/photo-1611950599830-74d7f9110f3c?auto=format&fit=crop&w=400&q=80" },
  { id:47, name:"Electric Socket Extension 6 Ports", price:700, image:"https://images.unsplash.com/photo-1611950599830-74d7f9110f3c?auto=format&fit=crop&w=400&q=80" },
  { id:48, name:"Electric Cooker 4 Plate", price:5000, image:"https://images.unsplash.com/photo-1583217340708-5f7e8d0b2b7d?auto=format&fit=crop&w=400&q=80" },
  { id:49, name:"LED Garden Light 10W", price:900, image:"https://images.unsplash.com/photo-1611950599830-74d7f9110f3c?auto=format&w=400&q=80" },
  { id:50, name:"Solar Panel Cable 10m", price:1200, image:"https://images.unsplash.com/photo-1591035897819-7b4d58f6b78d?auto=format&w=400&q=80" },
  { id:51, name:"Electric Fence Energizer 5J", price:9500, image:"https://images.unsplash.com/photo-1591035897819-7b4d58f6b78d?auto=format&w=400&q=80" }
];


let cart = [];
let selectedProduct = null;

// LOAD PRODUCTS
const grid = document.getElementById("productsGrid");

function renderProducts(list) {
  grid.innerHTML = "";
  list.forEach(p => {
    grid.innerHTML += `
      <div class="product-card" onclick="openModal(${p.id})">
        <img src="${p.image}" />
        <h4>${p.name}</h4>
        <p>KES ${p.price}</p>
      </div>
    `;
  });
}
renderProducts(products);

// SEARCH
document.getElementById("searchInput").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(value)
  );
  renderProducts(filtered);
});

// MODAL
function openModal(id) {
  selectedProduct = products.find(p => p.id === id);
  document.getElementById("modalImage").src = selectedProduct.image;
  document.getElementById("modalName").innerText = selectedProduct.name;
  document.getElementById("modalPrice").innerText = "KES " + selectedProduct.price;
  document.getElementById("modalQty").value = 1;
  document.getElementById("productModal").style.display = "flex";
    
  history.pushState({ modal: true }, "");
}

function closeModal() {
  document.getElementById("productModal").style.display = "none";
  history.back();
}

// PHONE BACK BUTTON HANDLING
window.onpopstate = function () {
  document.getElementById("productModal").style.display = "none";
};

// CART
function addToCart() {
  const qty = parseInt(document.getElementById("modalQty").value);
  if (isNaN(qty) || qty<1) {
    qty=1;
  }
  const existing = cart.find(i => i.id === selectedProduct.id);

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...selectedProduct, qty });
  }

  updateCart();
  closeModal();
}

function updateCart() {
  document.getElementById("cartCount").innerText = cart.reduce((a, b) => a + b.qty, 0);

  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";

  let total = 0;
  cart.forEach(item => {
    const sub = item.qty * item.price;
    total += sub;

    cartItems.innerHTML += `
      <div class="cart-item">
        <span>${item.name} x${item.qty}</span>
        <span>KES ${sub}</span>
      </div>
    `;
  });

  document.getElementById("cartTotal").innerText = total;
}

function toggleCart() {
  document.getElementById("cartPanel").classList.toggle("open");
}
function untoggleCart () {
    document.getElementById("cartPanel").classList.remove("open");
}
// WHATSAPP ORDER
function orderWhatsApp() {
  if (cart.length === 0) return alert("Cart is empty");

  let text = "Hello, I would like to place an order.%0A%0A";
  let total = 0;

  cart.forEach((item, i) => {
    const sub = item.qty * item.price;
    total += sub;
    text += `${i + 1}. ${item.name} (x${item.qty}) - KES ${sub}%0A`;
  });

  text += `%0A💰 Total: KES ${total}%0A`;
  text += `%0APayment via Till Number: 123456`;

  window.open(`https://wa.me/254718329450?text=${text}`, "_blank");
}

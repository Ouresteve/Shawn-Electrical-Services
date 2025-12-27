// PRODUCTS DATA
const products = [
  // Solar & Power
  { id: 1, name: "Solar Panel 100W", price: 8000, image: "images/solar_panel.jpg" },
  { id: 2, name: "Solar Charge Controller 10A", price: 3500, image: "images/solar_controller.jpg" },
  { id: 3, name: "Inverter 1000W", price: 12000, image: "images/inverter.jpg" },
  { id: 4, name: "Battery 12V 100Ah", price: 14000, image: "images/battery.jpg" },

  // Wiring & Accessories
  { id: 5, name: "Network Cable 50m", price: 2500, image: "images/network_cable.jpg" },
  { id: 6, name: "Electrical Wire 2.5mm² (100m)", price: 6000, image: "images/wire_2_5.jpg" },
  { id: 7, name: "Electrical Wire 1.5mm² (100m)", price: 4500, image: "images/wire_1_5.jpg" },
  { id: 8, name: "Cable Clips Pack", price: 150, image: "images/cable_clips.jpg" },

  // Lighting
  { id: 9, name: "LED Bulb 9W", price: 350, image: "images/led_bulb.jpg" },
  { id: 10, name: "Tube Light 18W", price: 700, image: "images/tube_light.jpg" },
  { id: 11, name: "Smart Light Switch", price: 1200, image: "images/smart_switch.jpg" },

  // Security & CCTV
  { id: 12, name: "CCTV Camera", price: 3000, image: "images/cctv.jpg" },
  { id: 13, name: "DVR 4CH", price: 9000, image: "images/dvr.jpg" },
  { id: 14, name: "Motion Sensor Light", price: 1500, image: "images/motion_sensor.jpg" },

  // Electrical Tools
  { id: 15, name: "Multimeter", price: 2500, image: "images/multimeter.jpg" },
  { id: 16, name: "Wire Stripper Tool", price: 600, image: "images/wire_stripper.jpg" },
  { id: 17, name: "Electrical Tape Pack", price: 300, image: "images/electrical_tape.jpg" },

  // Appliances & Fittings
  { id: 18, name: "Extension Socket 3m", price: 1200, image: "images/extension_socket.jpg" },
  { id: 19, name: "Circuit Breaker 32A", price: 1500, image: "images/circuit_breaker.jpg" },
  { id: 20, name: "Electric Fence Energizer", price: 4500, image: "images/fence_energizer.jpg" },
  { id: 21, name: "Fence Insulators (10pcs)", price: 150, image: "images/fence_insulator.jpg" },

  // CCTV / Security Accessories
  { id: 22, name: "CCTV Mount Bracket", price: 350, image: "images/cctv_bracket.jpg" },
  { id: 23, name: "CCTV Power Adapter", price: 500, image: "images/cctv_adapter.jpg" },

  // Misc
  { id: 24, name: "LED Strip Light 5m", price: 1200, image: "images/led_strip.jpg" },
  { id: 25, name: "Surge Protector 4 Socket", price: 900, image: "images/surge_protector.jpg" }
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

// PRODUCTS DATA
const products = [
  { id: 1, name: "CCTV Camera", price: 3000, image: "https://i-pro.com/products_and_solutions/sites/default/files/styles/webp/public/2023-03/Network_Cameras.png.webp?itok=foiw4Seq" },
  { id: 2, name: "Network Cable 50m", price: 2500, image: "https://i.ebayimg.com/images/g/3lcAAOSwiLdWCpHa/s-l1200.jpg" },
  { id: 3, name: "Electric Fence Insulator", price: 150, image: "https://m.media-amazon.com/images/I/71n6OTsnRBL._AC_UF894,1000_QL80_.jpg" },
  { id: 4, name: "Solar Panel 100W", price: 12000, image: "https://www.siliconsolar.com/wp-content/uploads/2020/09/2020920-100W-WB-1200x675.jpg" },
  { id: 5, name: "LED Tube Light 18W", price: 400, image: "https://m.media-amazon.com/images/I/41s9KqzY-1L._AC_UF1000,1000_QL80_.jpg" },
  { id: 6, name: "Electric Socket Outlet", price: 350, image: "https://m.media-amazon.com/images/I/618KwXbN8pL.jpg" },
  { id: 7, name: "Circuit Breaker 32A", price: 1200, image: "https://m.media-amazon.com/images/I/61QUzbdfP4L._AC_UF894,1000_QL80_.jpg" },
  { id: 8, name: "LED Bulb 9W", price: 200, image: "https://www.vtaclight.be/web/image/product.product/105648/image_1024/%5B7240%5D%20VT-1900%209W%20A60%20LED%20PLASTIC%20BULB%20%20E27%203PCS-PACK%20%283000K%29?unique=f8cab4c" },
  { id: 9, name: "Electric Fan 16\"", price: 2500, image: "https://m.media-amazon.com/images/I/51XcLP67EsL.jpg" },
  { id: 10, name: "Extension Socket 4 Ports", price: 500, image: "https://m.media-amazon.com/images/I/61V0H1F+apL.jpg" },
  { id: 11, name: "Electric Fence Charger", price: 7500, image: "http://www.gallagherfence.net/cdn/shop/products/m800-left-facing-g323524-light-on_grande.jpg?v=1516987986" },
  { id: 12, name: "Voltage Stabilizer 1000W", price: 5500, image: "https://m.media-amazon.com/images/I/61ThHY+CZdL._AC_UF1000,1000_QL80_.jpg" },
  { id: 13, name: "LED Flood Light 50W", price: 1500, image: "https://m.media-amazon.com/images/I/61RUxKeqC7L._AC_UF894,1000_QL80_.jpg" },
  { id: 14, name: "Solar Inverter 1kVA", price: 22000, image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/ce48cfda-3d0c-436e-9e90-73167fc81370.__CR0,0,1200,900_PT0_SX600_V1___.jpg" },
  { id: 15, name: "Electric Heater 2000W", price: 3500, image: "https://m.media-amazon.com/images/I/51BxwqeJWdL._AC_UF894,1000_QL80_.jpg" },
  { id: 16, name: "Motion Sensor Light", price: 1200, image: "https://m.media-amazon.com/images/I/61RUxKeqC7L._AC_UF894,1000_QL80_.jpg" },
  { id: 17, name: "Electric Fence Wire 100m", price: 180, image: "https://m.media-amazon.com/images/I/71n6OTsnRBL._AC_UF894,1000_QL80_.jpg" },
  { id: 18, name: "Smart Switch", price: 900, image: "https://m.media-amazon.com/images/I/618KwXbN8pL.jpg" },
  { id: 19, name: "Solar Charge Controller", price: 3500, image: "https://www.siliconsolar.com/wp-content/uploads/2020/09/2020920-100W-WB-1200x675.jpg" },
  { id: 20, name: "Battery Inverter Cable", price: 1000, image: "https://i.ebayimg.com/images/g/3lcAAOSwiLdWCpHa/s-l1200.jpg" },
  { id: 21, name: "Electrical Tape (Roll)", price: 150, image: "https://m.media-amazon.com/images/I/71n6OTsnRBL._AC_UF894,1000_QL80_.jpg" },
  { id: 22, name: "MCB 20A", price: 750, image: "https://m.media-amazon.com/images/I/61QUzbdfP4L._AC_UF894,1000_QL80_.jpg" },
  { id: 23, name: "LED Panel Light 12W", price: 800, image: "https://m.media-amazon.com/images/I/41s9KqzY-1L._AC_UF1000,1000_QL80_.jpg" },
  { id: 24, name: "Induction Cooker Switch", price: 1200, image: "https://m.media-amazon.com/images/I/618KwXbN8pL.jpg" },
  { id: 25, name: "LED Downlight 9W", price: 900, image: "https://www.vtaclight.be/web/image/product.product/105648/image_1024/%5B7240%5D%20VT-1900%209W%20A60%20LED%20PLASTIC%20BULB%20%20E27%203PCS-PACK%20%283000K%29?unique=f8cab4c" },
  { id: 26, name: "Power Strip (6 Sockets)", price: 650, image: "https://m.media-amazon.com/images/I/61V0H1F+apL.jpg" },
  { id: 27, name: "Electrical Conduit Pipe", price: 1200, image: "https://m.media-amazon.com/images/I/618KwXbN8pL.jpg" },
  { id: 28, name: "LED Street Light 100W", price: 8500, image: "https://m.media-amazon.com/images/I/61RUxKeqC7L._AC_UF894,1000_QL80_.jpg" },
  { id: 29, name: "Solar Battery 100Ah", price: 19000, image: "https://www.siliconsolar.com/wp-content/uploads/2020/09/2020920-100W-WB-1200x675.jpg" },
  { id: 30, name: "Distribution Board", price: 4200, image: "https://m.media-amazon.com/images/I/61ThHY+CZdL._AC_UF1000,1000_QL80_.jpg" },
  { id: 31, name: "Exhaust Fan 150mm", price: 2800, image: "https://m.media-amazon.com/images/I/51XcLP67EsL.jpg" },
  { id: 32, name: "LED Tube 24W", price: 1200, image: "https://m.media-amazon.com/images/I/41s9KqzY-1L._AC_UF1000,1000_QL80_.jpg" },
  { id: 33, name: "Ceiling Fan 56\"", price: 5700, image: "https://m.media-amazon.com/images/I/51XcLP67EsL.jpg" },
  { id: 34, name: "Junction Box", price: 900, image: "https://m.media-amazon.com/images/I/71n6OTsnRBL._AC_UF894,1000_QL80_.jpg" },
  { id: 35, name: "Smoke Detector", price: 2200, image: "https://m.media-amazon.com/images/I/61RUxKeqC7L._AC_UF894,1000_QL80_.jpg" },
  { id: 36, name: "Voltage Meter", price: 1500, image: "https://m.media-amazon.com/images/I/61ThHY+CZdL._AC_UF1000,1000_QL80_.jpg" },
  { id: 37, name: "Cable Clips (Pack)", price: 350, image: "https://i.ebayimg.com/images/g/3lcAAOSwiLdWCpHa/s-l1200.jpg" },
  { id: 38, name: "Insulation Gloves", price: 1200, image: "https://m.media-amazon.com/images/I/71n6OTsnRBL._AC_UF894,1000_QL80_.jpg" },
  { id: 39, name: "Tool Kit (Electric)", price: 4500, image: "https://m.media-amazon.com/images/I/618KwXbN8pL.jpg" },
  { id: 40, name: "LED Bulkhead 18W", price: 1100, image: "https://m.media-amazon.com/images/I/41s9KqzY-1L._AC_UF1000,1000_QL80_.jpg" },
  { id: 41, name: "MCB 32A", price: 950, image: "https://m.media-amazon.com/images/I/61QUzbdfP4L._AC_UF894,1000_QL80_.jpg" },
  { id: 42, name: "Smart Motion Sensor", price: 3200, image: "https://m.media-amazon.com/images/I/61RUxKeqC7L._AC_UF894,1000_QL80_.jpg" },
  { id: 43, name: "LED Spotlight 20W", price: 2100, image: "https://m.media-amazon.com/images/I/41s9KqzY-1L._AC_UF1000,1000_QL80_.jpg" },
  { id: 44, name: "Battery Charger", price: 3500, image: "http://www.gallagherfence.net/cdn/shop/products/m800-left-facing-g323524-light-on_grande.jpg?v=1516987986" },
  { id: 45, name: "USB Charging Socket", price: 700, image: "https://m.media-amazon.com/images/I/618KwXbN8pL.jpg" },
  { id: 46, name: "LED Panel 36W", price: 2400, image: "https://m.media-amazon.com/images/I/41s9KqzY-1L._AC_UF1000,1000_QL80_.jpg" },
  { id: 47, name: "Light Switch (Single)", price: 450, image: "https://m.media-amazon.com/images/I/618KwXbN8pL.jpg" },
  { id: 48, name: "Fuse Box 4 Way", price: 3700, image: "https://m.media-amazon.com/images/I/61ThHY+CZdL._AC_UF1000,1000_QL80_.jpg" },
  { id: 49, name: "Solar LED Garden Light", price: 1800, image: "https://m.media-amazon.com/images/I/61RUxKeqC7L._AC_UF894,1000_QL80_.jpg" },
  { id: 50, name: "PVC Conduit 25mm", price: 700, image: "https://m.media-amazon.com/images/I/71n6OTsnRBL._AC_UF894,1000_QL80_.jpg" },
  { id: 51, name: "LED Desk Lamp", price: 1300, image: "https://www.vtaclight.be/web/image/product.product/105648/image_1024/%5B7240%5D%20VT-1900%209W%20A60%20LED%20PLASTIC%20BULB%20%20E27%203PCS-PACK%20%283000K%29?unique=f8cab4c" }
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

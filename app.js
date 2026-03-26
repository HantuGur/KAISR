/* =============================================
   KASIR BENGKEL — Maju Jaya Motor
   app.js — Logika utama aplikasi
   ============================================= */

// ====================================================
// DATA PRODUK DEFAULT (Dictionary Stok Bengkel)
// ====================================================
const DEFAULT_PRODUCTS = [
  // Oli & Pelumas
  { id: 'p001', name: 'Oli Mesin Shell Helix 1L', category: 'Oli & Pelumas', price: 75000, stock: 30, icon: '🛢️', minStock: 5 },
  { id: 'p002', name: 'Oli Mesin Yamalube 1L',    category: 'Oli & Pelumas', price: 65000, stock: 25, icon: '🛢️', minStock: 5 },
  { id: 'p003', name: 'Oli Gardan/Transmisi',     category: 'Oli & Pelumas', price: 35000, stock: 20, icon: '🛢️', minStock: 3 },
  { id: 'p004', name: 'Oli Rem DOT 4 (150ml)',    category: 'Oli & Pelumas', price: 28000, stock: 15, icon: '🧴', minStock: 3 },

  // Kampas & Rem
  { id: 'p010', name: 'Kampas Rem Depan Honda Beat', category: 'Kampas & Rem', price: 45000, stock: 20, icon: '🔴', minStock: 4 },
  { id: 'p011', name: 'Kampas Rem Belakang Mio',     category: 'Kampas & Rem', price: 40000, stock: 18, icon: '🔴', minStock: 4 },
  { id: 'p012', name: 'Kampas Kopling Set',          category: 'Kampas & Rem', price: 85000, stock: 10, icon: '🔴', minStock: 2 },
  { id: 'p013', name: 'Master Rem Atas',             category: 'Kampas & Rem', price: 120000, stock: 8, icon: '🔩', minStock: 2 },

  // Filter
  { id: 'p020', name: 'Filter Udara Honda Beat',  category: 'Filter', price: 35000, stock: 20, icon: '🌀', minStock: 4 },
  { id: 'p021', name: 'Filter Udara Yamaha Mio',  category: 'Filter', price: 32000, stock: 18, icon: '🌀', minStock: 4 },
  { id: 'p022', name: 'Filter Oli Universal',     category: 'Filter', price: 22000, stock: 30, icon: '🌀', minStock: 5 },
  { id: 'p023', name: 'Saringan Bensin',          category: 'Filter', price: 18000, stock: 15, icon: '🔧', minStock: 3 },

  // Aki & Listrik
  { id: 'p030', name: 'Aki GS Astra 5 Ah',    category: 'Aki & Listrik', price: 250000, stock: 10, icon: '🔋', minStock: 2 },
  { id: 'p031', name: 'Aki Yuasa MF 7 Ah',    category: 'Aki & Listrik', price: 320000, stock: 8,  icon: '🔋', minStock: 2 },
  { id: 'p032', name: 'Busi NGK Standard',    category: 'Aki & Listrik', price: 25000, stock: 40, icon: '⚡', minStock: 8 },
  { id: 'p033', name: 'Busi Iridium NGK',     category: 'Aki & Listrik', price: 75000, stock: 15, icon: '⚡', minStock: 3 },
  { id: 'p034', name: 'Kabel Busi Universal', category: 'Aki & Listrik', price: 55000, stock: 12, icon: '🔌', minStock: 2 },
  { id: 'p035', name: 'Lampu Depan LED H4',  category: 'Aki & Listrik', price: 85000, stock: 10, icon: '💡', minStock: 2 },

  // Kaki-kaki
  { id: 'p040', name: 'Ban Dalam 17 Inch',      category: 'Kaki-kaki', price: 40000, stock: 20, icon: '🔵', minStock: 4 },
  { id: 'p041', name: 'Ban Luar IRC 70/90-17',   category: 'Kaki-kaki', price: 195000, stock: 12, icon: '⚫', minStock: 2 },
  { id: 'p042', name: 'Ban Tubeless FDR 80/90', category: 'Kaki-kaki', price: 245000, stock: 10, icon: '⚫', minStock: 2 },
  { id: 'p043', name: 'Shock Depan Standar',     category: 'Kaki-kaki', price: 380000, stock: 6,  icon: '🔧', minStock: 2 },
  { id: 'p044', name: 'Laher/Bearing Roda Dep.', category: 'Kaki-kaki', price: 55000, stock: 14, icon: '⚙️', minStock: 3 },

  // Jasa Service
  { id: 'p050', name: 'Servis Ringan (tune-up)', category: 'Jasa Service', price: 50000,  stock: 999, icon: '🔧', minStock: 0 },
  { id: 'p051', name: 'Servis Besar (overhaul)', category: 'Jasa Service', price: 200000, stock: 999, icon: '🛠️', minStock: 0 },
  { id: 'p052', name: 'Ganti Oli + Jasa',        category: 'Jasa Service', price: 25000,  stock: 999, icon: '⚙️', minStock: 0 },
  { id: 'p053', name: 'Stel Karburator',         category: 'Jasa Service', price: 35000,  stock: 999, icon: '🔩', minStock: 0 },
  { id: 'p054', name: 'Tambal Ban Tubeless',      category: 'Jasa Service', price: 30000,  stock: 999, icon: '🛞', minStock: 0 },
  { id: 'p055', name: 'Cuci Motor',              category: 'Jasa Service', price: 20000,  stock: 999, icon: '🚿', minStock: 0 },

  // Aksesoris
  { id: 'p060', name: 'Kunci Kontak Universal',   category: 'Aksesoris', price: 65000, stock: 12, icon: '🗝️', minStock: 2 },
  { id: 'p061', name: 'Spion Kiri/Kanan (pcs)',   category: 'Aksesoris', price: 45000, stock: 15, icon: '🔲', minStock: 3 },
  { id: 'p062', name: 'Grip Gas & Rem Set',       category: 'Aksesoris', price: 38000, stock: 18, icon: '🏍️', minStock: 3 },
  { id: 'p063', name: 'Rantai Motor 428 H',       category: 'Aksesoris', price: 145000, stock: 8, icon: '⛓️', minStock: 2 },
];

// ====================================================
// STATE APLIKASI
// ====================================================
let products    = [];
let cart        = [];
let transactions = [];
let activeCategory = 'Semua';
let editingProductId = null;
let lapChart = null;   // Chart instance (global untuk re-render)

// ====================================================
// INIT
// ====================================================
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  updateClock();
  setInterval(updateClock, 1000);
  renderCategories();
  renderProducts();
  renderStokPage();

  // Set default tanggal hari ini di laporan
  const today = new Date().toISOString().split('T')[0];
  const thisMonth = today.slice(0,7);
  document.getElementById('datePickerHarian').value = today;
  document.getElementById('monthPickerBulanan').value = thisMonth;

  renderHarian();
  renderBulanan();
  renderTren();
});

// ====================================================
// CLOCK
// ====================================================
function updateClock() {
  const now = new Date();
  const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  document.getElementById('clock').textContent = now.toLocaleString('id-ID', opts);
}

// ====================================================
// LOCAL STORAGE
// ====================================================
function loadData() {
  const savedProducts = localStorage.getItem('bengkelProducts');
  products = savedProducts ? JSON.parse(savedProducts) : JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));

  const savedTx = localStorage.getItem('bengkelTransactions');
  transactions = savedTx ? JSON.parse(savedTx) : [];
}

function saveProducts() { localStorage.setItem('bengkelProducts', JSON.stringify(products)); }
function saveTransactions() { localStorage.setItem('bengkelTransactions', JSON.stringify(transactions)); }

// ====================================================
// NAVIGASI HALAMAN
// ====================================================
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.getElementById('btn-' + page).classList.add('active');

  if (page === 'stok')    renderStokPage();
  if (page === 'laporan') { renderHarian(); renderBulanan(); renderTren(); renderRiwayat(); }
}

// ====================================================
// KATALOG PRODUK
// ====================================================
function getCategories() {
  const cats = ['Semua', ...new Set(products.map(p => p.category))];
  return cats;
}

function renderCategories() {
  const tabs = document.getElementById('categoryTabs');
  tabs.innerHTML = '';
  getCategories().forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'cat-tab' + (cat === activeCategory ? ' active' : '');
    btn.textContent = cat;
    btn.onclick = () => {
      activeCategory = cat;
      document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts();
    };
    tabs.appendChild(btn);
  });
}

function filterProducts() {
  renderProducts();
}

function renderProducts() {
  const grid   = document.getElementById('productGrid');
  const search = (document.getElementById('searchInput').value || '').toLowerCase();

  let list = products.filter(p => {
    const matchCat  = activeCategory === 'Semua' || p.category === activeCategory;
    const matchSrch = p.name.toLowerCase().includes(search) || p.category.toLowerCase().includes(search);
    return matchCat && matchSrch;
  });

  if (!list.length) {
    grid.innerHTML = '<div class="no-results">😕 Tidak ada barang ditemukan</div>';
    return;
  }

  grid.innerHTML = list.map(p => {
    const outOfStock = p.stock <= 0;
    const stockStatus = p.stock === 999 ? 'ok' :
                        p.stock <= 0   ? 'out' :
                        p.stock <= p.minStock ? 'warn' : 'ok';
    const badgeTxt = p.stock === 999 ? '∞' : p.stock;
    return `
      <div class="product-card ${outOfStock ? 'out-of-stock' : ''}"
           onclick="${outOfStock ? '' : `addToCart('${p.id}')`}" title="${p.name}">
        <span class="stock-badge ${stockStatus}">${badgeTxt}</span>
        <span class="prod-icon">${p.icon}</span>
        <span class="prod-name">${p.name}</span>
        <span class="prod-price">${formatRp(p.price)}</span>
        <span class="prod-stock">${p.stock === 999 ? 'Jasa' : 'Stok: ' + p.stock}</span>
      </div>`;
  }).join('');
}

// ====================================================
// KERANJANG (CART)
// ====================================================
function addToCart(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod || prod.stock <= 0) return;

  const existing = cart.find(c => c.id === productId);
  if (existing) {
    if (prod.stock !== 999 && existing.qty >= prod.stock) {
      alert(`⚠️ Stok "${prod.name}" hanya tersisa ${prod.stock}`);
      return;
    }
    existing.qty++;
  } else {
    cart.push({ id: productId, name: prod.name, price: prod.price, qty: 1, icon: prod.icon });
  }
  updateCart();

  // Animasi kilat pada kartu
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    if (card.querySelector('.prod-name')?.textContent === prod.name) {
      card.style.borderColor = 'var(--green)';
      card.style.background  = '#E8F8EE';
      setTimeout(() => { card.style.borderColor = ''; card.style.background = ''; }, 400);
    }
  });
}

function changeQty(productId, delta) {
  const idx = cart.findIndex(c => c.id === productId);
  if (idx === -1) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  updateCart();
}

function removeFromCart(productId) {
  cart = cart.filter(c => c.id !== productId);
  updateCart();
}

function clearCart() {
  if (cart.length && !confirm('Kosongkan semua barang di keranjang?')) return;
  cart = [];
  document.getElementById('cashInput').value     = '';
  document.getElementById('discountInput').value = '0';
  document.getElementById('buyerName').value     = '';
  document.getElementById('cartBadge').style.display = 'none';
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cartList');
  const badge    = document.getElementById('cartBadge');
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);

  if (!cart.length) {
    cartList.innerHTML = `
      <div class="cart-empty">
        <span>🛒</span>
        <p>Keranjang masih kosong</p>
        <small>Klik barang di sebelah kiri</small>
      </div>`;
    badge.style.display = 'none';
    document.getElementById('subtotal').textContent    = 'Rp 0';
    document.getElementById('totalDisplay').textContent = 'Rp 0';
    document.getElementById('kembalianDisplay').textContent = '—';
    document.getElementById('kembalianDisplay').style.color = 'var(--green)';
    document.getElementById('btnBayar').disabled = true;
    return;
  }

  badge.style.display = 'inline';
  badge.textContent   = totalItems + ' item';

  cartList.innerHTML = cart.map(item => `
    <div class="cart-item">
      <span class="ci-icon">${item.icon}</span>
      <div class="ci-info">
        <div class="ci-name" title="${item.name}">${item.name}</div>
        <div class="ci-price">${formatRp(item.price)} × ${item.qty}</div>
        <div class="ci-subtotal">= ${formatRp(item.price * item.qty)}</div>
      </div>
      <div class="ci-qty">
        <button class="qty-btn" onclick="changeQty('${item.id}', -1)" title="Kurangi">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty('${item.id}', 1)" title="Tambah">+</button>
        <button class="qty-btn remove" onclick="removeFromCart('${item.id}')" title="Hapus">✕</button>
      </div>
    </div>`).join('');

  const subtotal  = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const discount  = Math.min(Math.max(parseFloat(document.getElementById('discountInput').value) || 0, 0), 100);
  const total     = Math.round(subtotal * (1 - discount / 100));

  document.getElementById('subtotal').textContent = formatRp(subtotal);
  document.getElementById('totalDisplay').textContent = formatRp(total);
  document.getElementById('btnBayar').disabled = false;
  hitungKembalian();
}

function hitungKembalian() {
  const discount = Math.min(Math.max(parseFloat(document.getElementById('discountInput').value) || 0, 0), 100);
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const total    = Math.round(subtotal * (1 - discount / 100));
  const cashRaw  = document.getElementById('cashInput').value;
  const el       = document.getElementById('kembalianDisplay');

  if (!cashRaw || cashRaw === '' || cashRaw === '0') {
    el.textContent = '—';
    el.style.color = 'var(--gray)';
    return;
  }

  const cash      = parseFloat(cashRaw) || 0;
  const kembalian = cash - total;
  el.textContent  = kembalian >= 0 ? formatRp(kembalian) : '❌ Kurang ' + formatRp(Math.abs(kembalian));
  el.style.color  = kembalian >= 0 ? 'var(--green)' : 'var(--red)';
}

// ====================================================
// PROSES PEMBAYARAN
// ====================================================
function processPayment() {
  if (!cart.length) return;

  const discount  = Math.min(Math.max(parseFloat(document.getElementById('discountInput').value) || 0, 0), 100);
  const subtotal  = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const total     = Math.round(subtotal * (1 - discount / 100));
  const cash      = parseFloat(document.getElementById('cashInput').value) || 0;

  if (cash < total) {
    alert('⚠️ Uang yang diterima kurang! Harap isi jumlah uang yang sesuai.');
    document.getElementById('cashInput').focus();
    return;
  }

  const buyer     = document.getElementById('buyerName').value.trim() || 'Umum';
  const kembalian = cash - total;
  const now       = new Date();
  const txId      = 'TX' + now.getFullYear() + pad(now.getMonth()+1) + pad(now.getDate()) + pad(now.getHours()) + pad(now.getMinutes()) + pad(now.getSeconds());

  // Kurangi stok
  cart.forEach(item => {
    const prod = products.find(p => p.id === item.id);
    if (prod && prod.stock !== 999) prod.stock -= item.qty;
  });
  saveProducts();
  renderProducts();
  renderCategories();

  // Simpan transaksi
  const tx = {
    id: txId,
    buyer,
    items: cart.map(i => ({ ...i })),
    subtotal,
    discount,
    total,
    cash,
    kembalian,
    date: now.toISOString(),
    dateStr: now.toLocaleString('id-ID'),
  };
  transactions.push(tx);
  saveTransactions();

  // Tampil modal sukses
  document.getElementById('suksesSummary').innerHTML = `
    <b>No. Transaksi:</b> ${txId}<br>
    <b>Pembeli:</b> ${buyer}<br>
    <b>Tanggal:</b> ${now.toLocaleString('id-ID')}<br><br>
    ${cart.map(i => `${i.icon} ${i.name} × ${i.qty} = ${formatRp(i.price * i.qty)}`).join('<br>')}<br><br>
    ${discount > 0 ? `<span style="color:var(--red)">Diskon ${discount}%: -${formatRp(subtotal - total)}</span><br>` : ''}
    <b style="font-size:1.1rem">TOTAL: ${formatRp(total)}</b><br>
    Uang Diterima: ${formatRp(cash)}<br>
    <b style="color:var(--green)">Kembalian: ${formatRp(kembalian)}</b>
  `;
  document.getElementById('modalSukses').style.display = 'flex';

  // Reset
  const savedCart = [...cart];
  const savedTx   = { ...tx };
  window._lastTx  = { tx: savedTx, cart: savedCart };
  cart = [];
  document.getElementById('cashInput').value     = '';
  document.getElementById('discountInput').value = '0';
  document.getElementById('buyerName').value     = '';
  updateCart();
  renderStokPage();
}

// ====================================================
// CETAK STRUK
// ====================================================
function cetakStruk() {
  if (!window._lastTx) return;
  const { tx } = window._lastTx;
  const struk = `
    <div style="text-align:center;margin-bottom:10px">
      <b style="font-size:16px">BENGKEL MAJU JAYA MOTOR</b><br>
      Jl. Bengkel No. 99, Jakarta<br>
      Telp: 0812-XXXX-XXXX<br>
      --------------------------------
    </div>
    <div>
      <b>No:</b> ${tx.id}<br>
      <b>Tgl:</b> ${tx.dateStr}<br>
      <b>Pembeli:</b> ${tx.buyer}<br>
      --------------------------------
    </div>
    ${tx.items.map(i => `${i.icon} ${i.name}<br>&nbsp;&nbsp;${i.qty} x ${formatRp(i.price)} = ${formatRp(i.price * i.qty)}`).join('<br>')}
    <div style="margin-top:8px">
      --------------------------------<br>
      ${tx.discount > 0 ? `Diskon ${tx.discount}%: -${formatRp(tx.subtotal - tx.total)}<br>` : ''}
      <b>TOTAL: ${formatRp(tx.total)}</b><br>
      Bayar: ${formatRp(tx.cash)}<br>
      <b>Kembali: ${formatRp(tx.kembalian)}</b><br>
      --------------------------------<br>
      <div style="text-align:center;margin-top:8px">
        Terima kasih atas kunjungan Anda!<br>
        Servis berkala menjaga motor tetap prima.
      </div>
    </div>`;
  document.getElementById('printArea').innerHTML = struk;
  window.print();
}

// ====================================================
// MANAJEMEN STOK
// ====================================================
function renderStokPage() {
  const total   = products.length;
  const habis   = products.filter(p => p.stock === 0 && p.stock !== 999).length;
  const menipis = products.filter(p => p.stock > 0 && p.stock <= p.minStock && p.stock !== 999).length;
  const aman    = products.filter(p => p.stock > p.minStock || p.stock === 999).length;

  document.getElementById('stokStats').innerHTML = `
    <div class="stat-card"><span class="stat-label">Total Jenis Barang</span><span class="stat-value orange">${total}</span></div>
    <div class="stat-card"><span class="stat-label">Stok Aman</span><span class="stat-value green">${aman}</span></div>
    <div class="stat-card"><span class="stat-label">Stok Menipis</span><span class="stat-value yellow">${menipis}</span></div>
    <div class="stat-card"><span class="stat-label">Stok Habis</span><span class="stat-value red">${habis}</span></div>
  `;

  const tbody = document.getElementById('stokBody');
  tbody.innerHTML = products.map((p, i) => {
    const stockStatus = p.stock === 999 ? 'ok' : p.stock <= 0 ? 'out' : p.stock <= p.minStock ? 'warn' : 'ok';
    const statusLabel = p.stock === 999 ? 'Jasa' : p.stock <= 0 ? 'Habis' : p.stock <= p.minStock ? 'Menipis' : 'Aman';
    return `<tr>
      <td>${i+1}</td>
      <td><span style="font-size:1.3rem">${p.icon}</span> ${p.name}</td>
      <td>${p.category}</td>
      <td style="font-weight:800;color:var(--orange-dk)">${formatRp(p.price)}</td>
      <td style="font-weight:800">${p.stock === 999 ? '∞' : p.stock}</td>
      <td><span class="status-chip ${stockStatus}">${statusLabel}</span></td>
      <td>
        <button class="tbl-btn edit" onclick="openEditProduct('${p.id}')">✏️ Edit</button>
        ${p.stock !== 999 ? `<button class="tbl-btn restock" onclick="restockProduct('${p.id}')">📦 Restock</button>` : ''}
        <button class="tbl-btn del" onclick="deleteProduct('${p.id}')">🗑️</button>
      </td>
    </tr>`;
  }).join('');
}

function openAddProduct() {
  editingProductId = null;
  document.getElementById('modalTitle').textContent = '➕ Tambah Barang Baru';
  document.getElementById('pName').value     = '';
  document.getElementById('pCategory').value = 'Oli & Pelumas';
  document.getElementById('pPrice').value    = '';
  document.getElementById('pStock').value    = '';
  document.getElementById('pIcon').value     = '📦';
  document.getElementById('pMinStock').value = '5';
  document.getElementById('modalProduct').style.display = 'flex';
}

function openEditProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  editingProductId = id;
  document.getElementById('modalTitle').textContent = '✏️ Edit Barang';
  document.getElementById('pName').value     = p.name;
  document.getElementById('pCategory').value = p.category;
  document.getElementById('pPrice').value    = p.price;
  document.getElementById('pStock').value    = p.stock === 999 ? '' : p.stock;
  document.getElementById('pIcon').value     = p.icon;
  document.getElementById('pMinStock').value = p.minStock;
  document.getElementById('modalProduct').style.display = 'flex';
}

function saveProduct() {
  const name     = document.getElementById('pName').value.trim();
  const category = document.getElementById('pCategory').value;
  const price    = parseFloat(document.getElementById('pPrice').value);
  const stockRaw = document.getElementById('pStock').value;
  const stock    = category === 'Jasa Service' ? 999 : (parseInt(stockRaw) || 0);
  const icon     = document.getElementById('pIcon').value.trim() || '📦';
  const minStock = parseInt(document.getElementById('pMinStock').value) || 5;

  if (!name || isNaN(price) || price <= 0) { alert('⚠️ Nama dan harga wajib diisi!'); return; }

  if (editingProductId) {
    const idx = products.findIndex(p => p.id === editingProductId);
    if (idx !== -1) products[idx] = { ...products[idx], name, category, price, stock, icon, minStock };
  } else {
    const newId = 'p' + Date.now();
    products.push({ id: newId, name, category, price, stock, icon, minStock });
  }

  saveProducts();
  renderProducts();
  renderCategories();
  renderStokPage();
  document.getElementById('modalProduct').style.display = 'none';
}

function deleteProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  if (!confirm(`Hapus "${p.name}" dari daftar barang?`)) return;
  products = products.filter(x => x.id !== id);
  saveProducts();
  renderProducts();
  renderCategories();
  renderStokPage();
}

function restockProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const jumlah = prompt(`Tambah berapa stok untuk "${p.name}"?\nStok saat ini: ${p.stock}`);
  if (jumlah === null) return;
  const add = parseInt(jumlah);
  if (isNaN(add) || add <= 0) { alert('Masukkan jumlah yang valid!'); return; }
  p.stock += add;
  saveProducts();
  renderProducts();
  renderStokPage();
}

function closeModal(event) {
  if (event.target === document.getElementById('modalProduct')) {
    document.getElementById('modalProduct').style.display = 'none';
  }
}

// ====================================================
// LAPORAN
// ====================================================
function switchLaporan(tab, btn) {
  document.querySelectorAll('.lap-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.lap-tab').forEach(b => b.classList.remove('active'));
  document.getElementById('lap-' + tab).classList.add('active');
  btn.classList.add('active');

  if (tab === 'harian')  renderHarian();
  if (tab === 'bulanan') renderBulanan();
  if (tab === 'tren')    renderTren();
  if (tab === 'riwayat') renderRiwayat();
}

// --- LAPORAN HARIAN ---
function renderHarian() {
  const dateVal = document.getElementById('datePickerHarian').value;
  if (!dateVal) return;

  const txList = transactions.filter(tx => tx.date.startsWith(dateVal));
  const total  = txList.reduce((s, tx) => s + tx.total, 0);
  const count  = txList.length;
  const itemsSold = txList.reduce((s, tx) => s + tx.items.reduce((ss, it) => ss + it.qty, 0), 0);
  const avg    = count > 0 ? Math.round(total / count) : 0;

  document.getElementById('harianCards').innerHTML = `
    <div class="sum-card"><span class="sum-label">💰 Total Pendapatan</span><span class="sum-value">${formatRp(total)}</span><span class="sum-note">${dateVal}</span></div>
    <div class="sum-card green"><span class="sum-label">🧾 Jumlah Transaksi</span><span class="sum-value">${count}</span><span class="sum-note">Transaksi hari ini</span></div>
    <div class="sum-card blue"><span class="sum-label">📦 Item Terjual</span><span class="sum-value">${itemsSold}</span><span class="sum-note">Unit/Jasa</span></div>
    <div class="sum-card red"><span class="sum-label">📊 Rata-rata/Transaksi</span><span class="sum-value">${formatRp(avg)}</span><span class="sum-note">Per transaksi</span></div>
  `;

  // Chart per jam
  const hourData = Array(24).fill(0);
  txList.forEach(tx => {
    const h = new Date(tx.date).getHours();
    hourData[h] += tx.total;
  });

  renderChart('chartHarian', {
    labels: Array.from({length: 24}, (_, i) => i + ':00'),
    datasets: [{
      label: 'Pendapatan (Rp)',
      data: hourData,
      backgroundColor: 'rgba(232,100,12,0.25)',
      borderColor: 'rgba(232,100,12,1)',
      borderWidth: 2,
      fill: true,
      tension: 0.4,
    }]
  }, 'line', 'Pendapatan Per Jam');
}

// --- LAPORAN BULANAN ---
function renderBulanan() {
  const monthVal = document.getElementById('monthPickerBulanan').value;
  if (!monthVal) return;

  const [yr, mo] = monthVal.split('-').map(Number);
  const txList   = transactions.filter(tx => {
    const d = new Date(tx.date);
    return d.getFullYear() === yr && d.getMonth() + 1 === mo;
  });

  const total   = txList.reduce((s, tx) => s + tx.total, 0);
  const count   = txList.length;
  const daysInMonth = new Date(yr, mo, 0).getDate();
  const perHari = count > 0 ? Math.round(total / daysInMonth) : 0;

  document.getElementById('bulananCards').innerHTML = `
    <div class="sum-card"><span class="sum-label">💰 Total Pendapatan Bulan Ini</span><span class="sum-value">${formatRp(total)}</span><span class="sum-note">${monthVal}</span></div>
    <div class="sum-card green"><span class="sum-label">🧾 Total Transaksi</span><span class="sum-value">${count}</span><span class="sum-note">Transaksi bulan ini</span></div>
    <div class="sum-card blue"><span class="sum-label">📅 Rata-rata per Hari</span><span class="sum-value">${formatRp(perHari)}</span><span class="sum-note">${daysInMonth} hari dalam bulan ini</span></div>
    <div class="sum-card red"><span class="sum-label">📊 Rata-rata/Transaksi</span><span class="sum-value">${count > 0 ? formatRp(Math.round(total/count)) : 'Rp 0'}</span><span class="sum-note">Per transaksi</span></div>
  `;

  // Chart per hari
  const dayData = Array.from({length: daysInMonth}, (_, i) => {
    const day = String(i+1).padStart(2,'0');
    const dateStr = `${yr}-${String(mo).padStart(2,'0')}-${day}`;
    return txList.filter(tx => tx.date.startsWith(dateStr)).reduce((s, tx) => s + tx.total, 0);
  });

  renderChart('chartBulanan', {
    labels: Array.from({length: daysInMonth}, (_, i) => `${i+1}`),
    datasets: [{
      label: 'Pendapatan Harian (Rp)',
      data: dayData,
      backgroundColor: 'rgba(42,140,74,0.3)',
      borderColor: 'rgba(42,140,74,1)',
      borderWidth: 2,
      fill: true,
      tension: 0.4,
    }]
  }, 'bar', 'Pendapatan per Hari dalam Bulan');
}

// --- TREN LABA ---
function renderTren() {
  const now     = new Date();
  const thisYr  = now.getFullYear();
  const thisMo  = now.getMonth() + 1;

  // Ambil 6 bulan terakhir + perkiraan bulan depan
  const months  = [];
  for (let i = 5; i >= 0; i--) {
    let mo = thisMo - i;
    let yr = thisYr;
    while (mo <= 0) { mo += 12; yr--; }
    months.push({ yr, mo });
  }

  const monthlyTotals = months.map(({ yr, mo }) => {
    const txList = transactions.filter(tx => {
      const d = new Date(tx.date);
      return d.getFullYear() === yr && d.getMonth() + 1 === mo;
    });
    return txList.reduce((s, tx) => s + tx.total, 0);
  });

  // Hitung rata-rata 3 bulan terakhir vs 3 bulan sebelumnya
  const last3   = monthlyTotals.slice(3, 6);
  const prev3   = monthlyTotals.slice(0, 3);
  const avgLast = avg(last3);
  const avgPrev = avg(prev3);

  // Prediksi bulan depan dengan rata-rata bergerak + faktor tren
  const growth  = avgPrev > 0 ? (avgLast - avgPrev) / avgPrev : 0;
  const predicted = Math.round(avgLast * (1 + growth));

  const trendDir = avgLast > avgPrev ? 'naik' : avgLast < avgPrev ? 'turun' : 'sama';
  const trendPct = avgPrev > 0 ? Math.abs(((avgLast - avgPrev) / avgPrev) * 100).toFixed(1) : 0;

  const trendText = {
    naik:  `📈 Tren NAIK ${trendPct}% dibanding 3 bulan sebelumnya`,
    turun: `📉 Tren TURUN ${trendPct}% dibanding 3 bulan sebelumnya`,
    sama:  `➡️ Tren STABIL — tidak ada perubahan signifikan`,
  };

  document.getElementById('trenInfo').innerHTML = `
    <div>
      <div style="font-size:1.1rem;font-weight:900;color:var(--brown);margin-bottom:8px">📊 Analisis Tren Laba 6 Bulan Terakhir</div>
      <div class="tren-detail">${trendText[trendDir]}</div>
    </div>
    <div class="tren-badge ${trendDir}">${trendDir === 'naik' ? '⬆️ NAIK' : trendDir === 'turun' ? '⬇️ TURUN' : '➡️ STABIL'} ${trendPct}%</div>
  `;

  document.getElementById('trenCards').innerHTML = `
    <div class="sum-card"><span class="sum-label">📅 Rata-rata 3 Bln Lalu</span><span class="sum-value">${formatRp(Math.round(avgPrev))}</span><span class="sum-note">3 bulan sebelumnya</span></div>
    <div class="sum-card green"><span class="sum-label">📅 Rata-rata 3 Bln Ini</span><span class="sum-value">${formatRp(Math.round(avgLast))}</span><span class="sum-note">3 bulan terakhir</span></div>
    <div class="sum-card blue"><span class="sum-label">🔮 Prediksi Bln Depan</span><span class="sum-value">${formatRp(predicted)}</span><span class="sum-note">Berdasarkan tren saat ini</span></div>
    <div class="sum-card ${trendDir === 'naik' ? 'green' : trendDir === 'turun' ? 'red' : 'blue'}">
      <span class="sum-label">📈 Pertumbuhan</span>
      <span class="sum-value">${trendDir === 'naik' ? '+' : trendDir === 'turun' ? '-' : ''}${trendPct}%</span>
      <span class="sum-note">Dibanding periode sebelumnya</span>
    </div>
  `;

  const allLabels = [...months.map(({ yr, mo }) => BULAN_ID[mo-1] + ' ' + yr), 'Prediksi'];
  const allData   = [...monthlyTotals, predicted];

  renderChart('chartTren', {
    labels: allLabels,
    datasets: [
      {
        label: 'Pendapatan Aktual (Rp)',
        data: [...monthlyTotals, null],
        borderColor: 'rgba(232,100,12,1)',
        backgroundColor: 'rgba(232,100,12,0.2)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointRadius: 6,
      },
      {
        label: 'Prediksi Bulan Depan (Rp)',
        data: [...Array(6).fill(null), predicted],
        borderColor: 'rgba(42,140,74,1)',
        backgroundColor: 'rgba(42,140,74,0.25)',
        borderWidth: 3,
        borderDash: [8, 4],
        fill: false,
        tension: 0.4,
        pointRadius: 8,
        pointStyle: 'star',
      }
    ]
  }, 'line', 'Tren & Prediksi Pendapatan Bulanan');
}

const BULAN_ID = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];

// --- RIWAYAT TRANSAKSI ---
function renderRiwayat() {
  const search  = (document.getElementById('searchRiwayat').value || '').toLowerCase();
  const list    = [...transactions].reverse().filter(tx =>
    tx.id.toLowerCase().includes(search) ||
    tx.buyer.toLowerCase().includes(search) ||
    tx.items.some(i => i.name.toLowerCase().includes(search))
  );

  const container = document.getElementById('riwayatList');
  if (!list.length) {
    container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--gray);font-size:1.1rem;font-weight:600">😕 Belum ada transaksi tercatat</div>';
    return;
  }

  container.innerHTML = list.map(tx => `
    <div class="riwayat-card">
      <span class="rw-no">${tx.id}</span>
      <div class="rw-body">
        <div class="rw-buyer">👤 ${tx.buyer}</div>
        <div class="rw-date">📅 ${tx.dateStr}</div>
        <div class="rw-items">${tx.items.map(i => `${i.icon}${i.name} ×${i.qty}`).join(' &bull; ')}</div>
      </div>
      <div class="rw-total">
        <div class="rw-amount">${formatRp(tx.total)}</div>
        ${tx.discount > 0 ? `<div class="rw-discount">Diskon ${tx.discount}%</div>` : ''}
      </div>
    </div>`).join('');
}

function clearHistory() {
  transactions = [];
  saveTransactions();
  renderRiwayat();
  renderTren();
  renderBulanan();
  renderHarian();
}

// ====================================================
// EXPORT CSV
// ====================================================
function exportCSV() {
  if (!transactions.length) { alert('Belum ada data transaksi.'); return; }
  const header = 'No,ID Transaksi,Tanggal,Pembeli,Item,Subtotal,Diskon (%),Total,Bayar,Kembalian\n';
  const rows   = transactions.map((tx, i) => {
    const items = tx.items.map(it => `${it.name}(${it.qty})`).join('; ');
    return `${i+1},"${tx.id}","${tx.dateStr}","${tx.buyer}","${items}",${tx.subtotal},${tx.discount},${tx.total},${tx.cash},${tx.kembalian}`;
  }).join('\n');
  const blob   = new Blob(['\uFEFF' + header + rows], { type: 'text/csv;charset=utf-8;' });
  const url    = URL.createObjectURL(blob);
  const a      = document.createElement('a');
  a.href = url;
  a.download = 'transaksi-bengkel-' + new Date().toLocaleDateString('id-ID').replace(/\//g,'-') + '.csv';
  a.click();
  URL.revokeObjectURL(url);
}

// ====================================================
// CHART HELPER
// ====================================================
const chartInstances = {};

function renderChart(canvasId, data, type, title) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  if (chartInstances[canvasId]) {
    chartInstances[canvasId].destroy();
    delete chartInstances[canvasId];
  }

  chartInstances[canvasId] = new Chart(canvas.getContext('2d'), {
    type,
    data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: title,
          font: { size: 15, weight: 'bold', family: 'Nunito' },
          color: '#5C3317',
          padding: { bottom: 14 },
        },
        legend: {
          labels: {
            font: { size: 13, family: 'Nunito' },
            color: '#5C3317',
          }
        },
        tooltip: {
          callbacks: {
            label: ctx => ' ' + formatRp(ctx.parsed.y || 0),
          }
        }
      },
      scales: {
        x: {
          ticks: { font: { size: 12, family: 'Nunito' }, color: '#5C3317' },
          grid: { color: 'rgba(92,51,23,0.08)' },
        },
        y: {
          ticks: {
            font: { size: 12, family: 'Nunito' },
            color: '#5C3317',
            callback: val => 'Rp' + formatNum(val),
          },
          grid: { color: 'rgba(92,51,23,0.08)' },
        }
      }
    }
  });
}

// ====================================================
// UTILITY
// ====================================================
function formatRp(num) {
  return 'Rp ' + Number(num || 0).toLocaleString('id-ID');
}

function formatNum(num) {
  if (num >= 1000000) return (num/1000000).toFixed(1) + 'jt';
  if (num >= 1000)    return (num/1000).toFixed(0) + 'rb';
  return String(num);
}

function pad(n) { return String(n).padStart(2, '0'); }

function avg(arr) {
  const filtered = arr.filter(x => x !== undefined && x !== null);
  if (!filtered.length) return 0;
  return filtered.reduce((s, x) => s + x, 0) / filtered.length;
}

// ====================================================
// MOBILE — Bottom Sheet Cart & Navigation
// Semua fungsi ini HANYA aktif di layar ≤ 600px
// ====================================================

const isMobile = () => window.innerWidth <= 600;

// ── Wrap showPage agar sync bottom nav ──
const _origShowPage = showPage;
showPage = function(page) {
  _origShowPage(page);
  document.querySelectorAll('.bnav-btn').forEach(b => b.classList.remove('active'));
  const bnav = document.getElementById('bnav-' + page);
  if (bnav) bnav.classList.add('active');
  const fab = document.getElementById('fabCart');
  if (fab) fab.style.display = (page === 'kasir' && isMobile() && cart.length > 0) ? 'flex' : 'none';
};

// ── Wrap addToCart, changeQty, removeFromCart ──
const _origAddToCart = addToCart;
addToCart = function(id) { _origAddToCart(id); if (isMobile()) updateFAB(); };

const _origChangeQty = changeQty;
changeQty = function(id, delta) { _origChangeQty(id, delta); if (isMobile()) { updateFAB(); renderSheetCart(); } };

const _origRemoveFromCart = removeFromCart;
removeFromCart = function(id) { _origRemoveFromCart(id); if (isMobile()) { updateFAB(); renderSheetCart(); } };

// ── FAB update ──
function updateFAB() {
  const fab = document.getElementById('fabCart');
  if (!fab) return;
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const subtotal   = cart.reduce((s, i) => s + i.price * i.qty, 0);
  fab.style.display = (cart.length > 0 && isMobile()) ? 'flex' : 'none';
  document.getElementById('fabCount').textContent = totalItems + ' item';
  document.getElementById('fabTotal').textContent = formatRp(subtotal);
}

// ── Buka sheet ──
function openCartSheet() {
  document.getElementById('sheetBuyerName').value = document.getElementById('buyerName')?.value || '';
  document.getElementById('sheetDiscount').value  = document.getElementById('discountInput')?.value || '0';
  renderSheetCart();
  document.getElementById('cartSheetOverlay').classList.add('open');
  document.getElementById('cartSheet').classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ── Tutup sheet ──
function closeCartSheet() {
  document.getElementById('cartSheetOverlay').classList.remove('open');
  document.getElementById('cartSheet').classList.remove('open');
  document.body.style.overflow = '';
}

// ── Render isi sheet ──
function renderSheetCart() {
  const list   = document.getElementById('sheetCartList');
  const badge  = document.getElementById('sheetBadge');
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  badge.textContent = totalItems + ' item';

  if (!cart.length) {
    list.innerHTML = '<div style="text-align:center;padding:28px;color:var(--gray);font-weight:700">🛒 Keranjang masih kosong</div>';
    document.getElementById('sheetBtnBayar').disabled = true;
    updateSheetTotals();
    return;
  }

  list.innerHTML = cart.map(item => `
    <div class="sheet-item">
      <span class="ci-icon">${item.icon}</span>
      <div class="ci-info">
        <div class="ci-name" title="${item.name}">${item.name}</div>
        <div class="ci-price">${formatRp(item.price)} × ${item.qty}</div>
        <div class="ci-subtotal">= ${formatRp(item.price * item.qty)}</div>
      </div>
      <div class="ci-qty">
        <button class="qty-btn" onclick="changeQtySheet('${item.id}',-1)">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQtySheet('${item.id}',1)">+</button>
        <button class="qty-btn remove" onclick="removeFromCartSheet('${item.id}')">✕</button>
      </div>
    </div>`).join('');

  document.getElementById('sheetBtnBayar').disabled = false;
  updateSheetTotals();
}

function changeQtySheet(id, delta) {
  const idx = cart.findIndex(c => c.id === id);
  if (idx === -1) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  updateFAB(); renderSheetCart(); updateCart();
}

function removeFromCartSheet(id) {
  cart = cart.filter(c => c.id !== id);
  updateFAB(); renderSheetCart(); updateCart();
}

function updateSheetCart()   { updateSheetTotals(); hitungSheetKembalian(); }

function updateSheetTotals() {
  const sub  = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const disc = Math.min(Math.max(parseFloat(document.getElementById('sheetDiscount')?.value) || 0, 0), 100);
  const tot  = Math.round(sub * (1 - disc / 100));
  document.getElementById('sheetSubtotal').textContent = formatRp(sub);
  document.getElementById('sheetTotal').textContent    = formatRp(tot);
}

function hitungSheetKembalian() {
  const sub  = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const disc = Math.min(Math.max(parseFloat(document.getElementById('sheetDiscount')?.value) || 0, 0), 100);
  const tot  = Math.round(sub * (1 - disc / 100));
  const raw  = document.getElementById('sheetCash')?.value || '';
  const el   = document.getElementById('sheetKembalian');
  if (!raw || raw === '0') { el.textContent = '—'; el.style.color = 'var(--gray)'; return; }
  const kem  = (parseFloat(raw) || 0) - tot;
  el.textContent = kem >= 0 ? formatRp(kem) : '❌ Kurang ' + formatRp(Math.abs(kem));
  el.style.color = kem >= 0 ? 'var(--green)' : 'var(--red)';
}

function clearCartMobile() {
  if (cart.length && !confirm('Kosongkan semua barang?')) return;
  cart = [];
  ['sheetCash','sheetDiscount','sheetBuyerName','cashInput','discountInput','buyerName']
    .forEach(id => { const el = document.getElementById(id); if (el) el.value = id.includes('iscount') ? '0' : ''; });
  updateFAB(); renderSheetCart(); updateCart(); closeCartSheet();
}

function processPaymentMobile() {
  if (!cart.length) return;
  // Sync nilai ke field desktop lalu pakai fungsi utama
  document.getElementById('buyerName').value     = document.getElementById('sheetBuyerName').value;
  document.getElementById('discountInput').value = document.getElementById('sheetDiscount').value;
  document.getElementById('cashInput').value     = document.getElementById('sheetCash').value;
  closeCartSheet();
  processPayment();
  updateFAB();
}

// ── Swipe down tutup sheet ──
(function() {
  let startY = 0;
  document.addEventListener('touchstart', e => {
    if (document.getElementById('cartSheet')?.contains(e.target)) startY = e.touches[0].clientY;
  }, { passive: true });
  document.addEventListener('touchend', e => {
    if (!document.getElementById('cartSheet')?.classList.contains('open')) return;
    if (e.changedTouches[0].clientY - startY > 80) closeCartSheet();
  }, { passive: true });
})();

window.addEventListener('resize', () => {
  if (!isMobile()) {
    closeCartSheet();
    const fab = document.getElementById('fabCart');
    if (fab) fab.style.display = 'none';
  } else {
    updateFAB();
  }
});

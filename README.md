# 🔧 Kasir Bengkel — Maju Jaya Motor

Aplikasi kasir digital untuk bengkel motor yang dirancang **ramah untuk pengguna orang tua** — tombol besar, tulisan jelas, warna hangat dan mudah dibaca.

---

## 📁 Struktur File

```
kasir-bengkel/
├── index.html    → Halaman utama + struktur UI
├── style.css     → Tampilan / desain visual
├── app.js        → Logika program (kasir, stok, laporan)
└── README.md     → Panduan ini
```

---

## 🚀 Cara Membuka

1. Pastikan ketiga file (`index.html`, `style.css`, `app.js`) berada dalam **satu folder yang sama**
2. Buka file `index.html` dengan browser (Chrome / Firefox / Edge)
3. Aplikasi langsung bisa digunakan — **tidak perlu internet** (kecuali untuk memuat font Google)
4. Semua data disimpan otomatis di browser (LocalStorage)

> ⚠️ **Jangan hapus cache browser** agar data transaksi tidak hilang. Untuk backup, gunakan fitur **Export CSV**.

---

## 🛒 Fitur Halaman KASIR

| Fitur | Keterangan |
|---|---|
| Katalog Produk | Daftar barang/jasa dalam kotak besar bergambar emoji |
| Pencarian | Ketik nama barang untuk menyaring |
| Tab Kategori | Filter berdasarkan jenis barang |
| Keranjang Belanja | Klik barang → otomatis masuk keranjang |
| Tambah / Kurangi | Tombol + dan − untuk mengatur jumlah |
| Diskon (%) | Masukkan persen diskon (opsional) |
| Hitung Kembalian | Isi "Uang Diterima" → kembalian otomatis dihitung |
| Cetak Struk | Mencetak struk belanja ke printer |
| Nama Pembeli | Opsional, untuk catatan transaksi |

### Cara Pakai Kasir:
1. Klik barang yang dipesan pembeli → masuk ke keranjang kanan
2. Atur jumlah barang dengan tombol **+** / **−**
3. Isi **diskon** jika ada (contoh: 10)
4. Isi **Uang Diterima** dari pembeli
5. Lihat kembalian secara otomatis
6. Tekan **✅ BAYAR SEKARANG**
7. Struk bisa dicetak dengan tombol **🖨️ Cetak Struk**

---

## 📦 Fitur Halaman STOK BARANG

| Fitur | Keterangan |
|---|---|
| Ringkasan Stok | Kartu info: Total, Aman, Menipis, Habis |
| Tabel Stok Lengkap | Semua barang dengan harga, stok, dan status |
| Status Otomatis | 🟢 Aman / 🟡 Menipis / 🔴 Habis |
| Tambah Barang | Tambah item baru ke katalog |
| Edit Barang | Ubah nama, harga, stok, dan kategori |
| Restock | Tambah jumlah stok yang ada |
| Hapus Barang | Hapus item dari daftar |

### Kategori Barang Tersedia:
- 🛢️ Oli & Pelumas
- 🔴 Kampas & Rem
- 🌀 Filter
- 🔋 Aki & Listrik
- ⚫ Kaki-kaki
- 🔧 Jasa Service
- 🏍️ Aksesoris
- 📦 Lainnya

> Barang dengan kategori **Jasa Service** otomatis memiliki stok tak terbatas (∞)

---

## 📊 Fitur Halaman LAPORAN

### 📅 Laporan Harian
- Pilih tanggal, lihat total pendapatan hari itu
- Jumlah transaksi dan item terjual
- Grafik pendapatan per jam

### 📆 Laporan Bulanan
- Pilih bulan, lihat total pendapatan bulan itu
- Rata-rata pendapatan per hari
- Grafik pendapatan per hari dalam bulan

### 📈 Tren Laba (Analisis Cerdas)
- Membandingkan **3 bulan terakhir** vs **3 bulan sebelumnya**
- Menampilkan persentase kenaikan atau penurunan laba
- **Prediksi pendapatan bulan depan** berdasarkan tren saat ini
- Grafik tren 6 bulan + garis prediksi (bintang hijau)

### 📜 Riwayat Transaksi
- Semua transaksi tersimpan otomatis
- Pencarian berdasarkan nama pembeli, ID transaksi, atau nama barang
- Export ke file **CSV** (bisa dibuka di Excel)
- Hapus semua riwayat jika diperlukan

---

## 💾 Penyimpanan Data

Semua data disimpan di **LocalStorage** browser secara otomatis:

| Data | Key LocalStorage |
|---|---|
| Daftar Produk/Stok | `bengkelProducts` |
| Riwayat Transaksi | `bengkelTransactions` |

> **Backup Penting!** Gunakan tombol **📥 Export CSV** secara rutin untuk menyimpan data transaksi ke komputer.

---

## 🖨️ Cetak Struk

- Format struk dioptimalkan untuk printer **thermal 58mm / 80mm**
- Isi struk: Nama toko, tanggal, pembeli, daftar barang, total, kembalian
- Tekan **🖨️ Cetak Struk** setelah transaksi berhasil

---

## 🔧 Kustomisasi

### Ubah Nama Bengkel
Buka `index.html`, cari teks `Bengkel Maju Jaya Motor` dan ganti sesuai nama bengkel Anda.

### Ubah Alamat di Struk
Buka `app.js`, cari fungsi `cetakStruk()`, ubah baris alamat dan nomor telepon.

### Tambah Kategori Baru
Buka `index.html`, cari tag `<select id="pCategory">` dan tambahkan `<option>` baru.

---

## 📋 Daftar Produk Default (32 Item)

Aplikasi sudah dilengkapi **32 produk default** bengkel motor:

| No | Produk | Harga |
|---|---|---|
| 1 | Oli Mesin Shell Helix 1L | Rp 75.000 |
| 2 | Oli Mesin Yamalube 1L | Rp 65.000 |
| 3 | Kampas Rem Depan Honda Beat | Rp 45.000 |
| 4 | Filter Udara Honda Beat | Rp 35.000 |
| 5 | Aki GS Astra 5 Ah | Rp 250.000 |
| 6 | Busi NGK Standard | Rp 25.000 |
| 7 | Ban Luar IRC 70/90-17 | Rp 195.000 |
| 8 | Servis Ringan (tune-up) | Rp 50.000 |
| 9 | Tambal Ban Tubeless | Rp 30.000 |
| 10 | Cuci Motor | Rp 20.000 |
| ... | dan 22 produk lainnya | — |

---

## ⚙️ Persyaratan Sistem

- **Browser**: Chrome 80+, Firefox 75+, Edge 80+
- **Koneksi**: Tidak diperlukan (offline-ready), kecuali untuk font Google
- **Printer**: Didukung melalui fungsi `window.print()` browser
- **Layar**: Minimum 360px lebar (responsive untuk tablet & laptop)

---

## 🆘 Pertanyaan Umum

**Q: Data hilang setelah browser diperbarui?**  
A: Data LocalStorage aman selama cache tidak dibersihkan. Rutin export CSV sebagai cadangan.

**Q: Bagaimana menambah barang baru?**  
A: Pergi ke tab **📦 Stok Barang** → klik tombol **➕ Tambah Barang Baru**

**Q: Apakah bisa dipakai di HP?**  
A: Ya, tampilan responsif untuk layar tablet dan HP berukuran sedang ke atas.

**Q: Bagaimana reset semua data produk ke awal?**  
A: Buka DevTools browser (F12) → Application → Local Storage → hapus key `bengkelProducts`

---

*Dibuat dengan ❤️ untuk Bengkel Maju Jaya Motor*

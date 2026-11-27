# Etalase Affiliate

Aplikasi sederhana untuk membagikan link etalase ke affiliator. Tanpa server, cukup GitHub Pages.

| File | Fungsi |
|---|---|
| `index.html` | Halaman affiliator (lihat paket, salin link) |
| `admin.html` | Halaman seller (tambah, edit, hapus paket) |
| `data.json` | Data paket yang tampil ke affiliator |
| `common.js`, `style.css` | Kode dan tampilan bersama |

## Pasang di GitHub (sekali saja)

1. Buat repository baru, misalnya `etalase` (pilih **Public**).
2. Klik **Add file > Upload files**, unggah semua file ini (bukan file ZIP-nya), lalu **Commit changes**.
3. Buka **Settings > Pages**. Pada *Source* pilih **Deploy from a branch**, branch **main**, folder **/(root)**, lalu **Save**.
4. Tunggu beberapa menit. Alamatnya:
   - Affiliator: `https://USERNAME.github.io/etalase/`
   - Seller: `https://USERNAME.github.io/etalase/admin.html`

## Pemakaian harian

1. Buka `admin.html`.
2. Isi etalase, gambar, nama paket, dan link, lalu **Simpan paket**.
3. Klik **Unduh data.json**.
4. Di GitHub: **Add file > Upload files**, unggah `data.json`, **Commit changes**.
5. Kirim link halaman affiliator.

Nama file harus persis `data.json` (bukan `data (1).json`).

## Catatan

- Siapa pun bisa membuka `admin.html`, tetapi perubahannya hanya tersimpan di browser mereka. Halaman affiliator hanya berubah lewat akun GitHub yang punya akses.
- Semua isi repository publik bisa dilihat orang, jadi jangan masukkan data rahasia.
- Draf yang belum diunggah hanya ada di browser tempat kamu membuatnya.

# Etalase Affiliate

Aplikasi sederhana untuk membagikan link etalase ke affiliator. Tanpa server, cukup GitHub Pages.

| File | Fungsi |
|---|---|
| `index.html` | Halaman affiliator dan admin (login dengan password) |
| `data.json` | Data paket yang tampil ke affiliator |
| `common.js`, `style.css` | Kode dan tampilan bersama |

## Pasang di GitHub (sekali saja)

1. Buat repository baru, misalnya `etalase` (pilih **Public**).
2. Klik **Add file > Upload files**, unggah semua file ini (bukan file ZIP-nya), lalu **Commit changes**.
3. Buka **Settings > Pages**. Pada *Source* pilih **Deploy from a branch**, branch **main**, folder **/(root)**, lalu **Save**.
4. Tunggu beberapa menit. Alamatnya:
   - `https://USERNAME.github.io/etalase/`

## Login admin

Tekan tombol **Admin**, password awal `admin12345`. Segera ganti di menu **Ganti password admin**, unduh `data.json`, lalu unggah ke GitHub.

## Pemakaian harian

1. Buka halaman, tekan **Admin**, masukkan password.
2. Isi etalase, gambar, nama paket, dan link, lalu **Simpan paket**.
3. Klik **Unduh data.json**.
4. Di GitHub: **Add file > Upload files**, unggah `data.json`, **Commit changes**.
5. Kirim link halaman affiliator.

Nama file harus persis `data.json` (bukan `data (1).json`).

## Catatan

- Password hanya menyembunyikan menu admin, bukan pengaman kuat (kode dan `data.json` bisa dilihat publik). Halaman affiliator hanya berubah lewat akun GitHub yang punya akses. Jangan pakai password yang sama dengan akun penting.
- Semua isi repository publik bisa dilihat orang, jadi jangan masukkan data rahasia.
- Draf yang belum diunggah hanya ada di browser tempat kamu membuatnya.

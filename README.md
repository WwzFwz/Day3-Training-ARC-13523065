# FilmKu - Website Informasi Film

## Deskripsi Aplikasi
FilmKu adalah website informasi film yang menampilkan berbagai film terbaru dan populer. Website ini dibangun dengan **HTML, CSS, dan JavaScript** untuk frontend, serta **Node.js dengan Express** untuk backend API.

## Fitur Aplikasi
- **Halaman Utama**: Tampilan sederhana menggunakan HTML, CSS, dan JavaScript untuk interaksi
- **API Sederhana**: Implementasi API lokal untuk pengelolaan data film
- **Integrasi API Publik**: Simulasi integrasi dengan The Movie Database API
- **Film Trending**: Menampilkan film-film yang sedang trending
- **Film Terbaru**: Menampilkan daftar film terbaru
- **Pencarian Film**: Fitur untuk mencari film berdasarkan judul
- **Detail Film**: Menampilkan informasi lengkap tentang sebuah film

## Requirements
1. Node.js (v14 atau lebih tinggi)
2. npm (Node Package Manager)
3. Browser modern (Chrome, Firefox, Edge)
4. Visual Studio Code (opsional, untuk development)

## Cara Menjalankan Program
1. Clone repository:
   ```
   git clone https://github.com/WwzFwz/Day3-Training-ARC-13523065.git
   ```
    ```
    code Day3-Training-ARC-13523065
    ```

    ```
    cd backend
    ```
    ```
    npm install
    ```
  
    ```

    npm run dev

    ```

    Kemudian show preview index.html
    
    ```
    movie-info-website/
    ├── frontend/                  # Folder untuk kode frontend
    │   ├── index.html             # Halaman utama website
    │   ├── css/
    │   │   └── style.css          # File CSS untuk styling
    │   ├── js/
    │   │   ├── main.js            # JavaScript utama untuk interaksi UI
    │   │   └── api.js             # File untuk fungsi-fungsi koneksi ke API
    │   └── assets/
    │       └── img/               # Folder untuk gambar dan aset lainnya
    └── backend/                   # Folder untuk kode backend
        ├── server.js              # Entry point untuk server
        ├── data/
        │   ├── movieDb.js         # Database film (data dummy)
        │   └── default.png        # Gambar poster default
        ├── routes/
        │   └── movies.js          # Route handler untuk API film
        ├── config/
        │   └── .env               # File konfigurasi environment
        ├── package.json           # Dependency untuk backend
        └── docs/
            └── api-testing.md     # Dokumentasi dan hasil testing API
    ```
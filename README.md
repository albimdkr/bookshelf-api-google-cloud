# Belajar Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud 📚

Bahasa Pemrograman 💻
- JavaScript

JavaScript Runtime Enviroment ⚙
- [Node.js ](https://nodejs.org/en)
> **Note:** Wajib menggunakan nodejs  **v18.13.0** .
> Cara downgrade menggunakan [nvm](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)

Framework ⚡
- [HapiJs](https://hapi.dev/)

Node Package Manager (NPM)📦
- @hapi/hapi
- nanoid
- nodemon
- Eslint Sytle AirBnB

Kriteria ✔
- Port: 9000
- Aplikasi dijalankan dengan perintah npm run start-dev
- API dapat menyimpan buku: POST
- API dapat menampilkan seluruh buku: GET
- API dapat menampilkan detail buku: GET
- API dapat mengubah data buku: PUT
- API dapat menghapus buku: DELETE

Testing API🔎
- [Postman bookshelf Collection & enviroment](https://github.com/dicodingacademy/a261-backend-pemula-labs/raw/099-shared-files/BookshelfAPIT)

Install testing tool **newman** (alternative postman)
```
npm install newman --g
```

Synchronisasi JSON collection & Enviroment dari Postman, lalu
Berikan perintah kedalam terminal
```
newman run bookshelf-test-postman_collection.json --environment bookshelf-test-postman_environment.json
```

# Conventional Commits
Sumber: conventionalcommits.org
**Contoh Penggunaan**
Pesan komit dengan deskripsi dan footer perubahan yang rusak
```
feat: allow provided config object to extend other configs
```
Komit pesan dengan `!`untuk menarik perhatian terhadap perubahan yang dapat mengganggu
```
feat!: send an email to the customer when a product is shipped
```
Komit pesan dengan cakupan dan `!`untuk menarik perhatian terhadap perubahan yang dapat menghentikan
```
feat(api)!: send an email to the customer when a product is shipped
```
Komit pesan dengan keduanya `!`dan footer BREAKING CHANGE
```
chore!: drop support for Node 6
```
Komit pesan tanpa isi
```
docs: correct spelling of CHANGELOG
```
Komit pesan dengan cakupan
```
feat(lang): add Polish language
```
Komit pesan dengan badan multi-paragraf dan banyak footer
```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```


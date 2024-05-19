## How to setup locally

1. Clone/Download repository ini, kemudian buka lewat kode editor.
2. Jalankan **Apache** dan **MySQL** melalui xampp
3. Buatlah sebuah database bernama "prak-tcc-todolist", kemudian import database bernama `prak-tcc-todolist.sql` yang berada pada projek ini ke dalam **MySQL**
4. Masuk ke terminal atau cmd. Pastikan terminal atau cmd berada pada root direktori projek.
5. Install dependency dengan cara mengetik `npm i` di terminal atau cmd, tunggu sampai selesai.
6. Jalankan service dengan cara mengetik `npm run start`

## Dokumentasi

POST `/login`

Content-type: application/json

Request Body:

```
{
  "username": "rafli",
  "password": "12345678"
}
```

Response:

Status Code: 200

```
{
  "status": "Success",
  "message": "Login Successful",
}
```

---

POST `/register`

Content-type: application/json

Request Body:

```
{
  "name": "Muhammad Rafli",
  "username": "rafli",
  "password": "12345678"
}
```

Response:

Status Code: 201

```
{
  "status": "Success",
  "message": "Register Successful",
}
```

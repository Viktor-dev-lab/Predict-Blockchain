require("dotenv").config(); // sử dụng thư viện dotenv để cấu hình các thông tin bảo mật
const express = require('express');
const app = express();
const database = require("./config/database.js") // Nhúng từ bên file config cấu hình database
const port = process.env.PORT // Cổng 3000
const cors = require('cors'); // 🛠 Import cors


app.use(express.json()); // Middleware để đọc JSON
app.use(cors({
  origin: "http://localhost:5173", // Chỉ cho phép từ frontend này
  methods: "GET,POST,PUT,DELETE", // Cho phép các phương thức HTTP
  allowedHeaders: "Content-Type,Authorization", // Cho phép các headers cụ thể
}));

const routeServer = require('./routes/index.route.js') // Nhúng route admin

// route
routeServer(app)

database.connect();


app.listen(port, () => {console.log("Server running 5000 port")})
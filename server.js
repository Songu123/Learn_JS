const express = require("express");
const connectDB = require("./db");

const app = express();
app.use(express.json());

const db = connectDB();

// API lấy danh sách sản phẩm
app.get("/products", (req, res) => {
    db.query("SELECT * FROM products", (err, results) => {
        if (err) {
            console.error("Lỗi truy vấn:", err);
            res.status(500).json({ error: "Lỗi server" });
        } else {
            res.json(results);
        }
    });
});

// Chạy server
app.listen(3000, () => console.log("Server chạy trên http://localhost:3000"));

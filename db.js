const mysql = require("mysql2");

// Hàm kết nối MySQL
function connectDB() {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "", // Đổi theo mật khẩu MySQL của bạn
        database: "quanlykhachsan"
    });

    connection.connect(err => {
        if (err) {
            console.error("Lỗi kết nối MySQL:", err.message);
            return;
        }
        console.log("✅ Kết nối MySQL thành công!");
    });

    return connection;
}

// Xuất hàm để sử dụng trong các file khác
module.exports = connectDB;

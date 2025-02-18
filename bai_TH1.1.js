// var a, b;

// do {
//   a = prompt("Nhập a: ");
//   if (a === null) {
//     alert("Bạn đã hủy nhập!");
//     break;
//   }
//   a = Number(a);
// } while (isNaN(a) || a < 0);

// do {
//   b = prompt("Nhập b: ");
//   if (b === null) {
//     alert("Bạn đã hủy nhập!");
//     break;
//   }
//   b = Number(b);
// } while (isNaN(b) || b < 0);

// document.write("Cạnh a = " + a + "<br>");
// document.write("Cạnh b = " + b + "<br>");
// var thongTin = "Chu Vi = " + (a + b) * 2 + ", " + "Diện tích = " + a * b;
// document.write(thongTin + "<br>");
// alert(thongTin);

// var timCanh =
//   a > b
//     ? "Chiều dài của hình là : " + a + ", " + "Chiều rộng của hình là : " + b
//     : "Chiều dài của hình là : " + b + ", " + "Chiều rộng của hình là : " + a;

// document.write(timCanh + "<br>");

// var thongBao = a == b ? "Đây là hình vuông!" : "Đây là hình chữ nhật!";
// document.write(thongBao + "<br>");

// alert(timCanh);

// alert(thongBao);
// const fs = require("fs");

// function countFileLines(filePath) {
//   const fileContent = fs.readFileSync(filePath, "utf8");
//   return fileContent.split("\n").length;
// }

// // Đếm số dòng trong file "script.js"
// console.log("Số dòng trong file:", countFileLines("./bai_TH1.1"));

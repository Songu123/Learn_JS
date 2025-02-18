var n;
do {
  n = prompt("Nhập số điện: ");
  n = Number(n); // Chuyển chuỗi sang số
  if (isNaN(n) || n <= 0) {
    alert("Vui lòng nhập số lớn hơn 0!!!");
  }
} while (isNaN(n) || n <= 0);

var tienDien;

if (n <= 50) {
  tienDien = 1549;
} else if (n <= 100) {
  tienDien = 1600;
} else if (n <= 200) {
  tienDien = 1858;
} else if (n <= 300) {
  tienDien = 2340;
} else if (n <= 400) {
  tienDien = 2615;
} else {
  tienDien = 2701;
}

alert("Tiền điện phải trả: " + tienDien + " đồng/kWh");

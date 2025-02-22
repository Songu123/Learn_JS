// 1. Khai báo mảng đối tượng sinh viên
const sinhVien = [
    { ten: "Nguyễn Văn A", QT: 7, THI: 8 },
    { ten: "Trần Thị B", QT: 5, THI: 4 },
    { ten: "Lê Văn C", QT: 9, THI: 10 },
    { ten: "Phạm Hồng D", QT: 4, THI: 3 },
    { ten: "Hoàng Minh E", QT: 6, THI: 7 }
];

// 2. Tính tổng điểm (TONG) cho từng sinh viên
sinhVien.forEach(sv => {
    sv.TONG = sv.QT * 0.4 + sv.THI * 0.6;
});

// 3. Xuất danh sách sinh viên
console.log("Danh sách sinh viên:");
sinhVien.forEach(sv => {
    console.log(`${sv.ten} - QT: ${sv.QT}, THI: ${sv.THI}, TONG: ${sv.TONG.toFixed(2)}`);
});

// 4. Lọc và in danh sách sinh viên có tổng điểm trên 5
const sinhVienDat = sinhVien.filter(sv => sv.TONG > 5);
console.log("\nDanh sách sinh viên đạt:");
sinhVienDat.forEach(sv => {
    console.log(`${sv.ten} - TONG: ${sv.TONG.toFixed(2)}`);
});

// 5. Đếm số sinh viên thi lại (TONG < 5)
const soSVThiLai = sinhVien.filter(sv => sv.TONG < 5).length;
console.log(`\nSố sinh viên phải thi lại: ${soSVThiLai}`);

// 6. Lọc danh sách sinh viên được học bổng (TONG >= 8) và sắp xếp giảm dần theo TONG
const danhSachHocBong = sinhVien
    .filter(sv => sv.TONG >= 8)
    .sort((a, b) => b.TONG - a.TONG);

console.log("\nDanh sách sinh viên được học bổng (giảm dần theo tổng điểm):");
danhSachHocBong.forEach(sv => {
    console.log(`${sv.ten} - TONG: ${sv.TONG.toFixed(2)}`);
});

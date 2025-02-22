var n = parseInt(prompt("Nhập số lượng sinh viên:"));
var diemSV = [];

for (let i = 0; i < n; i++) {
  let diem;
  do {
    diem = parseFloat(prompt(`Nhập điểm tổng kết của sinh viên thứ ${i + 1}:`));
    if (isNaN(diem) || diem < 0 || diem > 10) {
      alert("Vui lòng nhập điểm hợp lệ (0 - 10)");
    }
  } while (isNaN(diem) || diem < 0 || diem > 10);

  diemSV.push(diem);
}

console.log("Danh sách điểm sinh viên:", diemSV);

function inDiem(diemSV) {
  for (let i = 0; i < diemSV.length; i++) {
    document.writeln(`Sinh viên ${i + 1}: ${diemSV[i]}<br>`);
  }
}

// Gọi hàm in điểm
inDiem(diemSV);
;


// Hàm tính điểm trung bình
function tinhDiemTB(diemSV) {
    var diemTB = 0
  var tong = 0;
  for (let i = 0; i < diemSV.length; i++) {
    tong += diemSV[i]
  }
  diemTB = tong/(diemSV.length)
  document.writeln(`Điểm TB SV trong lớp là : ${diemTB} <br>`)
}

// Gọi hàm tính điểm TB
tinhDiemTB(diemSV)


// Hàm tìm điểm sinh viên lớn nhất với n là số lượng sinh viên, a là mảng chứa điểm SV
function Max(n, a) {
    var max = 0
    for(let i = 0; i < n; i++) {
        if(max < a[i]) {
            max = a[i]
        }
    }
    document.writeln(`Điểm sinh viên lớn nhất là: ${max} <br>`)
}

// Gọi hàm tìm điểm lớn nhất
Max(diemSV.length, diemSV)

// hàm function CountSVThiLai(n, a) để trả về sinh viên bị thi lại 
function CountSVThiLai(n, a) {
    var count = 0
    for(let i = 0; i < n; i++) {
        if(a[i] < 4) {
            count += 1
        } 
    }
    document.writeln(`Số lượng SV thi lại là: ${count} <br>`)
}

// gọi hàm CountSVThiLai()
CountSVThiLai(diemSV.length, diemSV)

// a. Hãy viết hàm function CountSVGioi(n, a) để trả về sinh viên xếp loại A
function CountSVGioi(n, a) {
    var count = 0
    for(let i = 0; i < n; i++) {
        if(a[i] > 8.5) {
            count += 1
        } 
    }
    document.writeln(`Số lượng SV giỏi là: ${count} <br>`)
}

CountSVGioi(diemSV.length, diemSV)

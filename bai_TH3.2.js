// a. Khai báo biến n và gán giá trị trực tiếp là 10 (n cũng chính là số sinh viên)

// b. Khai báo, tạo các mảng và nhập giá trị cần thiết để lưu thông tin của sinh viên, mỗi sinh viên sẽ lưu các thông tin bao gồm: tên sinh viên, điểm QT, THI, TONG
//  (sinh viên có thể tạo 4 mảng tương ứng các thông tin: tên sinh viên, điểm QT, THI, TONG và gán giá trị trực tiếp từ code hoặc nhập từ bàn phím, với TONG thì được tính như công thức trong mô tả)
var n = 10;

var listSV = [];

for (let i = 0; i < n; i++) {
  let ten = prompt(`Nhập tên sinh viên thứ ${i + 1}:`);

  let diemQT;
  do {
    diemQT = prompt(`Nhập điểm quá trình sinh viên thứ ${i + 1}:`);
    if (isNaN(diemQT) || diemQT < 0 || diemQT > 10) {
      alert("Vui lòng nhập điểm hợp lệ (0 - 10)");
    }
  } while (isNaN(diemQT) || diemQT < 0 || diemQT > 10);
  let diemThi;
  do {
    diemThi = prompt(`Nhập điểm thi sinh viên thứ ${i + 1}:`);
    if (isNaN(diemThi) || diemThi < 0 || diemThi > 10) {
      alert("Vui lòng nhập điểm hợp lệ (0 - 10)");
    }
  } while (isNaN(diemThi) || diemThi < 0 || diemThi > 10);

  let tong = ((diemQT + diemThi) / 20).toFixed(2);

  var sv = { ten: ten, diemQT: diemQT, diemThi: diemThi, tong: tong };
  listSV.push(sv);
}

// a. Xây dựng hàm để in điểm của sinh viên theo dạng bảng (table html) như hình sau:
function addDataToTable(listSV) {
  document.writeln(`<table class="table my-0">
  <thead>
    <tr>
      <th>STT</th>
      <th>Ten</th>
      <th>DiemQT</th>
      <th>DiemThi</th>
      <th>Tong</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>`);
  let table = document.querySelector(".my-0");
  let i = 1;
  for (let sv of listSV) {
    let tr = table.insertRow();
    tr.insertCell().textContent = i;
    tr.insertCell().textContent = sv.ten;
    tr.insertCell().textContent = sv.diemQT;
    tr.insertCell().textContent = sv.diemThi;
    tr.insertCell().textContent = sv.tong;
    i += 1;
  }
}

// Gọi hàm đưa dữ liệu lên bảng
addDataToTable(listSV);

// Hãy in danh sách thi lại theo định dạng:

function addThiLaiToTable(listSV) {
  document.writeln(`<table class="table my-1">
    <thead>
      <tr>
        <th>STT</th>
        <th>Ten</th>
        <th>Tong</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>`);
  let table = document.querySelector(".my-1");
  let i = 1;
  for (let sv of listSV) {
    if (sv.tong < 4) {
      let tr = table.insertRow();
      tr.insertCell().textContent = i;
      tr.insertCell().textContent = sv.ten;
      tr.insertCell().textContent = sv.tong;
      i += 1;
    }
  }
}

addThiLaiToTable(listSV);

// Hãy in danh sách SV đạt điểm A theo định dạng:

function addSVLoaiAToTable(listSV) {
    document.writeln(`<table class="table my-1">
      <thead>
        <tr>
          <th>STT</th>
          <th>Ten</th>
          <th>Tong</th>
          <th>Xếp loại</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>`);
    let table = document.querySelector(".my-1");
    let i = 1;
    for (let sv of listSV) {
      if (sv.tong >= 8.5) {
        let tr = table.insertRow();
        tr.insertCell().textContent = i;
        tr.insertCell().textContent = sv.ten;
        tr.insertCell().textContent = sv.tong;
        tr.insertCell().textContent = "A";
        i += 1;
      }
    }
  }
  
  addSVLoaiAToTable(listSV);

//   In ra danh sách 3 sinh viên có điểm TONG cao nhất để trao học bổng, danh sách in tương tự câu 4 
diemSV.sort((a, b) => b - a);
function addSVLoaiAToTable(listSV) {
    document.writeln(`<table class="table my-1">
      <thead>
        <tr>
          <th>STT</th>
          <th>Ten</th>
          <th>Tong</th>
          <th>Xếp loại</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>`);
    let table = document.querySelector(".my-1");
    let count = 1
    for (let sv of listSV) {
      if (count == 3) {
        let tr = table.insertRow();
        tr.insertCell().textContent = i;
        tr.insertCell().textContent = sv.ten;
        tr.insertCell().textContent = sv.tong;
        tr.insertCell().textContent = "A";
        i += 1;
        break
      }
      count += 1
    }
  }
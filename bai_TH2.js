// Bài Thực Hành 2.1
// --1,2,3. liệt kê số từ a đến b
var a = prompt("Nhap a: ");
var b = prompt("Nhap b: ");

function xuatManHinh(a, b) {
  var list = "Các số từ " + a + " đến " + b + ": ";
  for (let i = a; i <= b; i++) {
    list = list + " " + i;
  }
  alert(list);
}

// xuatManHinh(a, b)
// --4. tính tổng từ a đến b
function Sum(a, b) {
  a = parseInt(a, 10);
  b = parseInt(b, 10);
  var sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  alert(`Tổng từ ${a} đến ${b} là ${sum}`);
}

Sum(a, b);

// --5. tìm max hai số a và b

function Max5(a, b) {
  var number = 0;
  for (let i = a; i <= b; i++) {
    if (i % 5 == 0 && i % 2 == 0) {
      if (i > number) {
        number = i;
      }
    }
  }
  if (number > 0) {
    alert(
      `Số lớn nhất vừa chẵn vừa chia hết cho 5 của ${a} và ${b} là ${number}`
    );
  } else {
    alert("Không có!");
  }
}

Max5(a, b);

// --trả về số lượng các giá trị trong [a, b] vừa chẵn và vừa chia hết cho 3
function Count(a, b) {
  var count = 0;
  for (let i = a; i <= b; i++) {
    if (i % 3 == 0 && i % 2 == 0) {
      count += 1;
    }
  }

  if(count > 0) {
    alert(`Số lượng giá trị vừa chẵn chia hết cho 3 là: ${count}`)
  }
}

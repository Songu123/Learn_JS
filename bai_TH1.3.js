function calculateScore() {
    let name = document.getElementById('name').value;
    let td = parseFloat(document.getElementById('td').value);
    let th = parseFloat(document.getElementById('th').value);
    let kt = parseFloat(document.getElementById('kt').value);
    let thi = parseFloat(document.getElementById('thi').value);
    
    if (td < 1 || th < 1 || kt < 1) {
        document.getElementById('result').innerHTML = `
            <strong>Họ tên:</strong> ${name} <br>
            <strong>TĐ:</strong> ${td} <br>
            <strong>TH:</strong> ${th} <br>
            <strong>KT:</strong> ${kt} <br>
            <strong>Điểm quá trình:</strong> Bị cấm thi <br>
            <strong>Điểm thi:</strong> N/A <br>
            <strong>Tổng điểm:</strong> N/A <br>
            <strong>Xếp loại:</strong> N/A
        `;
        return;
    }
    
    let diemQuaTrinh = (td * 0.2) + (th * 0.4) + (kt * 0.4);
    let diemMonHoc = (diemQuaTrinh + thi) / 2;
    let xepLoai = diemMonHoc >= 8.5 ? 'A' : diemMonHoc >= 6.5 ? 'B' : diemMonHoc >= 5.0 ? 'C' : 'D';
    
    document.getElementById('result').innerHTML = `
        <strong>Họ tên:</strong> ${name} <br>
        <strong>TĐ:</strong> ${td} <br>
        <strong>TH:</strong> ${th} <br>
        <strong>KT:</strong> ${kt} <br>
        <strong>Điểm quá trình:</strong> ${diemQuaTrinh.toFixed(2)} <br>
        <strong>Điểm thi:</strong> ${thi} <br>
        <strong>Tổng điểm:</strong> ${diemMonHoc.toFixed(2)} <br>
        <strong>Xếp loại:</strong> ${xepLoai}
    `;
}
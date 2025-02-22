function uploadToImgBB() {
    let fileInput = document.getElementById("productImage").files[0];
    let formData = new FormData();
    formData.append("image", fileInput);

    fetch("https://api.imgbb.com/1/upload?key=API_CUA_BAN", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log("URL ảnh:", data.data.url);
        alert("Ảnh đã tải lên: " + data.data.url);
    })
    .catch(error => console.error("Lỗi:", error));
}

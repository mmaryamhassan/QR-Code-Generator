function genQRCode() {
    const text = document.getElementById("text-input").value;
    const qrCodeDiv = document.getElementById("qrcode");

    if (text.trim() === "") {
        alert("Please enter some text to generate a QR code.");
        return;
    }
    else{
        // Generate the QR code with the provided URL
        qrCodeDiv.innerHTML = ""; // Clear previous QR code
        const qrcode = new QRCode(qrCodeDiv, {
            text: text,
            width: 150, // Width of the QR code
            height: 150, // Height of the QR code
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
        qrcode.makeCode(text); // Generate the QR code
    }
};

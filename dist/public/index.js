"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.css");
var dropArea = document.getElementById("drop-area");
console.log(dropArea);
dropArea.addEventListener("drop", function (e) {
    e.preventDefault();
    if (e.dataTransfer) {
        var file = e.dataTransfer.files[0];
        console.log(file);
        sendFormData(file);
    }
});
dropArea.addEventListener("dragover", function (e) {
    e.preventDefault();
});
function sendFormData(file) {
    var formData = new FormData();
    formData.append("someExpressFiles", file);
    var request = new XMLHttpRequest();
    // request.open("POST");
    console.log(formData);
}
//# sourceMappingURL=index.js.map
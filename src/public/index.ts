import "./style.css";

const dropArea: HTMLElement = document.getElementById("drop-area")!;
console.log(dropArea);

dropArea.addEventListener("drop", (e) => {
	e.preventDefault();
	if (e.dataTransfer) {
		const file = e.dataTransfer.files[0];
		console.log(file);

		sendFormData(file);
	}
});

dropArea.addEventListener("dragover", (e) => {
	e.preventDefault();
});

function sendFormData(file: File) {
	const formData = new FormData();
	formData.append("someExpressFiles", file);

	const request = new XMLHttpRequest();
	// request.open("POST");
	console.log(formData);
}

const excelFile = document.getElementById('excelFile');
const btnUpLoadFile = document.getElementById('uploadFile');

excelFile.addEventListener('change', () => {
    const selectedFile = fileInput.value;
    if (selectedFile) {
        btnUpLoadFile.classList.remove('disable');
    } else {
    }
});

const excelFile = document.getElementById('excelFile');
const btnUpLoadFile = document.getElementById('uploadFile');
console.log('excelFile', excelFile);

excelFile.addEventListener('change', () => {
    const selectedFile = fileInput.value;
    if (selectedFile) {
        btnUpLoadFile.classList.remove('disable');
    } else {
    }
});

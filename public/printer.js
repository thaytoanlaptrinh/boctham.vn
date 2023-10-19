// window.onbeforeprint = function () {
//     // Tạo phần tử h1 chứa "Kết quả bốc thăm"
//     var headerElement = document.createElement('h1');
//     headerElement.textContent = 'Kết quả bốc thăm';
//     headerElement.className = 'center'; // Thêm lớp CSS nếu cần

//     // Tìm tất cả các vị trí đánh dấu
//     var markedElements = document.querySelectorAll('.content-container');

//     // Chèn phần tử vào các vị trí đánh dấu
//     for (var i = 0; i < markedElements.length; i++) {
//         var markedElement = markedElements[i];
//         markedElement.parentNode.insertBefore(
//             headerElement.cloneNode(true),
//             markedElement
//         );
//     }
// };

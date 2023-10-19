function updateValue(input) {
    // const value = input.value;
    // const newValue = value;
    // if (value == '1') {
    //     input.value = '1-0';
    // }
    // if (value == '2') {
    //     input.value = '1/2';
    // }
    // if (value == '3') {
    //     input.value = '0-1';
    // }
    // .replace('1', '1-0')
    // .replace('2', '1/2')
    // .replace('3', '0-1')
    // .replace('4', '');
    // input.value = newValue;
    // const currentRow = input.parentNode.parentNode; // Ô input hiện tại
    // const nextRow = currentRow.nextElementSibling; // Ô input tiếp theo
    // if (nextRow) {
    //     const nextInput = nextRow.querySelector('input');
    //     if (nextInput) {
    //         nextInput.focus(); // Focus vào ô input tiếp theo (nếu có)
    //     }
    // }
}

function moveFocus(event, input) {
    // if (event.key === 'ArrowUp') {
    //     return moveFocusUp(input);
    // }
    // if (event.key === 'ArrowDown') {
    //     return moveFocusDown(input);
    // }

    if (event.key === '1') {
        // Xóa giá trị hiện có và thay thế bằng "1-0"
        input.value = '1-0';
        const currentRow = input.parentNode.parentNode; // Ô input hiện tại
        const nextRow = currentRow.nextElementSibling; // Ô input tiếp theo
        if (nextRow) {
            const nextInput = nextRow.querySelector('input');
            if (nextInput) {
                nextInput.focus(); // Focus vào ô input tiếp theo (nếu có)
            }
        }
        return;
    }

    if (event.key === '2') {
        // Xóa giá trị hiện có và thay thế bằng "1-0"
        input.value = '1/2';
        const currentRow = input.parentNode.parentNode; // Ô input hiện tại
        const nextRow = currentRow.nextElementSibling; // Ô input tiếp theo
        if (nextRow) {
            const nextInput = nextRow.querySelector('input');
            if (nextInput) {
                nextInput.focus(); // Focus vào ô input tiếp theo (nếu có)
            }
        }
        return;
    }

    if (event.key === '3') {
        // Xóa giá trị hiện có và thay thế bằng "1-0"
        input.value = '0-1';
        const currentRow = input.parentNode.parentNode; // Ô input hiện tại
        const nextRow = currentRow.nextElementSibling; // Ô input tiếp theo
        if (nextRow) {
            const nextInput = nextRow.querySelector('input');
            if (nextInput) {
                nextInput.focus(); // Focus vào ô input tiếp theo (nếu có)
            }
        }
        return;
    }

    if (event.key === '4') {
        // Xóa giá trị hiện có và thay thế bằng "1-0"
        input.value = '';
        return;
    }

    if (event.key === 'Enter' || event.key === 'ArrowDown') {
        // Khi nhấn Enter, kiểm tra xem ô input có phải là ô cuối cùng không
        const currentRow = input.parentNode.parentNode;
        const nextRow = currentRow.nextElementSibling;
        if (!nextRow) {
            // Lấy danh sách tất cả các bảng
            const allTables = document.querySelectorAll('table');
            // Tìm bảng hiện tại trong danh sách bảng
            const currentTable = Array.from(allTables).find((table) =>
                table.contains(currentRow)
            );
            // Tìm bảng tiếp theo trong danh sách bảng
            const currentIndex = Array.from(allTables).indexOf(currentTable);
            const nextTable = allTables[currentIndex + 1];

            if (nextTable) {
                const firstInputInNextTable = nextTable.querySelector('input');
                if (firstInputInNextTable) {
                    firstInputInNextTable.focus();
                }
            }
        } else {
            // input.value = '';
            const currentRow = input.parentNode.parentNode; // Ô input hiện tại
            const nextRow = currentRow.nextElementSibling; // Ô input tiếp theo
            if (nextRow) {
                const nextInput = nextRow.querySelector('input');
                if (nextInput) {
                    nextInput.focus(); // Focus vào ô input tiếp theo (nếu có)
                }
            }
            return;
        }
        return;
    }

    if (event.key === 'ArrowUp') {
        // Khi nhấn Enter, kiểm tra xem ô input có phải là ô cuối cùng không
        const currentRow = input.parentNode.parentNode;
        let previousRow = currentRow.previousElementSibling;
        previousRow = previousRow.previousElementSibling;

        if (!previousRow) {
            // Lấy danh sách tất cả các bảng
            const allTables = document.querySelectorAll('table');
            // Tìm bảng hiện tại trong danh sách bảng
            const currentTable = Array.from(allTables).find((table) =>
                table.contains(currentRow)
            );
            // Tìm bảng trước đó trong danh sách bảng
            const currentIndex = Array.from(allTables).indexOf(currentTable);
            const previousTable = allTables[currentIndex - 1];
            if (previousTable) {
                console.log(previousTable);
                const lastInputInPreviousTable =
                    previousTable.querySelector('.last-input');
                console.log(lastInputInPreviousTable);
                if (lastInputInPreviousTable) {
                    lastInputInPreviousTable.focus();
                }
            }
        } else {
            const currentRow = input.parentNode.parentNode; // Ô input hiện tại
            const previousRow = currentRow.previousElementSibling; // Ô input phía trên
            if (previousRow) {
                const previousInput = previousRow.querySelector('input');
                if (previousInput) {
                    previousInput.focus(); // Focus vào ô input phía trên (nếu có)
                }
            }

            return;
        }
    } else {
        // Giữ nguyên giá trị trống cho các ký tự khác
        return (input.value = '');
    }
    // Add additional logic for other arrow keys if needed
}

function moveFocusUp(input) {
    const currentRow = input.parentNode.parentNode; // Ô input hiện tại
    const previousRow = currentRow.previousElementSibling; // Ô input phía trên
    if (previousRow) {
        const previousInput = previousRow.querySelector('input');
        if (previousInput) {
            previousInput.focus(); // Focus vào ô input phía trên (nếu có)
        }
    }
}

// function moveFocusDown(input) {
//     const currentRow = input.parentNode.parentNode; // Ô input hiện tại
//     const nextRow = currentRow.nextElementSibling; // Ô input phía dưới
//     if (nextRow) {
//         const nextInput = nextRow.querySelector('input');
//         if (nextInput) {
//             nextInput.focus(); // Focus vào ô input phía dưới (nếu có)
//         }
//     }
// }

function updateValue(e) {}

function moveFocus(event, input) {
    if (event.key === '1') {
        // Xóa giá trị hiện có và thay thế bằng "1-0"
        input.value = '1-0';
        handleScore(input);
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
        handleScore(input, 'd');
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
        handleScore(input, 'b');
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
        handleScore(input, 'c');
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

function handleScore(input, type) {
    let attrWhite = 'data-white';
    let attrBlack = 'data-black';
    let scoreWin = 1;
    let scoreLose = 0;
    if (type == 'b') {
        attrWhite = 'data-black';
        attrBlack = 'data-white';
    }
    if (type == 'd') {
        scoreWin = 0.5;
        scoreLose = 0.5;
    }

    if (type == 'c') {
        scoreWin = '';
        scoreLose = '';
    }

    const sttWin = input.getAttribute(attrWhite);
    const sttLose = input.getAttribute(attrBlack);

    // Handle White
    const updatedMang = dataUpDate.map((item) => {
        if (item.stt == sttWin) {
            item.listScore = item.listScore.map((scoreItem) => {
                if (scoreItem.dt == sttLose) {
                    scoreItem.kq = scoreWin;
                }
                return scoreItem;
            });
        }
        return item;
    });
    dataUpDate = updatedMang;

    // Handle Black
    const updatedMang2 = dataUpDate.map((item) => {
        if (item.stt == sttLose) {
            item.listScore = item.listScore.map((scoreItem) => {
                if (scoreItem.dt == sttWin) {
                    scoreItem.kq = scoreLose;
                }
                return scoreItem;
            });
        }
        return item;
    });
    dataUpDate = updatedMang2;
    updateScore();
    updateDK();
    updateHsbg();
    console.log(dataUpDate);
}

function updateScore() {
    const mangDaCapNhat = dataUpDate.map((item) => {
        const totalScore = item.listScore.reduce(
            (sum, scoreItem) => sum + (scoreItem.kq || 0),
            0
        );
        return { ...item, myScore: totalScore };
    });

    dataUpDate = mangDaCapNhat;
}

function updateDK() {
    // Đặt giá trị `hsdk` về 0 cho mỗi phần tử
    dataUpDate.forEach((item) => {
        item.hsdk = 0;
    });

    // Tạo mảng con chứa các phần tử có myScore bằng nhau
    const uniqueMyScores = [...new Set(dataUpDate.map((item) => item.myScore))];
    // Duyệt qua mỗi giá trị myScore duy nhất
    uniqueMyScores.forEach((myScore) => {
        // Lọc ra các phần tử có myScore bằng giá trị hiện tại
        const filteredItems = dataUpDate.filter(
            (item) => item.myScore === myScore
        );
        // Duyệt qua các phần tử đã lọc
        filteredItems.forEach((item) => {
            // Duyệt qua listScore để cập nhật hsdk
            item.listScore.forEach((scoreItem) => {
                if (scoreItem.kq === 1) {
                    // Tìm stt có giá trị bằng với dt tương ứng trong mảng đã lọc
                    const foundItem = filteredItems.find(
                        (found) => found.stt === scoreItem.dt
                    );
                    if (foundItem) {
                        // foundItem.hsdk += 1;
                        item.hsdk += 1;
                    }
                } else if (scoreItem.kq === 0.5) {
                    // Tìm stt có giá trị bằng với dt tương ứng trong mảng đã lọc
                    const foundItem = filteredItems.find(
                        (found) => found.stt === scoreItem.dt
                    );
                    if (foundItem) {
                        foundItem.hsdk += 0.5;
                    }
                }
            });
        });
    });
}

function updateHsbg() {
    dataUpDate.forEach((item) => {
        item.hsbg = 0;
        item.listScore.forEach((scoreItem) => {
            if (scoreItem.kq === 1) {
                const sttTuongUng = scoreItem.dt;
                const sttMyScoreTuongUng = dataUpDate.find(
                    (entry) => entry.stt === sttTuongUng
                );
                if (sttMyScoreTuongUng) {
                    item.hsbg += sttMyScoreTuongUng.myScore;
                }
            } else if (scoreItem.kq === 0.5) {
                const sttTuongUng = scoreItem.dt;
                const sttMyScoreTuongUng = dataUpDate.find(
                    (entry) => entry.stt === sttTuongUng
                );
                if (sttMyScoreTuongUng) {
                    item.hsbg += sttMyScoreTuongUng.myScore / 2;
                }
            }
        });
    });
}

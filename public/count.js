let countVisits;
let countTotal;
fetch('/visits')
    .then(function (response) {
        if (!response.ok) {
            throw new Error('Lỗi mạng: ' + response.status);
        }
        return response.json();
    })
    .then(function (data) {
        countVisits = data.countToDay;
        countTotal = data.count;
        renderCount();
    })
    .catch(function (error) {
        console.log('Lỗi: ' + error);
    });

function renderCount() {
    const totalEl = document.querySelector('.totalCount');
    totalEl.innerText = countTotal;
}

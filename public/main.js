function generatePairings(players) {
    if (players.length % 2 == 1) {
        const newPlayer = {
            name: 'Miễn Đấu',
            dv: '',
            stt: '',
        };
        players.push(newPlayer);
    }
    let n = players.length;
    let mod = n - 1;
    let decr = 0;
    let incr = -1;
    let gameCount = n / 2;
    let props = ['black', 'white'];
    let template = { white: players[mod], black: players[mod] };
    let pairings = [];
    for (let round = 1; round < n; round++) {
        let games = [
            {
                ...template,
                ...{ [props[round % 2]]: players[(incr = (incr + 1) % mod)] },
            },
        ];
        for (let k = 1; k < gameCount; k++) {
            games.push({
                white: players[(incr = (incr + 1) % mod)],
                black: players[(decr = (decr + mod - 1) % mod)],
            });
        }
        pairings.push({ round, games });
    }
    return pairings;
}

fetch('http://localhost:3000/data')
    .then(function (response) {
        if (!response.ok) {
            throw new Error('Lỗi mạng: ' + response.status);
        }
        return response.json();
    })
    .then(function (data) {
        const roundSwiss = generatePairings(data);
        renderVDV2(roundSwiss);
    })
    .catch(function (error) {
        console.log('Lỗi: ' + error);
    });

function renderVDV2(arrVDV) {
    var tablesContainer = document.getElementById('tables-container');

    for (var i = 0; i < arrVDV.length; i++) {
        var roundData = arrVDV[i];

        var table = document.createElement('table');
        table.innerHTML = `
        <tr>
        <th width="48px">Bàn</th>
        <th width="48px">STT</th>
        <th width="288px">Vận Động Viên</th>
        <th width="96px">Đơn Vị</th>
        <th width="144px">Kết Quả</th>
        <th width="288px">Vận Động Viên</th>
        <th width="96px">Đơn Vị</th>
        <th width="48px">STT</th>
    </tr>
        `;

        for (var j = 0; j < roundData.games.length; j++) {
            var game = roundData.games[j];
            var row = table.insertRow();

            var roundCell = row.insertCell();
            roundCell.textContent = j + 1;

            var whiteSttCell = row.insertCell();
            whiteSttCell.textContent = game.white.stt;

            var whiteNameCell = row.insertCell();
            whiteNameCell.textContent = game.white.name;

            var whiteDvCell = row.insertCell();
            whiteDvCell.textContent = game.white.dv;

            var resultCell = row.insertCell();

            if (j == roundData.games.length - 1) {
                resultCell.innerHTML = `<input type="text" name="data1" class="inputResult center last-input" oninput="updateValue(this)" onkeyup ="moveFocus(event, this)"> `;
            } else {
                resultCell.innerHTML = `<input type="text" name="data1" class="inputResult center" oninput="updateValue(this)" onkeyup ="moveFocus(event, this)"> `;
            }

            var blackNameCell = row.insertCell();
            blackNameCell.textContent = game.black.name;

            var blackDvCell = row.insertCell();
            blackDvCell.textContent = game.black.dv;

            var blackSttCell = row.insertCell();
            blackSttCell.textContent = game.black.stt;
        }
        const divContainer = document.createElement('div');
        divContainer.setAttribute('class', 'content-container');
        const round = document.createElement('h2');
        round.innerText = `Vòng ${i + 1}`;
        divContainer.appendChild(round);
        divContainer.appendChild(table);
        tablesContainer.appendChild(divContainer);
    }
}

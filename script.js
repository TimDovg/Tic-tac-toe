function() {
let body = document.getElementsByTagName('body')[0];
let game = document.createElement('div');
let button = document.createElement('button');
let table = document.createElement('table');
let p1;
let p2;
let currentPlayer;
let history = document.createElement('div');

body.appendChild(game);
game.appendChild(history);
history.innerHTML = `<br><b>History</b>`;
history.style.textAlign = 'center';
desk();
function desk() {
      game.appendChild(document.createElement('br'));
      game.appendChild(button);
      game.appendChild(document.createElement('br'));
      button.innerHTML = 'Играть';
      button.onclick = function() {
        let first = prompt('Player 1: ', 'Tim');
        let second = prompt('Player 2: ', 'Poul');
        p1 = currentPlayer = first;
        p2 = second;

        history.innerHTML += `<br>Ход игрока ${first}`;
        table.addEventListener('click', writeName);
      }
      game.style.display = 'flex';
      game.style.flexDirection = 'column';
      game.style.alignItems = 'center';
      game.appendChild(table);
      for (let i = 0; i < 3; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);
        for (let i = 0; i < 3; i++) {
          let td = document.createElement('td');
          td.style.width = '50px';
          td.style.height = '50px';
          td.style.border = '1px solid black';
          td.style.textAlign = 'center';
          td.classList.add('cell');
          tr.appendChild(td);
        }
      }
      table.style.borderCollapse = 'collapse';
};

function writeName(e) {
  if (e.target.classList.contains('cell')) {
    if (e.target.innerHTML === '') {
      e.target.innerHTML = currentPlayer;

    if (currentPlayer == p1) currentPlayer = p2;
    else currentPlayer = p1;

    // проверка победителя
    let l = document.getElementsByClassName('cell');
    let w = e.target.innerHTML;
    let ob = {};
    for (let i = 0; i < l.length; i++) {
      if (l[i].innerHTML === w) {
        ob[i] = true;
      }
    }

    if (ob[0] && ob[1] && ob[2] ||
        ob[3] && ob[4] && ob[5] ||
        ob[6] && ob[7] && ob[8] ||
        ob[0] && ob[3] && ob[6] ||
        ob[1] && ob[4] && ob[7] ||
        ob[2] && ob[5] && ob[8] ||
        ob[0] && ob[4] && ob[8] ||
        ob[2] && ob[4] && ob[6]) {
      history.innerHTML += `<br>----------<br>Победа <b>${w}</b>`;
      table.removeEventListener('click', writeName);
    } else history.innerHTML += `<br>Ход игрока ${currentPlayer}`;

    } else alert('Ячейка занята!');
  }
}
}();

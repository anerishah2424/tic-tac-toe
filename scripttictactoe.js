

const arr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let full = 0;
let box = document.querySelectorAll(".btn");
console.log(box.length);
let turnx = true;

box.forEach((box) => {
  box.addEventListener("click", () => {
    console.log('clicked');
    if (turnx) {
      box.innerText = 'X';
      turnx = false;
    } else {
      box.innerText = 'O';
      turnx = true;
    }
    box.disabled = true;
    full++;
    if (check()) {
      document.getElementById("output").innerText = box.innerText + " wins";
    } else if (full === 9) {
      document.getElementById("output").innerText = "Draw";
    }
  });
});

function check() {
  for (let i of arr) {
    let box0 = box[i[0]].innerText;
    let box1 = box[i[1]].innerText;
    let box2 = box[i[2]].innerText;
    if (box0 !== '' && box0 === box1 && box1 === box2) {
      console.log('winner');
      return true;
    }
  }
  return false;
}

function newGame() {
  box.forEach((box) => {
    box.innerText = '';
    box.disabled = false;
  });
  document.getElementById("output").innerText = '';
  turnx = true;
  full = 0;
}

document.getElementById("new").addEventListener("click", newGame);

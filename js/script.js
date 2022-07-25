// Questions will be asked
const Questions = [
  {
    id: 0,
    q: 'when did nigeria gain indenpendence?',
    a: [
      { text: '1993', isCorrect: false },
      { text: '1960', isCorrect: true },
      { text: '1963', isCorrect: false },
      { text: '1979', isCorrect: false },
    ],
  },
  {
    id: 1,
    q: 'What is the capital of nigeria?',
    a: [
      { text: 'FCT', isCorrect: true, isSelected: false },
      { text: 'Kaduna', isCorrect: false },
      { text: 'Zaria', isCorrect: false },
      { text: 'Lagos', isCorrect: false },
    ],
  },
  {
    id: 2,
    q: 'What is the name of the current nigerian president',
    a: [
      { text: 'Mohammed Buhari', isCorrect: true },
      { text: 'Peter Obi', isCorrect: false },
      { text: 'Yemi Osibanjo', isCorrect: false },
      { text: 'Goodluck Jonathan', isCorrect: false },
    ],
  },
];

// Grabbbing winner image
var winner = document.getElementsByClassName('winner-bg');

// Grabbbing loser image
var lose = document.getElementsByClassName('lose-bg');

// Set start
var start = true;

// Iterate
function iterate(id) {
  // Getting the result display section
  var result = document.getElementsByClassName('result');
  result[0].innerText = '';

  // Getting the question
  const question = document.getElementById('question');

  // Setting the question text
  var num = Number(id) + 1;
  question.innerText = num + '. \n' + Questions[id].q;

  // Getting the options
  const op1 = document.getElementById('op1');
  const op2 = document.getElementById('op2');
  const op3 = document.getElementById('op3');
  const op4 = document.getElementById('op4');

  // Providing option text
  op1.innerText = 'A    ' + Questions[id].a[0].text;
  op2.innerText = 'B    ' + Questions[id].a[1].text;
  op3.innerText = 'C    ' + Questions[id].a[2].text;
  op4.innerText = 'D    ' + Questions[id].a[3].text;

  // Providing the true or false value to the options
  op1.value = Questions[id].a[0].isCorrect;
  op2.value = Questions[id].a[1].isCorrect;
  op3.value = Questions[id].a[2].isCorrect;
  op4.value = Questions[id].a[3].isCorrect;

  var selected = '';

  // Show selection for op1
  op1.addEventListener('click', () => {
    op1.style.backgroundColor = 'aqua';
    op2.style.backgroundColor = 'lightskyblue';
    op3.style.backgroundColor = 'lightskyblue';
    op4.style.backgroundColor = 'lightskyblue';
    selected = op1.value;
    if (selected == true) {
      result[0].innerHTML = 'Correct';
      result[0].style.color = 'green';
      winner[0].style.display = 'block';
      lose[0].style.display = 'none';
      op1.style.backgroundColor = 'lightGreen';
    } else {
      result[0].innerHTML = 'Wrong';
      result[0].style.color = 'red';
      lose[0].style.display = 'block';
      winner[0].style.display = 'none';
      op1.style.backgroundColor = 'Red';
    }
  });

  // Show selection for op2
  op2.addEventListener('click', () => {
    op1.style.backgroundColor = 'lightskyblue';
    op2.style.backgroundColor = 'aqua';
    op3.style.backgroundColor = 'lightskyblue';
    op4.style.backgroundColor = 'lightskyblue';
    selected = op2.value;
    if (selected == true) {
      result[0].innerHTML = 'Correct';
      result[0].style.color = 'green';
      winner[0].style.display = 'block';
      lose[0].style.display = 'none';
      op2.style.backgroundColor = 'lightGreen';
    } else {
      result[0].innerHTML = 'Wrong';
      result[0].style.color = 'red';
      lose[0].style.display = 'block';
      winner[0].style.display = 'none';
      op2.style.backgroundColor = 'Red';
    }
  });

  // Show selection for op3
  op3.addEventListener('click', () => {
    op1.style.backgroundColor = 'lightskyblue';
    op2.style.backgroundColor = 'lightskyblue';
    op3.style.backgroundColor = 'aqua';
    op4.style.backgroundColor = 'lightskyblue';
    selected = op3.value;
    if (selected == true) {
      result[0].innerHTML = 'Correct';
      result[0].style.color = 'lightGreen';
      winner[0].style.display = 'block';
      lose[0].style.display = 'none';
      op3.style.backgroundColor = 'lightGreen';
    } else {
      result[0].innerHTML = 'Wrong';
      result[0].style.color = 'red';
      lose[0].style.display = 'block';
      winner[0].style.display = 'none';
      op3.style.backgroundColor = 'Red';
    }
  });

  // Show selection for op4
  op4.addEventListener('click', () => {
    op1.style.backgroundColor = 'lightskyblue';
    op2.style.backgroundColor = 'lightskyblue';
    op3.style.backgroundColor = 'lightskyblue';
    op4.style.backgroundColor = 'aqua';
    selected = op4.value;
    if (selected == true) {
      result[0].innerHTML = 'Correct';
      result[0].style.color = 'lightGreen';
      winner[0].style.display = 'block';
      lose[0].style.display = 'none';
      op4.style.backgroundColor = 'lightGreen';
    } else {
      result[0].innerHTML = 'Wrong';
      result[0].style.color = 'red';
      lose[0].style.display = 'block';
      winner[0].style.display = 'none';
      op4.style.backgroundColor = 'Red';
    }
  });
}

if (start) {
  iterate('0');
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener('click', () => {
  start = false;
  if (id < 2) {
    id++;
    iterate(id);
    console.log(id);
  }
});
next.addEventListener('click', () => {
  const op1 = document.getElementById('op1');
  const op2 = document.getElementById('op2');
  const op3 = document.getElementById('op3');
  const op4 = document.getElementById('op4');
  op1.style.backgroundColor = 'hsl(216deg, 96%, 96%)';
  op2.style.backgroundColor = 'hsl(216deg, 96%, 96%)';
  op3.style.backgroundColor = 'hsl(216deg, 96%, 96%)';
  op4.style.backgroundColor = 'hsl(216deg, 96%, 96%)';
  winner[0].style.display = 'none';
  lose[0].style.display = 'none';
});

// prev button and method
const prev = document.getElementsByClassName('prev')[0];
prev.addEventListener('click', () => {
  start = false;
  if ((id <= 2) & (id > 0)) {
    id--;
    iterate(id);
    console.log(id);
  }
});

prev.addEventListener('click', () => {
  const op1 = document.getElementById('op1');
  const op2 = document.getElementById('op2');
  const op3 = document.getElementById('op3');
  const op4 = document.getElementById('op4');
  op1.style.backgroundColor = 'hsl(216deg, 96%, 96%)';
  op2.style.backgroundColor = 'hsl(216deg, 96%, 96%)';
  op3.style.backgroundColor = 'hsl(216deg, 96%, 96%)';
  op4.style.backgroundColor = 'hsl(216deg, 96%, 96%)';
  winner[0].style.display = 'none';
  lose[0].style.display = 'none';
});

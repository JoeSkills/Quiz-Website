// Questions will be asked
const Questions = [
  {
    id: 0,
    q: 'when did nigeria gain indenpendence ?',
    a: [
      { text: '1993', isCorrect: false },
      { text: '1960', isCorrect: true },
      { text: '1963', isCorrect: false },
      { text: '1979', isCorrect: false },
    ],
    image: '/images/nigerian-independence.jpg',
    isAnswered: 'false',
  },
  {
    id: 1,
    q: 'What is the capital of nigeria ?',
    a: [
      { text: 'FCT', isCorrect: true, isSelected: false },
      { text: 'Kaduna', isCorrect: false },
      { text: 'Zaria', isCorrect: false },
      { text: 'Lagos', isCorrect: false },
    ],
    image: '/images/capital.jpg',
    isAnswered: 'false',
  },
  {
    id: 2,
    q: 'What is the name of the current nigerian president ?',
    a: [
      { text: 'Mohammed Buhari', isCorrect: true },
      { text: 'Peter Obi', isCorrect: false },
      { text: 'Yemi Osibanjo', isCorrect: false },
      { text: 'Goodluck Jonathan', isCorrect: false },
    ],
    image: '/images/president.jpg',
    isAnswered: 'false',
  },
  {
    id: 3,
    q: 'how many tribes are in nigeria ?',
    a: [
      { text: '300', isCorrect: false },
      { text: '200', isCorrect: false },
      { text: '371', isCorrect: true },
      { text: '191', isCorrect: false },
    ],
    image: '/images/tribes.jpg',
    isAnswered: 'false',
  },
  {
    id: 4,
    q: 'Who is this ?',
    a: [
      { text: 'Mohammed Buhari', isCorrect: false },
      { text: 'Peter Obi', isCorrect: true },
      { text: 'Yemi Osibanjo', isCorrect: false },
      { text: 'Goodluck Jonathan', isCorrect: false },
    ],
    image: '/images/peter-obi.jpg',
    isAnswered: 'false',
  },
  {
    id: 5,
    q: 'Who of these has not been a senate president ?',
    a: [
      { text: 'Iyorvhia Ayu', isCorrect: false },
      { text: 'Joseph Wayas', isCorrect: false },
      { text: 'Arthur Nzeribe', isCorrect: true },
      { text: 'Adolphus wabara', isCorrect: false },
    ],
    image: '/images/senate.jpg',
    isAnswered: 'false',
  },
  {
    id: 6,
    q: 'What is the name of this person ?',
    a: [
      { text: 'Wizkid', isCorrect: false },
      { text: 'Rema', isCorrect: true },
      { text: 'Davido', isCorrect: false },
      { text: 'Fireboy', isCorrect: true },
    ],
    image: '/images/fireboy.jpg',
    isAnswered: 'false',
  },
  {
    id: 7,
    q: 'Which is the only edible food that never goes bad ?',
    a: [
      { text: 'Honey', isCorrect: true },
      { text: 'Tea', isCorrect: false },
      { text: 'Rice', isCorrect: false },
      { text: 'Beans', isCorrect: false },
    ],
    image: '/images/food.jpg',
    isAnswered: 'false',
  },
  {
    id: 8,
    q: 'Whose face is on the 20 Naira Note',
    a: [
      { text: 'Nnamdi Azikiwe', isCorrect: false },
      { text: 'Murtala Mohammed', isCorrect: true },
      { text: 'Yemi Osibanjo', isCorrect: false },
      { text: 'Goodluck Jonathan', isCorrect: false },
    ],
    image: '/images/20-naira.jpg',
    isAnswered: 'false',
  },
  {
    id: 9,
    q: "What's the name of the biggest tech company in south korea ?",
    a: [
      { text: 'Tecno', isCorrect: false },
      { text: 'Apple', isCorrect: false },
      { text: 'Google', isCorrect: false },
      { text: 'Samsung', isCorrect: true },
    ],
    image: '/images/tech.jpg',
    isAnswered: 'false',
  },
];

// Grabbbing winner image
var winner = document.getElementsByClassName('winner-bg');

// Grabbbing loser image
var lose = document.getElementsByClassName('lose-bg');

// Set start
var start = true;

var points = 0;
var count = 0;
var check = 0;

// Iterate
function iterate(id) {
  // Getting the result display section
  var result = document.getElementsByClassName('result');
  result[0].innerText = '';
  count = id + 1;

  // Getting the question
  const question = document.getElementById('question');

  // Setting the question text
  var num = Number(id) + 1;
  var img = document.createElement('IMG');
  img.setAttribute('src', Questions[id].image);
  img.setAttribute('width', '50');
  img.setAttribute('height', '50');
  img.style.margin = '0 auto';

  question.innerText = num + '. \n' + Questions[id].q;
  question.appendChild(img);

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

  var score = document.getElementsByClassName('score');

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
      check += 1;

      console.log(points);
      console.log(Questions[id].isAnswered == 'false');
      if (points < count * 5 && Questions[id].isAnswered == 'false') {
        Questions[id].isAnswered = 'true';
        points += 5;

        console.log(Questions[id].isAnswered);
        score[0].innerHTML = points;
        console.log(points);
      }
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
      console.log(points);
      if (points < count * 5 && Questions[id].isAnswered == 'false') {
        points += 5;
        Questions[id].isAnswered = 'true';
        score[0].innerHTML = points;
        console.log(points);
      }
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
      result[0].style.color = 'green';
      winner[0].style.display = 'block';
      lose[0].style.display = 'none';
      op3.style.backgroundColor = 'lightGreen';
      if (points < count * 5 && Questions[id].isAnswered == 'false') {
        points += 5;
        Questions[id].isAnswered = 'true';
        score[0].innerHTML = points;
      }
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
      result[0].style.color = 'green';
      winner[0].style.display = 'block';
      lose[0].style.display = 'none';
      op4.style.backgroundColor = 'lightGreen';
      if (points < count * 5 && Questions[id].isAnswered == 'false') {
        points += 5;
        Questions[id].isAnswered = 'true';
        score[0].innerHTML = points;
      }
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
const won = document.getElementsByClassName('won')[0];
next.addEventListener('click', () => {
  start = false;
  if (id < 9) {
    id++;
    iterate(id);
    console.log(id);
  } else {
    won.style.display = 'block';
  }
});
next.addEventListener('click', () => {
  const op1 = document.getElementById('op1');
  const op2 = document.getElementById('op2');
  const op3 = document.getElementById('op3');
  const op4 = document.getElementById('op4');
  if (document.body.classList.contains('dark-theme')) {
    op1.style.backgroundColor = 'hsl(217deg, 10%, 16%)';
    op2.style.backgroundColor = 'hsl(217deg, 10%, 16%)';
    op3.style.backgroundColor = 'hsl(217deg, 10%, 16%)';
    op4.style.backgroundColor = 'hsl(217deg, 10%, 16%)';
  } else {
    op1.style.backgroundColor = 'hsl(216deg, 96%, 96%)';
    op2.style.backgroundColor = 'hsl(216deg, 96%, 96%)';
    op3.style.backgroundColor = 'hsl(216deg, 96%, 96%)';
    op4.style.backgroundColor = 'hsl(216deg, 96%, 96%)';
    winner[0].style.display = 'none';
    lose[0].style.display = 'none';
  }
});

// prev button and method
const prev = document.getElementsByClassName('prev')[0];
prev.addEventListener('click', () => {
  start = false;
  if ((id <= 9) & (id > 0)) {
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
  if (document.body.classList.contains('dark-theme')) {
    op1.style.backgroundColor = 'hsl(217deg, 10%, 16%)';
    op2.style.backgroundColor = 'hsl(217deg, 10%, 16%)';
    op3.style.backgroundColor = 'hsl(217deg, 10%, 16%)';
    op4.style.backgroundColor = 'hsl(217deg, 10%, 16%)';
  } else {
    op1.style.backgroundColor = 'hsl(216deg, 96%, 96%)';
    op2.style.backgroundColor = 'hsl(216deg, 96%, 96%)';
    op3.style.backgroundColor = 'hsl(216deg, 96%, 96%)';
    op4.style.backgroundColor = 'hsl(216deg, 96%, 96%)';
    winner[0].style.display = 'none';
    lose[0].style.display = 'none';
  }
});
var mode = document.querySelector('.mode');
mode.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  console.log('friends');
  if (document.body.classList.contains('dark-theme')) {
    mode.src = '/images/light-mode.png';
  } else {
    mode.src = '/images/dark-mode.png';
  }
});

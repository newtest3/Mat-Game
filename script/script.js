
let tasks = document.querySelector('.tasks');
let tasksCompleted = document.querySelector('.tasksCompleted');
let animals = document.querySelector('.animals');
let image = document.createElement('img');
let addLetters = document.querySelector('.addLetters');
let helpContainer = document.querySelector('.helpContainer');
let help = document.querySelector('.help');
let previousButton = document.querySelector('.previousButton');
let nextButton = document.querySelector('.nextButton');
let rowAnswer__input = document.querySelector('.rowAnswer__input');
let rowAnswer__buttonCheck = document.querySelector('.rowAnswer__buttonCheck');
let deleteLetterButton = document.querySelector('.deleteLetterButton');

let imgLink = { 'кіт': "./img/cat.jpg", 'слон': "./img/elephant.jpg", 'собака': './img/dog.jpg', 'миша': './img/mouse.jpg', 'жирафа': './img/giraffe.jpg', 'кінь': "./img/horse.jpg", 'дельфін': "./img/delphin.jpg", 'рись': "./img/lynx.jpg", 'лисиця': "./img/fox.jpg", 'кролик': "./img/bunny.jpg", 'лев': "./img/lion.jpg", 'олень': "./img/deer.jpg", 'вовк': "./img/wolf.jpg" };

let answer = ['слон', 'кіт', 'лисиця', 'миша', 'жирафа', 'собака', 'кінь', 'дельфін', 'рись', 'кролик', 'лев', 'олень', 'вовк'];

let page = 0;

function addImageLeters() {
   image.src = imgLink[answer[page]];
   animals.appendChild(image);
}

function arrayLeters(arr) {
   let changeAnswer = [];
   for (let word of arr) {
      for (let letter of word) {
         if (!changeAnswer.includes(letter)) {
            changeAnswer.push(letter);
         }
      }
   }
   return changeAnswer;
}

function randomNumber(arr) {
   let random = Math.floor(Math.random() * (arrayLeters(arr).length - 0) + 0);
   return random;
}

let randomLetters = [];

function randomArrayLetters() {
   let arr = arrayLeters(answer);

   for (let i = 0; i <= arrayLeters(answer).length - 1; i++) {
      let item = arr.splice(randomNumber(arr), 1);
      if (!randomLetters.includes(item)) {
         randomLetters.push(item.toString().toUpperCase());
      }
   }
   return randomLetters;
}

function selectingButton(arr) {

   for (let item of arr) {
      let letterButton = document.createElement('button');
      letterButton.classList.add('addLetters__button');
      letterButton.textContent = item;
      letterButton.addEventListener('click', () => {
         rowAnswer__input.value += letterButton.textContent;
      });

      addLetters.appendChild(letterButton);
   }
}

let helpAnswer = document.createElement('p');
help.addEventListener('click', () => {
   helpAnswer.textContent = answer[page];
   helpContainer.appendChild(helpAnswer);
});
help.addEventListener('mouseout', () => {
   helpAnswer.remove();
});

addImageLeters();
selectingButton(randomArrayLetters());


let num = 0;

tasksCompleted.textContent = `Correct answers ${num}/${answer.length}`;

function nextPage() {
   if (page < answer.length - 1) {
      ++page;
      addImageLeters();
   } else if (page >= answer.length - 1) {
      page = -1;
   }
   rowAnswer__input.value = '';
   helpAnswer.textContent = '';
};

let numCorrectAnswer = [];
rowAnswer__buttonCheck.addEventListener('click', () => {
   if (rowAnswer__input.value === answer[page].toUpperCase() && num < answer.length) {
      alert('Victory, try the next task!');
      if (!numCorrectAnswer.includes(page)) {
         numCorrectAnswer.push(page);
         tasksCompleted.textContent = `Correct answers ${++num}/${answer.length}`;
         nextPage();
      }
      if (num == answer.length) {
         alert('You are good!');
         num = 0;
      }
      rowAnswer__input.value = '';
   } else {
      alert(`Sorry, you didn't win, try again!`);
      rowAnswer__input.value = '';
   }
});

deleteLetterButton.addEventListener('click', () => {
   let result = rowAnswer__input.value.split('');
   result.splice(-1, 1);
   let str = '';
   for (let item of result) {
      str += item;
   }
   return rowAnswer__input.value = str;
});

nextButton.addEventListener('click', () => {
   if (page < answer.length - 1) {
      ++page;
      addImageLeters();

   }
   rowAnswer__input.value = '';
   helpAnswer.textContent = '';
});

previousButton.addEventListener('click', () => {
   if (page > 0) {
      --page;
      if (page >= 0) {
         addImageLeters();
      }
   }
   rowAnswer__input.value = '';
   helpAnswer.textContent = '';
});















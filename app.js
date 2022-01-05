var data = {};

// initialize vue
var app = new Vue({
  el: '#app',
  data: {
    stringText: '',
    copyBtnText: 'Copy',
    mode: 'sb-mode',
  },
  methods: {
    convertText: function () {
      switch (this.mode) {
        case 'slow-mode':
          this.stringText = slowConvert(this.stringText);
          break;
        case 'sb-mode':
        default:
          this.stringText = spongebobConvert(this.stringText);
          break;
      }
      this.copyName();
    },
    copyName: function () {
      copyText(this.stringText);
      this.copyBtnText = 'Copied';
      setTimeout(() => { this.copyBtnText = "Copy"; }, 1000);
    }
  }
});

function spongebobConvert(stringInput) {
  var stringOutput = '';
  caps = false;

  for (const character of stringInput) {
    if (isAlphabet(character)) {
      stringOutput += caps ? character.toUpperCase() : character.toLowerCase();
      caps = !caps;
    } else {
      stringOutput += character;
    }
  }
  return stringOutput;
}

function slowConvert(stringInput) {
  const realSpaceIdentifier = '8eQs4GC0TPWoxacYZgYo';
  return stringInput
    .replaceAll(' . ', '...' + realSpaceIdentifier)
    .replaceAll('. ', '...' + realSpaceIdentifier)
    .replaceAll(' .', '...')
    .replaceAll('.', '...')

    .replaceAll(' , ', '...' + realSpaceIdentifier)
    .replaceAll(', ', '...' + realSpaceIdentifier)
    .replaceAll(' ,', '...')
    .replaceAll(',', '...')

    .replaceAll(' ? ', '...' + realSpaceIdentifier)
    .replaceAll('? ', '...' + realSpaceIdentifier)
    .replaceAll(' ?', '...')
    .replaceAll('?', '...')

    .replaceAll(' ! ', '...' + realSpaceIdentifier)
    .replaceAll('! ', '...' + realSpaceIdentifier)
    .replaceAll(' !', '...')
    .replaceAll('!', '...')

    .replaceAll(' ', ' . ')

    .replaceAll(realSpaceIdentifier, ' ')

    .toLowerCase();
}

function enableButton() {
  const convertBtn = document.getElementById('convert-btn');
  convertBtn.classList.remove('disabled');
}

function loadBackground() {
  document.body.style.backgroundImage = "url('assets/pexels-dog-dark.jpg')";
}

function focusInput() {
  document.getElementById('stringInput').focus();
}

(() => {
  enableButton();
  focusInput();
  loadBackground();
}).bind(this)();


/* utils */

// return random value from array
function randomWord(arrayInput) {
  const word = arrayInput[Math.floor(Math.random() * arrayInput.length)]
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// copy input text to clipboard
function copyText(textInput) {
  const hiddenInput = document.getElementById("hidden-input");
  hiddenInput.value = textInput;
  hiddenInput.select();
  console.log(textInput);
  document.execCommand('copy');
}

// check if the input is a alphabet
// https://stackoverflow.com/a/32567789/6622966
function isAlphabet(c) {
  return c.toLowerCase() != c.toUpperCase();
}

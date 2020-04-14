var data = {};

// initialize vue
var app = new Vue({
  el: '#app',
  data: {
    stringText: '',
    copyBtnText: 'Copy'
  },
  methods: {
    convertText: function () {
      this.stringText = spongebobConvert(this.stringText)
    },
    copyName: function () {
      copyText(this.stringText);
      this.copyBtnText = 'Copied';
      setTimeout(()=>{this.copyBtnText = "Copy";}, 1000);
    }
  }
});

function spongebobConvert (stringInput) {
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

function enableButton() {
  const convertBtn = document.getElementById('convert-btn');
  convertBtn.classList.remove('disabled');
}


function loadBackground() {
  document.body.style.backgroundImage = "url('assets/pexels-unicorn-dog.jpg')";
}

(() => {
  enableButton();
  loadBackground();
}).bind(this)();


/* utils */

// return random value from array
function randomWord (arrayInput) {
  const word = arrayInput[Math.floor(Math.random() * arrayInput.length)]
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// copy input text to clipboard
function copyText (textInput) {
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
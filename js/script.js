document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM');
/*variable*/

const modeSwitch = document.querySelector('.mode');
const lightMode = document.querySelector('.fa-sun-o');
const darkMode = document.querySelector('.fa-moon-o');
let nightSheet= 'http://test/clavier/css/keyboard-night.css';
let lightSheet= 'http://test/clavier/css/keyboard-light.css';
let link = document.getElementById('page-style')

const capsLock = document.querySelector('.capslock');
const unlock = document.querySelector('.fa-unlock');
const lock = document.querySelector('.fa-lock');
const ledOff = document.querySelector('.fa-circle-thin');
const ledOn = document.querySelector('.fa-dot-circle-o');
const key = document.querySelectorAll('kbd');

const backspace = document.querySelector('.backspace');
let write = document.querySelector('textarea');
let kbd;

let keyEspace = otherElment('.espace', ' ');
let keyFlech = otherElment('.fleche', '\u2039');
let keyEnter = otherElment('.enter', '\u000A');
let keyPoint = otherElment('.point', '\u002E');
let keyTab = otherElment('.tab', '\u0009');

let keyUn = selectElment('.un');
let keyDeux = selectElment('.deux');
let keyTrois = selectElment('.trois');
let keyQuatre = selectElment('.quatre');
let keyCinq = selectElment('.cinq');
let keySIx = selectElment('.six');
let keySept = selectElment('.sept');
let keyHuit = selectElment('.huit');
let keyNeuf = selectElment('.neuf');
let keyZero = selectElment('.zero');

let keyA = selectElment('.a');
let keyB = selectElment('.b');
let keyC = selectElment('.c');
let keyD = selectElment('.d');
let keyE = selectElment('.e');
let keyF = selectElment('.f');
let keyG = selectElment('.g');
let keyH = selectElment('.h');
let keyI = selectElment('.i');
let keyJ = selectElment('.j');
let keyK = selectElment('.k');
let keyL = selectElment('.l');
let keyM = selectElment('.m');

let keyN = selectElment('.n');
let keyO = selectElment('.o');
let keyP = selectElment('.p');
let keyQ = selectElment('.q');
let keyR = selectElment('.r');
let keyS = selectElment('.s');
let keyT = selectElment('.t');
let keyU = selectElment('.u');
let keyV = selectElment('.v');
let keyW = selectElment('.w');
let keyX = selectElment('.x');
let keyY = selectElment('.y');
let keyZ = selectElment('.z');

arrayMaj = [];
keyMaj = document.querySelectorAll('kbd');
// console.log(keyMaj.forEach())

/*event listener*/

//pour activer ou désactiver le mode nuit
modeSwitch.addEventListener('click', event => { //clique sur la touche mode 
    // console.log('clique mode');
    lightMode.classList.toggle('hidden'); // cache l'icône en changeant de classe
    darkMode.classList.toggle('visible'); //affiche l'icône en changeant de classe
    // si le href de link est === à nightSheet 
    if(link.href === nightSheet){
      changerDeStyle(lightSheet); //fonction va afficher lightSheet
    }
    // sinon fonction va afficher nightSheet
    else{
      changerDeStyle(nightSheet);
      // console.log(link.href === sheet) 
    }
  });

    // Supprimer un caractère
    backspace.addEventListener('click', () => {
      let keyBack = write.value.slice(0, write.value.length - 1)
      // console.log(keyBack)
      write.value = keyBack
  })


/*pour activer ou désactiver caps lock*/
  capsLock.addEventListener('click', event => {

    // console.log('clique maj');
    //verrou
    unlock.classList.toggle('hidden') // cache l'icône en changeant de classe
    // unlock.classList.add('fgd')
    lock.classList.toggle('visible') //affiche l'icône en changeant de classe
    //led
    ledOff.classList.toggle('hidden') // cache l'icône en changeant de classe
    ledOn.classList.toggle('visible') //affiche l'icône en changeant de classe

    /*Mettre en maj*/
     keyMaj.forEach(element => element.classList.toggle('maj'))
    // keyMaj.forEach(element => console.log(element))
    
  });

/*fonction */

/*en maj*/
function toUpper(text){
  return text.toUpperCase()
}
  function changerDeStyle(sheet){
    link.setAttribute('href', sheet);
    // console.log(link)    
  }

// function qui permet de choisir la touche a écrire
  function selectElment(className){

    kbd = document.querySelector(className);
    // innerText applies text-transform and white-space rules
    let touchName = kbd.innerText;

    kbd.addEventListener('click', event => {
      if (write.value === ''){
        write.value = touchName
      }
      else{
        write.value +=touchName
      }
    
    // console.log(touchName)
    })
  }


  function otherElment(className, elementValue){

    kbd = document.querySelector(className);
    kbd.addEventListener('click', event => {
        write.value += elementValue
    // console.log(elementValue)
    })
  }


});


'use strict';
document.addEventListener('DOMContentLoaded', (event) => {
  /*variable*/
  const link = document.getElementById('page-style')

  const nightSheet= 'http://test/clavier/css/keyboard-night.css';
  const lightSheet= 'http://test/clavier/css/keyboard-light.css';

  const ledOff = document.querySelector('.fa-circle-thin');
  const ledOn = document.querySelector('.fa-dot-circle-o');
  const lightMode = document.querySelector('.fa-sun-o');
  const darkMode = document.querySelector('.fa-moon-o');
  const unlock = document.querySelector('.fa-unlock');
  const lock = document.querySelector('.fa-lock');
  const writeArea = document.querySelector("textarea");

  const modeSwitch = document.querySelector('.mode');
  const capsLock = document.querySelector(".capslock");

  const backspace = document.querySelector('.backspace');
  const del = document.querySelector('.del');
  const shift1 = document.querySelector('.shift1');
  const shift2 = document.querySelector('.shift2');

  const letters = document.querySelectorAll(".letter");
  const numbers = document.querySelectorAll('.chiffre');
  let toUpperCase = false;

  // lettres
  letters.forEach((letter) => {
    letter.addEventListener("click", (event) => {
    writeArea.value += letter.value;
    });
  });

  // chiffres
  numbers.forEach(function(number){
    number.addEventListener("click", (event) => {
      writeArea.value += number.innerHTML;
      // console.log(number.innerHTML)
    });
  });

  // /*autre */
  otherElment('.espace', ' ');
  otherElment('.fleche', '\u2039');
  otherElment('.fleche2', '\u203a ');
  otherElment('.enter', '\u000A');
  otherElment('.point', '\u002E');
  otherElment('.tab', '\u0009');
  otherElment('.point-virgule', '\u037e');
  otherElment('.exclamation', '\u0021');
  otherElment('.interrogation', '\u003F');
  otherElment('.deux-points', '\u003A');
  otherElment('.arobase', '\u0040');

  /*event listener*/

  modeSwitch.addEventListener('click', event => { //pour activer ou désactiver le mode nuit

  // icone change la class des icones sun/moon
    lightMode.classList.toggle('hidden'); 
    darkMode.classList.toggle('visible'); 
    // change de feuille de style
    if(link.href === nightSheet){
      changerDeStyle(lightSheet); 
    }
    else{
      changerDeStyle(nightSheet);
    }
  });

  capsLock.addEventListener('click', event => { /*pour activer ou désactiver caps lock*/

  // icone change la class de l'icone verrou 
    unlock.classList.toggle('hidden'); 
    lock.classList.toggle('visible'); 

  // icone change la class de l'icone led
    ledOff.classList.toggle('hidden'); 
    ledOn.classList.toggle('visible'); 

  /*Mettre en maj*/
    if (toUpperCase === false) {//uppercase
      toUpperCase = true;
      letters.forEach((letter) => {
      letter.value = letter.value.toUpperCase(); 
      });
    } 
    else {//lowercase
      toUpperCase = false; 
      letters.forEach((letter) => {
      letter.value = letter.value.toLowerCase();
      });
    }
  });

  // Supprimer un caractère
  backspace.addEventListener('click', () => {
    let keyBack = writeArea.value.slice(0, writeArea.value.length - 1);
    writeArea.value = keyBack
  })

  // supprimer tous les caractere
  del.addEventListener('click', () => {
    let delValue = writeArea.value
    writeArea.value = ''
  })

  // function

  /*change de feuille de style */
  function changerDeStyle(sheet){
    link.setAttribute('href', sheet);
  }

  // function qui permet de choisir la touche a écrire
  function otherElment(className, elementValue){// fonction avec deux valeurs le nom de la classe et la valeur
    let otherElment = document.querySelector(className);// selectionne la class 
    otherElment.addEventListener('click', event => {
      writeArea.value += elementValue //ecrit la valeur selectionné sur le texterea
    })
  }
});


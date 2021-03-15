'use strict';
document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM');
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
const write = document.querySelector('textarea');

const modeSwitch = document.querySelector('.mode');
const capsLock = document.querySelector('.capslock');
const backspace = document.querySelector('.backspace');
const del = document.querySelector('.del');
const shift1 = document.querySelector('.shift1');
const shift2 = document.querySelector('.shift2');
const lettre = document.querySelectorAll('.lettre');
const chiffre = document.querySelectorAll('.chiffre');
const key = document.querySelectorAll('kbd');
let kbd;
let toUpperCase = false;

/*lettre*/
lettre.forEach(function(element){
  letterElment(element.id,element.innerHTML);
    console.log(toUpperCase)
  });

/*autre */
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

/*chiffre */
selectElment('.un');
selectElment('.deux');
selectElment('.trois');
selectElment('.quatre');
selectElment('.cinq');
selectElment('.six');
selectElment('.sept');
selectElment('.huit');
selectElment('.neuf');
selectElment('.zero');



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
      let keyBack = write.value.slice(0, write.value.length - 1);
      // console.log(keyBack)
      write.value = keyBack
  })

    // supprimer tous les caractere
  del.addEventListener('click', () => {
    let delValue = write.value
    // console.log(delValue)
    write.value = ''
  })

/*pour activer ou désactiver caps lock*/
  capsLock.addEventListener('click', event => {
    //verrou
    unlock.classList.toggle('hidden'); // cache l'icône en changeant de classe
    lock.classList.toggle('visible'); //affiche l'icône en changeant de classe
    //led
    ledOff.classList.toggle('hidden'); // cache l'icône en changeant de classe
    ledOn.classList.toggle('visible'); //affiche l'icône en changeant de classe
    /*Mettre en maj*/
    lettre.forEach(function(element){
    element.classList.toggle('maj')
    });

    if(toUpperCase===false){
      toUpperCase = true;
      lettre.forEach(function(element){
        letterElment(element.id,element.innerHTML.toUpperCase());
        });
        
    }
    else{
      toUpperCase = false;
      console.log(toUpperCase)
      lettre.forEach(function(element){
        letterElment(element.id,element.innerHTML.toLowerCase());
        });
    }
  });
  //shift
    // shift1.addEventListener('click', event => { //clique sur la touche 
  //   console.log('clique');

  // });
/*fonction */

/*en maj*/
function toUpper(text){
  return text.toUpperCase()
}
/*change de feuille de style */
  function changerDeStyle(sheet){
    link.setAttribute('href', sheet);
    // console.log(link)    
  }

// function qui permet de choisir la touche a écrire
  function selectElment(className){
    kbd = document.querySelector(className); // selectionne la class 
    let toucheName = kbd.innerText; //selection l'element dans la touche = innerText
    // mettre en maj => toucheName = toUpper(kbd.innerText);
    kbd.addEventListener('click', event => { // event listener au click  
        write.value +=toucheName //ecrit l'element selectionné sur le texterea
    console.log(toucheName)
    })
  }

  function otherElment(className, elementValue){// fonction avec deux valeurs le nom de la classe et la valeur
    kbd = document.querySelector(className);// selectionne la class 
    kbd.addEventListener('click', event => {
        write.value += elementValue //ecrit la valeur selectionné sur le texterea
    })
  }
    
  function letterElment(IDName, elementValue){// fonction avec deux valeurs l'ID et la valeur
    kbd = document.getElementById(IDName);// selectionne l'ID  
    kbd.addEventListener('click', event => {
        write.value += elementValue.substr(0, 1) //ecrit la valeur selectionné sur le texterea
        console.log(elementValue.substr(0, 1))
    })
  }

});


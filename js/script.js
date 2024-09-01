'use strict';

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM chargé');

/* Variables */
const modeSwitch = document.querySelector('.mode');
const lightMode = document.querySelector('.fa-sun-o');
const darkMode = document.querySelector('.fa-moon-o');
const nightSheet = 'css/keyboard-night.css';
const lightSheet = 'css/keyboard-light.css';
const link = document.getElementById('page-style');

const capsLock = document.querySelector('.capslock');
const unlock = document.querySelector('.fa-unlock');
const lock = document.querySelector('.fa-lock');
const ledOff = document.querySelector('.fa-circle-thin');
const ledOn = document.querySelector('.fa-dot-circle-o');
const backspace = document.querySelector('.backspace');
const write = document.querySelector('textarea');
const shiftKeys = document.querySelectorAll('.shift1, .shift2');

let isCapsLockOn = false;
let isShiftOn = false;

/* Event Listeners */

// Activer ou désactiver le mode nuit
modeSwitch.addEventListener('click', () => {
  lightMode.classList.toggle('hidden'); 
  darkMode.classList.toggle('hidden'); 
  
  if (link.getAttribute('href') === nightSheet) {
    changerDeStyle(lightSheet);
  } else {
    changerDeStyle(nightSheet);
  }
});

// Supprimer un caractère
backspace.addEventListener('click', () => {
  write.value = write.value.slice(0, -1);
});

// Activer ou désactiver Caps Lock
capsLock.addEventListener('click', () => {
  isCapsLockOn = !isCapsLockOn;
  
  unlock.classList.toggle('hidden');
  lock.classList.toggle('hidden');
  ledOff.classList.toggle('hidden');
  ledOn.classList.toggle('hidden');

  // Mettre à jour l'affichage des lettres sur le clavier
  updateKeyboardDisplay();
});

// Activer ou désactiver Shift
shiftKeys.forEach(shiftKey => {
  shiftKey.addEventListener('click', () => {
    isShiftOn = !isShiftOn;

    // Mettre à jour l'affichage des lettres sur le clavier
    updateKeyboardDisplay();

    // Si Shift est utilisé, désactiver après la prochaine frappe
    if (isShiftOn) {
      document.querySelectorAll('.lettre').forEach(letter => {
        letter.addEventListener('click', () => {
          isShiftOn = false;
          updateKeyboardDisplay();
        }, { once: true });
      });
    }
  });
});

// Fonction pour changer de feuille de style
function changerDeStyle(sheet){
  link.setAttribute('href', sheet);
}

// Fonction pour gérer les touches du clavier
function handleKeyPress(kbd, character) {
  kbd.addEventListener('click', () => {
    let charToAdd = character;

    if (isShiftOn) {
      charToAdd = charToAdd.toUpperCase();
      isShiftOn = false; // Désactiver le Shift après utilisation
      updateKeyboardDisplay();
    } else if (isCapsLockOn) {
      charToAdd = charToAdd.toUpperCase();
    }
    
    write.value += charToAdd;
  });
}

// Fonction pour mettre à jour l'affichage des lettres sur le clavier
function updateKeyboardDisplay() {
  document.querySelectorAll('.lettre').forEach(letter => {
    if (isCapsLockOn || isShiftOn) {
      letter.textContent = letter.id.toUpperCase();
    } else {
      letter.textContent = letter.id.toLowerCase();
    }
  });
}

// Initialiser les touches du clavier (lettres)
document.querySelectorAll('.lettre').forEach(letter => {
  handleKeyPress(letter, letter.id);
});

// Initialiser les touches des chiffres et symboles
handleKeyPress(document.querySelector('.un'), '1');
handleKeyPress(document.querySelector('.deux'), '2');
handleKeyPress(document.querySelector('.trois'), '3');
handleKeyPress(document.querySelector('.quatre'), '4');
handleKeyPress(document.querySelector('.cinq'), '5');
handleKeyPress(document.querySelector('.six'), '6');
handleKeyPress(document.querySelector('.sept'), '7');
handleKeyPress(document.querySelector('.huit'), '8');
handleKeyPress(document.querySelector('.neuf'), '9');
handleKeyPress(document.querySelector('.zero'), '0');

// Initialiser les touches spéciales
handleKeyPress(document.querySelector('.point-virgule'), ';');
handleKeyPress(document.querySelector('.point'), '.');
handleKeyPress(document.querySelector('.arobase'), '@');
handleKeyPress(document.querySelector('.interrogation'), '?');
handleKeyPress(document.querySelector('.exclamation'), '!');
handleKeyPress(document.querySelector('.deux-points'), ':');
handleKeyPress(document.querySelector('.espace'), ' ');
handleKeyPress(document.querySelector('.fleche'), '‹');
handleKeyPress(document.querySelector('.fleche2'), '›');

});

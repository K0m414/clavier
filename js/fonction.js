/*fonction */

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
  function backspaceTouche(){
    backspace.addEventListener('click', event => {
      
      write.value.substring(0, write.value.length - 1);
  
  console.log(write.value.slice(0, write.value.length - 1))
  })
    
    
  }

export {
    toUpper, selectElment, otherElment
}
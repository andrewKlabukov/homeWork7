let firstNumber = '';
let secondNumber = '';
let sign = '';
let finish = false;

const DIGIT = ['0','1','2','3','4','5','6','7','8','9','.'];
const ACTION = ['-','+', '*', '/'];
const OUT = document.querySelector('.calc-screen p');

function clearAll() {
  firstNumber = '';
  secondNumber = '';
  sign = '';
  finish = false;
  OUT.textContent = 0;    
}

function delLastEl() {
  if (firstNumber !== '' && sign === '') {
    firstNumber = firstNumber.slice(0, -1);    
    OUT.textContent = firstNumber;  
  }
  else if (secondNumber !== '' && sign !== '') {
    secondNumber = secondNumber.slice(0, -1);    
    OUT.textContent = secondNumber;   
  }
}

function plusMinus() {
  if (firstNumber !== '' && sign === '') {
    firstNumber = -firstNumber;    
    OUT.textContent = firstNumber;  
  }
  else if (secondNumber !== '' && sign !== '') {
    secondNumber = -secondNumber;    
    OUT.textContent = secondNumber;   
  }
}

document.querySelector('.delete').addEventListener('click', delLastEl);

document.querySelector('.plus-minus').addEventListener('click', plusMinus);

document.querySelector('.ac').addEventListener('click', clearAll);

document.querySelector('.buttons').addEventListener('click', (event)=>{  
  
  if(!event.target.classList.contains('btn')) return;

  if(event.target.classList.contains('ac')) return;  
   
  const KEY = event.target.textContent  

  if (DIGIT.includes(KEY)) {    

    if (secondNumber === '' && sign === ''){       

      if (!(KEY === '.' && firstNumber.includes('.'))) {       
        firstNumber += KEY; 
      }

      OUT.textContent = firstNumber;
      
    }

    else if (firstNumber !== '' && secondNumber !== '' && finish){          
      secondNumber = KEY;
      finish = false; 
      OUT.textContent = secondNumber;
    }
    
    else {  
      if (!(KEY === '.' && secondNumber.includes('.'))) {       
        secondNumber += KEY; 
      } 
      OUT.textContent = secondNumber;
    }    
    return;
  }
  
  if (ACTION.includes(KEY)) {
    sign = KEY;    
    OUT.textContent = sign;
    return;
  } 

  if (KEY === '=') {
    switch (sign) {
      case '+':
        firstNumber = (+firstNumber) + (+secondNumber);
        break;
      case '-':
        firstNumber = firstNumber - secondNumber;
        break;
      case '*':
        firstNumber = firstNumber * secondNumber;
        break;
      case '/':
        if (secondNumber === '0') { 
          firstNumber = 0         
          break
        }
        firstNumber = firstNumber / secondNumber;
        break;      
    }   

    finish = true;
    OUT.textContent = firstNumber;    
  }  
})

// реализовать 8 наков после "."
let firstNumber = '';
let secondNumber = '';
let sign = '';
let finish = false;

const DIGIT = ['0','1','2','3','4','5','6','7','8','9','.'];
const ACTION = ['-','+','*','/'];
const OUT = document.querySelector('.calc-screen p');

function clearAll() {
  firstNumber = '';
  secondNumber = '';
  sign = '';
  finish = false;
  OUT.textContent = 0;    
}

document.querySelector('.ac').addEventListener('click', clearAll);

document.querySelector('.buttons').addEventListener('click', (event)=>{  
  
  if(!event.target.classList.contains('btn')) return;

  if(event.target.classList.contains('ac')) return;
  
  OUT.textContent = '';
  
  const KEY = event.target.textContent 

  if (DIGIT.includes(KEY)) {

    if (secondNumber === '' && sign === ''){
      firstNumber += KEY;      
      OUT.textContent = firstNumber;
    }
    else if (firstNumber !== '' && secondNumber !== '' && finish){
      secondNumber = KEY;
      finish = false;
      OUT.textContent = secondNumber;
    } else {
      secondNumber += KEY;
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
        firstNumber = firstNumber / secondNumber;
        break;
    }
    finish = true;
    OUT.textContent = firstNumber;    
  }
})
// if (KEY === '.' && firstNumber.includes('.')) {
//   firstNumber += '';
//   OUT.textContent = firstNumber;
// } else {
//   firstNumber += KEY;
//   OUT.textContent = firstNumber;
// }

// if (KEY === '.' && secondNumber.includes('.')) {
//   secondNumber += '';
//   OUT.textContent = secondNumber;
// } else {
//   secondNumber += KEY;
//   OUT.textContent = secondNumber;
// }


// реализовать 8 наков после "."
// реализовать только одну "."
// реализовать "+/-"
// реализовать "->" что бы стирался последний символ
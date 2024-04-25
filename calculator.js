//Add Function
function add(num1, num2) {
  return num1 + num2
}

//Subtract Function
function subtract(num1, num2) {
  return num1 - num2
}

//Multiply Function
function multiply(num1, num2) {
  return num1 * num2
}

//Divide Function
function divide(num1, num2) {
  return num1 / num2
}

//Power Function
function power(num1, num2) {
  return num1 ** num2
}

//Modulus Function
function mod(num1, num2) {
  return num1 % num2
}

//Square Root Function
function sqrt(num) {
  return Math.sqrt(num)
}

//Factorial Function
function factorial(num) {
  let result = 1
  for (let i = num; i > 0; i--) {
    result *= i
  }
  return result
}

//Main Calculate Function
function calculate(expression) {

  //Declare Variables
  const newExpression = expression.split(' ')
  let num1 = Number(newExpression[0])
  let operator = newExpression[1]
  let num2 = Number(newExpression[2])

  //String Input Exception
  if (newExpression.length === 3) {
    if (Number.isNaN(num1) === true) {
      alert("You didn't enter a number genius.")
      return
    }
    else if (Number.isNaN(num2) === true) {
      alert("You didn't enter a number genius.")
      return
    }
  }
  
  //Square Root Exception
  else if (newExpression.length === 2) {
    operator = newExpression[0]
    num1 = Number(newExpression[1])
  }

  //Too much/too little Input Exception
  else {
    alert("You need to know how to count before using a calculator, silly")
    return
  }

  //Use Correct Operation
  if (operator === "+") {
    return add(num1, num2)
  }
  if (operator === "-") {
    return subtract(num1, num2)
  }
  if (operator === "*") {
    return multiply(num1, num2)
  }
  if (operator === "/") {
    return divide(num1, num2)
  }
  if (operator === "^") {
    return power(num1, num2)
  }
  if (operator === "%") {
    return mod(num1, num2)
  }
  if (operator === "sqrt") {
    return sqrt(num1)
  }
  if (operator === "!") {
    if (Number.isInteger(num1) && num1 > 0) {
      return factorial(num1)
    }
    else {
      alert("Must factorial by a REAL number")
    }
  }
  else {
    alert("You did not enter a valid operation")
    return
  }
}

/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});

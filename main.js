// define some functions which we can use as callbacks
function add(a, b) {
    return a + b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

// define a function which takes in 2 numbers and a callback function, and then calls the callback function on the 2 numbers and returns that result, replaced by arrayCalculator
function calculator(num1, num2, callback) {
    return callback(num1, num2)
}

function arrayCalculator(array1, array2, callback) {
    let finalArray = []
    // TODO: fix bug when array2.length > array1.length
    for (let i = 0; i < array1.length; i = i + 1) {
        let currentNumber1 = Number(array1[i].split(" ").join("")) // .split(" ").join("") removes all spaces
        let currentNumber2 = Number(array2[i].split(" ").join("")) // .split(" ").join("") removes all spaces
        let resultNumber = callback(currentNumber1, currentNumber2)
        finalArray.push(resultNumber)
    }
    return finalArray
}

function handleClick(callback) {
    // get the inputs from the input elements
    let inputArray1 = inputElement1.value.split(",")
    let inputArray2 = inputElement2.value.split(",")

    // put the inputs into the calculator function with the add callback
    let result = arrayCalculator(inputArray1, inputArray2, callback)

    // create and append result div
    let resultDiv = document.createElement('div')
    if (callback === add) {
        resultDiv.append("addition: ")
    } else if (callback === multiply) {
        resultDiv.append("multiplication: ")
    } else if (callback === divide) {
        resultDiv.append("division: ")
    }
    resultDiv.append(result)
    outputDiv.append(resultDiv)
}

// add the click event listener to the target element
function addCalculatorEvent(targetElement, callback) {
    // pass the callback function to the handleClick within an anonymous function definition
    // ref: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Event_listener_with_anonymous_function
    targetElement.addEventListener("click", function () { handleClick(callback) })
}

// call the addCalculatorEvent function on the button elements from our view.js file
addCalculatorEvent(additionButton, add)
addCalculatorEvent(multiplyButton, multiply)
addCalculatorEvent(divisionButton, divide)
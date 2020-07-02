// 2 number input elements
let inputElement1 = document.createElement("input")
inputElement1.type = "text"

let inputElement2 = document.createElement("input")
inputElement2.type = "text"

let bodyElement = document.querySelector("body")
bodyElement.append(inputElement1, inputElement2)

// 3 button elements (1 for addition, multiplication, and division)

let additionButton = document.createElement("button")
additionButton.append("add")
bodyElement.append(additionButton)

let multiplyButton = document.createElement("button")
multiplyButton.append("multiply")
bodyElement.append(multiplyButton)

let divisionButton = document.createElement("button")
divisionButton.append("divide")
bodyElement.append(divisionButton)

// an output div
let outputDiv = document.createElement('div')
bodyElement.append(outputDiv)
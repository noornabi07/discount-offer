function getElementValue(id){
    const elementValue = document.getElementById(id);
    const elementValueString = elementValue.innerText;
    const elementValueNumber = parseInt(elementValueString);
    return elementValueNumber;
}

function getInputValue(id){
    const inputValue = document.getElementById(id);
    const inputValueString = inputValue.value;
    // const inputValueNumber = parseInt(inputValueString);
    inputValue.value = '';
    return inputValueString;
}

function setInnerText(id, newValue){
    const setText = document.getElementById(id);
    setText.innerText = newValue;
}
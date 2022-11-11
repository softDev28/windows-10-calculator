const result = document.getElementById('resultContainer');
const equalsButton = document.getElementById('equalsButton');

const compute = (number) => {
    result.value += number;
}

const calculate = () => {
    try {
        result.value = eval(result.value)
    }
    catch(err) {
        alert("Syntax Error!");
    }
}

function clearInput() {
    result.value = "";
}

function removeInput() {
    result.value =result.value.slice(0, -1);
}
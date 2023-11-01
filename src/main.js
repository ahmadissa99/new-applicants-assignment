// Add your JavaScript here
let outputScreen = document.getElementById('outputScreen');
function display(num) {
    outputScreen.value += num;
}

function calculate() {
    try {
        outputScreen.value = eval(outputScreen.value);
    } catch (err) {
        alert('invalid');
    }
}

function ac() {
    outputScreen.value = '';
}

function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}

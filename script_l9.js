const main = document.querySelector('.main');
let text = "super";

function addContent(text) {
    main.innerHTML += '<hr>test ' + text + ' text';
    main.innerHTML += '<div style="width: 200px; height: 200px; border-radius: 50%; background: red;">circle</div>';
}

function changeContent(text) {
    main.innerHTML = text;
}

function clearContent() {
    main.innerHTML = '';
}

const fill = document.getElementById('fill');
const fillNumbers = document.querySelector('.numbers');
const inNum = document.getElementById('num');

function fillNum() {
    fillNumbers.innerHTML = '';
    let curNum = inNum.value;
    for (let i = 0; i <= curNum; i++) {
        fillNumbers.innerHTML += i + '<br>';
    }
}

fill.addEventListener('click', fillNum);
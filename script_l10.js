let mass = [];
const fillWindow = document.querySelector('.fill');
const spliceWindow = document.querySelector('.splice');
const sliceWindow = document.querySelector('.slice');
const includeWindow = document.querySelector('.include');
const loremWindow = document.querySelector('.lorem');
const splitWindow = document.querySelector('.split');
const mapWindow = document.querySelector('.map');
const sortWindow = document.querySelector('.sort');
let massSplice = [];
let massSlice = [];
let massInclude = [];
let mass2, massMap;

function fillRender(arrayWindow, array) {
    for (let i = 0; i < array.length; i++) {
        arrayWindow.innerHTML += `[${i}] = ${array[i]}<br><br>`;
    }
}

document.getElementById('fill').onclick = function() {
    fillWindow.innerHTML = '';
    for (let i = 0; i <= 100; i += 5) {
        mass.push(i);
    }
    fillRender(fillWindow, mass);
}

document.getElementById('splice').onclick = function() {
    spliceWindow.innerHTML = '';
    massSplice = mass.splice(-7, 5, 'ggg', 666, true, [5, 7, 9], 'java script');
    fillRender(spliceWindow, massSplice);
    fillWindow.innerHTML = '';
    fillRender(fillWindow, mass);
}

document.getElementById('slice').onclick = function() {
    sliceWindow.innerHTML = '';
    massSlice = mass.slice(-8);
    fillRender(sliceWindow, massSlice);
    fillWindow.innerHTML = '';
    fillRender(fillWindow, mass);
}

document.getElementById('include').onclick = function() {
    includeWindow.innerHTML = '';
    let x = prompt('Що шукаем?');
    massInclude.push(mass.includes(x));
    fillRender(includeWindow, massInclude);
}

document.getElementById('split').onclick = function() {
    mass2 = loremWindow.innerText.toUpperCase().split(' ', 50);
    splitWindow.innerHTML = '';
    fillRender(splitWindow, mass2);
    let loremString = mass2.join('<|O_O|>');
    //alert(loremString);
}

document.getElementById('map').onclick = function() {
    massMap = mass2.map(item => item.length);
    mapWindow.innerHTML = '';
    fillRender(mapWindow, massMap);
}

document.getElementById('sort').onclick = function() {
    massMap.sort((x, y) => x - y);
    sortWindow.innerHTML = '';
    fillRender(sortWindow, massMap.reverse());
}

function compareNum(x, y) {
    if (x > y) return 1;
    else if (x == y) return 0;
    else return -1;
}
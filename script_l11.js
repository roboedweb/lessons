let city = 'Ukraine';
let user = {
    name: 'John',
    age: 25,
    'is Admin': false,
    [city]: 'Kyiv'
};
let admin = new Object();
//alert(user.name);
admin.name = 'Bill';
admin.age = 30;
admin.isAdmin = true;

for (let key in admin) {
    console.log(key);
    console.log(admin[key]);
}

delete admin.age;
//user['is Admin'] = false;
let key = 'is Admin';
// alert(user[key]);
// alert(user.Ukraine);

function makeUser(name, age, isAdmin) {
    return {
        name,
        age,
        isAdmin
    }
}

const user2 = makeUser('Greg', 23, false);

user2.age = 27;

// let admin2 = admin;

let admin2 = {};
for (let key in admin) {
    admin2[key] = admin[key];
}

admin2.name = 'Jessica';
admin.gender = undefined;

// alert('isAdmin' in admin);
// alert('isAdmin' in user);

// alert(admin.gender);
// alert('gender' in admin2);

for (let key in admin) {
    console.log(key);
    console.log(admin[key]);
}


let codes = {
    '+593': 'Ecuador',
    '+20': 'Egypt',
    '+503': 'Salvador',
    '+240': 'Guinea',
    say() {
        alert(this['+503']);
    }
}

console.log('_____________');

for (let key in codes) {
    console.log(codes[key]);
    console.log(+key);
}

let x = {}, y = {};
console.log(`admin == admin2 ? ${admin == admin2}`);
console.log(`x == y ? ${x == y}`);

let superuser = new Object();

Object.assign(superuser, user, admin, user2, admin2, {name: 'Carl'});

console.log('_____________');

for (let key in superuser) {
    console.log(key);
    console.log(superuser[key]);
}
// 1st variant
// function say() {
//     alert('bla-bla-bla');
// }

// superuser.say = say;

// 2nd variant
superuser.say = function say() {
    alert('bla-bla-bla');
}

let codesCopy = codes;
codes = null;

// codesCopy.say();

function sayHi() {
    alert(this.name);
}

user.f = sayHi;
admin.f = sayHi;

// user.f();
// admin.f();
// sayHi();

function Calculator() {
    this.read = function() {
        this.x = +prompt('x = ', 0);
        this.y = +prompt('y = ', 0);
    };
    this.sum = function() {
        return this.x + this.y;
    };
    this.mul = function() {
        return this.x * this.y;
    };
}

let calculator = new Calculator();

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());
// calculator.read();
// alert(calculator.mul());

const up = document.getElementById('up');
const down = document.getElementById('down');
const show = document.getElementById('show');
const stepWindow = document.querySelector('.step');

let counter = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    show() {
        stepWindow.innerHTML = this.step;
    }
}

up.onclick = () => counter.up();
down.onclick = () => counter.down();
show.onclick = () => counter.show();

function People(name) {
    this.name = name;
    this.planet = 'Earth';
}

let people1 = new People('Bill');
let people2 = new People(prompt('name = '), 'Boris');
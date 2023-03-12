function showHi() {
    alert('Hello World!');
}
// showHi();

let Name = 'Misha';
function hiName() {
    let Name = 'Nastya';
    alert('Hello, ' + Name);
}
// hiName();

function showMessage(name, message) {
    // if (message == undefined) {
    //     message = 'Bye';
    // }
    message = message || 'Hi';
    alert(message + ', ' + name);
}
// showMessage('Dima', 'Hello');
// showMessage('Lesha');

//let age = prompt('Type your age:', 'Type your age here...');
function checkAge(age) {
    if (age > 10) {
        return true;
    }
    else {
        return false;
    }
}

function showAge() {
    if (checkAge(age)) {
        alert('Welcome');
    }
    else if (!checkAge(age)) {
        alert('Denied');
    }
    showHi();
}
// showAge();

function showPrime(x) {
    for (let i = 2; i < x; i++) {
        if (!isPrime(i)) continue;
        console.log(i + " - it's a prime!");
    }
}

function isPrime(x) {
    for (let i = 2; i < x; i++) {
        if (x % i == 0) {return false}
    }
    return true;
}

showPrime(+prompt('Show all primes from 2 to ...', 'Input max value...'));
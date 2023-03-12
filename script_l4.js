// let i = 5;

// while (i < 5) {
//     console.log(i+1);
//     i++;
// }

// do {
//     console.log(i);
//     i++;
// } while (i < 5);

// for (let i = 0; i < 11; i++) {
//     console.log(i);
//     if (i > 7) break;
// }

// console.log(i);

// let sum = 0;

// while (true) {
//     let value = +prompt("Input number for add",'');
//     if(!value) break;
//     sum += value;
// }
// alert('Summ = ' + sum);

// for (let i = 0; i < 11; i++) {
//     if (i % 2 == 0) continue;
//     console.log(i);
// }

let value = +prompt("Input number",'');
let col = 1;

nextStep:
for (let i = 2; i <= value; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextStep;
    }
    console.log(i);
    col++;
}
console.log(`From 1 to ${value}: ${col} ordinaries numbers`);
alert("Привіт!"); // Виводить модальне вікно з написом "Привіт!" та кнопкою "ОК"
let hi = prompt("What's your name?", 'vovka'); // Виводить модальне вікно з написом "What's your name?", полем для введення (за умовчанням "vovka", необов'язковий параметр) та кнопками "ОК" та "Скасувати"
// Введені в поле символи надаються як рядкове значення змінної "hi"
let conf = confirm("Are you 18+?"); // Виводить модальне вікно з написом "Are you 18+?" та кнопками "ОК" та "Скасувати"
// При натисканні "ОК" як логічне значення змінної "conf" присвоюється true, а при натисканні "Скасувати" false
alert(`Hello, ${hi}!!!`); // Виводить модальне вікно з написом "Hello, (значення змінної "hi")!!!" та кнопкою "ОК"
// Щоб передати значення змінної в рядок, необхідно рядок укладати в такі лапки `...`, а змінну отримувати за допомогою конструкції ${ім'я змінної}

let first = Number(prompt("First number")); // Створюємо змінну 'first' і в її значення записуємо дані, які були ведені за допогою функції 'prompt', після цього змінюємо тип на 'Number'
let second = prompt("Second number"); // Створюэмо змінну 'second' і в її значення записуємо дані, які були веденні за допогою функції 'prompt'
let result = first + +second; // Створюэмо змінну 'result',  яка є сумую двох попередніх змінних
alert(typeof first);
alert(typeof second);
alert(result);
// let result2 = first + first + String(first) + first + first;
// alert(result2);

// let bool = "     ";
// alert(typeof bool);
// alert(Boolean(bool));
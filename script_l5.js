let diapozon = +prompt('Ведіть інтрвал від 2 до ...');
alert(`Потрібно вгадати число в діапазоні від 1 до ${diapozon}`);
let tries = +prompt('За скільки спроб ви вгадаєте число?')
const randomNumber = Math.floor(Math.random() * diapozon + 1);
let number;

// while(true){
//     number = +prompt('Введіть ваш варінт');

//     if(number < randomNumber) {
//         alert('Загадане число більше за введене');
//     }
//     else if(number === randomNumber){
//         alert('Ви виграли! Супер!');
//         break;
//     }
//     else{
//         alert('Загадане число менше за введене');
//     }
// }

for(let i = 1; i <= tries; i++){
    number = +prompt('Введіть ваш варінт');

    if(number < randomNumber) {
        alert('Загадане число більше за введене');
        alert(`У вас залишилось ${tries - i} спроб`);
    }
    else if(number === randomNumber){
        alert('Ви виграли! Супер!');
        alert(`Ми вгадали за ${i} спроб `)
        break;
    }
    else{
        alert('Загадане число менше за введене');
        alert(`У вас залишилось ${tries - i} спроб`);
    }
}

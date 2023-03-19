// function pow(x, y) {
//     // let result = 1;
//     // for(let i = 0; i < y; i++) {
//     //     console.log(result);
//     //     result *= x;
//     // }
//     // return result;

//     if (y == 1) {
//         return x;
//     }
//     else {
//         console.log(`x = ${x}, y = ${y}`);
//         return x * pow(x, y - 1);
//     }
// }

// alert(pow(+prompt('x = ', 0), +prompt('pow = ', 0)));

// pow(2, 3) => 2 * pow(2, 3 - 1)   y = 2   x = 2
// pow(2, 2) => 2 * pow(2, 2 - 1)   y = 1   x = 4
// pow(2, 1)                                x = 8

// function factorial(x) {
//     if (x < 0) return;
//     if (x == 1) return 1;
//     return x * factorial(x - 1);
// }

// alert(factorial(+prompt('x = ', 0)));

const company = [
    {
        id: 1,
        name: "Компания",
        parent: null,
        users_count: 10,
        children: [
            {
                id: 2,
                name: "Отдел тестирования",
                parent: 1,
                users_count: 7,
                children: [
                    {
                        id: 2,
                        name: "Тестирование Web",
                        parent: 2,
                        users_count: 5,
                    },
                    {
                        id: 3,
                        name: "Тестирование Mobile",
                        parent: 2,
                        users_count: 0,
                    },
                ]
            },
            {
                id: 4,
                name: "Отдел маркетинга",
                parent: 1,
                users_count: 30,
            },
            {
                id: 5,
                name: "Администрация",
                parent: 1,
                users_count: 25,
                children: [
                    {
                        id: 6,
                        name: "Бухгалтерия",
                        parent: 5,
                        users_count: 10,
                    },
                    {
                        id: 7,
                        name: "Менеджмент",
                        parent: 5,
                        users_count: 15,
                        children: [
                            {
                                id: 8,
                                name: "Подраздел менеджмента 1",
                                parent: 7,
                                users_count: 5,
                            },
                            {
                                id: 9,
                                name: "Подраздел менеджмента 2",
                                parent: 7,
                                users_count: 10,
                            }
                        ]
                    },
                    {
                        id: 10,
                        name: "HR",
                        parent: 5,
                        users_count: 1,
                    }
                ]
            },
        ]
    }
];

// Компания (10)
// -- Отдел тестирования (7)
// ---- Тестирование Web (5)
// ---- Тестирование Mobile (0)
// -- Отдел маркетинга (30)

function treeView(array, print) {
    for (let entry in array) {
        if (array[entry].parent == null) {
            console.log(array[entry].name + ' (' + array[entry].users_count + ')');
        }
        else {
            console.log(print + array[entry].name + ' (' + array[entry].users_count + ')');
        }
        treeView(array[entry].children, print + '---');
    }
}

treeView(company, '');

function reverse(str) {
    if (str == '') return '';
    return reverse(str.substr(1)) + str[0];
}

alert(reverse('reverse this phrase'));
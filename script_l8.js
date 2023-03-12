let y = 'hello';
console.log(typeof y);
y = 5;
console.log(typeof y);
console.log(y);
y = ('hello' / 5) ** 0;
console.log(typeof y);
console.log(y);
y = 5 / 0;
console.log(typeof y);
console.log(y);
y = 564564681676545165198786461876817617687168716766171676817687676n;
console.log(typeof y);
console.log(y);
console.log(`Введено ${y}`);
console.log('Я люблю "Minecraft"');
y = 5 < 10;
console.log(typeof y);
console.log(y);
let x;
console.log(typeof x);
console.log(x);
x = null;
console.log(typeof x);
console.log(x);
//arrays
let arr = ["string", 5465, true, 'bvbn', false, NaN];
console.log(typeof arr);
console.log(arr);
alert(arr[arr.length - 3]);
console.log(arr.at(3));
arr[arr.length] = 'ggg';
console.log(arr);
arr.push(777);
console.log(arr);
y = arr.pop();
console.log(arr);
console.log(y);
x = arr.shift();
console.log(arr);
console.log(x);
arr.unshift(15, false, 'gfgggtfyt');
console.log(arr);
//перебор
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//or
for(let i of arr) {
    console.log(i);
}

x = String(arr);
console.log(x);
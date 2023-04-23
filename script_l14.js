let student = {
    name: 'Olexa',
    age: 32,
    courses: ['html', 'css', 'js', 'python', 'c++', 'sql'],
    isAdmin: true,
    date: new Date(),
    school: undefined,
    childrens: null,
    sayHi() {alert('Hello!')},
    parents: {
        mother: 'Anna',
        father: 'Mykola'
    }
};

student.sayHi();

console.log('typeof student = ' + typeof student);
console.log('student = ' + student);

let student_json = JSON.stringify(student);

console.log('typeof student_json = ' + typeof student_json);
console.log('student_json = ' + student_json);

let student_from_json = JSON.parse(student_json);

console.log('typeof student_from_json = ' + typeof student_from_json);
console.log('student_from_json = ' + student_from_json);

localStorage.setItem('test2', 1111);
//alert(sessionStorage.getItem('test'));

localStorage.setItem('student', JSON.stringify({name: 'Olexa'}));
alert(student.parents.mother);
let user = JSON.parse(localStorage.student);
alert(user.name);

alert(localStorage.length);
localStorage.removeItem('test2');
//localStorage.clear();
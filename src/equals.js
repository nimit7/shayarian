// console.log(undefined==null)  //True
// console.log(undefined===null)  //False
// console.log(undefined===undefined)  //True
// console.log(NaN === NaN) //False
// console.log(NaN == NaN) //False

// let x1 = null
// let x2 = null
// console.log(x1 === x2)  //True
// console.log(typeof x1)  //Object

// console.log(1 / 0) //Infinity

// console.log(0/0)  //NaN
// console.log(typeof NaN) //number
// console.log(undefined+1)  //NaN
// console.log(null) //null
// console.log(null / null)  //0

// let arr = []
// console.log(undefined === arr[0]) //True

// for (i = 0; i < 5; i++){
//        for (j = 0; j < 5; j++){
//               if (j == 2) break;
//               console.log('j: ' + j);
//        }
//        console.log('i: ' + i);
// }

// let rain = ['a', 'b', 'c', 'd'];
// rain.splice(0, 2);
// console.log(rain);

// const numbers = [1, 2, 3];

// const [ one, two, three ] = numbers;
// console.log(one);

// function sum(num1, num2 = 2, num3 = 3) {
//        return num1 + num2 + num3;
// }
// let values = [1, 5];
// let total = sum(4, ...values);

// const person = { name: 'a', age: 21, hair: 'red' };
// const result = Object.keys(person).map(x => x.toUpperCase);
// console.log(result);

// function printA() {
//        console.log(answer);
//        var answer = 1;
// };
// printA();
// printA();
       
// let bear = {
//        sound: 'bear',
//        roar() {
//               console.log(this.sound);

//        }
// }
// bear.sound = "g";
// let bearSound = bear.roar;
// bearSound();

// a = undefined;
// onj = { a };
// console.log(onj.a.b);

// const a = { x: 1 };
// const b = { x: 1 };
// console.log(a ===b);

// var cat = { name: 'Athena' };

// function swap(feline) {
//        feline.name
//               = 'Wild'
       
// }

let str = "abcd";
console.log(str[str.length-1]);
// let text = 'hellush world';
// console.log (text.toUpperCase ());

// let sentence = 'Leylush qeseng qizdir';
// console.log(sentence.replace('qeseng', 'cox cox qeseng'));

// let txt= 'hellush, i am developer leylush';
// console.log(txt.split('').reverse().join(''));

// let content = 'bu bir textdir';
// console.log(content.toLocaleLowerCase().split(" ", 3));

// const str1='hellush';
// const str2 ='leylush';
// console.log(str1.concat(' ', str2));

// const a = 'salam';
// console.log(a.repeat(5));

// let bal = Number( prompt("Xali daxil edin"));
// if (bal < 51) {
//    alert("f")
// }

// else if (bal >= 51 && bal < 51) {
//     alert("e")
// }
// else if (bal >= 61 && bal < 71) {
// //     alert("d")
// // }
// // else if (bal >= 71 && bal < 81) {
// //     alert("c")
// // }
// // else if (bal >= 81 && bal < 91) {
// //     alert("b")
// // }
// // else if (bal >= 91 && bal <= 100) {
// //     alert("a")
// // }
// // else {
// //     alert("Duzgun xali daxil edin");
// // }

// let name =prompt('adinizi yazin');
// let password =prompt('password yazin')
// let userName ='leylush';
// let userPassword = 'leylush2002';

// if (name== userName && password == userPassword) {
//     alert ('sisteme daxil oldu')
// }
//  else {
//     alert('sisteme daxil olmadi')
//  }


// let a = 'Hello world';
// let b= 'beautiful';
// console.log(a.slice(0,1)+ ' ' + b +a.slice(1));

// function eded() {
//     a=3;
//     b=4;
//     c=5;
//     console.log(a+b+c/3);
// }

// eded();

// function value(a,b) {
//     return(a*b);
// }

// console.log(value(4,5));

// function value(a) {
//     if (a % 2 == 0) {
//         consoe.log('bolunur')
//     }
//    else {
//         console.log('bolunmur')
//     }
// }

// // value()

// let array = [1,2,3,4,5];
// array.push(6,7,9);
// console.log(array);

// // let add = [ 1,2,3,4,5];
// // add.concat(20,30,50);
// // console.log((add));

// let arr = [1,2,3,4,5,]
// let arr2 = [20,30,50]
// console.log(arr.concat(arr2))


// let fruits = ['alma','armud','heyva','nar'];
// console.log(fruits.splice(0,2));




// // const reqem = [1,2,3,4,5];
// // reqem[4]=6;
// // console.log(reqem.length);

// let names = ['elnur', 'qahire', 'leylush', 'elxan'];
// let ad=names.join("*")
// console.log(ad)


// let names = [1,[[23,4,[5,6,667],88,89,98,45,],[67,89,0,84,322,567,7654]]];

// let flat = names.flat(3).slice(3,6)
// console.log(flat);

// let flatNames=names.flat([1,[[,88,89,98,45,],[67,89,0,84,322,567,7654]]])
// console.log(flatNames);


// let names = ['Elush','Qahira', 'Leylush','Murad','Elxan'];

// // names.splice(names.indexOf('Leylush'), 1, 'Farid');

// names.splice(2,1, 'Farid')

// console.log(names)

// let array1 = ['Hello', 'world '];
// let array2 = ['this', 'is'];
// let array3 = ['a', 'test'];

// console.log(array1.join(" ") + array2.join(" ")+ array3.join(" "))

// let combineArray = array1.concat(array2,array3).join('');


// let arr = ['apple', 'banana', 'cherry'];

// delete arr[2];
// console.log(arr)

// let arr = [1,[2,[3,[4]]]];

// console.log(arr.flat(2))


// let arr = [1,2,3,4,5,6,7];

// console.log(arr.indexOf(4));
// console.log(arr.at(4));

// let fruits = ['banana', 'apple', 'cherry', 'date'];

// console.log(fruits.sort());



// Task 1

const numbers = [23, 45, 12, 56, 67 ,34, 89,14];

num = numbers.sort()

console.log(num.reverse());

// Task 2

let animals = ["cat", "lion", "dog", "elephant"];

for (let i = 0; i < animals.length;  i++) {
    if (animals[i].length > 3) {
        console.log(animals[i]);
        break;
    }
}


// Task 3

const number = [5, 29, -3, 42, -1];

for (let i = 0; i < number.length; i++) {
    if (number[i] < 0) {
        console.log(number[i]);
        break;
    }
}

// Task 4

let nums = [21, 24, 3, 67, 85, 60];

for (let i =nums.length; i >=0; i--) {
    if (nums[i] % 2 === 0) {
        console.log(nums[i]);
        break;
    }
}


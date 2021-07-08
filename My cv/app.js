// типи даних:  null, undefined, boolean, number, string, object, symbol
//
//         console.log(typeof 0)
//         console.log(typeof true )
//         console.log(typeof 'text')
//         console.log(typeof undefined)
//         console.log(typeof Math)
//         console.log(typeof Symbol('JS'))
//         console.log(typeof null)   // will show object but it is null
// console.log(typeof function() {})  // will show function but it is object
// console.log(typeof NaN)     // will show number
//
//
// Приведення типиів
// let language ='Javascript' // переменная приводиться до boolean значення як true
// if (language) {console.log ('the best language is: ', language )}
// // приводиться до boolean значення як false   '', 0, null, undefined, NaN, false
// console.log(Boolean ('')) // false 
// // console.log(Boolean ([]))  // true
// // строки і числа
// console.log(1+"2") // string 12
// console.log(''+1+0)  // string 10
// console.log(''-1+0) //число -1
// console.log('3'*"8")  //число
// console.log(4+10+'px') // string 14px
// console.log('px'+ 4+10)  //string  px410
// console.log(null+2) // 2
// console.log(null+"2") //null2
// console.log(undefined +2) // NaN
 //console.log(undefined +"2") // undefined2
// // == vs ===
// console.log(2=="2") // true
// console.log(2==="2") // false
// console.log (undefined==null) // true
// console.log (undefined===null) // false бо різні типи даних
// console.log ('0'==false) // true \приводить до числа і оба значення приводяться до 0 
// console.log ('0'==0)  // true
// ======
// console.log(false=='') // true
// console.log(false==[]) //true
// console.log(false=={}) // false
// console.log(''==0) // true
// console.log(''==[]) //true
// console.log(''=={}) // false
// console.log(0==[]) // true
// console.log(0== {}) // false
// console.log(0==null) // false

// let a=42
// let b = a
// b++
// console.log('a', a) // a 42
// console.log('b', b) // b 43
//
// let a=[1,2,3]
// let b=a
// b.push(4)
// let c=[1,2,3,4]
// console.log('a',a) // a [1,2,3,4]
// console.log('b',b) // b [1,2,3,4]
//
// console.log(a===b) // a (4) [1, 2, 3, 4]
// console.log(a===c) // b (4) [1, 2, 3, 4]
//
// let a=[1,2,3]
// let b=a.concat() // не передає силку на обєкт а копіює обєкт
// b.push(4)
// let c=[1,2,3,4]
// console.log('a',a)
// console.log('b',b)
// // //
// console.log(a===b) // false
// console.log(a===c)// false
//scope
// scope
// function funcA(){
//     let a =1
//     function funcB(){
//         let b =2
//         function funcC(){
//             let c=3
//             console.log('funcC:', a,b,c);
//         }
//         funcC()
//         console.log('funcB:', a,b)}
//
//         funcB()
//     console.log('funcA:', a)}
//    funcA()
// hosting
/*console.log(sum(1,41))
function sum(a,b) {
    return a + b
}*/
// var i
//     console.log(i)
//  i=42
// console.log(i)
//
// console.log(num)
// const num=41
// console.log(num)
// Function expression & function declaration

// function square(num) {
//     return num**2
// }
//
// var square = function square(num) {
//     return num**2}
//     console.log(square (25))
// let & const
// let a ='variable a '
// let b = 'variable b'
// {
//  a = 'New variable A'
//  let b='Local variable b '
//     console.log("scope A", a)
//     console.log('scope B ', b)
// }
// console.log('A: ', a)
// console.log('B: ', b)
// const PORT =8080
// const array = ['s', 'f', 'd']
// array.push('!')
// array[0]="JS"
// console.log(array)
// array=''  // error
// const obj = {}
//   obj.name = 'Andriy'
//   obj.age = 20
//
// console.log (obj)
// delete obj.age
// console.log (obj)
// Closures замыкания
// function sayHelloTo(name){
//   const message ='Hello ' + name
//   return function (){
//   console.log(message)}
// }
// const helloToElena = sayHelloTo("Elena")
// const helloToIgor = sayHelloTo("Igor")
//
// helloToIgor()

/*function createFrameworkManager(){
  const fw=['Angular', 'React']
  return{
    print: function (){      console.log (fw.join(' '))    },
    add: function(framework){fw.push(framework)  },
  }
}
const manager = createFrameworkManager()
manager.print()
manager.add('VueJS')
manager.print()*/
// set timeout
// 1)
/*const fib=[1,2,3,5,8,13]
for(var i =0; i<fib.length; i++){
    setTimeout(function (){
    console.log(`fib[${i}] = ${fib[i]}`)
  },1500)
      }*/
/*2)
const fib=[1,2,3,5,8,13]
for(let i =0; i<fib.length; i++){
    setTimeout(function (){
        console.log(`fib[${i}] = ${fib[i]}`)
    },1500)
}*/
/*const fib=[1,2,3,5,8,13]
for(var i =0; i<fib.length; i++){
    (function(j){
        setTimeout(function (){
            console.log(`fib[${j}] = ${fib[j]}`)
        },1500)
    })(i)

}*/

// IIFE immediate invoked function expression

// let result = []
// for (var i=0; i<5; i++){
//     result.push(function (){
//         console.log(i)
//
//         }    )
// }
// result[2]()
// result[4]()

/*for (var i=0; i<5; i++){
    (function (){
var j=i
        result.push(function (){console.log(j)})
    })()
}
result[2]()*/

/*
for (var i=0; i<5; i++){
    (function (){
        var j=i
        result.push(j)
    })()
}
console.log(result[2])*/
/*for (var i=0; i<5; i++){
    (function (j){

        result.push(j)
    })(i)
}
console.log(result[2])*/
// contecst
// const person ={
//     surname: "Старк",
//     knows: function(what, name){
//         console.log(`You ${what} `)
//     }
// }
const btn1 = document.getElementById('btn1');
const description1 = document.getElementById("description1");
description1.style.display = "none";

btn1.addEventListener("click", function(){
  
    if( description1.style.display == "block"){        description1.style.display = "none" ; 
    btn1.innerHTML="show details";
}

    else if (description1.style.display == "none" ){ description1.style.display = "block";
    btn1.innerHTML="hide details"; }
    else{console.error("btn1 function error");
    console.log(description1.style.display);
    }})




const btn2 = document.getElementById('btn2');
const description2 = document.querySelector(".description2");
description2.style.display = "none";

btn2.addEventListener("click", function(){

    if( description2.style.display == "block"){
        description2.style.display = "none";
        btn2.innerHTML= "show details";
              
    }
    else{ description2.style.display = "block";
    btn2.innerHTML = "hide details";  }
})


// optimization of functions above will do later 

// const description2 = document.querySelector(".description2");
// btn2.addEventListener('click',hideShowElement )

//  function hideShowElement (elm) {
//      console.log('clicked')
//     if( elm.style.display == "block"){
//         elm.style.display = "none";
//     }
//     else{ elm.style.display = "block"; }
//  }

const obj = {

bar:1,
foo(){
    return this.bar;

},
baz: () => this.bar,
// console.log (this)}
}
// console.log(obj.foo());
const _foo = obj.foo;
// console.log(_foo())
console.log(obj.baz())
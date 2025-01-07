// Ways to declare and initialize variables of different types

let x;
var y = 10;
const z = 20;


// suppose we have not declared an element and still use it will not throw any error
if(x>10){
    a = 10 // not thrpw any error, but this is wrong
}

// to avoid the above scenario we use 'use strict'

"use strict"
if(x>10) {
    b = 4; //this will throw error
}


// use strict inside fucntion
function test() {
    "use strict"
    let a = 10;
}
function test1(){
    d=5;// this will work
}
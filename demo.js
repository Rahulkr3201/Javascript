var a = 10;
function b() {
    var c = 20;
}

console.log(a); // 10 by default if you not mention var keyword then it will be global variable
console.log(window.a); // 10 window global object
console.log(this.a); // 10 becuase at global level this==window
console.log(c);
console.log(window.c); // undefined becuase c is not global variable
console.log(b) // function b() { var c = 20; } function is also a global variable

// var can take any value it is lossely or weekly typed language
var d=10;
d="hello";
d=true;  
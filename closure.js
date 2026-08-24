// function  x(){
//     let a=7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();
// when we return the function y from x, it will still have access to the variable a because of closure. A closure is created when a function is defined inside another function, allowing the inner function to access the outer function's variables even after the outer function has finished executing.
// a function return function with its lexical scope , or whole closure returns
// function  x(){
//     let a=7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);
// z();
//---------------------------------->
// var a=30;
// {
//     var a=20;
//     console.log(a);
// }

// if(true){let a=20;
//     console.log(a);
// }

//-------------------------------------------------->

// function  x(){
//     let a=7;
//     function y(){
//         console.log(a);// a is accessible here because of closure update a=100, so it will print 100
//     }
//     a=100;
//     return y;
// }
// var z = x();
// console.log(z);
// z();

//-------------------------------->

// summary: let is block-scoped, so b/a live in z's/x's block. y is defined inside both blocks,
// so its scope chain is y -> x(a=7) -> z(b=900) -> global, letting y read both a and b via closure.

// mycode
{
    let g=50// here it cant be used as closure because it is not in the scope chain of y, so it will throw error, it is in local of this block
}
function z(){
    let b=900; // b scoped to z's block
    function x(){
        let a=7; // a scoped to x's block
        function y(){
            console.log(a,b,g); // y closes over x's a and z's b via the scope chain
        }
        y();
    }
    x();
}
z();


// so if the function returns or just execute it have its own fn + own lexical scope + outer lexical scope + global scope, this is called closure.  

--uses
-memoize
-iterators
-currrying
-module design pattern
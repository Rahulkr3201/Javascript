// debugger;
// console.log(a);
// var b=10
// let a=20;
// var c=30;

//----------------------------------------------------->
// //redeclare thing
// debugger;git 
// var a=20;
// var a=300;
// console.log(a); // 300

// let,const var all support hoisting but the let and const are in temporal dead zone so you can not access them before initialization  

// now move to the scope for them
//{} this is block combine multiple statements.
//------------------------------------------------------>
// debugger;
// let  c=100; // goes to script
// {
//     var a=20; //goes to global scope
//     let c=30; // goes inside the block
//     const d=40; //goes inside the block
//     console.log(a); // 20
//     console.log(c); // 30
//     console.log(d); // 40
// }
// console.log(c); // 100 because it looks script not inside the block and this is called shadowing .

//------------------------------------------------------>
//shadowing is when you have a variable with the same name in different scopes. The inner scope variable shadows the outer scope variable.
//now we saw in block but we will see in function also
debugger;
let  c=100; // goes to script
{
    var a=20; //goes to global scope
    let c=30; // goes inside the block
    const d=40; //goes inside the block
    console.log(a); // 20
    console.log(c); // 30
    console.log(d); // 40
}
console.log(c); // 100 because it looks script not inside the block


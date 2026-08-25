// function x(){
//     console.log("hello friends");
// }

// function y(x){
//     x();
// }
// y(x);

const radius =[3,1,2,4];

const area=function(radius){
    return Math.PI*radius*radius;
};
const diameter=function(radius){
    return 2*radius;
}


const output=[];
const calculate =function(logic,radius){
    for(let i=0;i<radius.length;i++){
    output.push(logic([radius[i]]));
}
 return output;
}
console.log(calculate(area,radius));
console.log(calculate(diameter,radius));

console.log(radius.map(area));// creates a new array



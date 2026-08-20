let value = "global";
function display() {
  var result = "function";
  console.log(value, result); // global function
}
display();// pause here, then use "Step Into" on the next line to enter display()
console.log(result);


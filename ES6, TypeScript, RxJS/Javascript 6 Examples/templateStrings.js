// You can now span strings across multiple lines using template strings.

document.body.innerHTML = `
  <ul>
    <li>Wow!</li>
    <li>Template</li>
    <li>strings</li>
    <li>are</li>
    <li>pretty</li>
    <li>nice!</li>
  </ul>
`;

/////////////////////////////* NOTES */////////////////////////////

// var greet = function(name) {
//     return "Hello, " + name;
// }

var greet = name => 10;

var greet = name => "Hello, ${name}";


document.body.innerHTML = '${greet("John")}';


// const numbers = ["One", "Two", "Three"].map(function(num) {
//     return "The number " + num;
// });

const numbers =  ["One", "Two", "Three"].map(num => "The number " + num);

document.body.innerHTML = numbers;
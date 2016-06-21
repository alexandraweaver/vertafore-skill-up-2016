// Arrow functions ()=> don't really enable anything "new", but they certainly help make writing in certain patterns much more convenient.

// Unlike the function that you're used to, arrow functions don't create a this context.


const normalFunction = function(){
    return `<h3>normalFunction</h3>`;
}

const arrowFunction = ()=> `<h3>arrowFunction</h3>`;

document.body.innerHTML = normalFunction() + arrowFunction();

const currying = element => content => element.innerHTML += content;

const appendToBody = currying(document.body);
appendToBody(`<div>sweet</div>`);
appendToBody(`<div>action</div>`);
appendToBody(`<div>satisfaction</div>`);
appendToBody(`<hr>`);


"This is a really nice sentence"
    .split(' ')
    .map(word => `<div>${word}</div>`)
.forEach(appendToBody);



/////////////////////////////* NOTES */////////////////////////////
// Arrow functions do not create new scope, so you no longer need to use var that = this

// document.body.addEventListener("click", function(event) {
//     var that = this;
//     console.log(this)});

document.body.addEventListener("click", event => console.log(this));


// Currying: pull function apart into different functions
// Currying tip: build a function based on the output you want
// Create functions that return functions


//"Briefly, currying is a way of constructing functions that allows partial application of a function’s arguments.
// What this means is that you can pass all of the arguments a function is expecting and get the result,
// or pass a subset of those arguments and get a function back that’s waiting for the rest of the arguments"
// - https://www.sitepoint.com/currying-in-functional-javascript/

const demo = content => document.body.innerHTML = content;
demo("Hello world");


// Function calling another function
const demo = element => content => element.innerHTML = content;
demo(document.body)("Hello world");

const setBodyContent = demo(document.body);
// Appends text
setBodyContent("Hello ");
setBodyContent("world");

const demo = element => prop => content => element[prop] += content;

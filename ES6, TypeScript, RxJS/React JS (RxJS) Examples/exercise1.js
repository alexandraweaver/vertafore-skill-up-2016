/* EXERCISE 1 */
// When the button is clicked, output "Clicked"
// When typing, output the value of the input box
// Start with an Observable.of("Hello")

const {Observable} = Rx;
const $ = jQuery;

const body = $(document.body);

const input = $("<input>");
const button = $("<button>Click me</button>");
let output = $("<div>Output</div>");

body.append(input, button, output);


/* EXERCISE 1 MY ANSWER */

// When the button is clicked, output "Clicked"
Observable.fromEvent(button, "click")
    .subscribe(event => output.html("Clicked!"));

// When typing, output the value of the input box
Observable.fromEvent(input, "change")
    .subscribe(event => output.html(event.target.value));

// Also works
// Observable.fromEvent(input, "change")
//     .map(event => event.target.value) // get value from event
//     .subscribe(value => output.html(value));






/* EXERCISE 1 TEACHER ANSWER */

// Start with an Observable.of("Hello")
const hello$ = Observable.of("Hello");

// When the button is clicked, output "Clicked"
const click$ = Observable
    .fromEvent(button, "click")
    .mapTo("clicked");

// When typing, output the value of the input box
const input$ = Observable
    .fromEvent(input, "input")
    .mapTo(event => event.target.value);

Observable.of(hello$, click$, input$)
    .subscribe(text => output.html.text)





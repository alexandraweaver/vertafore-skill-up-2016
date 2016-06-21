/* EXERCISE 2 */
// On button click, start a timer

const {Observable} = Rx;
const $ = jQuery;

const body = $(document.body);

const button = $("<button>Start Timer</button>");
let output = $("<div>Output</div>");

body.append(button, output);


const interval$ = Observable.interval(1000);
Observable.fromEvent(button, "click")
    .switchMap(event => interval$) // switch observable from event to the interval
    .subscribe(count => output.html(count));
/* EXERCISE 3 */
// When type in a 3 digit number, start a timer with that number

const {Observable} = Rx;
const $ = jQuery;

const body = $(document.body);

const input = $("<input>");
const output = $("<div>Output</div>");

body.append(input, output);

Observable.interval(100);

Observable.fromEvent(input, "input")
    .mapTo(event.target.value)
    .filter(text => text.length === 3)
    .switchMap(text => Observable.interval(parseInt(text)))
    .subscribe(count => output.html(count));


const setOver


const setOut$ = Observable.fromEvent(setOut, "click").mapTo("mouseOut")
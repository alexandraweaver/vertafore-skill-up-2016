/////////////////////////////* NOTES */////////////////////////////

// Streams can be created through anything
// Streams can observe anything

const {Observable} = Rx;
const $ = jQuery;

const body = $(document.body);
const button1 = $("<button>One</button>");
const output = $("<div>Output</div>");

body.append(button1, output);

Observable.of("Hello").subscribe(text => output.html(text));

// Pushes through a new value
const hello$ = Observable.of("Hello");
const goodbye$ = Observable.of("Goodbye").delay(1000);

Observable.merge(hello$, goodbye$).subscribe(text => output.html(text));

// Sets the text to 1, then 2, then 3, so only 3 will show at the end
Observable.subscribe([1, 2, 3]).subscribe(text => output.html(text));

// Shows each with a delay
Observable.subscribe([1, 2, 3])
    .concatMap(num => Observable.of(num => num.delay(1000)))
    .subscribe(text => output.html(text));
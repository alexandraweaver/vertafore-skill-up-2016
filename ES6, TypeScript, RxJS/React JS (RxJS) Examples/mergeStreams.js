/////////////////////////////* NOTES */////////////////////////////

// Streams can be merged with other streams into one

const {Observable} = Rx;
const $ = jQuery;

const body = $(document.body);
const button1 = $("<button>One</button>");
const output = $("<div>Output</div>");

body.append(button1, output);

// Observable.fromEvent(one, "click")
//     .mapTo("clicked") // every time you click,
//     .subscribe(text => output.html(text));
//
// Observable.interval(1000) // pushes event result every second
//     .subscribe(count => output.html(count));


// Stream naming convention places a $ after the name
const clicked$ = Observable.fromEvent(one, "click")
    .mapTo("clicked");

const count$ = Observable.interval(1000);

// merge acts like an OR operator; caches events until and happens
Observable.merge(clicked$, count$)
    .subscribe(text => output.html(text));


/////////////////////////////* NOTES */////////////////////////////

const {Observable} = Rx;
const $ = jQuery;

const body = $(document.body);

const pepperoni = $("<button>Pepperoni</button>")
const cheese = $("<button>Cheese</button>")
const olives = $("<button>Olives</button>")

body.append(pepperoni, cheese, olives);


const input = $("<input>");
body.append(input);

Observable.fromEvent(input, "input")
    .map(event => event.target.value)
    .filter(text => text.length > 0) // doesn't send request if there are 0 characters
    .debounceTime(250)
    .switchMap(firstName => Observable.ajax({ // asynchronous validation as user types
        url: "https://validate.egghead.training",
        method: "POST",
        body: JSON.stringify({firstName}),
        resultSelector: result => result.response
    }))
    .subscribe(response => body.append($("<div>${response.valid}</div>"))); // only appends to body if response is valid

// If you type too fast, it will cancel requests because you entered new stuff before response came back
// Fix:
Observable.fromEvent(input, "input")
    .map(event => event.target.value)
    .filter(text => text.length > 0) // doesn't send request if there are 0 characters
    .switchMap(firstName => Observable.ajax({ // asynchronous validation as user types
        url: "https://validate.egghead.training",
        method: "POST",
        body: JSON.stringify({firstName}),
        resultSelector: result => result.response
    }))
    .subscribe(response => body.append($("<div>${response.valid}</div>"))); // only appends to body if response is valid


// Creates stream of pepperoni, cheese, and olive clicks
const pepperoni$ = Observable.fromEvent(pepperoni, "click");
const cheese$ = Observable.fromEvent(cheese, "click");
const olives$ = Observable.fromEvent(olives, "click");

// Subscribe to streams
pepperoni$.subscribe(event => body.append("Pepperoni here"));
cheese$.subscribe(event => body.append("Cheese here"));
olives$.subscribe(event => body.append("Olives here"));


// Make rule to click all three buttons before pizza can be made
// zip: don't do anything until you have one of each
// Caches events, asynchronous
Observable.zip(pepperoni$, cheese$, olives$).subscribe(event => body.append("Pizza ready"));


Observable.zip(pepperoni$, cheese$, olives$)
    .switchMap(pizza => Observable.ajax({
        url: "https://price.egghead.training",
        method: "POST",
        body: JSON.stringify({item: pizza}),
        resultSelector: result => result.response
    }))
    .subscribe(({price}) => body.append("${price} dollars"));


Observable.zip(pepperoni$, cheese$, olives$)
    .mapTo("pizza")
    .switchMap(pizza => Observable.ajax({
        url: "https://price.egghead.training",
        method: "POST",
        body: JSON.stringify({item}),
        resultSelector: result => result.response
    }))
    .subscribe(({price}) => body.append("${price} dollars"));
// Destructuring really helps save on lines of code by giving you a shorthand to pull properties off of objects.

const person = {first: "John", last: "Lindquist"};

//pulling properites off of objects
const {first, last} = person;

document.body.innerHTML = `
  <div>${first}</div>
  <div>${last}</div>
`;


//pulling properties off of arguments
const fullName = ({first, last})=> `${first} ${last}`;

document.body.innerHTML += `
  <h2>${fullName(person)}</h2>
`;

/////////////////////////////* NOTES */////////////////////////////

const person = {
    first: "John",
    last: "Lundquist"
}

// BEFORE
const first = person.first;
const last = person.last;

// AFTER
const{first, last} = person;



const family = [
    {age: 23, name: "Alden"},
    {age: 26, name: "Vaughn"},
    {age: 0, name: "Tycho"},
    {age: 0, name: "Tayla"}];

// Access object like array
const [alden] = family;
const [, , tycho] = family;

// foo = Alden object, bar = Tycho object
const [foo, , bar] = family;


const person = {
    first: "John"
}

const position = {
    first: "Gold"
}


// Assigns value of first key from object on RHS of = to variable with the name after the :
const {first:firstPosition} = person;
const{first:firstPosition} = position;

// Gives an error b/c it would create 2 variables named first
// const {first:first} = person;
// const{first:first} = position;

const [{name:aldenName}, {name:vaughnName}, , {name:taylaName}] = family;


// Returns first 2 letters of names
const [{name:aldenName}, {name:vaughnName}, , {name:taylaName}] = family.map(member => ({name: member.name.slice(0, 2)}));


// BEFORE
var results = [];
for(var index = 0; index < family.length; index++){
    var member = array[index];
    results.push(member.name.slice(0, 2));

}
var alden = results[0];
var vaughn = results[1];


// AFTER
var[alden, vaughn] = family.map(({name}) => name.slice(0,2));
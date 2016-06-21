// Class is simply syntax sugar for the old-style of writing classes in JavaScript.

function OldWay(){
    this.message = "I'm the old way";
    this.receive = function(){
        return this.message;
    }
}

class NewWay{
    receive(){
        return this.message;
    }

    constructor(){
        this.message = "I'm the new way";
    }
}

document.body.innerHTML = `
  <div>${new OldWay().receive()}</div>
  <div>${new NewWay().receive()}</div>
`;


/////////////////////////////* NOTES */////////////////////////////

// Still works the same way as prototypes, classes just make it easier to write


// BEFORE
function Person(){
    this.name = "John";
}

Person.prototype.greet = function(){
    console.log("Hi");
};


// AFTER
class Thing{}

class Person extends Thing {
    greet() {
        console.log("Hi!");
    }

    constructor() {
        this.name = "John";
    }

}

var john = new Person();

document.body.innerHTML = "${id}"
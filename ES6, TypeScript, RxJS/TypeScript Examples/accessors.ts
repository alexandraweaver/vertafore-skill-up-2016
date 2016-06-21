// public accessor
//The following runs fine because public allows name to be accessed on the instance of Demo. In fact, fields are public by default.

class Demo{
    public name = "John"
}

console.log(new Demo().name);


// protected accessor
//The following will error saying "name" is accessible in the "Demo" class and its subclasses

class Demo{
    public name = "John"
}

console.log(new Demo().name);


// private accessor
//The following will error saying "name" is accessible in the "Demo" class

class Demo{
    private name = "John"
}

console.log(new Demo().name);


// TL;DR
// public - everywhere
// protected - in the class and its subclasses
// private - in the class
// Remember, it compiles anyway
//
// Unless you've enabled noEmitOnError to stop compilation, these accessible errors will simply be errors reported in your tooling, it's not going to throw errors during runtime.


//Constructor Assignment

//You can also use a great shortcut for creating fields defined in constructor arguments:

class Person{
    constructor(public name){}
}

//Is a shorthand for the following:

class Person{
    name;
    constructor(name){
        this.name = name;
    }
}


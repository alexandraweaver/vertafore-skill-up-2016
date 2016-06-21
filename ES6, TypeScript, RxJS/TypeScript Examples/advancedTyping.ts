// Union Types
//Do either type with |

type Bird = {
    fly(speed: number): number;
}

type Fish = {
    swim(speed: number): number;
}

const getAnimal = (num):Bird|Fish => (num > .5) //notice the `\`
    ? { fly: (speed) => speed * 10 }
    : { swim: (speed) => speed / 2 };

(<Bird>getAnimal(.8)).fly(10);
(<Fish>getAnimal(.3)).swim(10);

// Intersection Types
// Join types together with &

type Bird = {
    fly(speed: number): number;
}

type Fish = {
    swim(speed: number): number;
}

const getAnimal = ():Bird&Fish => { //notice the `&`
    return {
        fly:(speed)=> speed * 10,
        swim:(speed)=> speed * 10
    }
}


const flyingFish = getAnimal();
flyingFish.fly(5);
flyingFish.swim(5);

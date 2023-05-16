//Part One

class vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk () {
        return "Beep.";
    }
    toString () {
        return `This vehicle is a ${this.make} ${this.model} from the year ${this.year}.`
    }
};

//Part Two

class car extends vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
};

//Part Three

class motorcycle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine () {
        return "VROOM!!!";
    }
};

//Part Four

class garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed here!";
        }
        if (this.vehicles.lenth >= this.capacity) {
            return "Sorry, we're full.";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle has been added."
    }
};
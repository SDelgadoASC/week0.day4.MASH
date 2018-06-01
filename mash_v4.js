function mash(){
    return "You will live in a " + getHome() + ", and you will have " + getChildrenCount() + " kids!" + ", and you’ll drive a " + getCar();
}

function getHome(){
    const homes = [
        "Mansion",
        "Apartment",
        "Shack",
        "House",
        "Mars"
    ];

    homes.push(process.argv[2]);

    return homes[random(homes.length)];
}

function getChildrenCount(){
    if(Math.random()>.5){
        return process.argv[3];
    }
    return random(100);
}

function getCar(){
    const cars = [
        "lambo",
        "convertible",
        "box with wheels"
    ];

    cars.push(process.argv[4]);
    return cars[random(cars.length)];
}

function random(num){
    return Math.floor(Math.random()*num);
}

console.log(mash());
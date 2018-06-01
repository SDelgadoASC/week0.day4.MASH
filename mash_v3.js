function mash(){
    return "You will live in a " + getHome() + ", and you will have " + getChildrenCount() + " kids!";
}

function getHome(){
    const homes = [
        "Mansion",
        "Apartment",
        "Shack",
        "House"
    ];

    return homes[random(homes.length)];
}

function getChildrenCount(){
    return random(100);
}

function random(num){
    return Math.floor(Math.random()*num);
}

console.log(mash());
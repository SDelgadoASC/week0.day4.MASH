function mash(){
    return getHome();
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

function random(num){
    return Math.floor(Math.random()*num);
}

console.log(mash());
// Code your solution in this file!
function distanceFromHqInBlocks(b){
    let headQuarters = 42;
    return Math.abs(b - 42);
}

function distanceFromHqInFeet(f){
    let Manhattan = 264
    return distanceFromHqInBlocks(f)*264
}

function distanceTravelledInFeet(a, b){
    let feet = Math.abs(b - a)*264
    return feet
}


function calculatesFarePrice(c, d){
    let distance = distanceTravelledInFeet(c, d)
    let fare;
    if (distance <= 400){
        fare = 0;
    } else if (distance > 400 && distance <= 2000){
        fare = (2 * (distance - 400))/100
    } else if (distance > 2000 && distance <= 2500){
        fare = 25
    } else if (distance > 2500){
        fare ='cannot travel that far'
    }
    return fare;
}
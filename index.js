/* console.log("Wake Byron the poodle");
console.log("Leash Byron the poodle");
console.log("Walk to the park with Byron the poodle");
console.log("Throw the frisbee for Byron the poodle");
console.log("Walk home with Byron the poodle");
console.log("Unleash Byron the poodle"); */

function wakeDog(dogName, dogBreed) {
    return `Wake ${dogName} the ${dogBreed}`;
}


function leashDog(dogName, dogBreed) {
    return `Leash ${dogName} the ${dogBreed}`;
}

function walkToPark(dogName, dogBreed) {

    return `Walk to the park with ${dogName} the ${dogBreed}`;
}

function throwFrisbee(dogName, dogBreed) {
    return `Throw the frisbee for ${dogName} the ${dogBreed}`;
}

function walkHome(dogName, dogBreed) {
    return `Walk home with ${dogName} the ${dogBreed}`;
}

function unleashDog(dogName, dogBreed) {
    return `Unleash ${dogName} the ${dogBreed}`;
}
let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];
let printArray = [];
/*routine.forEach(exerciseDog(dogName, dogBreed));*/
function exerciseDog(dogName, dogBreed) {

    for (let i = 0; i < routine.length; i++) {

        printArray.push(routine[i](dogName, dogBreed));
    }
    return printArray;
}
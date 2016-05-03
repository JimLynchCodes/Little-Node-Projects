/**
 * Created by jim on 5/2/16.
 */


let beginningArray = ["a", "b", "c", "d", "e", "f", "g", "h"];

let searchString = process.argv[2];
let message = "searching for " + searchString

process.stdout.write(message);
let counter = 0;
let interval = setInterval(function () {

    process.stdout.write(".");

    if (counter === 2) {
        clearInterval(interval);
        index = binarysearch(beginningArray, searchString);
        console.log("final index: " + index);
    }

    counter++;

}, 200);

function binarysearch(array, searchString) {
    let index = 0;

    var mid = Math.floor(array.length / 2);
    // process.stdout.write("checking " + mid);
    console.log("\nchecking " + array[mid]);

    console.log(array[mid] + " " + searchString + " " + array.length)


    if (array[mid] == searchString) {
        console.log("found a match!")
        index = mid;
    } else if (array[mid] < searchString && array.length  > 1){
        // mid is lower
        console.log("mid was lower.")
        binarysearch(array.splice(mid, Number.MAX_VALUE), searchString);
    } else if (array[mid] > searchString && array.length  > 1) {
        // mid is higher
        console.log("mid was higher.")
        binarysearch(array.splice(0, mid), searchString)
    } else {
        console.log("Sorry, array doesn't contain: " + searchString + ". :(");
    }

    return index;

}





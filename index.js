// code your solution here

function superbowlWin(record) {
    let winYear = record.find(match => match.result === "W");
    var returnValue = undefined;

    if (winYear != undefined) {
        returnValue = winYear.year;
    }
    return returnValue;
}

// Write a function called superbowlWin() in index.js:

// Should receive 1 argument, an Array of JavaScript Objects
// Each object has two properties: year and result
// Should use find() to test each Object to see if result is "W" — a win!
// Should return the year when the win occurred (if it occurred at all!)
// If no win is found, it should return undefined
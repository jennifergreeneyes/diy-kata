const humanCatDogYears = number => {
    // let humanYears = number;
    // let firstDogCat = 15;
    // let secondDogCat = 9;
    // let olderCat = 4;
    // let olderDog = 5;

    const array = [];
    // add human years to array
    array.push(number);
    // add cat years to array
    if (number >= 3) {
        array.push(15 + 9 + (4 * (number - 2)))
    } else if (number === 2) {
        array.push(15 + 9);
    } else if (number === 1) {
        array.push(15)
    }
    // add dog years to array
    if (number >= 3) {
        array.push(15 + 9 + (5 * (number - 2)))
    } else if (number === 2) {
        array.push(15 + 9);
    } else if (number === 1) {
        array.push(15)
    }

    return array;
};

module.exports = humanCatDogYears;

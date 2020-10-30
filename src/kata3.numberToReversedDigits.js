const numberToReversedDigits = number => {
    let array = number.toString().split("").reverse();
    console.log(array);
    return array.map(function(x) {
        return Number(x);
        console.log(array);
    });
    console.log(array);
};

module.exports = numberToReversedDigits;

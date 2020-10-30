const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
    it("returns an array of human, cat and dog years", () => {
        expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
        expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
        expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
        expect(humanCatDogYears(106)).toEqual([106, 440, 544]);
    });

});

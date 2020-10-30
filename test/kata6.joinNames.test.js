const { joinNames } = require("../src");

describe("joinNames", () => {
    test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames([{
      name: 'Bart'
    }, {
      name: 'Lisa'
    }, {
      name: 'Maggie'
    }] )).toBe('Bart, Lisa & Maggie')
  
  expect(joinNames([{
      name: 'Bart'
    }, {
      name: 'Lisa'
    }, {
      name: 'Maggie'
    }, {
      name: 'Jen'
    }, {
      name: 'Jenny'
    }, {
      name: 'Sally'
    }] )).toBe('Bart, Lisa, Maggie, Jen, Jenny & Sally')
  });
});

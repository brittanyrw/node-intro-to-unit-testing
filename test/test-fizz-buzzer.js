const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');



describe('fizzBuzzer',function() {

  it('should divide a number by 15 and return fizz-buzz', function() {
    const normalCases = [
      {num: 15, expected: 'fizz-buzz'},
      {num: 30, expected: 'fizz-buzz'},
      {num: 45, expected: 'fizz-buzz'}
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });

  it('should divide a number by 3 and return fizz-buzz', function() {
    const normalCases = [
      {num: 3, expected: 'fizz'},
      {num: 6, expected: 'fizz'},
      {num: 9, expected: 'fizz'}
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });

    it('should divide a number by 5 and return fizz-buzz', function() {
    const normalCases = [
      {num: 5, expected: 'buzz'},
      {num: 10, expected: 'buzz'},
      {num: 20, expected: 'buzz'}
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['a'],
      ['1'],
      [false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          adder(input)
      }).should.throw(Error);
    });
  });
});
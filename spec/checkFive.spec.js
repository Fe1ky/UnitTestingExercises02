const checkFive = require('../checkFive.js');
const assert = require('assert');

describe("checkFive", function(){

   it("if number is less then five it should print the number and declare it less then five", function(){
assert.strictEqual(checkFive(4), '4 is less than 5.');
   });

      it("if number is equal to  five it should print the number and declare it equal to five", function(){
assert.strictEqual(checkFive(5), '5 is equal to 5.');
   });

      it("if number is greater then five it should print the number and declare it greater then five", function(){
assert.strictEqual(checkFive(6), '6 is greater than 5.');
   });

});
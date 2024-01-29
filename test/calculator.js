const { expect } = require('chai');
const { add, sub, mul, div } = require('../app/calculator');

describe('Calculator Tests', () => {

  // Test cases for addition
  it('should add two numbers successfully', () => {
    const result = add(5, 2);
    expect(result).to.equal(7);
    console.log('add(5, 2) expected result 7 PASS');
  });

  it('should fail to add two numbers', () => {
    const result = add(5, 2);
    expect(result).to.equal(8);
    console.error('add(5, 2) expected result 8 FAIL');
  });

  // Test cases for subtraction
  it('should subtract two numbers successfully', () => {
    const result = sub(5, 2);
    expect(result).to.equal(3);
    console.log('sub(5, 2) expected result 3 PASS');
  });

  it('should fail to subtract two numbers', () => {
    const result = sub(5, 2);
    expect(result).to.equal(5);
    console.error('sub(5, 2) expected result 5 FAIL');
  });

  // Test cases for multiplication
  it('should multiply two numbers successfully', () => {
    const result = mul(5, 2);
    expect(result).to.equal(10);
    console.log('mul(5, 2) expected result 10 PASS');
  });

  it('should fail to multiply two numbers', () => {
    const result = mul(5, 2);
    expect(result).to.equal(12);
    console.error('mul(5, 2) expected result 12 FAIL');
  });

  // Test cases for division
  it('should divide two numbers successfully', () => {
    const result = div(10, 2);
    expect(result).to.equal(5);
    console.log('div(10, 2) expected result 5 PASS');
  });

  it('should fail to divide two numbers', () => {
    const result = div(10, 2);
    expect(result).to.equal(2);
    console.error('div(10, 2) expected result 2 FAIL');
  });

});

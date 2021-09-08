// const { assert } = require ('chai')
const chai = require('chai')
const Fibonacci = require('../fibonacciapp')
const assert = chai.assert

describe("fibonacci",() =>{

    const fib = new Fibonacci();
    it("should return  0", () => {    
        assert.equal(fib.computeFibonacci(0), 0);  
    });
    it("should return  1", () => {    
        assert.equal(fib.computeFibonacci(1), 1);  
    });
   
    it("should return 1", () => {    
        assert.equal(fib.computeFibonacci(2),  [1]);  
    }); 
    it("should return 2", () => {    
        assert.equal(fib.computeFibonacci(3),  [2]);  
    }); 

})
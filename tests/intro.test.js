import { describe, it, expect } from "vitest";
import { calculateAverage, max } from "../src/intro";
import { fizzBuzz } from "../src/intro";
import { factorial } from "../src/intro";

describe('max', () => {
    it('should return the first argument if it is greater', () => {
        expect(max(2, 1)).toBe(2);
    });

it('should return the second argument if it is greater', () => {
    expect(max(1, 2)).toBe(2);
});
it('should return the second argument if arguments are equal', () => {
    expect(max(1, 1)).toBe(1);
})
});

describe('factorial', () => {
  it('should return 1 for 0', () => {
    expect(factorial(0)).toBe(1);
  });

  it('should return 1 for 1', () => {
    expect(factorial(1)).toBe(1);
  });

  it('should calculate factorial for positive integers', () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(6)).toBe(720);
  });

  it('should return NaN for negative numbers', () => {
    expect(factorial(-1)).toBe(NaN);
    expect(factorial(-5)).toBe(NaN);
  });

  it('should calculate factorial for larger numbers', () => {
    expect(factorial(10)).toBe(3628800);
  });

  it('should return Infinity for very large inputs due to overflow', () => {
    expect(factorial(171)).toBe(Infinity);
  });
});


describe('fizzBuzz', () => {
    it('should return "Fizz" for multiples of 3', () => {
      expect(fizzBuzz(3)).toBe('Fizz');
      expect(fizzBuzz(6)).toBe('Fizz');
    });
  
    it('should return "Buzz" for multiples of 5', () => {
      expect(fizzBuzz(5)).toBe('Buzz');
      expect(fizzBuzz(10)).toBe('Buzz');
    });
  
    it('should return "FizzBuzz" for multiples of both 3 and 5', () => {
      expect(fizzBuzz(15)).toBe('FizzBuzz');
      expect(fizzBuzz(30)).toBe('FizzBuzz');
    });
  
    it('should return the number as a string for non-multiples of 3 or 5', () => {
      expect(fizzBuzz(1)).toBe('1');
      expect(fizzBuzz(7)).toBe('7');
    });
  })

  describe( 'calculateAverage', () => {
    it('should return NaN if given an empty array', () => {
        expect(calculateAverage([])).toBe(NaN);
    });

    it('should calculate the average of an array with a single element', () => {
        expect(calculateAverage([1])).toBe(1);
  });

  it('should calculate the average of an array with two elements', () => {
    expect(calculateAverage([1, 2])).toBe(1.5);
});

it('should calculate the average of an array with three elements', () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
});
})


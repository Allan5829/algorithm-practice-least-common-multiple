function lcm(nums) {

    // Sort argument from big to small.
    let sorted = nums.sort(function(a, b) {
        return b - a;
    });

    // Turns arguments into prime numbers and organizes data in [ [], [] ] format
    let allFactors = sorted.map( x => {
        return prime_factors(x)
    })

    let factors = [];

    // If argument is 1 value and a prime number
    if (allFactors.length === 1) {
        factors.push( allFactors.flat()[0] )
    }

    // Loop is responsible for populating factors array.
    // Only pushes least amount of needed factors for least common multiple.
    for (let i = 0; 1 < allFactors.length; allFactors.shift()){
        allFactors[i].forEach( x => {
            if (!factors.includes(x)) { // if the current factor isn't included in factors do stuff
                let repeat = calculateCount(allFactors[i], x) // get how many times the current number is in the array
                for (let i = 1; i <= repeat; i++) {
                    factors.push(x)
                }
            } else {
                // Example [ 2, 5, 5 ], [ 2, 2, 2, 5 ]
                // This bit of code compares if a value is included in factors, is it the same number of times as in the allFactors sub array.
                // If not push the x value a number of times equal to the difference between counts.
                let currentCount = calculateCount(factors, x)
                let newCount = calculateCount(allFactors[i], x)
                if (currentCount !== newCount) {
                    let times = newCount - currentCount
                    for (let i = 1; i <= times; i++) {
                        factors.push(x)
                    }
                }
            }
        })
    }

    // Multiply every value together to get the least common multiple.
    let result = factors.reduce((total, x) => {
        return total * x
    })

    console.log(result)
    return result
}

// Given an array and a value this function returns how many times a number is present within the argument array.
function calculateCount(array, num) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === num) count++;
    }
    return count
}

// Returns an array of prime numbers.
function prime_factors(num) {
    const primeFactors = [];
    if (num === 1) primeFactors.push(num);
    for (let i = 2; i <= num; i++) { 
      while (is_prime(i) && num % i === 0)
      {
        primeFactors.push(i)
        num /= i;
      }
    }
    return primeFactors;
}

// Checks if a number is prime by comparing the argument's square root within a loop and returning true/false.
function is_prime(num) { 
    for (let i = 2; i <= Math.sqrt(num); i++)
    {
      if (num % i === 0) return false;
    }
    return true;
}

lcm([10, 20, 30, 40, 50])

/*
examples
lcm([1, 2, 3, 4, 5, 6, 7, 8, 9]) ➞ 2520
lcm([5]) ➞ 5
lcm([5, 7, 11]) ➞ 385
lcm([5, 7, 11, 35, 55, 77]) ➞ 385
lcm([79, 18, 7, 3, 1]) => 9954
lcm([10, 20, 30, 40, 50]) => 600
lcm([2, 3, 5, 7, 11, 13, 17]) => 510510
*/
function lcm(nums) {

    // Sort argument from big to small.
    let sorted = nums.sort(function(a, b) {
        return b - a;
    });

    // Turns arguments into prime numbers and organizes data in [ [], [] ] format
    let allFactors = sorted.map( x => {
        return prime_factors(x)
    })

    console.log(allFactors)
    let factors = [];

    // If argument is 1 value and a prime number
    if (allFactors.length === 1) {
        factors.push( allFactors.flat()[0] )
    }

    // Loop is responsible for populating factors array.
    // Only pushes least amount of needed factors for least common multiple.
    // Need to edit to account for all prime numbers.
    for (let i = 0; 1 < allFactors.length; allFactors.shift()){
        allFactors[i].forEach( x => {
            if (!factors.includes(x)) { // if the current factor isn't included in factors do stuff
                let repeat = calculateCount(allFactors[i], x) // get how many times the current number is in the array
                for (let i = 1; i <= repeat; i++) {
                    factors.push(x)
                }
            } 
        })
    }

    let currentLcm = factors.reduce((total, x) => {
        return total * x
    })

    let result = 0;
    // Checks if the currentLcm has any remainders greater than 0 when divided by each of the indvidual arguments.
    // Placed function inside so it has access to a variable that will be our result.
    function checkLcm(array, num) { 
        let check = array.every( x => {return num%x === 0})
        if(check) {
            result = num
        } else {
            checkLcm(array, num*2)
        }
    }
    checkLcm(sorted, currentLcm)

    console.log(result)
    return result
}

function calculateCount(array, num) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === num) count++;
    }
    return count
}

function prime_factors(num) {
    const primeFactors = [];
    if (num === 1) primeFactors.push(num);
    for (let i = 2; i <= num; i++) { 
      while (is_prime(i) && num % i === 0) // if i is prime and remainder of num/i is 0
      {
        primeFactors.push(i)
        num /= i;
      }
    }
    return primeFactors;
}

function is_prime(num) { //checks if a number is prime by comparing the argument's square root
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
*/
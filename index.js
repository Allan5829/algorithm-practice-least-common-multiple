function lcm(nums) {

    let factors = nums.map( x => {
        return prime_factors(x)
    }).flat()
    
    console.log(factors)
    let lcm = factors.reduce((total, x) => {
        console.log(total, x)
        return total * x
    })


    console.log(lcm)
	
}

function prime_factors(num) {
    const primeFactors = [];
    for (let i = 2; i <= num; i++) { 
      while (is_prime(i) && num % i === 0) // if i is prime and num/i is a whole number
      {
        if (!primeFactors.includes(i)) { // if i isn't currently in primeFactors then add it
            primeFactors.push(i)
        }
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

lcm([1, 2, 3, 4, 5, 6, 7, 8, 9])

/*
psuedo code
find prime numbers for current index and multiply for least common multiple

step 1 get prime factors

examples
lcm([1, 2, 3, 4, 5, 6, 7, 8, 9]) ➞ 2520
lcm([5]) ➞ 5
lcm([5, 7, 11]) ➞ 385
lcm([5, 7, 11, 35, 55, 77]) ➞ 385

*/
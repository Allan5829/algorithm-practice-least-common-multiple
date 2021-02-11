function lcm(nums) {


    console.log(nums)
	
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

lcm([5, 7, 11])

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
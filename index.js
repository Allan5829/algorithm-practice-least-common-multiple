function lcm(nums) {

    let sorted = nums.sort(function(a, b) {
        return a - b;
    });

    let allFactors = sorted.map( x => {
        return prime_factors(x)
    })
    
    //console.log(allFactors)

    let factors = [];
    if (allFactors.length === 1) {
        factors.push( allFactors.flat()[0] )
    }
    for (let i = 0; 1 < allFactors.length; allFactors.pop()){
        i = allFactors.length - 1
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

    // check if the lcm is the actual lcm and if not multiply by 2 until it is because that was the common theme I saw
    let lcm = 0;
    function checkLcm(array, num) {
        let check = array.every( x => {return num%x === 0})
        if(check) {
            lcm = num
        } else {
            checkLcm(array, num*2)
        }
    }
    checkLcm(sorted, currentLcm)

    console.log(lcm)
    return lcm
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
      while (is_prime(i) && num % i === 0) // if i is prime and num/i is a whole number
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

lcm([67, 34, 12, 3, 2])

/*
examples
lcm([1, 2, 3, 4, 5, 6, 7, 8, 9]) ➞ 2520
lcm([5]) ➞ 5
lcm([5, 7, 11]) ➞ 385
lcm([5, 7, 11, 35, 55, 77]) ➞ 385
*/
module.exports = function getZerosCount(number, base) {
  const factors = (base) => {
    let factors = [];
    for (let i = 2; i <= base; i++) {
        while ((base % i) === 0) {
            factors.push(i);
            base /= i;
        }
    }
    return factors;
  }

  let counts = {};
    let num;
    for (let i = 0; i < factors(base).length; i++) {
      num = factors(base)[i];
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

  let sumArray = [],
      elementsSum = 0,
      n = 1;
  for (let e in counts) {
    while (Math.floor(number / Number(e)**n >= 1)) {
      elementsSum += Math.floor(number / Number(e)**n);
      n++;
    }
    elementsSum /= counts[e];
    sumArray.push(Math.floor(elementsSum));
    n = 1;
    elementsSum = 0;    
  }  
return Math.min.apply(null, sumArray);
}
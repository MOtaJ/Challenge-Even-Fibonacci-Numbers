/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var sum = 0;

  var fib = [1, 2];

  while ( fib[fib.length -1] < maxFibValue ) {
    var add = 0;
    add = fib[fib.length -1] + fib[fib.length - 2];
    fib.push(add);
  }

  for ( var i = 0; i < fib.length; i++) {
    if ( fib[i] % 2 === 0 ) {
      sum += fib[i];
    }
  }

  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input
  var highFib = [1, 2];

  //do your work here
while ( highest < maxFibValue ) {
  var num = highFib[highFib.length - 1] + highFib[highFib.length - 2];
  highFib.push(num);
  highest = highFib[highFib.length - 1];
}
  highest = highFib[highFib.length - 2]
  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};
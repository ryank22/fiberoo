/* n is the amount of fib numbers */
function fib(n) {
  if (n == 1) {
    return [0];
  }
  if (n == 2) {
    return [0,1];
  }

  let array = [0,1];
  for (i = 3; i <= n; i++) {
    array.push(array[i - 3] + array[i - 2]);
  }

  return array;
}

console.log(fib(10));

function numsToStrings(array) {
  let array2 = [];
  _.map(array, function (num) {
    array2.push(num.toString());
  })
  return array2;
}

console.log(numsToStrings(fib(10)));

function numEvenNums(array) {
  let evenNums = 0;
  _.each(array, function(num) {
    if(num % 2 == 0) {
      evenNums++;
    }
  })
  return evenNums;
}

console.log(numEvenNums(fib(10)));

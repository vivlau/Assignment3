/*
Question 3: Digit Product Sequence
A digit product sequence is a type of sequence where the next number in the
sequence is calculated by adding the product of each digit of the number and
the number.

For example:

1, 2, 4, 8, 16, 22, 26, 38, 62
The above are the first 9 numbers of the sequence.

1+(1*1)=2
2+(2*1)=4
4+(4*1)=8
8+(8*1)=16
16+(1*6)=22
22+(2*2)=26
26+(2*6)=38
38+(3*8)=62

Write a function, digitProduct, that takes a number, n, as an argument and
calculates the nth number in the sequence.

digitProduct(3) // returns 4
digitProduct(6) // returns 22
digitProduct(9) // returns 62
Implement it iteratively (with for loop)
Implement it recursively (with if else)
Benchmark the results (console.time and console.timeEnd)
*/

// ITERATIVE
function temporary(number){
  let result = 0;
  let array = number.toString().split("");
  if(array.length === 1){
    result = parseInt(array[0])*2;
  }else{
  result = number + parseInt(array[0]) * parseInt(array[1]);
  }
  return result;
}

function digitProduct(n){
  let counter = 1;
  if(n === 1){
    return 1;
  }else{
    for (let i = 0; i < n; i++) {
      counter = temporary(counter);
    }
    return counter;
  }
}
digitProduct(5);

// RECURSIVE
function digitProduct(n , counter) {
  if (n === 1) {
    return counter;
  } else {
    if (counter < 10) {
     counter = counter + counter;
     return digitProduct(n-1, counter);
    } else {
      return digitProduct(n-1, temporary(counter));
    }
  }
}
digitProduct(7,1);

function one(callback) {
  console.log('step 1 complete, call step 2');
  callback();
}
function two() {
  console.log('step 2');
}

one(two);

//------------------------------------
function myDisplayer(ans) {
  console.log('answer is:', ans);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
//---------------------------------------------
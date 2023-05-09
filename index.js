function one(callback) {
  console.log('step 1 complete, call step 2');
  callback();
}
function two() {
  console.log('step 2');
}

one(two);
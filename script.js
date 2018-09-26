var num = 1;

let numberCounter = new Promise(function (resolve, reject) {

  if (num >= 10) {
    resolve();
  }
  else {
    reject();
  }
});

numberCounter.then(function (response) {
  console.log(num + ' is greater than 10, success!')
}).catch(function (error) {
  console.log(num + ' is less than 10, error!')
})
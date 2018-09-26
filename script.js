var num = 1;

let testNum = new Promise(function (resolve, reject) {

  if (num >= 10) {
    resolve();
  }
  else {
    reject();
  }
});

testNum.then(function (response) {
  console.log(num + ' is greater than 10, success!')
}).catch(function (error) {
  console.log(num + ' is less than 10, error!')
})

var words = ['worms', 'arms', 'dogs']

makeAllCaps = new Promise(function (resolve, reject) {
  // A mock async action using setTimeout
  setTimeout(function () { resolve(words); }, 1000);
})
  .then(function (words) { return words.map(word => word.toUpperCase()) })
  .then(function (result) { console.log(result) })



sortAllWords = new Promise(function (resolve, reject) {
  if (words.every(word => typeof word === 'string')) {
    resolve('Success!');
  }
  else {
    reject('Failure!');
  }

})
  .then(function (resolve) { console.log('success') })
  .catch(function (reject) { console.log('No, the array you passed in contained an element that was not a string!') })


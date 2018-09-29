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


makeAllCaps = new Promise(function (resolve, reject) {
  let words = ['worms', 'birds', 'dogs']
  if (words.every(word => typeof word === 'string')) {
    setTimeout(() => resolve(words), 1000);
  }
  else {
    reject('No, the array you passed in contained an element that was not a string!');
  }
})
makeAllCaps.then((words) => sortAllWords(words))
makeAllCaps.then(function (result) { console.log(result) })
makeAllCaps.catch(function (reject) { console.log(reject) })


function sortAllWords(words) {
  new Promise(function
    (resolve, reject) {
    resolve(words.sort());
  })
  .then(function (words) { return words })
  .catch(function (reject) { console.log('No, the array you passed in contained an element that was not a string!') })
}

console.log(makeAllCaps)
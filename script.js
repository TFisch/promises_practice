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
    const upperCase = words.map(word => word.toUpperCase())
    resolve(upperCase);
  }
  else {
    reject('No, the array you passed in contained an element that was not a string!');
  }
})
makeAllCaps.then((words) => sortAllWords(words))
makeAllCaps.then((result) => console.log(result))
makeAllCaps.catch((reject) => console.log(reject))


sortAllWords = (words) => {
  new Promise(function
    (resolve, reject) {
    resolve(words.sort());
  })
  .then((words) => words)
  .catch((reject) => console.log('Items could not be sorted!'))
}

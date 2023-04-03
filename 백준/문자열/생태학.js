// //////////////
// //////////////

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line.split(' '));
}).on('close', function () {
  ////////
  ///////
  ///////
  // str을 찾아줍니다.
  let n = input.length;

  //map에 str의 개수를 담아줍니다.
  let map = new Map();
  for (let i = 0; i < n; i++) {
    let str = input[i].join(' ');
    map.set(str, (map.get(str) || 0) + 1);
  }

  // set을 arr에 담아주고 이름으로 정렬해줍니다.
  let arr = [];
  arr = [...map].sort();

  // 정렬한 값에서 이름이 나온 횟수 / 총 개수 *100을 소수4번째자리까지 반올림한 값을 출력해줍니다.
  arr.forEach((item) => {
    console.log(item[0] + ' ' + ((item[1] / n) * 100).toFixed(4));
  });
});

// Red Alder
// Ash
// Aspen
// Basswood
// Ash
// Beech
// Yellow Birch
// Ash
// Cherry
// Cottonwood
// Ash
// Cypress
// Red Elm
// Gum
// Hackberry
// White Oak
// Hickory
// Pecan
// Hard Maple
// White Oak
// Soft Maple
// Red Oak
// Red Oak
// White Oak
// Poplan
// Sassafras
// Sycamore
// Black Walnut
// Willow

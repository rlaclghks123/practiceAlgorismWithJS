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
  let str = input.shift().join('');

  // findStr을 찾아줍니다.
  let findStr = input.shift().join('');

  let cnt = 0;

  // str에 findStr이 존재한다면 반복해줍니다.
  while (str.includes(findStr)) {
    // findStr을 아무문자로 바꿔줍니다 ex)'-1'
    str = str.replace(findStr, '-1');

    // count해줍니다.
    cnt++;
  }

  // 총 count 횟수를 출력합니다.
  console.log(cnt);
});

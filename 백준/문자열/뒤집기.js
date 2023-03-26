//////////////
//////////////

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

  // 문자열 s를 입력받는다.
  const str = input[0].join('');
  // 시작값을 찾는다.
  let start = str[0];

  let cnt = 0;

  // str의 길이만큼 반복하여 문자를 찾아준다.
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // 시작값과 다르다면 count해주고 시작값을 바꿔줍니다.
    if (char !== start) {
      cnt++;
      start = char;
    }
  }
  // count한 숫자를 2로 나누고, 올림함 값을 출력
  console.log(Math.ceil(cnt / 2));
});

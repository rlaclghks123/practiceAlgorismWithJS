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

  let str = input[0][0];
  let boom = input[1][0];
  let ans = [];
  let last = 0;

  // 문자열을 배열안에 한 단어씩 분리해서 탐색합니다.
  [...str].forEach((item) => {
    // ans에 문자를 담아줍니다.
    ans.push(item);
    // 마지막값을 담아줍니다.
    last = item;
    // 폭탄의 마지막값과, str의 마지막값이 같을경우
    if (ans[ans.length - 1] === last) {
      // 폭탄의 길이만큼 ans에서 짤라줍니다.
      let slice = ans.slice(-boom.length);
      // 만약 폭탄의 이름과 같다면 splice로 없애줍니다.
      if (boom === slice.join('')) ans.splice(-boom.length);
    }
  });
  // 만약 폭탄을 제거하고난뒤 글자가 없다면 FRULA를 출력, 아니라면 ans을 문자열로 바꿔 출력해줍니다.
  console.log(ans.length === 0 ? 'FRULA' : ans.join(''));
});

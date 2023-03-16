const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line.split(' ')); // 문자열을 끊어 정수로 변환후 배열로 반환
}).on('close', function () {
  ////////
  ///////
  ///////
  // n을 찾아줍니다.
  let n = +input.shift();

  // 총 그룹단어를 확인하기 위한 변수
  let total = 0;

  // n만큼 반복하여 문자를 확인합니다.
  for (let i = 0; i < n; i++) {
    let str = input.shift().join('').split('');
    let s = [];

    // 각 문자열을 반복문을 통해 확인해봅니다.
    for (let i = 0; i < str.length; i++) {
      // 만약 s에 포함되어 있는경우
      if (s.includes(str[i])) {
        // 마지막 값이랑 같으면 넘어갑니다.
        if (s[s.length - 1] === str[i]) continue;
        // s에 포함되어 있으면서 s의 마지막 값과 다를경우 그룹단어가 되지 않기떄문에 total값을 +1 count해주고 종료합니다.
        else {
          total++;
          break;
        }
      }
      // s에 포함되어 있지 않다면 push해줍니다.
      s.push(str[i]);
    }
  }
  // 총 확인이 필요한 그룹단어 n개 중 안되는 개수(total)을 뺀 값을 출력해줍니다.
  console.log(n - total);
});

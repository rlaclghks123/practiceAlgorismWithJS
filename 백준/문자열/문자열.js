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

  const [n, m] = input[0];
  let len = n.length;
  let ans = 0;

  // m의 문자열 개수만큼 반복합니다.
  for (let i = 0; i < m.length; i++) {
    let cnt = 0;
    // n의 개수만큼 반복합니다.
    for (let j = 0; j < len; j++) {
      // i+j가 m의 길이에 도달하면  len-ans의 횟수를 출력하고 멈춰줍니다.
      if (i + j === m.length) {
        console.log(len - ans);
        return;
      }
      // n의 j번째 값과, m의 i+j번째 값이 같다면 cnt 해줍니다.
      if (n[j] === m[i + j]) cnt++;
    }
    // 같은글자의 최대값을 찾아줍니다.
    ans = Math.max(ans, cnt);
  }
  console.log(len - ans);
});

// 다른사람의 코드
// 다른점
// str2.length -str1.length를 통해 코드가 더 간단해짐
// 글자가 같은경우를 통해 cnt 했지만, 이분은 다른경우를 cnt해서 더 간결해보임
function getDifference(str1, str2) {
  let answer = 50;

  for (let i = 0; i <= str2.length - str1.length; i++) {
    let count = 0;
    for (let j = 0; j < str1.length; j++) {
      if (str1[j] !== str2[i + j]) count++;
    }
    if (answer > count) answer = count;
  }

  console.log(answer);
}

getDifference(str1, str2);
// koder topcoder

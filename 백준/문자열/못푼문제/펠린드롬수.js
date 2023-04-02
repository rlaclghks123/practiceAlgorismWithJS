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
  let str = input.shift().join('').split('');
  let answer = [];
  let center = '';

  // 알파벳을 미리 정해줍니다.
  const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // 알파벳이 26개 이므로 26개의 자리를 가진 배열을 만들어줍니다.
  const arr = new Array(26).fill(0);

  // arr에 str에 포함된 알파벳의 개수를 담아줍니다.
  for (let i = 0; i < str.length; i++) {
    arr[abc.indexOf(str[i])]++;
  }

  // arr를 돌면서 0이면 넘기고, 홀수인 알파벳은 center에 담아줍니다.
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === 0) continue;
    if (arr[j] % 2 === 1) center += abc[j];

    // answer에 arr의 개수의 절반을 반복해서 담아줍니다.
    answer.push(abc[j].repeat(arr[j] / 2));
  }

  // 횟수가 홀수인 아이템이 2개 이상이면 문구를 출력하고, 아니면 answer, 홀수값, answer.reverse값을 출력해줍니다.
  console.log(
    center.length > 1 ? "I'm Sorry Hansoo" : answer.join('') + center + answer.reverse().join('')
  );
});

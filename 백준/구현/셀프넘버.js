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
  let arr = [];
  let answer = [];

  for (let i = 1; i <= 10000; i++) {
    let N = 0;
    // 숫자가 크기 때문에 str으로 바꿔줍니다.
    let stringNumber = String(i);

    // 숫자 2개를 합한뒤, arr에 담아줍니다
    for (let j = 0; j < stringNumber.length; j++) {
      N += Number(stringNumber[j]);
    }
    let nNum = i + N;
    arr.push(nNum);
  }

  for (let i = 1; i <= 10000; i++) {
    // 방문한적 없는 값인경우, 즉 현재숫자가 2개의 숫자로 만들수 없는 숫자인 경우 출력해줍니다.
    if (arr.indexOf(i) === -1) {
      answer += i + '\n';
    }
  }

  console.log(answer);
});

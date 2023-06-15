const fs = require('fs');
// // TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync('test.txt').toString().trim().split('\n');

// 메모리 초과
// 1. while문을 돌면서 str에 bomb가 있는지 확인한다
// 2. bomb가 있다면 ''로 바꿔준다.
// 3. 다 바꿔준 뒤, str의 길이가 0이라면 'FRULA'를 출력  아니면 str을 출력

// 1. 문자열을 문자로 나눠 stack에 담아줍니다.
// 2. stack의 마지막값과, bomb의 마지막값을 비교해서 같으면 stack에서 bomb 길이만큼 가져와 비교합니다.
// 3. 만약 같다면 stack에서 bomb길이만큼 제거합니다.
// 4. 최종 stack이 비어있다면 FRULA 출력
// 5. 비어있지 않다면 stack을 문자열로 바꿔 출력

let str = input[0];
let bomb = input[1];
let stack = [];
let bombLen = bomb.length;

[...str].forEach((item) => {
  stack.push(item);
  if (item === bomb[bomb.length - 1]) {
    let slice = stack.slice(-bombLen);
    if (slice.join('') === bomb) stack.splice(-bombLen);
  }
});
if (stack.length === 0) console.log('FRULA');
else console.log(stack.join(''));

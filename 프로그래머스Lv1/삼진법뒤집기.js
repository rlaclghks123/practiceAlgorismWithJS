// n을 3진법 상에서 앞뒤로 뒤집은 후, 다시 10진법으로 표현한 수를 return

function solution(n) {
  var answer = 0;

  // 1. n을 삼진법으로 바꿔준다.
  const three = n
    .toString(3)

    // 2. 값을 뒤집어 준다.
    .split('')
    .reverse()
    .join('');

  // 3. 다시 10진법으로 바꿔준다.
  answer = parseInt(three, 3);

  console.log(answer);
  return answer;
}

solution(45); // 7

solution(125); // 229

// 다른사람의 코드
// n을 스프레드 무시기를 통해 3진법을 바꾼 요소를 넣은 배열로 만들고, 뒤집어서 문자열로 다시 바꾼뒤 사용

const solution = (n) => {
  return parseInt([...n.toString(3)].reverse().join(''), 3);
};

// num이 짝수일 경우 'Even', 홀수일 경우 'Odd'를 반환

function solution(num) {
  return num % 2 === 0 ? 'Even' : 'Odd';
}

solution(3); // "Odd"

solution(4); //"Even"

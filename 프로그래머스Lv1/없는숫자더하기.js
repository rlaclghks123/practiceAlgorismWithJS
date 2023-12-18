// 1. 0~9까지 일부가 들어있는 numbers에서 찾을 수 없는 0-9까지의 숫자를 찾아 배열로 만든다.
// 2. 1에서 구한 배열을 모두 더해 출력한다.

function solution(numbers) {
  const originNumbers = Array.from({ length: 10 }, (_, i) => i);
  const findNotIncludeNumbers = originNumbers.filter((num) => !numbers.includes(num));

  return findNotIncludeNumbers.reduce((a, c) => a + c, 0);
}

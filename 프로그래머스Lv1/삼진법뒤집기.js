// 1. 자연수 n을 3진법으로 만든다.
// 2. 1에서 만든 3진법수를 뒤집는다.
// 3. 2에서 뒤집은 숫자를 다시 10진법으로 바꾼다.

function solution(n) {
  const three = n.toString(3);
  const reversed = [...String(three)].reverse().map(Number).join('');
  const answer = parseInt(reversed, 3);

  return answer;
}

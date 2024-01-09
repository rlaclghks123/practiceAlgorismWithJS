// 1. s를 공백을 기준으로 나눈다.
// 2. 나눈 값들중 Math.min를 통해 최소값을 구한다.
// 3. 나눈 값들중 Math.max를 통해 최대값을 구한다.
// 4. '최소값 최대값' 형태로 출력한다.

function solution(s) {
  const splited = [...s.split(' ')];
  const min = Math.min(...splited);
  const max = Math.max(...splited);

  return `${min} ${max}`;
}

// 양의정수 N에 대해, n이 어떤 정수 x의 제곱인지 아닌지 판단
// n이 양의정수 x의 제곱이라면 x+1의 제곱을 리턴
// n이 양의정수 x의 제곱이 아니라면 -1을 리턴

function solution(n) {
  var answer = 0;

  // 1. 제곱근을 구해준다.
  const sqrtNum = Math.sqrt(n);

  // 2. 제곱근 값이 정수인지 아닌지 확인하여 맞으면 x+1을 제곱, 아닌경우 -1을 return한다.

  return Number.isInteger(sqrtNum) ? Math.pow(sqrtNum + 1, 2) : -1;
}

solution(121); // 144
solution(3); // -1

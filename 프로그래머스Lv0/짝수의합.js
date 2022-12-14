function solution(n) {
  var answer = 0;

  // 1. 짝수를 모두 구해준다.
  for (let i = 1; i <= n; i++) {
    // 2. 짝수의 값들을 모두 더해준다.
    if (i % 2 === 0) answer += i;
  }

  return answer;
}

solution(10);

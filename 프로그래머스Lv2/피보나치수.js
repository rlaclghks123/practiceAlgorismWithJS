// 1. 0번째, 1번째 값을 answer에 담아줍니다. 피보나치에서 0번째와 1번쨰는 0,1
// 2. 피보나치 원리를 적용해줍니다. 현재값 = 이전값 + 이전의 이전값
// 3. 2에서 (이전값+이전의 이전값)의 1234567값을 나눠서 현재값을 담아줍니다.

function solution(n) {
  const answer = [0, 1];

  for (let i = 2; i <= n; i++) {
    answer[i] = (answer[i - 1] + answer[i - 2]) % 1234567;
  }

  return answer[n];
}

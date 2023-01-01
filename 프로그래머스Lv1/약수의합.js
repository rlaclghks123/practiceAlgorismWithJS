// 정수 n의 약수를 모두 더한값을 return

function solution(n) {
  var answer = [];

  let temp = 0;

  // 1. 약수를 구해서 answer에 담아준다.
  while (temp <= n) {
    if (n % temp === 0) {
      answer.push(temp);
    }
    temp++;
  }

  // 2. 모든 약수들을 reduce를 통해 다 더해준다.
  answer = answer.reduce((acc, cur) => acc + cur, 0);

  return answer;
}

solution(12); // 28

solution(5); // 6

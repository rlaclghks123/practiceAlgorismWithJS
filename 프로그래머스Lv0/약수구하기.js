// n의 약수를 오름차순으로 담은 배열을 return

function solution(n) {
  var answer = [];

  // 1. 약수를 answer배열에 담아준다.

  let temp = 1;

  while (temp <= n) {
    if (n % temp === 0) {
      answer.push(n / temp);
    }
    temp++;
  }

  // 2. 약수를 담은 answer배열을 정렬한다.
  answer.sort((a, b) => {
    return a - b;
  });
  return answer;
}

solution(24); //[(1, 2, 3, 4, 6, 8, 12, 24)];

solution(29); //[(1, 29)];

// 약수의 개수가 3개 이상인 수를 합성수라고 합니다.
// n이하의 합성수의 개수를 return한다.

function compositeNumber(n) {
  let temp = 1;
  const arr = [];
  while (temp <= n) {
    if (n % temp === 0) {
      arr.push(temp);
    }
    temp++;
  }
  if (arr.length >= 3) return true;
  return false;
}

function solution(n) {
  var answer = 0;

  // 1. n이하의 수가 합성수인지를 확인한다.
  for (let i = 1; i <= n; i++) {
    if (compositeNumber(i)) {
      answer += 1;
    }
  }

  // 2. 총 합성수의 개수를 return 한다.
  return answer;
}

solution(10); //5

solution(15); //8

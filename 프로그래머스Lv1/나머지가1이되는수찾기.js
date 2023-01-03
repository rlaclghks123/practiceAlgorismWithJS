// n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return
// 3 ≤ n ≤ 1,000,000

function solution(n) {
  var answer = 0;
  const arr = [];
  // 1. 3보다 크거나 같고, 1,000,000의 범위 안의 숫자 중에서 나머지가 1이 되는 수를 담아준다.
  for (let i = 1; i <= 1000000; i++) {
    if (n % i === 1) {
      arr.push(i);
    }
  }

  // 2. 나머지가 1이되는 수 중 가장 작은 값을 찾는다.
  answer = Math.min(...arr);
  return answer;
}

solution(10); // 3

solution(12); // 11

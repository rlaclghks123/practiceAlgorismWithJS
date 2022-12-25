// 피자를 나눠먹은 사람의 수(n) 명이 피자를 주문한다.
// 피자는 6조각으로 나눠준다. 모두 같은 수의 피자 조각을 먹어야 한다면 최소한 몇판을 시켜야 하는지를 return
// n은 1이상 100이하

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function solution(n) {
  var answer = 0;
  const temp = gcd(6, n);
  answer = n / temp;

  return answer;
}

solution(6);
1;

solution(10);
5;

solution(4);
2;

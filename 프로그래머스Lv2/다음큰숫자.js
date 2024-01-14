// 1. n을 2진법으로 바꿨을 때 1의 개수를 찾습니다.
// 2. 반복문을 통해 n부터 +1 계속 더해 다음값을 찾습니다.
// 2-1. 만약 다음값을 2진법으로 바꿨을 때 1의 개수가 같다면 다음값을 출력합니다.
// 2-2. 만약 다음값을 2진법으로 바꿨을 때 1의 개수가 다르다면 계속 n에 +1씩 더해 반복해줍니다.

function solution(n) {
  let start = getNumberOfOneLength(n);

  while (true) {
    let target = getNumberOfOneLength(++n);
    if (start === target) return n;
  }
}

function getNumberOfOneLength(n) {
  return n.toString(2).replaceAll('0', '').length;
}

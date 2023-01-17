// 조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
// 조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
// 조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
// 조건을 만족하는 다음 큰 숫자를  return

function solution(n) {
  var answer = 0;

  // 1. 현재 값의 2진수로 변환하여 0을 제거한 길이를 구한다.
  let nLen = n.toString(2).replaceAll(0, '').length;

  let nextLen = -1;
  let nextNum = n + 1;

  // 2. 현재수 +1씩 하여 2진수로 변환하여 0을 제거한 길이가 같은경우 번호를 찾는다.
  while (nLen !== nextLen) {
    nextLen = nextNum.toString(2).replaceAll(0, '').length;
    if (nLen === nextLen) break;
    nextNum++;
  }

  return nextNum;
}

solution(78); // 83
solution(15); // 23

// 다른사람의 풀이
// 정규표현식 사용 및 재귀로 풀었다.

function solution(n, a = n + 1) {
  return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length
    ? a
    : solution(n, a + 1);
}
function solution(n) {
  var answer = 0;
  let nextLen = n.toString(2).replaceAll('0', '').length;
  let nextNum = n + 1;

  while (nextLen !== nextNum.toString(2).replaceAll('0', '').length) {
    nextNum++;
  }
  return nextNum;
}

// 1. A를 오름차순으로 정렬한다.
// 2. B를 내림차순으로 정렬한다.
// 3. A,B를 0번째 값 부터 마지막 값 까지 곱한값을 다 더해준다.

// 추가로 [...A], [...B]로 해준 이유는 sort는 원본 배열을 바꾸기 때문에 안정성을 위해 얕은 복사

function solution(A, B) {
  const ascendingArr = [...A].sort((a, b) => a - b);
  const decendingArr = [...B].sort((a, b) => b - a);

  const answer = ascendingArr.reduce((acc, cur, idx) => acc + cur * decendingArr[idx], 0);
  return answer;
}

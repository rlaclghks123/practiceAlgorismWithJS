// 1. 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거한다.
// 1-1 stack에 담는다
// 1-2 새로운 값이랑 stack의 peek값을 비교하여 같으면 continue한다.
// 1-3 새로운 값이랑 stack의 peek값을 비교하여 다르면 stack에 push한다.
// 2. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 한다.

function solution(arr) {
  const answer = [];

  arr.forEach((num) => {
    if (answer[answer.length - 1] === num) return;
    answer.push(num);
  });

  return answer;
}

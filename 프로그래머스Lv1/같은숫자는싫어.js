// arr는 0-9로 이루어져 있다.
// arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거
// 단 제거후  반환할때 배열의 원소들의 순서는 유지

function solution(arr) {
  // 1. stack에 값을 담아준다.
  const stack = [arr[0]];

  // 2. arr의 모든 요소를 돌면서 peek값(stack의 맨위값)이 item과 다르면 push한다.
  arr.forEach((item) => {
    if (stack[stack.length - 1] !== item) {
      stack.push(item);
    }
  });
  return stack;
}

solution([1, 1, 3, 3, 0, 1, 1]); // 	[1,3,0,1]

solution([4, 4, 4, 3, 3]); //	[4,3]

// 다른사람의 코드
// filter를 사용해서 다음 index값과 비교한다.
// 마지막 index는 undefined과 비교를 한다.

function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}

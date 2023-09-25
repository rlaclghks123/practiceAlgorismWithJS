// 1. priorities를 index와 함께 mapping 한다.  //setIndex

// 2. location이 몇번째 실행되는지 확인  // countWhenExecuteLocation
// 2-1 while문으로 Arr의 값이 존재하면 계속 반복해줍니다.
// 2-1-1 첫번째 값을 꺼내 자신보다 우선순위가 높은 친구가 있는지 확인합니다.
// 2-1-2 있다면 arr에 꺼낸값을 다시 push합니다.
// 2-1-3 없다면 count++ 해주고, location과 index값이 같은지 비교해 같은경우 count값을 return

// 3. 2에서 찾아낸 count값을 출력합니다.

function solution(priorities, location) {
  let prioritiesWithIndex = setIndex(priorities);
  return countWhenExecuteLocation(prioritiesWithIndex, location);
}

function setIndex(arr) {
  return arr.map((item, index) => [item, index]);
}

function countWhenExecuteLocation(arr, location) {
  let count = 0;

  while (arr.length) {
    let shifted = arr.shift();
    const isPriority = arr.some((item) => item[0] > shifted[0]);

    if (isPriority) {
      arr.push(shifted);
      continue;
    }
    count++;
    if (shifted[1] === location) return count;
  }
}

// 1. 우선순위 배열을 [우선순위, 실행되는 위치] 형태로 새롭게 만들어줍니다.

// 2. 1에서 만든 새로운 배열의 길이가 없을때까지 반복해줍니다.
// 2-1. shift를 이용해 첫번째 값을 뽑아줍니다.
// 2-2. 2-1에서 뽑은 값보다 우선순위가 높은것이 있는지 찾습니다.

// 2-2-1. 우선순위가 높은게 있다면 다시 1에서 만든 배열에 push해줍니다.
// 2-2-2. 우선순위가 높은게 없다면

// 2-2-2-1. 현재 location과 찾는 location을 비교하여 같다면 cnt를 출력합니다.
// 2-2-2-2. 현재 location과 찾는 location을 비교하여 다르다면 cnt를 +1 해준뒤 다시 반복해줍니다.

function solution(priorities, location) {
  let cnt = 1;
  const prioritiesWithLocation = priorities.map((item, idx) => [item, idx]);

  while (prioritiesWithLocation.length) {
    const shifted = prioritiesWithLocation.shift();
    const [curPriorities, curLocation] = shifted;
    const isHigherPriority = prioritiesWithLocation.find(
      ([priorities, idx]) => curPriorities < priorities
    );

    if (isHigherPriority) {
      prioritiesWithLocation.push(shifted);
    } else {
      if (curLocation === location) return cnt;
      cnt++;
    }
  }
}

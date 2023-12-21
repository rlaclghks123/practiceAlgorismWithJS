// 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// 1. 2중 for문을 통해 numbrs로 더해서 만들 수 있는 모든 수를 만든다.
// 1-1 만약 같은 인덱스의 경우 continue한다.
// 2. set에 담아서 중복된 값을 제거한다.
// 3. 오름차순으로 정렬해서 출력한다.

function solution(numbers) {
  const set = new Set();

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i === j) continue;
      set.add(numbers[i] + numbers[j]);
    }
  }

  return [...set].sort((a, b) => a - b);
}

// 배열의 각 원소들에 대해 자신보다 뒤에 있는 숫자 중에서 자신보다 크면서 가장 가까이있는 수를 뒷큰수
// 모든 원소에 대한 뒷큰수들을 차례대로 담은 배열을 return
// 뒷큰수가 존재하지 않는 경우 -1을 담습니다.
// 4 ≤ numbers의 길이 ≤ 1,000,000

function solution(numbers) {
  let answer = [];
  let stack = [];

  // 1. for문을 통해 numbers의 뒤에서부터 값을 stack에 담아줍니다.
  for (let i = numbers.length - 1; i >= 0; i--) {
    // 2. 만약 stack에 값이 있다면 while문을 통해 stack이 빌때까지 반복해줍니다.
    while (stack.length > 0) {
      let peek = stack[stack.length - 1];

      if (peek > numbers[i]) {
        answer.push(stack[stack.length - 1]);
        //2-1 만약 stack의 peek값이 numbers[i]보다 크다면 answer에 stack의 peek값을 담아줍니다.
        break;
      }
      // 2-2 만약 그게 아니라면 answer stack에서 pop해줍니다.
      else {
        stack.pop();
      }
    }
    // 3. 만약 stack에 값이 없다면 -1을 answer에 담아줍니다.
    if (stack.length === 0) answer.push(-1);

    // 4. stack에 값을 담아줍니다.
    stack.push(numbers[i]);
  }
  return answer.reverse();
}

solution([2, 3, 3, 5]); // [3, 5, 5, -1]

solution([9, 1, 5, 3, 6, 2]); // [-1, 5, 6, 6, -1, -1]

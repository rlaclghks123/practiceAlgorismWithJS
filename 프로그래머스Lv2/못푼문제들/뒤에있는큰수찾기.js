// 시간복잡도를 고려하여 stack과 numbers의 뒤부터 시작하여 pop하는 방식으로 구현

// 1. numbers의 길이부터 0번쨰까지 반복문을 돌아준다.

// 1-1. stack의 값이 존재한다면 while문으로 반복해준다.
// 1-1-1. stack의 peek값(마지막값)을 찾는다.
// 1-1-2. 만약 peek값이 현재값(numbers[i])보다 크다면 ans에 peek값을 담고 반복문을 탈출한다.
// 1-1-3. 만약 peek값이 현재값(numbers[i])보다 크지 않다면 stack에서 pop해준다.

// 1-2. 만약 stack의 값이 없다면 ans에 -1을 담아준다.
// 1-3. stack에 현재값(numbers[i])을 담아준다.

// 2. 뒤에서부터 구했기 때문에 ans를 reverse로 뒤집어서 출력한다.

function solution(numbers) {
  const ans = [];
  const stack = [];

  for (let i = numbers.length - 1; i >= 0; i--) {
    while (stack.length) {
      const peek = stack[stack.length - 1];
      if (peek > numbers[i]) {
        ans.push(peek);
        break;
      }
      stack.pop();
    }

    if (stack.length === 0) ans.push(-1);
    stack.push(numbers[i]);
  }

  return ans.reverse();
}

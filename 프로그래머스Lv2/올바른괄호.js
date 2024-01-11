// 1. s를 배열로 바꿔서 순회하면서 한 문자씩 확인합니다.
// 2. 0번째 문자를 stack에 담아줍니다.
// 3. stack의 peek값(스택의 마지막값)이 '(' 이면서 현재값이 ')'이면 stack에서 pop 해줍니다.
// 4. 그 외의 경우에는 올바른 괄호가 되지 않기 때문에 stack에 현재 값을 담아줍니다(push).
// 5. stack에 값이 존재하는지 여부에 따라 true, false를 출력합니다.

// 추가적으로 stack을 사용한 이유는 값을 추가하고 제거하는데 시간복잡도가 O(1)이기 때문입니다.
// 또한 마지막에 0번째 값만 확인한 이유는 배열에 값의 존재여부만 필요하기 때문에 0번째 값만 확인하여 시간을 줄이기 위함입니다.

function solution(s) {
  const stack = [];

  [...s].forEach((char, idx) => {
    if (idx === 0) stack.push(char);
    else if (stack[stack.length - 1] === '(' && char === ')') stack.pop();
    else stack.push(char);
  });

  return stack[0] ? false : true;
}

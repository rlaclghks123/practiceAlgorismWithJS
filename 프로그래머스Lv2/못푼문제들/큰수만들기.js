// 어떤 숫자 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 문자열 형태로 return
// number는 2자리 이상 1,000,000이하인 숫자

function solution(number, k) {
  const stack = [];

  // 1. 문자열로 된 number를 문자 하나씩 꺼내준다
  [...number].forEach((item) => {
    // 2. stack에 peek값이 현재 문자보다 작으면서 k값이 0보다 큰 경우 pop한뒤, k--해준다.
    while (stack.length && stack[stack.length - 1] < item && k > 0) {
      k--;
      stack.pop();
    }
    // 3. 그게 아니라면 stack에 push 해준다.
    stack.push(item);
  });

  // 4. 총 5문자열 중 3개를 제거하는 경우 77777이면 stack에 77777이 모두 쌓이기 때문에 stack의 길이에서 number의 길이-k값을 제외하고 나머지는 빼준다.
  stack.splice(number.length - k, k);

  // 5. 배열을 join을 통해 문자열로 바꿔서 출력해준다.
  return stack.join('');
}

solution('1924', 2); // "94"

solution('1231234', 3); // "3234"

solution('77777', 4);

solution('4177252841', 4); // "775841"

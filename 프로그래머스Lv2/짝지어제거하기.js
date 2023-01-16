// 1. 같은 알파벳이 2개 붙어 있는 짝을 찾아 제거합니다.
// 2. 1을 반복해서 문자열을 모두 제거한다면 종료
// 성공적으로 수행하면 1 아니면 0을 return

function solution(s) {
  var answer = 0;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (!stack || stack[stack.length - 1] !== s[i]) stack.push(s[i]);
    else stack.pop();
  }
  return stack.length === 0 ? 1 : 0;
}

// solution('baabaa'); // 1
// solution('cdcd'); // 0

solution('abccba'); // 1
solution('abcccba'); // 0
solution('abccccbaaa'); // 1
solution('abccaabaa'); // 0
// solution('a'); // 0

function solution(s) {
  var answer = -1;

  let stack = [];

  [...s].forEach((item) => {
    if (stack[stack.length - 1] === item) {
      stack.pop();
    } else {
      stack.push(item);
    }
  });
  return stack.length === 0 ? 1 : 0;
}

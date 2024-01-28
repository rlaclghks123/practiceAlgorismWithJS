// 1. s의 길이만큼 순회합니다.
// 1-1. 올바른 괄호인지 확인하여 올바른 괄호면 count합니다.
// 1-2. s를 회전합니다.
// 2. 총 count값을 출력합니다.

function solution(s) {
  let cnt = 0;

  [...s].forEach(() => {
    const checked = check(s);
    if (checked) cnt++;
    s = rotate(s);
  });

  return cnt;
}

function check(s) {
  const stack = [];

  [...s].forEach((char) => {
    if (char === ')' && stack[stack.length - 1] === '(') stack.pop();
    else if (char === ']' && stack[stack.length - 1] === '[') stack.pop();
    else if (char === '}' && stack[stack.length - 1] === '{') stack.pop();
    else stack.push(char);
  });

  return stack.length ? false : true;
}

function rotate(s) {
  const front = s[0];
  return s.slice(1) + front;
}

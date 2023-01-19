// 올바른 괄호 문자열의 정의
// (), [], {} 는 모두 올바른 괄호 문자열입니다.
// 만약 A가 올바른 괄호 문자열이라면, (A), [A], {A} 도 올바른 괄호 문자열입니다
// 만약 A, B가 올바른 괄호 문자열이라면, AB 도 올바른 괄호 문자열입니다. 예를 들어, {} 와 ([]) 가 올바른 괄호 문자열이므로, {}([]) 도 올바른 괄호 문자열입니다.

//s를 왼쪽으로 x (0 ≤ x < (s의 길이)) 칸만큼 회전시켰을 때 s가 올바른 괄호 문자열이 되게 하는 x의 개수를 return

function solution(s) {
  var answer = 0;
  let len = s.length;

  // s의 길이만큼 반복해준다.
  for (let i = 0; i < len; i++) {
    // s의 맨앞문자를 짤라서 맨뒤에 넣어준다.
    let a = [...s];
    let sliced = a.shift();
    a.push(sliced);
    s = a.join('');

    // stack에 담아서, [], {}, ()가 아닌경우 stack에 담아서 길이가 0인 경우 count해준다.
    let stack = [];
    [...s].forEach((item) => {
      if (stack.lenth === 0) stack.push(item);
      else if (stack[stack.length - 1] === '[' && item === ']') stack.pop();
      else if (stack[stack.length - 1] === '{' && item === '}') stack.pop();
      else if (stack[stack.length - 1] === '(' && item === ')') stack.pop();
      else stack.push(item);
    });
    if (stack.length === 0) answer++;
  }

  return answer;
}
// solution('[](){}'); // 3
solution('}]()[{'); // 2
// solution('[)(]'); // 0
// solution('}}}'); // 0

// 다른사람의 코드
// 코드가 비슷한데, slice를 활용하여 첫 문자를 제외한 나머지 문자 s.slice(i) + 첫문자 s.slice(0,i) 를 통해 더 간결하게 했다.
function solution(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    const arr = [];
    const temp = i === 0 ? s : s.slice(i) + s.slice(0, i);
    for (let j = 0; j < temp.length; j++) {
      if (arr[arr.length - 1] === '(' && temp[j] === ')') arr.pop();
      else if (arr[arr.length - 1] === '[' && temp[j] === ']') arr.pop();
      else if (arr[arr.length - 1] === '{' && temp[j] === '}') arr.pop();
      else arr.push(temp[j]);
    }
    if (arr.length === 0) answer++;
  }
  return answer;
}

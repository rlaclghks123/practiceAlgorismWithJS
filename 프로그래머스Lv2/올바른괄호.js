// 괄호가 '(' 문자로 열렸으면 반드시 짝지어서 ')'문자로 닫혀야 합니다.
// 올바른 괄호이면 true, 아니면 false를 출력

// function solution(s) {
//   var answer = true;
//   const stack = [];

//   // 1.  문자열을 돌면서 ( 문자가 나오면 stack에 담아주고, )문자가 나오면 stack에서 제거해준다.
//   // 2. 최종적으로 stack이 비어있으면 true, 비어있지 않다면 false를 출력

//   [...s].forEach((item) => {
//     if (stack[stack.length - 1] === '(' && item === ')') stack.pop();
//     else stack.push(item);
//   });
//   return stack[0] === undefined;
// }

solution('()()'); //	true
solution('(())()'); //	true
solution(')()('); //false
solution('(()('); //false
solution('('); //false
solution(')'); //false

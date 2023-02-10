// s의 각 위치마다 자신보다 앞에 나왔으면서 자신과 가장 가까운곳에 있는 글자를 찾기

// function solution(s) {
//   var answer = [];

//   // 1. 문자열을 문자 하나씩 가져와 stack에 없으면 stack에 담고 answer에 -1을, stack에 있으면 answer에 index값을 담는다..
//   let stack = [];
//   [...s].forEach((item, i) => {
//     if (!stack.includes(item)) {
//       answer.push(-1);
//     } else {
//       let index = i;
//       let count = 0;
//       while (item !== stack[index]) {
//         count++;
//         index--;
//         if (item === stack[index]) {
//           answer.push(count);
//           break;
//         }
//       }
//     }
//     stack.push(item);
//   });

//   return answer;
// }

// 다른사람 코드
// slice(0,i)를 통해 마지막값을 제외하고 나머지를 잘라서 lastIndex값을 찾아, 현재값의 i에서 count의 차이를 구해주며, 음수일 경우 -1로 지정해준다.

// const solution = (s) =>
//   [...s].map((char, i) => {
//     const count = s.slice(0, i).lastIndexOf(char);
//     return count < 0 ? count : i - count;
//   });

// solution('banana'); //	[-1, -1, -1, 2, 2, 2]

// solution('foobar'); //	[-1, -1, 1, -1, -1, -1]

function solution(s) {
  const answer = [];
  const stack = [1, 2, 3, 4];

  [...s].forEach((item) => {
    if (stack.includes(item)) {
      answer.push(stack.length - stack.lastIndexOf(item));
      stack.push(item);
    } else {
      stack.push(item);
      answer.push(-1);
    }
  });
  return answer;
}

function solution(s) {
  let answer = [];
  let stack = [];
  [...s].forEach((char) => {
    if (stack.includes(char)) {
      answer.push(stack.length - stack.lastIndexOf(char));
      stack.push(char);
    } else {
      stack.push(char);
      answer.push(-1);
    }
  });
  return answer;
}

solution('banana'); //	[-1, -1, -1, 2, 2, 2]

solution('foobar'); //	[-1, -1, 1, -1, -1, -1]

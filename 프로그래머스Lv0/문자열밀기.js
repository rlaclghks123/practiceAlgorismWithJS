// 문자를 오른쪽으로 한칸씩 밀때 A를 밀어서 B가 될 수 있다면 몇번 밀어야 하는지 횟수를 return
// 만약 A를 밀어서 B가 될 수 없으면 -1을 return

function solution(A, B) {
  var answer = 1;

  // 1. A와 B가 같다면 밀 필요가 없으므로 0 Return
  if (A === B) return 0;

  // 2. A와 B가 같지않다면 배열로 만들어서 마지막값을 빼서, 맨 앞에 붙혀주는것을 배열의 길이만큼 반복해준다.
  const len = A.length;
  const tempArr = [...A];

  for (let i = 0; i < len; i++) {
    let last = tempArr.pop();
    tempArr.unshift(last);

    // 3. 만약 같은경우가 있다면 횟수를 return 하고 아니면 횟수를 증가해준다.
    if (tempArr.join('') === B) {
      return answer;
    } else {
      answer += 1;
    }
  }
  // 4. 만약 배열의 길이만큼 반복했는데 없을경우 -1을 return
  if (answer === len + 1) answer = -1;

  return answer;
}

solution('hello', 'ohell'); // 1

solution('hello', 'hello'); // 1

solution('apple', 'elppa'); //	-1

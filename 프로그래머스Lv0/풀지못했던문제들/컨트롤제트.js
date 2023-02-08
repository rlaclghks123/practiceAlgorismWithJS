// 숫자와 Z가 공백으로 구분되어 담긴 문자열이 주어지며, Z가 나오면 바로 전에 더했던 숫자를 뺀다는 의미
// 머쓱이가 구한 값을 return

function solution(s) {
  var answer = 0;

  // 1. 공백(' ')을 기준으로 분리해준다.
  const splited = s.split(' ');

  // 2. 'Z'가 포함되어 있는경우 계속 반복한다. (=== 'Z'가 없을때까지)
  while (splited.includes('Z')) {
    // 3. 'Z'가 있는 요소의 앞,'Z' 2개를 삭제해준다.
    splited.splice(splited.indexOf('Z') - 1, 2);
  }

  // 4. 나머지 요소들을 다 더해준다.
  answer = splited.reduce((acc, cur) => acc + Number(cur), 0);

  return answer;
}

// 틀린이유 : 문자열을 잘 다루지 못했었으며, 풀지못한 문제들중 비슷한 형태가 여러개 있다.
// 다시풀기
function solution(s) {
  var answer = 0;
  let split = s.split(' ');

  while (split.includes('Z')) {
    split.splice(split.indexOf('Z') - 1, 2);
  }
  answer = split.reduce((acc, cur) => acc + Number(cur), 0);
  return answer;
}

function solution(s) {
  var answer = 0;
  const splited = s.split(' ');

  splited.forEach((item, i) => {
    item === 'Z' ? (answer -= +splited[i - 1]) : (answer += +item);
  });
  console.log(answer);
  return answer;
}

function solution(s) {
  let split = s.split(' ');
  let stack = [];
  split.forEach((word) => {
    if (word === 'Z') stack.pop();
    else stack.push(word);
  });
  return stack.reduce((acc, cur) => acc + Number(cur), 0);
}

solution('1 2 Z 3'); //	4

solution('10 20 30 40'); //	100

solution('10 Z 20 Z 1'); //	1

solution('10 Z 20 Z'); //	0

solution('-1 -2 -3 Z'); //	-3

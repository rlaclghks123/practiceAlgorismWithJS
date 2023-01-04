// 0~9까지 일부가 들어있는 numbers에서 찾을 수 없는 0-9까지의 숫자를 모두 더한 수를 return

function solution(numbers) {
  var answer = [];

  // 1. 0-9까지의 수 중에서 numbers에 포함되어있지 않는 수를 answer에 담아준다.
  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) {
      answer.push(i);
    }
  }

  // 2. answer에 담긴 배열의 요소를 모두 더해준다.
  answer = answer.reduce((acc, cur) => acc + cur, 0);

  return answer;
}

solution([1, 2, 3, 4, 6, 7, 8, 0]); // 14    5+9 = 14

solution([5, 8, 4, 0, 6, 7, 9]); //	6    1+2+3 = 6

// 다른사람의 코드
// 0-9까지의 합에서 numbers의 합을 뺀값을 return

function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

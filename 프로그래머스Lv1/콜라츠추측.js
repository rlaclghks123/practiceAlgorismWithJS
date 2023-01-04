// 아래의 3가지 작업을 몇번이나 반복해야 하는지 횟수를 return
// 주어진 수가 1인경우 0, 500번 반복할때까지 1이 되지 않는다면 -1을 return

// 1-1. 입력된 수가 짝수라면 2로 나눕니다.
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.

function solution(num) {
  var answer = 0;
  let count = 0;
  // 1. 위의 1-1, 1-2 작업을 1이 될떄까지 반복한다. 단 횟수가 500번 초과하면 -1을 return

  while (num !== 1) {
    if (num % 2 === 0) {
      num /= 2;
    } else if (num % 2 === 1) {
      num = num * 3 + 1;
    }
    count++;

    if (count > 500) {
      return (answer = -1);
    }
  }

  // 2. 횟수(count)를 출력한다.
  answer = count;

  return answer;
}

solution(6); // 8

solution(16); // 4

solution(626331); // - 1

//
//
// 다른사람 코드
function collatz(num) {
  var answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
}

// n보다 작은 팩토리얼의 가장 큰 정수 i를 return

function factorial(n) {
  let temp = 1;

  for (let i = n; i >= 1; i--) {
    temp = temp * i;
  }

  return temp;
}

function solution(n) {
  var answer = 0;

  // 1.팩토리얼을 구하는 함수를 만든다.
  let temp = 1;

  for (let i = 0; i < n; i++) {
    if (factorial(temp) <= n) {
      answer = temp;
      temp++;
    } else {
      break;
    }
  }

  return answer;
}

solution(3628800); //10

solution(7); //3

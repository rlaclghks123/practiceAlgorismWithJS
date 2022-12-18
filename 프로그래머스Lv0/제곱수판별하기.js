function solution(n) {
  //n이 제곱수라면 1, 아니면 2를 return

  // 1. 범위가 1000,000까지 이므로,  범위를 설정한다. 10, 100, 1000
  // 2. 일의자리가 1부터 시작해서 점차 늘려가며 제곱수인지 확인한다.
  let answer = 0;
  // 함수 사용
  answer = Number.isInteger(Math.sqrt(n)) ? 1 : 2;

  return answer;
}

function solution(n) {
  //n이 제곱수라면 1, 아니면 2를 return
  //직접구현
  // 1. 범위가 1000,000까지 이므로,  범위를 설정한다. 10, 100, 1000
  // 2. 일의자리가 1부터 시작해서 점차 늘려가며 제곱수인지 확인한다.
  let answer = 0;

  if (n <= 100) {
    let temp = 1;
    while (temp <= n) {
      if (temp * temp === n) answer = 1;
      temp++;
    }
  } else if (n > 100) {
    let temp = 11;
    while (temp <= n) {
      if (temp * temp === n) answer = 1;
      temp++;
    }
  } else if (n === 1000000) {
    if (temp * temp === n) answer = 1;
    return;
  }

  return answer === 1 ? 1 : 2;
}

solution(144); //1

solution(976); //2;

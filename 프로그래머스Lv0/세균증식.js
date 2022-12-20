function solution(n, t) {
  // 세균이 1시간에 2배만큼 증식.
  // 처음 세균 n마리와, t시간후 세균의 수를 return
  var answer = 0;

  // 1. n마리 곱하기, t시간의 2제곱을 구한다.
  const germ = n;
  let totalGerms = germ;

  // 2. 1시간부터 t시간까지 반복하여 2를 곱해준다.
  for (let i = 1; i <= t; i++) {
    totalGerms = totalGerms * 2;
  }

  answer = totalGerms;
  return answer;
}

solution(2, 10); //2048

solution(7, 15); //229,376

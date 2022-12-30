// 덧셈, 뺄셈 수식들이 'X[연산자] Y = Z' 형태로 들어있는 quiz를 매개변수로 준다.
// 수식이 옮다면 'O', 틀리다면 'X'를 순서대로 담은 배열을 return

function solution(quiz) {
  var answer = [];

  // 1. ' '을 기준으로 quiz를 분리해준다.
  answer = [...quiz].map((item) => {
    const split = item.split(' ');
    const left = Number(split[0]);
    const cal = split[1];
    const right = Number(split[2]);
    const result = Number(split[4]);
    const plusResult = left + right;
    const minusResult = left - right;

    // 2. quiz의 식을 계산해서 실제 연산 결과값이랑 quiz의 결과값이랑 같다면 'O', 아니면 'X'를 return
    if (cal === '+' && result === plusResult) return 'O';
    if (cal === '-' && result === minusResult) return 'O';
    return 'X';
  });

  // 3. 출력한다.
  return answer;
}

solution(['3 - 4 = -3', '5 + 6 = 11']); // ["X", "O"]

solution(['19 - 6 = 13', '5 + 66 = 71', '5 - 15 = 63', '3 - 1 = 2']); // ["O", "O", "X", "O"]

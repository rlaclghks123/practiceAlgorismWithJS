// 모든 참가자들에게는 숫자들과 3가지의 연산문자(+,-,*)만으로 이루어진 연산 수식이 전달
// 참가자들은 전달받은 수식에 포함된 연산자의 우선순위를 자유롭게 재정의 하여 만들 수 있는 가장 큰 숫자
// 단 연산자의 우선순위에서 같은 순위의 연산자는 없어야 합니다.
// 수식에 포함된 연산자가 2개라면 우선순위 조합은 2! = 2가지 이며, 연산자가 3개라면 3! 6가지입니다.
// 계산된 결과가 음수라면 절댓값으로 변환하여 제출,

function solution(expression) {
  // 1. 6가지의 우선순위를 나타내는 경우의수를 모두 나타내준다.
  let combinations = [
    ['+', '-', '*'],
    ['+', '*', '-'],
    ['-', '+', '*'],
    ['-', '*', '+'],
    ['*', '+', '-'],
    ['*', '-', '+'],
  ];
  let answer = 0;

  // 2. 6가지의 경우의수를 돌면서 expression에 숫자, 연산기호를 나눠준다.
  combinations.forEach((combi) => {
    const num = expression.match(/\d+/g).map(Number);
    const operator = expression.match(/[\*\+\-]/g);

    // combi 즉 6가지의 경우의수 안에 []를 돌면서 각 기호의 expression의 위치를 찾아준다.
    combi.forEach((oper) => {
      let idx = operator.indexOf(oper);

      //만약 idx가 -1이 아닌경우 즉 operator가 없어질떄까지 반복
      while (idx !== -1) {
        num[idx] = calculator(num[idx], num[idx + 1], operator[idx]);
        num.splice(idx + 1, 1);
        operator.splice(idx, 1);
        idx = operator.indexOf(oper);
      }
    });
    answer = Math.max(answer, Math.abs(num[0]));
  });

  return answer;
}

function calculator(left, right, operator) {
  if (operator === '+') return left + right;
  if (operator === '-') return left - right;
  if (operator === '*') return left * right;
}

solution('100-200*300-500+20'); // 60420

solution('50*6-3*2'); // 300

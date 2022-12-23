// num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return 없으면 -1을 return
// num의 범위 0초과, 1,000,000 미만
// k의 범위 0이상 10미만
// num에 k가 여러 개 있으면 가장 처음 나타나는 자리를 return

function solution(num, k) {
  var answer = [];

  // 1. num에 k가 있는지 확인한다.
  num
    .toString()
    .split('')
    .map((num, index) => {
      // 2. num에 k가 있으면 index+1값을 배열에 넣어준다. (1부터 하기 위해)
      if (Number(num) === k) {
        answer.push(index + 1);
      }
    });

  // 3. 배열에 아무것도 없으면 -1, 들어있다면 처음값을 Return 한다.
  return answer.length === 0 ? -1 : answer[0];
}

solution(29183, 1); //3

solution(232443, 4); //4

solution(123456, 7); //-1

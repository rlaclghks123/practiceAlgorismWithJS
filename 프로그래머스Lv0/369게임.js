// order에 3,6,9가 들어있으면 박수를 치는 게임이다.
// 머쓱이가 쳐야할 총 박수의 횟수를 return

function solution(order) {
  var answer = 0;

  // 1. order에 3,6,9가 포함되어있는지 확인한다.
  answer = order

    // 1-1 order를 문자열로 변환한다.
    .toString()
    // 1-2 변환된 문자열을 배열로 변환한다.
    .split('')

    // 1-3 배열을 reduce를 통해 3,6,9가 포함되어 있을경우 count해준다.
    .reduce((acc, cur) => {
      if (Number(cur) === 3 || Number(cur) === 6 || Number(cur) === 9) {
        return acc + 1;
      }
      return acc;
    }, 0);

  // 총 count 개수를 출력한다.
  return answer;
}

solution(3); //1

solution(29423); //2

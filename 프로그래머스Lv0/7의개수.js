// // array의 요소 중 7이 몇개있는지 return

function solution(array) {
  var answer = 0;

  // 1. array의 모든 요소를 숫자 요소를 문자로 바꿔 문자 하나씩 확인한다.

  array.forEach((item) => {
    const charArr = item.toString().split('');

    // 2. 각 문자가 7인 경우 answer에 count한다.
    charArr.map((item) => {
      if (item === '7') answer++;
    });
  });

  // 3. 총 count된 값을 출력한다.

  return answer;
}

// 다른 사람의 깔끔한 코드
function solution(array) {
  var answer = 0;

  // 1. array를 문자열로 바꾼다.
  // 2. 7을 기준으로 문자열을 나눠준다.
  // 3. 총 배열의 길이 -1 의 값을 출력한다.

  array.join('').split('7').length - 1;

  return answer;
}

solution([7, 77, 17]); // 4

solution([10, 29]); // 0

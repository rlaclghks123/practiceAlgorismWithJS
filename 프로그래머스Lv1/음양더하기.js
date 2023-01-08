// 절대값을 담은 배열 absolutes
// 부호를 담은 배열 signs  true는 양수, false는 음수
// 실제 정수들의 합을 return

function solution(absolutes, signs) {
  var answer = 123456789;

  answer = absolutes
    // 1. absolutes, signs를 통해 값을 지정해준다.
    .map((item, index) => {
      return signs[index] ? item : -item;
    })

    // 2. 값을 모두 더해준다.
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);

  return answer;
}

solution([4, 7, 12], [true, false, true]); //	9

solution([1, 2, 3], [false, false, true]); //	0

// 다른사람의 코드
// signs의 값에 따라 1, -1을 곱해서 부호를 지정한다.

function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}

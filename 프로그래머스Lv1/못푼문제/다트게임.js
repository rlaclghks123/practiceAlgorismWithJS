//  총 3번의 기회로 구성
// 점수는 0점~10점
//  Single(S), Double(D), Triple(T) 영역이 존재, 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산

// 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 첫 번째 스타상(*)의 점수만 2배가 된다
//스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다.
// 스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)

// 아차상(#) 당첨 시 해당 점수는 마이너스된다.
// 스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.
// 0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환

function solution(dartResult) {
  var answer = 0;
  let arr = [];
  let score = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (!isNaN(dartResult[i])) {
      score = Number(dartResult[i - 1]) === 1 ? 10 : Number(dartResult[i]);
    } else if (dartResult[i] === 'S') {
      arr.push(score);
    } else if (dartResult[i] === 'D') {
      arr.push(Math.pow(score, 2));
    } else if (dartResult[i] === 'T') {
      arr.push(Math.pow(score, 3));
    } else if (dartResult[i] === '*') {
      arr[arr.length - 2] = arr[arr.length - 2] * 2;
      arr[arr.length - 1] = arr[arr.length - 1] * 2;
    } else if (dartResult[i] === '#') {
      arr[arr.length - 1] = arr[arr.length - 1] * -1;
    }
  }
  answer = arr.reduce((acc, cur) => acc + cur);
  return answer;
}

solution('1D2S#10S'); //9
solution('1D2S0T'); //3
solution('1S*2T*3S'); // 23
solution('1D#2S*3S'); // 5
solution('1T2D3D#'); //  -4
solution('1D2S3T*'); // 59

//  총 3번의 기회로 구성
// 점수는 0점~10점
//  Single(S), Double(D), Triple(T) 영역이 존재, 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산

// 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 첫 번째 스타상(*)의 점수만 2배가 된다
//스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다.
// 스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)

// 아차상(#) 당첨 시 해당 점수는 마이너스된다.
// 스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.
// 0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환

function solution(dartResult) {
  var answer = 0;
  let score = 0;
  let arr = [];

  for (let i = 0; i < dartResult.length; i++) {
    if (!isNaN(dartResult[i])) {
      score = Number(dartResult[i - 1]) === 1 ? 10 : Number(dartResult[i]);
    } else if (dartResult[i] === 'S') {
      arr.push(score);
    } else if (dartResult[i] === 'D') {
      arr.push(Math.pow(score, 2));
    } else if (dartResult[i] === 'T') {
      arr.push(Math.pow(score, 3));
    } else if (dartResult[i] === '*') {
      arr[arr.length - 2] = arr[arr.length - 2] * 2;
      arr[arr.length - 1] = arr[arr.length - 1] * 2;
    } else if (dartResult[i] === '#') {
      arr[arr.length - 1] = arr[arr.length - 1] * -1;
    }
  }
  answer = arr.reduce((acc, cur) => acc + cur);
  return answer;
}

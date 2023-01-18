// x의 모든 0을 제거합니다.
// x의 길이를 c라고 하면 x를 c를 2진법으로 표현한 문자열로 바꿉니다.
// s가 1이 될때까지 반복해주고, 이진변환 횟수와, 총 제거된 0의 개수를 return

function solution(s) {
  var answer = [];
  let zeroCount = 0;
  let count = 0;
  // 1. (2,3,4)를  s가 '1'이 될떄까지 반복해준다.
  // 2. count를 1번 세준다.
  // 3. item이 0이면 zeroCount를 +1 해준뒤, 0을 지워준다.
  // 4. 0을 지운 배열을 문자열로 바꾼뒤 총 길이를 2진법으로 바꿔준다.

  while (s !== '1') {
    count++;
    s = [...s]
      .map((item) => {
        if (item === '0') {
          zeroCount++;
          return;
        }
        return item;
      })
      .join('')
      .length.toString(2);
  }
  return [count, zeroCount];
}

solution('110010101001'); // [3,8]
solution('01110'); // [3,3]
solution('1111111'); // [4,1]

// 다른 사람의 코드
// 정규 표현식을 사용해서 0을 바꿔줬다.

function solution(s) {
  var answer = [0, 0];
  let zeroCount = 0;
  let count = 0;

  while (s !== '1') {
    count++;

    s = [...s]
      .map((item) => {
        if (item === '0') {
          zeroCount++;
          return;
        }
        return item;
      })
      .join('').length;

    s = s.toString(2);
  }

  return [count, zeroCount];
}

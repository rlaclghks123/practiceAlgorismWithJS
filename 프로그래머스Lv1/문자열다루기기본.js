// 문자열의 길이가 4 혹은 6이고, 숫자로만 구성되어 있는지 확인해주는 함수를 return
// 4혹은 6, 숫자로만 구성되어 있으면 true,  아니면 false

function solution(s) {
  var answer = true;
  const reg = /^[0-9]+$/;
  const len = s.length;

  // 1. 정규표현식을 통해 숫자가 이면서, 문자열의 길이가 4 또는 6인 경우 true, 아닌경우 false를 출력
  if (reg.test(s) && (len === 4 || len === 6)) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}

solution('a234'); //false

solution('1234'); // true

solution('12a34'); // true

solution('12a34"4"'); // true

// 다른사람의 코드
// 정규식에서 길이 제한도 있다는걸 알게되었다.  숫자 \d , 길이 {6}

function alpha_string46(s) {
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}

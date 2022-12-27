// numbers의 요소인 영어를 정수로 바꿔 return한다.
// numbers는 "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" 들이 공백 없이 조합되어 있습니다.
function solution(numbers) {
  var answer = '';
  const numbersWithEng = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  // 1. numbersWithEng의 길이만큼 반복하며, 영어로된 숫자를 기준으로 나눠준뒤, index값을 추가해준다.
  for (let i = 0; i < numbersWithEng.length; i++) {
    numbers = numbers.split(numbersWithEng[i]).join(i);
  }

  // 2. 출력한다.
  return Number(numbers);
}

solution('onetwothreefourfivesixseveneightnine'); //123456789

solution('onefourzerosixseven'); //14067

solution('zeroonefourzerosixseven'); //14067

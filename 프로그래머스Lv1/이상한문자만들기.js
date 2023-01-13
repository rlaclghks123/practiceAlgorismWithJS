// s는 한개 이상의 단어로 구성, 각 단어는 공백으로 구분
// 각 단어의 짝수번째 알파벳은 대문자로
// 각 단어의 홀수번째 알파벳은 소문자로 바꾼 문자열을 return
// 0번째 문자는 짝수로하며, 짝/홀수는 문자열 전체를 기준이 아닌 각 단어를 기준으로 한다.

function solution(s) {
  var answer = '';

  // 1. 문자열을 공백을 기준으로 분리해준다.
  answer = s
    .split(' ')

    // 2. 각 문자열의 공백을 기준으로 나눠 배열에 담아준다.
    .map((itemStr) => {
      return (
        itemStr
          .split('')

          // 3. 각 단어를 ''를 기준으로 나눠 한글자씩 확인한다.
          .map((itemWord, index) => {
            // 4. 짝수인경우 대문자로 바꾼다.
            if (index % 2 === 0) return itemWord.toUpperCase();

            // 5. 홀수인 경우 소문자로 바꾼다.
            return itemWord.toLowerCase();
          })
          // 6. 바꾼 요소를 가진 배열을 문자열로 바꿔준다.
          .join('')
      );
    })
    // 7. 각 단어를 담은 배열을 ' '을 기준으로 다시 문자열로 바꾼다.
    .join(' ');

  return answer;
}

solution('try hello world'); // 	"TrY HeLlO WoRlD"

// 다른 사람의 코드
// 정규표현식을 사용해서 replace로 단어를 바꿔주었다. (\w)(\w) => 연속된 두 문자를 의미
// 단 속도가 느리다고 한다.

function toWeirdCase(s) {
  return s.toUpperCase().replace(/(\w)(\w)/g, function (a) {
    return a[0].toUpperCase() + a[1].toLowerCase();
  });
}

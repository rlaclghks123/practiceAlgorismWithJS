// 각 알파벳을 일정 거리만큼 밀어서 다른 알파벳으로 바꾸는걸 시저 암호라고 함
// Ex) AB는 1만큼 밀면 BC가 되고, 3만큼 밀면 DE가 된다. z는 1만큼 밀면 a가 된다.
// 문자열 s를 거리 n만큼 민 암호문을 만드는 함수를 return

function solution(s, n) {
  var answer = '';

  // 1. 문자열을 각 알파벳으로 나눠 배열에 담아준다.
  answer = s.split('').map((item) => {
    // 2. 각 알파벳을 돌면서 아스키코드로 바꿔 n의 값을 더해준다.

    let newWord = item.charCodeAt(0) + n;
    // 2-1 공백인 경우 공백을 출력한다.
    if (item === ' ') return ' ';
    // 3. 소문자인 경우 소문자는 97~122이다. 따라서 123이 넘어가면 97로 바꿔준다.
    else if (item.charCodeAt(0) <= 122 && newWord >= 123) {
      newWord = newWord - 26;
    }

    // 4. 대문자인 경우,  대문자는 65~90이다. 따라서 91이 넘어가면 65로 바꿔준다.
    else if (newWord >= 91 && item.charCodeAt(0) <= 90) {
      newWord = newWord - 26;
    }

    // 5. 아스키코드르 문자로 바꿔준다.
    return String.fromCharCode(newWord);
  });

  // 6. 문자열로 바꿔준다.

  return answer.join('');
}

solution('AB', 1); // 	"BC"

solution('z', 1); // "a"

solution('a B z', 4); // "e F d"

// 다른사람의 코드
// chars의 문자열에 소문자와 대문자 모두 2번씩 넣어두고 기존의 값에 n을 더한 값을 찾아준다.
// 만약 n의 범위가 커진다면 이 방법은 못쓸듯
function solution(s, n) {
  var chars =
    'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          ';
  return s
    .split('')
    .map((e) => chars[chars.indexOf(e) + n])
    .join('');
}

// my_string의 문자열을 모두 소문자로 바꾸고, 알파벳 순서대로 정렬한 문자열을 return

function solution(my_string) {
  var answer = '';

  // 1. 문자열을 모두 소문자로 바꾼다.
  const temp = [...my_string].map((char) => {
    if (char.charCodeAt() < 97) return String.fromCharCode(char.charCodeAt() + 32);
    return char;
  });

  // 2. 문자열을 순서대로 정렬한다.
  answer = temp
    .sort((a, b) => {
      return a.localeCompare(b);
    })
    .join('');

  // 3. 정렬한 문자열을 출력한다.
  return answer;
}

solution('Bcad'); // 'abcd';

solution('heLLo'); //"ehllo"

solution('Python'); //"hnopty"

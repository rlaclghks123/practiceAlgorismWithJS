function solution(my_string, letter) {
  var answer = '';

  //my_string의 문자열에서 letter를 제거
  answer = [...my_string]
    // 1. my_string을 배열로 만든다.
    .map((char) => {
      const arr = [];

      // 2. letter와 같지 않은 값들을 새로운 배열에 담아준다.
      if (char !== letter) {
        arr.push(char);
      }
      return arr;
    })

    // 3. 배열을 문자열로 바꿔준다.
    .join('');

  return answer;
}

solution('abcdef', 'f'); //"abcde"
solution('BCBdbe', 'B'); //"Cdbe"

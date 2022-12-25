// 대문자는 소문자로, 소문자는 대문자로 변환

function solution(my_string) {
  var answer = '';

  // 1. 문자열을 문자로 추출한다.
  my_string.split('').forEach((char) => {
    const ascii = char.charCodeAt();

    // 2-1. 문자가 대문자인경우 처리를한다. 대문자는 65~90까지
    if (ascii >= 65 && ascii <= 90) {
      // 2-2 대문자인경우 32를 더해서 fromCharCode를 통해 문자로 바꿔준다.
      answer += String.fromCharCode(ascii + 32);
    }

    // 3-1. 문자가 소문자인경우 처리를한다. 소문자는 97에서 122까지이다.
    else {
      // 3-2 소문자인경우 32를 빼서 fromCharCode를 통해 문자로 바꿔준다.
      answer += String.fromCharCode(ascii - 32);
    }
  });
  // 3. 문자에 따라 아스키코드에 있는 10진수의 값을

  return answer;
}

solution('cccCCC'); //"CCCccc"

solution('abCdEfghIJ'); //	"ABcDeFGHij"

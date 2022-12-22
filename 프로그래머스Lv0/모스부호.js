// letter를 morse에 맞게 해석하여 영어 소문자로 바꾼 문자열

function solution(letter) {
  var answer = '';
  const morse = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
  };
  // 1. ' '을 기준으로 값을 분리해서 배열에 담아준다.
  letter.split(' ').forEach((item) => {
    // 2. 배열을 돌면서 morse와 같은 값이 있다면, 해석된 문자를 answer에 담아준다.
    if (Object.keys(morse).includes(item)) {
      answer += morse[item];
    }
  });

  // 3. answer를 출력한다.
  return answer;
}

solution('.... . .-.. .-.. ---'); //"hello"

solution('.--. -.-- - .... --- -.'); //"python"

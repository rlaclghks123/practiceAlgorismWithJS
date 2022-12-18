function solution(my_string) {
  //모음을 제거한다.  a e i o u
  var answer = '';

  //1. 모음들을 배열로 만들어, 모음이 my_string에 포함되어 있는지 확인한다.
  ['a', 'e', 'i', 'o', 'u'].forEach((char) => {
    while (my_string.includes(char)) {
      //2. 포함되어 있는경우 빈값으로 바꿔준다.
      my_string = my_string.replace(char, '');
    }
  });

  return (answer = my_string);
}

solution('bus'); //"bs"

solution('nice to meet you'); // "nc t mt y"

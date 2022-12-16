function solution(my_string) {
  //my_string안의 모든 자연수들의 합을 return
  var answer = 0;

  // 1.정규표현식을 사용하여 1부터 9까지의 자연수만 추출한다.
  my_string = my_string.replace(/[^1-9]/g, '');

  // 2. 모든 합을 구한다.
  answer = my_string.split('').reduce((acc, cur) => acc + Number(cur), 0);

  return answer;
}

solution('aAb1B2cC34oOp'); //10

solution('1a2b3c4d123'); //16

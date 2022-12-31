// my_string안의 자연수들의 합을 return
function solution(my_string) {
  var answer = 0;

  // 1. my_string의 값중 자연수만 빼준다.
  const reg = my_string.split(/[^0-9]/g);

  // 2. 모든 배열의 요소를 다 더해준값을 출력한다.
  answer = reg.reduce((acc, cur) => {
    return (acc += Number(cur));
  }, 0);

  //
  return answer;
}

solution('aAb1B2cC34oOp'); // 37

solution('1a2b3c4d123Z'); // 133

// my_string안에 있는 숫자만 골라 오름차순으로 정렬한 리스트를 return
function solution(my_string) {
  var answer = [];

  // 1. my_string에서 숫자만 골라낸다.
  my_string.split('').forEach((char) => {
    if (!isNaN(char)) answer.push(Number(char));
  });

  // 2. 숫자만 담은 배열을 오름차순으로 정렬해준다.
  answer.sort((a, b) => {
    return a - b;
  });

  return answer;
}

solution('hi12392'); //[(1, 2, 2, 3, 9)];

solution('p2o4i8gj2'); //[(2, 2, 4, 8)];

solution('abcde0'); // [0];

function solution(array) {
  //중앙값을 구한다.
  var answer = 0;

  //1. 오름차순으로 정렬해준다.
  array.sort((a, b) => {
    return a - b;
  });

  //2. length를 2로 나눠준 값의 몫의 번째 숫자를 찾아준다.
  const center = Math.floor(array.length / 2);
  answer = array[center];

  return answer;
}

solution([1, 2, 7, 10, 11]); //7

solution([9, -1, 0]); //0

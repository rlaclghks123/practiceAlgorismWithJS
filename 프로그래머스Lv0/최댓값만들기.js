function solution(numbers) {
  var answer = 0;
  const length = numbers.length - 1;
  // 1. 오름차순으로 정렬해준다.
  numbers = numbers.sort((a, b) => {
    return a - b;
  });

  // 2. 가장큰수, 두번쨰로 가장큰수를 곱한다.
  answer = numbers[length] * numbers[length - 1];
  return answer;
}

solution([1, 2, 3, 4, 5]); //20

solution([0, 31, 24, 10, 1, 9]); //744

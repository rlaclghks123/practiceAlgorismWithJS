function solution(sides) {
  // 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.

  var answer = 0;

  // 1. 3변을 길이를 기준으로 오름차순을 한다.
  sides = sides.sort((a, b) => {
    return a - b;
  });

  const first = sides[0];
  const second = sides[1];
  const third = sides[2];

  // 2. 가장 긴 변의 길이가 다른 두 변의 길이의 합보다 작을경우 1 아닌경우 2를 리턴

  if (first + second > third) {
    answer = 1;
  } else {
    answer = 2;
  }

  return answer;
}

solution([1, 2, 3]); //2

solution([3, 6, 2]); //2

solution([199, 72, 222]); //1

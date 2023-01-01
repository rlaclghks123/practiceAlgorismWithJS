// 정수를 담고있는 arr의 평균값을 return

function solution(arr) {
  var answer = 0;

  // 1. reduce를 통해 각 요소를 모두 더해준다.
  answer = arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  // 2. 더한값을 arr의 총 길이로 나눠준다.
  return answer / arr.length;
}

solution([1, 2, 3, 4]); //2.5
solution([5, 5]); // 5

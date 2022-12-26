// numbers의 배열에서 k번째 공을 던지는 사람의 번호를 return
// 단 공은 1번부터 던지며, 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있다.

function solution(numbers, k) {
  var answer = 0;

  // ((k-1) * 2)% numbers.length 번째의 숫자를 구한다.
  let index = ((k - 1) * 2) % numbers.length;

  answer = numbers[index];
  return answer;
}

solution([1, 2, 3, 4], 2); // 3   (k-1) * 2  => 2

solution([1, 2, 3, 4, 5, 6], 5); //	3   (k-1) * 2  => 8

solution([1, 2, 3], 3); //		2  (k-1) * 2  => 4

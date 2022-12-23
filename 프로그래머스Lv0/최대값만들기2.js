// numbers의 원소 중 두개를 곱해 만들 수 있는 최대값을 return
// number의 원소는 -10,000<=nubmers<=10,000
// numbers의 길이는 2<=numbers.length<=100
// 시간복잡도 O(n^2) => 100,000,000

function solution(numbers) {
  var answer = [];

  // 1. 첫번째 수를 골라준다.
  for (let i = 0; i < numbers.length; i++) {
    // 2. 두번째 수를 골라준다.
    for (let j = 0; j < numbers.length; j++) {
      // 3. 첫번째 수와 두번째수가 같지 않은 경우 두 수의 곱을 answer배열에 담아준다.
      if (i !== j) answer.push(numbers[i] * numbers[j]);
    }
  }

  // 4. 두수의 곱중 최대값을 return 한다.
  return Math.max(...answer);
}

solution([1, 2, -3, 4, -5]); //	15

solution([0, -31, 24, 10, 1, 9]); //240

solution([10, 20, 30, 5, 5, 20, 5]); //600

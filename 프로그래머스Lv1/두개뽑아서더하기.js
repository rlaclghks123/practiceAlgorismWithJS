// 서로 다른 인덱스에 있는 두개의 수를 뽑아 더해서 만들 수 있는 모든수를 배열에 담는다
// 오름차순으로 정렬한다.

function solution(numbers) {
  var answer = [];
  let len = numbers.length;

  // 1. 2중 for문을 통해 모든 요소를 다 더해준다.
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }

  // 2. set을 통해 중복을 제거한뒤, 오름차순으로 정렬해준다.
  answer = [...new Set([...answer])].sort((a, b) => a - b);
  return answer;
}

solution([2, 1, 3, 4, 1]); // [2,3,4,5,6,7]

solution([5, 0, 2, 7]); // 	[2,5,7,9,12]

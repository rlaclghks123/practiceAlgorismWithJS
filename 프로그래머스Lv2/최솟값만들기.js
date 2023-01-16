// A,B에서 각각 한 개의 숫자를 뽑아 두 수를 곱합니다.
// 배열의 길이만큼 반복하여, 곱한 값을 누적하여 더합니다.
// 이때 누적된 값이 최소가 되도록 만드는것이 목표이며, 한번 뽑으면 다시 뽑을 수 없음
// A,B의 크기는 1000

function solution(A, B) {
  var answer = 0;

  // A의 최솟값과, B의 최댓값의 곱의 누적이 최솟값. 따라서 A는 오름차순, B는 내림차순으로 정렬 해준다.
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }
  return answer;
}

solution([1, 4, 2], [5, 4, 4]); //29

solution([1, 2], [3, 4]); // 10

// 다른사람의 코드
// reduce를 통해 값을 더해줬다.

function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((total, val, idx) => total + val * B[idx], 0);
}

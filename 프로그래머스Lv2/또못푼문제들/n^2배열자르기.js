// n*n의 2차 배열을 만들어 모든칸을 i로 채움
// 1행~n행을 잘라 이어붙인 새로운 1차원 배열을 만듦
// 새로운 1차원 배열의 arr[left], arr[left+1]... arr[right]만 남기고 지움
// 이렇게 만든 arr배열을 return

function solution(n, left, right) {
  var answer = [];

  //left 가 right 이하인 경우 계속 찾아준다.
  while (left <= right) {
    // left/n과 left%n 중 최댓값의 +1값을 answer에 담아준다.
    answer.push(Math.max(Math.floor(left / n), left % n) + 1);

    // left에 값을 더해준다.
    left++;
  }
  return answer;
}

function solution(n, left, right) {
  let ans = [];

  // left가 right의 이하일때 계속 반복하여 구함
  while (left <= right) {
    // 몫, 나머지를 구해준다.
    let quotient = Math.floor(left / n);
    let remainder = left % n;
    left++;

    // 몫, 나머지 중 더 큰수 +1 이 규칙
    ans.push(Math.max(quotient, remainder) + 1);
  }
  return ans;
}

//  몫: left / n   나머지 : left % n        left           둘 중 큰놈+1
//     1                3                 7                 4
//     2                0                 8                 3
//     2                1                 9                 3
//     2                2                 10                3
//     2                3                 11                4
//     3                0                 12                4
//     3                1                 13                4
//     3                2                 14                4

solution(3, 2, 5); // [3,2,2,3]
solution(4, 7, 14); // 	[4,3,3,3,4,4,4,4]

// 1 2 3
// 2 2 3
// 3 3 3

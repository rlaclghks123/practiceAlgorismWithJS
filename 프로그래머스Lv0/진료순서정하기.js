// emergency의 정수값을 기준으로 응급도가 높은 순서대로 정렬한 배열을 return

function solution(emergency) {
  var answer = [];

  // 1. emergency를 내림차순으로 정렬한 배열을 만든다.
  const sorted = [...emergency].sort((a, b) => {
    return b - a;
  });

  // 2. sorted 배열의 요소에서 emergency의 요소값의 index값 +1 을 찾아준다.
  answer = emergency.map((item) => {
    return sorted.indexOf(item) + 1;
  });

  return answer;
}

solution([3, 76, 24]); //	[3, 1, 2]

// solution([1, 2, 3, 4, 5, 6, 7]); //[7, 6, 5, 4, 3, 2, 1]

// solution([30, 10, 23, 6, 100]); //[2, 4, 3, 5, 1]

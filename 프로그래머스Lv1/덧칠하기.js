//  페인트가 칠해진 길이가 n미터인 벽, 벽에 페인트를 칠하는 롤러의 길이는 m미터이고, 롤러로 벽에 페인트를 한 번 칠하는 규칙은 다음과 같습니다.
// 롤러가 벽에서 벗어나면 안 됩니다.
// 구역의 일부분만 포함되도록 칠하면 안 됩니다.
// 다시 페인트를 칠하기로 정한 구역들의 번호가 담긴 정수 배열 section
// 롤러로 페인트칠해야 하는 최소 횟수를 return 하는 solution 함수를 작성해 주세요.

// 1. n크기의 모두 true로 가득찬 배열을 하나 만든다.
// 2. section을 돌면서 적혀있는 index값을 1에서 만든 배열의 index-1값에 false로 만들어준다. -> section은 1부터 시작하기 때문
// 3. 1,2에서 수정한 배열을 순회하면서 false이면서 범위를 벗어나지 않는경우 룰러로 페인트를 칠한다.
// 3-1. for문을 통해 i번째에 룰러의 길이인 m만큼 반복하여 모두 true로 만들어준다.
// 3-2. count+1을 해준다.
// 4. 만약 다 칠해지지 않은 곳이 하나라도 있다면 +1을 더해준다.
// 5. 최종적으로 count한 값을 출력한다.

function solution(n, m, section) {
  const isPaintArr = Array.from({ length: n }, () => true);
  let answer = 0;

  section.forEach((item) => (isPaintArr[item - 1] = false));

  isPaintArr.forEach((item, i) => {
    if (!item && i + m <= n) {
      for (let j = i; j < i + m; j++) {
        isPaintArr[j] = true;
      }
      answer += 1;
    }
  });

  const isDone = isPaintArr.every((item) => item);
  if (!isDone) answer += 1;

  return answer;
}

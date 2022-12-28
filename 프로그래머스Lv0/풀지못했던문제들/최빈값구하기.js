// 최빈값을(가장 자주 나오는 값) return 한다.
// 최빈값이 여러 개면 -1을 return

function solution(array) {
  var answer = 0;

  // 1. map을 사용하여 값, 빈도값 을 저장해준다.

  // 1-1 map을 생성 및 초기화 해준다.
  const map = new Map();
  for (let i = 0; i <= Math.max(...array); i++) {
    map.set(i, 0);
  }

  // 1-2 map에 값, 빈도값을 채워넣어준다.
  for (let i = 0; i < array.length; i++) {
    map.set(array[i], map.get(array[i]) + 1);
  }

  // 2 빈도값으로 배열을 하나 만들어준다.
  const count = Array.from(map.values());

  // 3. 최대값을 찾아주고, 최대값이 여러개 있다면 -1을 return 한다.
  const max = Math.max(...count);

  if (count.indexOf(max) !== count.lastIndexOf(max)) {
    answer = -1;
  } else {
    answer = count.indexOf(max);
  }

  return answer;
}

solution([1, 2, 3, 3, 3, 4]); // 3

solution([0, 1, 2, 2, 3, 3, 3, 4]); // 3

solution([1, 1, 1, 2, 3, 3, 3, 4]); // -1

solution([1, 2, 2, 2, 3, 3, 4]); // 2

solution([1, 1, 2, 2]); // -1

solution([1]); //1

solution([]); //-1

solution([1, 1]); //-1

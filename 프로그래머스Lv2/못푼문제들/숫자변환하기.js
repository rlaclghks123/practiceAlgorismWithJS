// 자연수 x를 y로 변환

// x에 n을 더합니다
// x에 2를 곱합니다.
// x에 3을 곱합니다.

// x,y,n이 매개변수
// x를 y로 변환하기 위해 필요한 최소 연산 횟수를 return
// x를 y로 만들 수 없다면 -1을 return

function solution(x, y, n) {
  let count = 0;

  // 1. x를 중복된 값을 피하기 위해 set에 담아줍니다.
  let set = new Set([x]);

  // 2. set에 값이 존재할 경우 반복해줍니다.
  while (set.size > 0) {
    // 3. 만약 set에 y가 존재한다면 count을 return 해줍니다.
    if (set.has(y)) return count;

    // 4. 그렇지 않다면 기존의 Set에 존재하던 값의 *3, *3, +n한 값을 새로운 set에 담아줍니다.
    let next = new Set();
    for (value of set.values()) {
      if (value <= y) next.add(value * 3);
      if (value <= y) next.add(value * 2);
      if (value <= y) next.add(value + n);
    }

    // 5. 새로운 set으로 초기화해주고, count++를 해줍니다.
    set = next;
    count++;
  }
  // 6. 발견하지 못했다면 -1을 출력해줍니다.
  return -1;
}

solution(10, 40, 5); //	2

solution(10, 40, 30); //	1

solution(2, 5, 4); //-1

// N개의 마을 중에서 K 시간 이하로 배달이 가능한 마을에서만 주문을 받으려고 합니다.
// 마을의 개수 N, 각 마을을 연결하는 도로의 정보 road, 음식 배달이 가능한 시간 K 일 때
// 음식 주문을 받을 수 있는 마을의 개수를 return

function solution(N, road, K) {
  // 1.  최댓값을(50만) 담은 배열을 만들어준다. why? => 최소값을 구하기 위해
  const arr = Array(N + 1).fill(500000);

  // 2. 기본 배열을 초기화해준다.
  const map = Array.from({ length: N + 1 }, () => []);

  // 3. road를 돌면서 그래프를 완성해준다.
  road.forEach((item) => {
    const [a, b, c] = item;
    map[a].push({ to: b, cost: c });
    map[b].push({ to: a, cost: c });
  });

  // 4. 큐, arr에 처음값을 담아준다.
  let q = [{ to: 1, cost: 0 }];
  arr[1] = 0;
  // 5. q가 빌때까지 반복해준다.
  while (q.length) {
    // 5-1 q에서 값을 뺀다.
    const { to } = q.pop();

    // 5-2 map의 to를 돌면서 모든 경로를 찾는다.
    map[to].forEach((next) => {
      //5-3 만약 arr의 다음값이  arr의 현재값 + 현재-다음값으로 가는 cost 보다 크다면 바꿔준다.
      if (arr[next.to] > arr[to] + next.cost) {
        arr[next.to] = arr[to] + next.cost;
        // 5-4 next를 큐에 담아준다.
        q.push(next);
      }
    });
  }
  // 6 arr를 filter를 통해 k이하인 경우만 찾아준다.
  return arr.filter((item) => item <= K).length;
}

function solution(N, road, K) {
  const arr = Array(N + 1).fill(500000);
  const map = Array.from({ length: N + 1 }, () => []);

  road.forEach((item) => {
    const [a, b, c] = item;
    map[a].push({ to: b, cost: c });
    map[b].push({ to: a, cost: c });
  });

  const q = [{ to: 1, cost: 0 }];
  arr[1] = 0;

  while (q.length) {
    const { to } = q.pop();

    map[to].forEach((next) => {
      console.log(arr);
      if (arr[next.to] > arr[to] + next.cost) {
        arr[next.to] = arr[to] + next.cost;
        q.push(next);
      }
    });
  }
  return arr.filter((item) => item <= K).length;
}
solution(
  5,
  [
    [1, 2, 1],
    [2, 3, 3],
    [5, 2, 2],
    [1, 4, 2],
    [5, 3, 1],
    [5, 4, 2],
  ],
  3
); //	4

solution(
  6,
  [
    [1, 2, 1],
    [1, 3, 2],
    [2, 3, 2],
    [3, 4, 3],
    [3, 5, 2],
    [3, 5, 3],
    [5, 6, 1],
  ],
  4
); //	4

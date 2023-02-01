// 각 조각에 동일한 가짓수의 토핑이 올라가면 공평하게 롤케이크가 나누어진 것으로 생각
// 롤케이크를 공평하게 자르는 방법의 수를 return
// 어떤 경우에는 롤케이크를 공평하게 나누지 못할 수도 있습니다. => 0 return

function solution(topping) {
  let answer = 0;
  // 1. 총 토핑을 담을 맵을 만들어준다.
  const totalMap = new Map();

  // 2. 형이 가질 토핑을 담을 맵을 만들어준다.
  const bro = new Map();

  // 3. totalMap에 모든 토핑을 담아줍니다.
  topping.forEach((cake) => {
    totalMap.set(cake, (totalMap.get(cake) || 0) + 1);
  });

  // 4. topping을 돌면서 totalMap에서 형에게 나눠줍니다.
  topping.forEach((cake) => {
    // 4-1 totalMap에 cake가 있다면 -1을 해줍니다.
    totalMap.set(cake, totalMap.get(cake) - 1);

    // 4-2 cake를 형에게 줍니다.
    bro.set(cake, true);

    // 4-3 만약 totalMap에 케이크가 없다면 해당 케이크를 삭제합니다.
    if (!totalMap.get(cake)) totalMap.delete(cake);

    // 4-4 totalMap의 크기와 형의 크기가 같다면 answer에 ++ 해줍니다.
    if (totalMap.size === bro.size) answer++;

    // 4-5 totalMap의 크기가 형의 크기보다 작다면 멈춰줍니다(같아질수 없기 때문)
    if (totalMap.size < bro.size) return;
  });

  return answer;
}

solution([1, 2, 1, 3, 1, 4, 1, 2]); // 2

solution([1, 2, 3, 1, 4]); // 0

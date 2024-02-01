// 1. clothes를 순회하면서 clothesMap에 { 옷의 종류, [옷 이름] } 형태로 담아줍니다.
// 2. clothesMap의 옷이름 배열(map.values)을 추출합니다.

// 3. 2에서 추출한 옷이름 배열을 reduce를 통해 (옷이름 배열의 길이 +1)을 모두 곱해줍니다.
// 3-1. 여기서 (길이 +1)을 해주는 이유는 안입는 경우까지 추가하기 위함입니다.
// 3-2. 예를들어 하의에 [청바지]가 있다면 청바지를 입는 경우, 하의에서 아무것도 입지 않는 경우를 추가한겁니다.

// 4. 최종적으로 모든 경우의수에서 -1을 출력합니다.
// 4-1. 모든 경우의수에서 -1을 해주는 이유는 하루에 최소 한 개의 의상은 입어야되기 때문입니다.
// 4-2. 3-1에서 +1을 해줌으로서 입지 않은 경우를 추가했는데 모두 아무것도 안입는 경우를 제외하기 위해 -1을 해줍니다.

function solution(clothes) {
  const clothesMap = new Map();

  clothes.forEach(([name, type]) => clothesMap.set(type, [...(clothesMap.get(type) || []), name]));

  const sum = [...clothesMap.values()].reduce((acc, cur) => acc * (cur.length + 1), 1);
  return sum - 1;
}

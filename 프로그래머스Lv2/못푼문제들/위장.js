// 매일 다른옷을 조합하여 위장
// clothes는 의상이름, 의상 종류로 이루어져 있음
// 하루에 최소 한 개 의상은 입음
// 이름이 같은 의상은 존재하지 않음

function solution(clothes) {
  const map = new Map();

  // map에 type별로 값을 담아준다. 만약 type이 존재할 경우 +1해주고, 존재하지 않을경우 옷을 입지 않은 경우가 있기 때문에 0이 아닌 1을 담아준다.
  clothes.forEach((item) => {
    const [name, type] = item;
    map.set(type, (map.get(type) || 1) + 1);
  });

  // map에서 가져온 개수들을 곱해준뒤, 최종적으로 -1을 해준다  왜 why? 아무것도 입지 않은 경우를 제외
  let answer = [...map.values()].reduce((acc, cur) => acc * cur, 1);
  return answer - 1;
}

solution([
  ['yellow_hat', 'headgear'],
  ['blue_sunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
]); // 5

solution([
  ['crow_mask', 'face'],
  ['blue_sunglasses', 'face'],
  ['smoky_makeup', 'face'],
]); // 3

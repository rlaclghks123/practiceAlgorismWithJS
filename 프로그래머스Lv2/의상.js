// 1. map을 만들어줍니다. [type, [옷들]] 형태로 => makeClosetFromClothes(clothes);
// 2.  1에서 만든 closet를 통해 ((옷들의 개수+1) * type 개수) -1 로 계산 => countCombination(closet)

function solution(clothes) {
  let closet = makeClosetFromClothes(clothes);
  return countCombination(closet);
}

function makeClosetFromClothes(clothes) {
  const map = new Map();

  clothes.forEach((item) => {
    const [name, type] = item;
    map.set(type, map.get(type) ? [...map.get(type), name] : [name]);
  });

  return map;
}

function countCombination(closet) {
  return [...closet.values()].reduce((a, c) => a * (c.length + 1), 1) - 1;
}

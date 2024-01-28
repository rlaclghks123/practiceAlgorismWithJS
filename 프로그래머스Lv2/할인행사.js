// 1. map자료구조로 [want,number] 형태로 list를 만든다.
// 2. discount를 순회하면서 i번째부터 i+10개씩 확인하여 원하는 제품을 다 살수있는지 확인하여 가능하다면 count한다.
// 3. 원하는 제품을 다 살 수 있는 총 날짜를 출력한다.

function solution(want, number, discount) {
  let ans = 0;
  const wantList = new Map();
  want.forEach((item, idx) => wantList.set(item, number[idx]));

  discount.forEach((_, i) => (checkBuy(wantList, discount, i) ? ans++ : ans));

  return ans;
}

function checkBuy(wantList, discount, idx) {
  const newWantList = new Map(wantList);

  for (let i = idx; i < idx + 10; i++) {
    const item = discount[i];

    if (!item) return false;
    if (newWantList.has(item)) newWantList.set(item, newWantList.get(item) - 1);
    if (newWantList.get(item) === 0) newWantList.delete(item);
  }

  return newWantList.size === 0 ? true : false;
}

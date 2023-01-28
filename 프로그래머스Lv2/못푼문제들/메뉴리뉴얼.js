// 가장 많이 함께 주문한 단품메뉴들을 코스요리 메뉴로 구성하기로 했습니다.
// 단, 코스요리 메뉴는 최소 2가지 이상의 단품메뉴로 구성
// 최소 2명 이상의 손님으로부터 주문된 단품메뉴 조합에 대해서만 코스요리 메뉴 후보에 포함

// 단품메뉴들이 문자열 형식으로 담긴 배열 orders
// 추가하고 싶어하는 코스요리를 구성하는 단품메뉴들의 갯수가 담긴 배열 course
// 새로 추가하게 될 코스요리의 메뉴 구성을 문자열 형태로 배열에 담아 return

// 문자열 형식으로 배열에 담아 사전 순으로 오름차순 정렬해서 return

function solution(orders, course) {
  let answer = [];

  // course안의 문자열의 개수만큼 문자열을 만들것 이기 때문에 forEach로 반복해준다.
  course.forEach((num) => {
    // 만든 문자열을 {문자열, 나타난 횟수} 담아주기 위해 map을 만들어준다.
    const menus = new Map();

    // 문자열을 담은 배열을 돌면서 하나씩 문자열을 확인해본다.
    orders.forEach((order) => {
      // 현재 문자열을 통해 만들 수 있는 모든 문자열을 돈다. 단 XY === YX 처리를 위해 sort로 정렬을 해준다.
      const combinations = getCombination(order.split('').sort(), num);

      // 현재 문자열로 만든 모든 새로운 문자열을 돌면서 map에 담아준다.
      combinations.forEach((combs) => {
        const comb = combs.join('');
        menus.set(comb, menus.has(comb) ? menus.get(comb) + 1 : 1);
      });
    });

    // 가장 많이 나온 횟수를 찾아준다.
    let populate = Math.max(...menus.values());

    // 가장 많이 나왔으면서, 최소 2명이상에게 나타난경우 answer에 담아준다.
    menus.forEach((count, menu, map) => {
      if (count === populate && count >= 2) {
        answer.push(menu);
      }
    });
  });

  // 오름차순으로 출력하기 위해 정렬을 해준다.
  return answer.sort();
}

// 하나의 문자열로 만들 수 있는 모든 문자열을 만드는 함수
function getCombination(arr, num) {
  const results = [];

  // 만약 횟수가 1인경우 현재 arr에 담긴 문자들을 []로 만들어 출력
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, origin) => {
    // arr에 담긴 문자를 돌면서 현재문자 이후의 문자들을 추출한다.
    const rest = origin.slice(index + 1);

    // 현재 문자 이후의 문자들로 새로운 문자를 만든다.
    const combinations = getCombination(rest, num - 1);

    // 만든 모든 새로운 문자들을 현재 문자와 합쳐준다.
    const attached = combinations.map((v) => [fixed, ...v]);
    if (attached.length === 0) return;

    // 현재 문자와 합친 새롭게 만든 문자들을 result에 담아준다.
    results.push(...attached);
  });

  return results;
}

function solution(orders, course) {
  let answer = [];

  course.forEach((num) => {
    const map = new Map();

    orders.forEach((str) => {
      let combinations = getCombination(str.split('').sort(), num);

      combinations.forEach((words) => {
        let newWords = words.join('');
        map.set(newWords, (map.get(newWords) || 0) + 1);
      });
    });

    let max = Math.max(...map.values());

    [...map].forEach((item) => {
      const [word, num] = item;
      if (num === max && num >= 2) {
        answer.push(word);
      }
    });
  });
  return answer.sort();
}

function getCombination(arr, num) {
  let result = [];
  if (num === 1) return arr.map((m) => [m]);

  arr.forEach((item, index, origin) => {
    let rest = origin.slice(index + 1);
    let combinations = getCombination(rest, num - 1);
    let newWords = combinations.map((word) => [item, ...word]);
    if (newWords.length === 0) return;

    result.push(...newWords);
  });
  return result;
}

// solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4]); // ["AC", "ACDE", "BCFG", "CDE"]

// solution(['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'], [2, 3, 5]); // ["ACD", "AD", "ADE", "CD", "XYZ"]

solution(['XYZ', 'XWY', 'WXA'], [2, 3, 4]); // ["WX", "XY"]

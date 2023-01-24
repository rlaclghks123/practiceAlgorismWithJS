// 일정한 금액을 지불하면 10일 동안 회원 자격을 부여
// 할인하는 제품은 하루에 하나씩만 구매가능
// 정현이는 원하는 제품과 수량이 할인하는 날짜와 10일 연속으로 일치할 경우에 맞춰서 회원가입

// 정현이가 원하는 제품 want, 원하는 제품의 수량 number, 할인하는 제품 discount
// 정현이가 원하는 제품을 모두 할인 받을 수 있는 회원등록 날짜의 총 일수를 return
// 가능한 날이 없으면 0을 return

function solution(want, number, discount) {
  let answer = 0;
  // 1. arr에 want를 num만큼 채워준다.
  const arr = [];
  want.forEach((item, i) => {
    for (let j = 0; j < number[i]; j++) {
      arr.push(item);
    }
  });

  // 2. arr를 알파벳순으로 정렬해준다.
  arr.sort();

  // 3. 1자리씩 증가하며 10자리씩 잘라서 정렬한뒤, arr와 비교해준다. 만약 두 배열이 같다면, answer에 값을 ++해준다.
  for (let i = 0; i < discount.length; i++) {
    let slice = discount.slice(i, i + 10);
    slice.sort();

    if (arr.every((item, i) => item === slice[i])) answer++;
  }
  return answer;
}

solution(
  ['banana', 'apple', 'rice', 'pork', 'pot'],
  [3, 2, 2, 2, 1],
  [
    'chicken',
    'apple',
    'apple',
    'banana',
    'rice',
    'apple',
    'pork',
    'banana',
    'pork',
    'rice',
    'pot',
    'banana',
    'apple',
    'banana',
  ]
); // 3

solution(
  ['apple'],
  [10],
  [
    'banana',
    'banana',
    'banana',
    'banana',
    'banana',
    'banana',
    'banana',
    'banana',
    'banana',
    'banana',
  ]
); // 0

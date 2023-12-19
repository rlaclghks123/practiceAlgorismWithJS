// 1. 놀이기구의 원래 이용로 price원
// 2. N번 째 이용한다면 원래 이용료의 N배를 받는다.  처음 100이었다면 두번째는 200
// 3. 놀이기구를 count번 타면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지 출력
// 4. 금액이 부족하지 않으면 0을 출력

function getTotalPrice(price, count) {
  let result = 0;

  for (let i = 1; i <= count; i++) {
    result += price * i;
  }

  return result;
}

function solution(price, money, count) {
  const totalPrice = getTotalPrice(price, count);

  return money >= totalPrice ? 0 : totalPrice - money;
}

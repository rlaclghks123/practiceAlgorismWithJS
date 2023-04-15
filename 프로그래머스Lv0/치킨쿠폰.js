// 치킨 10마리를 시켜먹으면 한마리 서비스로 받을 수 있다.
// 서비스로 한마리를 받을때 또한 쿠폰을 받는다.
// 총 서비스로 받는 치킨의 수를 return

function solution(chicken) {
  // 1.  coupon은 총 치킨의 수만큼 받는다.
  let coupon = chicken;

  let service = 0;

  // 2. 쿠폰이 10장 이상이라면 계속 반복
  while (coupon >= 10) {
    // 3. 서비스는 쿠폰 10장당 1개를 더해준다. 단 10장 미만인경우 버린다.
    service += Math.floor(coupon / 10);

    // 4. 쿠폰은 치킨 교환하고 나머지(10개 미만) + 10장 이상인경우 10장당 1개씩 추가해준다.
    coupon = Math.floor((coupon % 10) + coupon / 10);
  }

  return service;
}

// 틀린이유: 시간내에 풀지못했다.
// 다시풀기

function solution(chicken) {
  var answer = 0;
  let coupon = chicken;
  let service = 0;

  while (coupon >= 10) {
    service += Math.floor(coupon / 10);
    coupon = Math.floor(coupon / 10 + (coupon % 10));
  }

  return service;
}

function solution(chicken) {
  var answer = 0;
  let coupon = chicken;
  let service = 0;

  while (coupon >= 10) {
    service += Math.floor(coupon / 10);
    coupon = Math.floor((coupon % 10) + coupon / 10);
  }

  return service;
}

function solution(chicken) {
  let service = 0;
  let coupon = chicken;

  while (coupon >= 10) {
    service += Math.floor(coupon / 10);
    coupon = Math.floor((coupon % 10) + coupon / 10);
  }
  return service;
}

// 치킨 1마리 시키면 쿠폰 1장 발급
// 쿠폰 10장을 모으면 한마리 서비스, 서비스에도 쿠폰이 발급

function solution(chicken) {
  let service = 0;
  let coupon = chicken;

  while (coupon >= 10) {
    // 10마리당 서비스 1마리
    service += Math.floor(coupon / 10);

    // 남은쿠폰 = 치킨으로 바꿔 먹은 쿠폰 + 치킨으로 못바꿔먹은 쿠폰
    coupon = Math.floor(coupon / 10 + (coupon % 10));
  }
  return service;
}
solution(100); // 11

solution(1081); // 120

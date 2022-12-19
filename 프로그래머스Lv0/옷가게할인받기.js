function solution(price) {
  // 10만원 이상이면 5%, 30만원이상이면 10%, 50만원이상이면 20% 할인
  // price가 주어질때 지불해야 할 금액

  //1. 금액에 따라 할인이 되므로, 금액별로 조건을 먼저 나눠준다.
  var answer = 0;

  // 50만원 이상인경우 20%할인
  if (price >= 500000) {
    price -= price * 0.2;
  }

  // 30만원 이상인경우 10%할인
  else if (price >= 300000) {
    price -= price * 0.1;
  }

  // 10만원 이상인경우 5%할인
  else if (price >= 100000) {
    price -= price * 0.05;
  }

  // 2. 소수점 버린 정수만을 return 한다.
  return (answer = Math.floor(price));
}

solution(150000); // 142,500

solution(580000); //464,000

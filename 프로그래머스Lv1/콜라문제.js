// 빈병이 a개 미만이면 콜라를 못받음
// a병을 가져가면 b개를 주는 마트
// 총 몇개를 받는지 return

function solution(a, b, n) {
  var answer = 0;

  let service = 0;

  while (n >= a) {
    service += Math.floor(n / a) * b;
    n = Math.floor(Math.floor(n / a) * b + (n % a));
  }
  console.log(service);
  return service;
}

solution(2, 1, 20); // 	19

solution(3, 1, 20); // 	9

// 다른사람의 코드
// parseInt를 사용

function solution(a, b, n) {
  let answer = 0;
  while (n >= a) {
    answer += parseInt(n / a) * b;
    n = parseInt(n / a) * b + (n % a);
  }
  return answer;
}

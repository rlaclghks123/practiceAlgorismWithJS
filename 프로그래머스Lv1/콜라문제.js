// 빈 병 a개를 가져다주면 콜라 b병을 주는 마트가 있을 때, 빈 병 n개를 가져다주면 몇 병을 받을 수 있는지 계산하는 문제입니
// 20 -> 10   // 10
// 10 -> 5    // 15
// 4 -> 2     // 17
// 2 -> 1     // 18
// 2 -> 1     // 19

function solution(a, b, n) {
  let coke = n;
  let service = 0;

  while (coke >= a) {
    const cal = Math.floor(coke / a);
    service += cal * b;
    coke = cal + (coke % a);
  }

  return service;
}

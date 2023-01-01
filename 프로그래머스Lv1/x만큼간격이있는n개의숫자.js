// 정수 x와 자연수 n을 입력받아, x부터시작해 x씩 증가하는 숫자 n개를 지니는 리스트를 return

function solution(x, n) {
  var answer = [];

  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  console.log(answer);
  return answer;
}

solution(2, 5); // [2,4,6,8,10]

solution(4, 3); // [4,8,12]

solution(-4, 2); // [-4, -8]

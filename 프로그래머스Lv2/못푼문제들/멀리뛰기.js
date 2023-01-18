// 4칸일 경우 아래와 같이 총 5가지 방법으로 뛸 수 있습니다.
// (1칸, 1칸, 1칸, 1칸)
// (1칸, 2칸, 1칸)
// (1칸, 1칸, 2칸)
// (2칸, 1칸, 1칸)
// (2칸, 2칸)
// 1칸, 또는 2칸을 뛸 수 있으며, 끝에 도달한느 방법에 1234567을 나눈 나머지를 return

function solution(n) {
  const dp = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }
  return dp[n];
}

solution(3); // 3
solution(4); // 5
solution(5); // 8
solution(6); // 13

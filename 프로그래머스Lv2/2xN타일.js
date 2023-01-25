// 가로길이가 2, 세로길이가 1인 직사각형 타일
// 세로길이 2, 가로가 n을 채우는 방법
// 아래의 2가지 방법으로 직사각형모양의 타일을 채우는 방법의 수를 return
// 경우의 수를 1,000,000,007로 나눈 나머지를 return
// 가로의 길이 n은 60,000이하의 자연수

// 타일을 가로로 배치하는 경우 ㅁㅁ
// 타일을 세로로 배치하는 경우 ㅁ
//                      ㅁ

function solution(n) {
  let ans = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    ans[i] = (ans[i - 1] + ans[i - 2]) % 1000000007;
  }

  return ans[n];
}

// n:1 = 1
// n:2 = 2
// n:3 = 3
// n:4 = 5
// n:5 = 8

solution(4); // 5

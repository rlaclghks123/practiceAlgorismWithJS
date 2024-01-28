function solution(n, left, right) {
  const ans = [];

  for (let i = left; i <= right; i++) {
    const [x, y] = [Math.floor(i / n), i % n];
    ans.push(Math.max(x, y) + 1);
  }

  return ans;
}

// 1. index,n을 통해 left부터 right까지 좌표값을 구한다.
// 2. 좌표값을 통해 현재값을 구한다.

// 1. 좌표값은 [(idx / n) , (idx %n)]의 형태로 된다.
// 0 1 2       [0,0] [0,1] [0,2]
// 3 4 5   =>  [1,0] [1,1] [1,2]
// 6 7 8       [2,0] [2,1] [2,2]

// 2. x축과 y축 중 큰수 +1이 현재값이다.
// [0,0] [0,1] [0,2]         1  2  3
// [1,0] [1,1] [1,2]    =>   2  2  3
// [2,0] [2,1] [2,2]         3  3  3

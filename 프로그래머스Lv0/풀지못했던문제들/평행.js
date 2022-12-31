// 주어진 네개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1, 없으면 0을 리턴

function solution(dots) {
  var answer = 0;

  // 1. 주어진 네개의 점을 이용해 기울기를 구해준다.  기울기는 (y값의 증가량 / x값의 증가량) 이다.
  // 1-1 기울기를 담을 배열을 만든다.
  const leanArr = [];

  // 1-2 네개의 점을 이용해 기울기를 구해준다.
  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      const lean = (dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]);

      // 2. 현재 두 점을 이용해 기울기가 이전에 있었다면 1을 return한다.
      if (leanArr.includes(lean)) return 1;

      // 3. 현재 두 점을 이용해 구한 기울기를 배열에 담아준다.
      leanArr.push(lean);
    }
  }

  // 4. 모든 배열을 검사한뒤 1을 return하지 못한경우 0을 return 해준다.
  return 0;
}

solution([
  [1, 4],
  [9, 2],
  [3, 8],
  [11, 6],
]); // 1

solution([
  [3, 5],
  [4, 1],
  [2, 4],
  [5, 10],
]); // 0

// 8<=brown <=5,000
// 1<=yellow<=2,000,000

// 1. 카펫의 최소 높이는 3이다. 노란색 위 아래로 갈색이 존재하기 때문에.

// 2. 공식 : 갈색과 노란색의 합을 임의의 높이로 나눌때 나오는 높이와 가로 값을 토대로 (가로-2) * (높이-2) = 노란색 격자 수 라면, 현재 높이, 가로의 길이를 찾은 것이다.
//(-2를 해서 곱한 이유는 양끝의 테투리가 갈색이기 때문에 빼고 계산해준다)
// Ex) 노란색 격자수가 24라면,  노란색 격자의 가로, 높이가 12*2, 8*3, 6*4 등등 형태가 존재 한다. 이때 총 카펫 개수는 갈색+2를 해서 14*4, 10*5, 8*6이 존재

function solution(brown, yellow) {
  let answer = [];
  let sum = brown + yellow;

  for (let height = 3; height <= brown; height++) {
    if (sum % height === 0) {
      let weight = sum / height;
      if ((weight - 2) * (height - 2) === yellow) {
        answer = [height, weight];
      }
    }
  }

  return answer;
}

solution(10, 2); // [4, 3]
solution(8, 1); // [3, 3]
solution(24, 24); // [8, 6]

function solution(brown, yellow) {
  var answer = [];
  let sum = brown + yellow;

  for (let i = 3; i <= sum; i++) {
    if (sum % i === 0) {
      const weight = sum / i;
      if ((weight - 2) * (i - 2) === yellow) {
        return [weight, i];
      }
    }
  }
  return answer;
}

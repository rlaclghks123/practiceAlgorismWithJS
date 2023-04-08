// 구명보트는 최대 2명밖에 탈수 없고, 무게제한도 있다.
// 구명보트를 최대한 적게 사용하여 모든 사람을 구출
// 사람들의 몸무게 people, 무게제한 limit
// 모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return
// 50,000명 이므로 2중 for문은 불가능
// function solution(people, limit) {
//   var answer = 0;
//   people.sort((a, b) => b - a);

//   let l = 0;
//   let r = people.length - 1;

//   while (l < r) {
//     var sum = people[l] + people[r];
//     if (sum > limit) {
//       l++;
//     } else {
//       l++;
//       r--;
//     }
//     answer++;
//   }
//   if (l == r) answer++;
//   return answer;
// }

// function solution(people, limit) {
//   var answer = 0;
//   people.sort((a, b) => b - a);
//   let left = 0;
//   let right = people.length - 1;

//   while (left < right) {
//     let sum = people[left] + people[right];
//     if (sum > limit) {
//       left++;
//     } else {
//       left++;
//       right--;
//     }
//     answer++;
//   }
//   if (left === right) answer++;
//   console.log(answer);
//   return answer;
// }

function solution(people, limit) {
  let [cnt, left, right] = [0, 0, people.length - 1];

  people.sort((a, b) => a - b);

  while (left <= right) {
    let sum = people[left] + people[right];

    if (sum > limit) right--;
    else {
      right--;
      left++;
    }

    cnt++;
  }
  return cnt;
}

solution([70, 50, 80, 50], 100); //	3
solution([70, 80, 50], 100); // 100	3
solution([30, 30, 50, 10, 20, 30], 100); // 100	2
solution([30, 100, 200, 70, 80, 50], 100); //	5

const oneAnswer = [1, 2, 3, 4, 5];
const twoAnswer = [2, 1, 2, 3, 2, 4, 2, 5];
const threeAnswer = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
// 가장 많이 맞힌 사람을 return

function solution(answers) {
  var answer = [];
  let one = 0;
  let two = 0;
  let three = 0;

  // 1. 맞춘 개수를 count 한다.
  answers.forEach((item, index) => {
    if (item === oneAnswer[index % 5]) one++;
    if (item === twoAnswer[index % 8]) two++;
    if (item === threeAnswer[index % 10]) three++;
  });

  // 2. 맞춘 개수를 비교해준다.
  const max = Math.max(one, Math.max(two, three));

  if (one === max) answer.push(1);
  if (two === max) answer.push(2);
  if (three === max) answer.push(3);
  console.log(answer.sort((a, b) => a - b));
  // 3. 오름차순으로 정렬해준다.
  return answer.sort((a, b) => a - b);
}

solution([1, 2, 3, 4, 5]); // 	[1]

solution([1, 3, 2, 4, 2]); //	[1,2,3]

solution([3, 3, 2, 1, 5]); // -> [3]

solution([5, 5, 4, 2, 3]); //  -> [1,2,3]

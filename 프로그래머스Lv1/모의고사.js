// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람을 찾아 출력
// 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

// 1. 1번 수포자, 2번 수포자, 3번 수포자가 찍는 방식을 정해둔다.
// 2. answer를 돌면서 1,2,3번 수포자 정답을 비교한다.
// 3. 가장 점수 높은 사람을 출력한다. 만약 여러명일 경우 여러명을 출력

function solution(answers) {
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const cnt = [0, 0, 0];

  answers.forEach((ans, idx) => {
    if (ans === first[idx % first.length]) cnt[0] += 1;
    if (ans === second[idx % second.length]) cnt[1] += 1;
    if (ans === third[idx % third.length]) cnt[2] += 1;
  });

  const max = Math.max(...cnt);

  return cnt
    .map((num, idx) => (num === max ? idx + 1 : 0))
    .filter((item) => item)
    .sort((a, b) => a - b);
}

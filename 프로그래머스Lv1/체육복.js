// 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다
// 최대한 많은 학생이 체육수업을 들어야 합니다.
// 전체 학생의 수 n,
// 체육복을 도난당한 학생들의 번호가 담긴 배열 lost,
// 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve
// 여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
// 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다.  남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.

// 1. 1부터 n까지 돌면서 도난을 확인합니다.
// 2. 해당 학생이 도난 당했는지 확인
// 3. 도난 당했다면
// 3-1. 자신이 여분이 있는지 확인하여 여분이 있다면 count해주고, 여분에서 제거해줍니다.
// 3-2. 이전 학생이 여분이 있는지 확인하여 여분이 있다면 count해주고, 여분에서 제거해줍니다.
// 3-3. 다음 학생이 여분이 있는지 확인하여 여분이 있다면 count해주고, 여분에서 제거해줍니다.
// 3-3-1. 단 다음 학생에게 빌릴 경우 다음 학생이 도난당하지 않은 경우만 가능
// 4. 도난 당하지 않았다면 count 해줍니다.
// 5. 총 체육복을 가지고 있는 학생을 출력합니다.

function solution(n, lost, reserve) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (lost.includes(i)) {
      if (reserve.includes(i)) {
        reserve = reserve.filter((item) => item !== i);
        answer++;
        continue;
      }

      if (reserve.includes(i - 1)) {
        answer++;
        reserve = reserve.filter((item) => item !== i - 1);
        continue;
      }

      if (reserve.includes(i + 1) && !lost.includes(i + 1)) {
        answer++;
        reserve = reserve.filter((item) => item !== i + 1);
        continue;
      }
    } else {
      answer++;
    }
  }
  return answer;
}

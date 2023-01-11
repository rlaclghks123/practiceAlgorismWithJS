// 앞,뒤 학생에게만 체육복을 빌려줄 수 있음 Ex) 4는 3,5에게만
// 체육복을 적절히 빌려 최대한 많은 학생이 수업을 듣도록
// 체육수업을 들을 수 있는 학생의 최댓값 return

// 전체 학생수 n,
// 도난당한 학생들 lost,
// 여벌을 가진 학생 reserve

function solution(n, lost, reserve) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    // 1. 잃어버렸는데 여분이 있을 경우
    if (lost.includes(i) && reserve.includes(i)) {
      count++;
      reserve = reserve.filter((item) => item !== i);
    }

    // 2. 잃어버렸는데 이전학생이 여분이 있는경우
    else if (lost.includes(i) && reserve.includes(i - 1) && !lost.includes(i - 1)) {
      count++;
      reserve = reserve.filter((item) => item !== i - 1);
    }

    // 3. 잃어버렸는데 다음 학생이 여분이 있는경우
    else if (lost.includes(i) && reserve.includes(i + 1) && !lost.includes(i + 1)) {
      count++;
      reserve = reserve.filter((item) => item !== i + 1);
    }

    //  4. 잃어버리지 않은 경우
    else if (!lost.includes(i)) {
      count++;
    }
    // 5. 그외 경우는 참여불가
    else {
      continue;
    }
  }

  return count;
}

solution(5, [2, 4], [1, 3, 5]); // 5
solution(5, [2, 4], [3]); // 4
solution(3, [3], [1]); // 2
solution(5, [5], [4]); // 5
solution(5, [5], [1]); // 4
solution(5, [4, 2], [3, 5]); //5
solution(4, [2, 3], [3, 4]); //3

// 다른사람코드  내것이 가장 이해하기 좋은듯
// 단 else if 2, 3번째의 경우 !lost.includes(i - 1)), !lost.includes(i + 1))코드를 추가해야 한다.

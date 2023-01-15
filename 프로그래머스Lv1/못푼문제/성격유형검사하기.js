// 총 아래의 16가지의 유형이 나올 수 있다.

// 1번 지표	라이언형(R), 튜브형(T)
// 2번 지표	콘형(C), 프로도형(F)
// 3번 지표	제이지형(J), 무지형(M)
//  4번 지표	어피치형(A), 네오형(N)

function solution(survey, choices) {
  const MBTI = {};
  const indicator = ['RT', 'CF', 'JM', 'AN'];

  indicator.forEach((item) => [...item].forEach((char) => (MBTI[char] = 0)));

  survey.forEach((item, index) => {
    const [disAgree, agree] = item;

    MBTI[choices[index] < 4 ? disAgree : agree] += Math.abs(choices[index] - 4);
  });
  return indicator
    .map((item) => {
      const [left, right] = item;
      return MBTI[left] < MBTI[right] ? right : left;
    })
    .join('');
}

// 1번 지표	라이언형(R), 튜브형(T)
// 2번 지표	콘형(C), 프로도형(F)
// 3번 지표	제이지형(J), 무지형(M)
//  4번 지표	어피치형(A), 네오형(N)

solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5]); // "TCMA"

solution(['TR', 'RT', 'TR'], [7, 1, 3]); // "RCJA"

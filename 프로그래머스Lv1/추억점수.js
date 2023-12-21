// 사진들을 보며 추억에 젖어 있던 루는 사진별로 추억 점수를 매길려고 합니다.
// 사진 속 인물의 이름이 ["may", "kein", "kain"]이고 그리움 점수가 [5점, 10점, 1점]일 때 추억 점수는 16(5 + 10 + 1)점이 됩니다.

// 1. photo를 순회하면서 그리운 사람이 있는지 확인한다.
// 1-1 그리운 사람이 있다면 그리움 점수를 더해준다.
// 1-2 그리운 사람이 없다면 넘어간다.
// 2. 그리운 점수를 담은 배열을 출력한다.

function solution(name, yearning, photo) {
  const answer = photo.map((names, idx) => {
    return names.reduce((acc, target) => {
      const targetIdx = name.indexOf(target);
      if (targetIdx !== -1) acc += yearning[targetIdx];
      return acc;
    }, 0);
  });

  return answer;
}

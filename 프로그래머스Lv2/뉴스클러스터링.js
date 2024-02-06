// 1. 문자열을 2글자씩 잘라준다. 단 영문자만 가능

// 2. 자카드 유사도를 구한다.
// 2-1. 두 집합의 합집합 / 교집합으로 구한다.
// 2-2. 원소의 중복을 허용하여 다중집합을 확장할 수 있다.
// 2-2-1. 다중집합의 Math.min()을 통해 교집합과 Math.max()를 통해 합집합을 구하여 자카드 유사도를 구한다.

// 3. 두 문자열에서 2글자씩 자른 문자열이 없다면 65536를 출력
// 4. 두 문자열에서 2글자씩 자른 문자열이 있다면 자카드 유사도 * 65536를 출력

function solution(str1, str2) {
  const str1Sliced = sliced(str1);
  const str2Sliced = sliced(str2);

  const sumSet = new Set([...str1Sliced, ...str2Sliced]);

  let [union, intersection] = [0, 0];

  [...sumSet].forEach((word) => {
    let filtered1 = str1Sliced.filter((f) => word === f).length;
    let filtered2 = str2Sliced.filter((f) => word === f).length;

    union += Math.max(filtered1, filtered2);
    intersection += Math.min(filtered1, filtered2);
  });

  return sumSet.size ? Math.floor((intersection / union) * 65536) : 65536;
}

function sliced(str) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    const sliced = str
      .slice(i, i + 2)
      .toUpperCase()
      .replace(/[^A-Z]/, '');
    if (sliced.length === 2) result.push(sliced);
  }
  return result;
}

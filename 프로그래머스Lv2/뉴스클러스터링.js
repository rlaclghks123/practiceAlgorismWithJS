// 1. 2글자씩 잘라서 문자인 경우만 찾아줍니다.  => slicedTwoWord
// 2. 교집합(intersection), 합집합(union)을 구해서 두값을 나눠 65536으로 나눠줍니다. => getJaccardSimilarity

function solution(str1, str2) {
  return getJaccardSimilarity(slicedTwoWord(str1), slicedTwoWord(str2));
}

function slicedTwoWord(str) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    const sliced = str
      .slice(i, i + 2)
      .toUpperCase()
      .replace(/[^A-Z]/, '');
    if (sliced.trim('') !== '' && sliced.length === 2) result.push(sliced);
  }
  return result;
}

function getJaccardSimilarity(sliced1, sliced2) {
  const set = new Set([...sliced1, ...sliced2]);
  let [intersection, union] = [0, 0];

  [...set].forEach((word) => {
    let filtered1 = sliced1.filter((f) => word === f).length;
    let filtered2 = sliced2.filter((f) => word === f).length;
    intersection += Math.min(filtered1, filtered2);
    union += Math.max(filtered1, filtered2);
  });

  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}

solution('FRANCE', 'french'); // 16384
solution('handshake', 'shake hands'); // 65536
solution('aa1+aa2', 'AAAA12'); // 43690
solution('E=M*C^2', 'e=m*c^2'); // 65536

// 흩어진 종이조각을 붙여 소수를 몇개 만들 수 있는지 알아내려합니다.
// 종이조각으로 만들 수 있는 소수가 몇개인지 return
// 11과 011은 같은 숫자로 취급

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function solution(numbers) {
  var answer = 0;
  let set = new Set();
  // 1. numbers로 만들수 있는 문자열을 만든뒤, set에 담아 중복을 제거해준다.
  function makeSentence(find, other) {
    set.add(+find);

    for (let i = 0; i < other.length; i++) {
      makeSentence(find + other.charAt(i), other.slice(0, i) + other.slice(i + 1));
    }
  }
  makeSentence('', numbers);

  // 2. 만든 문자열이 소수인지 아닌지 확인하여 count한다.
  [...set].forEach((item) => {
    if (isPrime(item)) {
      answer++;
    }
  });

  return answer;
}

solution('17'); // 3
// 1, 7, 17, 71
//  7,17,71이 소수
// 총 3개

solution('011'); // 2
// 0 1
// 01,10,11
// 011,101,110, 111
// 중 소수 11, 101, 111

function solution(numbers) {
  let answer = 0;
  let set = new Set();

  function makeSentence(find, other) {
    console.log(find);
    set.add(+find);

    for (let i = 0; i < other.length; i++) {
      makeSentence(find + other.charAt(i), other.slice(0, i) + other.slice(i + 1));
    }
  }

  makeSentence('', numbers);
  [...set].forEach((item) => {
    if (isPrime(item)) answer++;
  });
}

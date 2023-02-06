# 자바스크립트를 활용한 알고리즘 공부

# 자료구조

[블로그 참조](https://velog.io/@rlaclghks123/series)

- [x] 빅오 표기법
- [x] 자료구조와 알고리즘
- [x] 배열
- [x] List
- [x] Stack
- [x] Queue
- [x] Dequeue
- [x] Tree

# 꿀팁 저장소

- `인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.` => 배열의 순서가 바뀌면 안된다.

- `문자열이 한개만 사용된다` => indexOf(문자), lastIndexOf(문자)가 같아야 된다

- `아스키코드로 변환 : charCodeAt(0)`, `아스키코드를 문자로 변환 : String.fromCharCode(item))`

- `제곱근이 정수면 약수의 개수가 홀수이다.` `Number.isInteger(Math.sqrt(i)) // 홀수`

- `localeCompare 메서드` => 참조 문자열이 정렬 순서에서 앞 또는 뒤에 오는지 또는 주어진 문자열과 같은지를 숫자로 반환

  ```js
  'a'.localeCompare('b'); // -1 ,
  'b'.localeCompare('a'); // 1
  'c'.localeCompare('c'); // 0

  // 실사용, 주로 sort() 안에서 a,b를 비교할때 사용한다.
  function solution(strings, n) {
    // strings 배열
    // n 번째 문자열 비교
    return strings.sort((s1, s2) =>
      s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
    );
  }
  ```

- A배열안의 값이 B배열에 존재하는가? `Map을 사용하면 좋다` Ex) Lv1 완주하지 못한선수, 숫자짝궁

- `정규표현식` Ex)

  - Lv1 : 신규아이디추천 , 옹알이2(특정 단어 포함 및 연속된 부분 제거)
  - Lv2 : 스킬트리 ,[3차] 파일명정렬 참고

- 문자열을 구조분해 할당을 사용하여 배열에 담아줄 수 있다. Ex) const [a,b] = 'AB'

  ```js
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
  ```

- 배열의 slice(-4)하면 4개만 추출 가능하고, splice(-4)하면 4개를 잘라버릴 수 있다. Lv1 햄버거 만들기 참고

  ```js
  function solution(ingredient) {
    var answer = 0;
    let stack = [1, 2, 3, 4];

    // ingredient의 모든값들을 stack에 담아준다.
    ingredient.forEach((item) => {
      stack.push(item);

      // stack에서 뒤에서부터 4개를 빼서 문자열로 바꾼뒤, 1231인 경우 stack에서 제거해준뒤, answer++해준다.
      if (stack.slice(-4).join('') === '1231') {
        stack.splice(-4);
        answer++;
      }
    });

    return answer;
  }
  ```

- 기울기 ==> x2-x1 / y2-y1

  ```js
  for (let i = 0; i < dots.length - 1; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      const lean = Math.abs(dots[j][0] - dots[i][0]) / Math.abs(dots[j][1] - dots[i][1]);
      if (answer.includes(lean)) return 1;
      answer.push(lean);
    }
  }
  ```

- indexOf 활용

  ```js
  // skill.indexOf(f)===0인 경우만 추출해준다.
  let filter = map.filter((f) => {
    skill.indexOf(f) === 0;
  });
  // CBD.indexOf(C)===0
  // CBD.indexOf(CB)===0
  // CBD.indexOf(CBD)===0
  ```

- `2진수 꿀팁` : 십진수가 짝수면 2진수의 값 끝자리가 0이고, 십진수가 홀수면 2진수의 값 끝자리가 1이다

  - Lv2 2개 이하로 다른비트 참조

- 경로탐색, 네트워크, 조합만들기가 나오면 DFS/BFS를 통해 푸는것이 좋다. DFS는 주로 재귀, BFS는 큐를 통해 구현
- 만약 모든 가중치가 1이거나 같은경우 DFS/BFS를 통해, 가중치가 여러값인 경우 다익스트라 알고리즘 사용
- <hr>

# 나만의 알고리즘

- [자바스크립트를 활용한 알고리즘 공부](#자바스크립트를-활용한-알고리즘-공부)
- [자료구조](#자료구조)
- [꿀팁 저장소](#꿀팁-저장소)
- [나만의 알고리즘](#나만의-알고리즘)
- [약수](#약수)
- [아스키코드](#아스키코드)
- [최대공약수-최소공배수](#최대공약수-최소공배수)
- [진수변환](#진수변환)
- [소수 구하기](#소수-구하기)
- [서로 다른 n개 중 m개](#서로-다른-n개-중-m개)
- [n이상 m이하의 모든수의 합](#n이상-m이하의-모든수의-합)
- [피보나치의수](#피보나치의수)
- [특정 문자열로 만들수있는 모든 문자열만들기](#특정-문자열로-만들수있는-모든-문자열만들기)
- [투포인터](#투포인터)
- [다익스트라 알고리즘](#다익스트라-알고리즘)

# 약수

- 기사단원의 무기 참조

- 순서쌍의 개수 참조
- 약수구하기 참조

```js // 효율적 속도 빠른 약수의 개수
function divisor(n) {
  let temp = 0;
  //약수를 구하고 싶은 숫자 n에 대해 temp값이 n보다 작거나 같은경우 while문을 통해 반복
  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) {
      temp++;
    } else if (n % i === 0) temp += 2;
  }
  return temp;
}
```

```JS
function divisor(n){
  // 처음에 1부터 약수를 구하고 싶은 숫자를 temp값으로 나눠준다.
let temp = 1;
let arr = [];
//약수를 구하고 싶은 숫자 n에 대해 temp값이 n보다 작거나 같은경우 while문을 통해 반복
while (temp <= n) {

    //만약 나누어 떨어진다면 약수이므로, arr에 담아준다.
  if (n % temp === 0) {
    arr.push(temp);
  }

  //약수를 구하고 난뒤, temp값을 +1 해줌으로서 점차 증가하여 모든 수의 약수를 구해준다.
  temp++;
}
}
```

# 아스키코드

- 대문자와 소문자 참고
- 대문자는 65~90
- 소문자는 97~122이다.

```JS
my_string.split('').forEach((char) => {
    // charCodeAt()를 통해 문자를 정수값으로 바꿔준다.
    const ascii = char.charCodeAt();

    // 2-1. 문자가 대문자인경우 처리를한다. 대문자는 65~90까지
    if (ascii >= 65 && ascii <= 90) {
      // 2-2 대문자인경우 32를 더해서 fromCharCode를 통해 문자로 바꿔준다.
      // String의 fromCharCode를 통해 정수값을 문자로 바꿔준다.
      answer += String.fromCharCode(ascii + 32);
    }

    // 3-1. 문자가 소문자인경우 처리를한다. 소문자는 97에서 122까지이다.
    else {
      // 3-2 소문자인경우 32를 빼서 fromCharCode를 통해 문자로 바꿔준다.
      answer += String.fromCharCode(ascii - 32);
    }
  });
```

# 최대공약수-최소공배수

- 피자나눠먹기2 참고
- 최대 공약수 gcd

```JS
function gcd(a,b){
  if(b===0) return a;
  return gcd(b, a % b);
}

```

- 최소 공배수 lcm : 두 수의곱 / 최대공약수

```JS
function gcd(a,b){
  if(b===0) return a;
  return gcd(b, a % b);
}
const a = 10;
const b = 20;

const lcm = a*b / gcd(a,b);


```

# 진수변환

- 이진수더하기 참조

```JS
// 1. 2,8진수를 10진수로 변환  parseInt(숫자값, 진법)
const bin = 1001 //2진수
const decimal = parseInt(bin,2);


// 2. 10진수를 2,8진수로 변환 toString(진법)
const decimal = 30;
const bin = decimal.toString(2);
```

# 소수 구하기

- 소인수분해 참조

```JS
//true는 소수가 아닌경우, false는 소수인경우
// n까지의 모든 수 중 소수를 배열에 담아서 출력

function primeNumber(n) {
  const check = Array.from({ length: n }, () => false);
  const arr = [];
  // 0,1은 소수가 아니기 때문에 true로 해준다.
  check[0] = true;
  check[1] = true;

  for (let i = 2; i * i <= n; i++) {
    if (check[i]) continue; //소수가 아닌경우는 continue;

    // 어떤수의 배수는 약수를 가지기 때문에 소수가 아니다. 따라서 어떤수의 배수는 모두 true로 바꿔준다.
    for (let j = i + i; j <= n; j += i) {
      check[j] = true;
    }
  }

  // false인 경우 소수이므로 arr배열에 담아준다.
  for (let i = 0; i <= n; i++) {
    if (!check[i]) {
      arr.push(i);
    }
  }
  return arr;
}


// 특정 값이 소수인지 아닌지 확인

function isPrime(n) {
  if(n===1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
```

# 서로 다른 n개 중 m개

- 구슬을 나누는 경우의수 참조
- factorial은 너무 큰수가 되므로 BigInt를 사용해준다.

```JS
// 아래와 같이 구해준다.

//     n!
// ㅡㅡㅡㅡㅡㅡㅡㅡ
// (n-m)! * m!

function factorial(n) {
  let temp = BigInt(1);
  for (let i = 1; i <= n; i++) {
    temp *= BigInt(i);
  }
  return temp;
}


```

# n이상 m이하의 모든수의 합

- 두 정수 사이의 합 참조

```JS
function Gauss(a, b){
    var result = 0

    return (a+b)*(Math.abs(b-a)+1)/2;
}
```

# 피보나치의수

- Lv2 피보나치수 참고

```js
function fibonacci(n) {
  let numbers = [0, 1];
  for (let i = 2; i <= n; i++) {
    numbers.push(numbers[i - 1] + numbers[i - 2]);
  }
  return numbers[n];
}
```

# 특정 문자열로 만들수있는 모든 문자열만들기

    - 문자열로 된 숫자로 만들 수 있는 모든 숫자를 중복없이 set에 담아주는 함수
    - Lv2 소수찾기

      ```js
      let set = new Set();
      // 1. numbers로 만들수 있는 문자열을 만든뒤, set에 담아 중복을 제거해준다.
      function makeSentence(find, other) {
        set.add(+find);

        for (let i = 0; i < other.length; i++) {
          makeSentence(find + other.charAt(i), other.slice(0, i) + other.slice(i + 1));
        }
      }
      makeSentence('', numbers);
      ```

    - Lv2 메뉴리뉴얼
    - 어떤 하나의 문자열로 만들 수 있는 모든 문자열

      ```js
      function getCombination(arr, num) {
        const results = [];
        if (num === 1) return arr.map((v) => [v]);

        arr.forEach((fixed, index, origin) => {
          const rest = origin.slice(index + 1);
          const combinations = getCombination(rest, num - 1);
          if (combinations.length === 0) return;
          const attached = combinations.map((v) => [fixed, ...v]);

          results.push(...attached);
        });
        return results;
      }
      ```

# 투포인터

- Lv2 두큐합 같게만들기
- 시간복잡도 O(n)

  ```js
  function solution(queue1, queue2) {
    var answer = 0;

    // 1. 각각의 큐에 포인터 값을 초기화 해준다.
    let q1Pointer = 0;
    let q2Pointer = queue1.length;

    // 2. 두개의 큐를 하나의 큐로 합해준다.
    const totalQueue = [...queue1, ...queue2];

    // 3. 총합의 절반값을 구해준다.
    let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
    let sum2 = queue2.reduce((acc, cur) => acc + cur, 0);
    const half = (sum1 + sum2) / 2;

    // 4. 투포인터 알고리즘을 통해 값을 구해준다.
    // qeueue1.length*4 까지 반복하는 이유는 한 포인터당 최대 2n번 이동하기 때문
    for (let cnt = 0; cnt < queue1.length * 4; cnt++) {
      // 4-1 만약 절반의 값과 sum1이 같다면 return 해준다.
      if (sum1 === half) {
        return (answer = cnt);
      }
      sum1 =
        sum1 < half
          ? // 4-2 sum1의 값이 절반값보다 큰경우 sum1에 q2포인터의 위치를 이동시킨뒤, 깂을 더해줍니다.  => 큰 큐(q2)에서 작은큐로(q1) 넘겨줌
            sum1 + totalQueue[q2Pointer++ % totalQueue.length]
          : // 4-3 sum1의 값이 절반값보다 작은경우 sum1에 q1포인터의 위치를 이동시킨뒤, 깂을 빼줍니다.  => 큰 큐(q1)에서 작은큐(q2)로 넘겨줌
            sum1 - totalQueue[q1Pointer++ % totalQueue.length];
    }
    // 찾지 못한경우 -1을, 아닌경우 answer을 출력해줍니다.
    return answer === 0 ? -1 : answer;
  }
  ```

# 다익스트라 알고리즘

- 주로 최단경로 구할때 많이 사용

```js
function solution(N, road, K) {
  // 1.  최댓값을(50만) 담은 배열을 만들어준다. why? => 최소값을 구하기 위해
  const arr = Array(N + 1).fill(500000);

  // 2. 기본 배열을 초기화해준다.
  const map = Array.from({ length: N + 1 }, () => []);

  // 3. road를 돌면서 그래프를 완성해준다.
  road.forEach((item) => {
    const [a, b, c] = item;
    map[a].push({ to: b, cost: c });
    map[b].push({ to: a, cost: c });
  });

  // 4. 큐, arr에 처음값을 담아준다.
  let q = [{ to: 1, cost: 0 }];
  arr[1] = 0;
  // 5. q가 빌때까지 반복해준다.
  while (q.length) {
    // 5-1 q에서 값을 뺀다.
    const { to } = q.pop();

    // 5-2 map의 to를 돌면서 모든 경로를 찾는다.
    map[to].forEach((next) => {
      //5-3 만약 arr의 다음값이  arr의 현재값 + 현재-다음값으로 가는 cost 보다 크다면 바꿔준다.
      if (arr[next.to] > arr[to] + next.cost) {
        arr[next.to] = arr[to] + next.cost;
        // 5-4 next를 큐에 담아준다.
        q.push(next);
      }
    });
  }
  // 6 arr를 filter를 통해 k이하인 경우만 찾아준다.
  return arr.filter((item) => item <= K).length;
}
```

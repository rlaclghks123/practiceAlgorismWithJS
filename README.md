# 자바스크립트를 활용한 알고리즘 공부

# 자료구조

[블로그 참조](https://velog.io/@rlaclghks123/series)

- [x] 빅오 표기법
- [x] 자료구조와 알고리즘
- [x] 배열
- [x] List
- [x] Stack
- [x] Queue

# 꿀팁 저장소

- `인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.` => 배열의 순서가 바뀌면 안된다.

- `문자열이 한개만 사용된다` => indexOf(문자), lastIndexOf(문자)가 같아야 된다

- `아스키코드로 변환 : charCodeAt(0)`, `아스키코드를 문자로 변환 : String.fromCharCode(item))`

- `제곱근이 정수면 약수의 개수가 홀수이다.` `Number.isInteger(Math.sqrt(i)) // 홀수`

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

# 약수

- 순서쌍의 개수 참조
- 약수구하기 참조

```JS
// 처음에 1부터 약수를 구하고 싶은 숫자를 temp값으로 나눠준다.
let temp = 1;

//약수를 구하고 싶은 숫자 n에 대해 temp값이 n보다 작거나 같은경우 while문을 통해 반복
while (temp <= n) {

    //만약 나누어 떨어진다면 약수이므로, arr에 담아준다.
  if (n % temp === 0) {
    arr.push(temp);
  }

  //약수를 구하고 난뒤, temp값을 +1 해줌으로서 점차 증가하여 모든 수의 약수를 구해준다.
  temp++;
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
const decimal = bin.parseInt(bin,2)

// 2. 10진수를 2,8진수로 변환 toString(진법)
const decimal = 30;
const bin = decimal.toString(2);
```

# 소수 구하기

- 소인수분해 참조

```JS
//true는 소수가 아닌경우, false는 소수인경우

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

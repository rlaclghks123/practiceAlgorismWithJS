# 자바스크립트를 활용한 알고리즘 공부

# 자료구조

[블로그 참조](https://velog.io/@rlaclghks123/series)

- [x] 빅오 표기법
-

-

# 꿀팁 저장소

- [자바스크립트를 활용한 알고리즘 공부](#자바스크립트를-활용한-알고리즘-공부)
- [자료구조](#자료구조)
- [꿀팁 저장소](#꿀팁-저장소)
- [약수](#약수)
- [아스키코드](#아스키코드)
- [최대공약수-최소공배수](#최대공약수-최소공배수)
- [진수변환](#진수변환)

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

// 도시 이름을 검색하면 해당 도시와 맛집게시물들을 DB에서 읽는 서비스
// 도시이름 배열을 순서대로 처리할 때, 총 실행시간을 출력
// cache hit일 경우 실행시간은 1
// cache miss 일 경우 실행시간은 5

function solution(cacheSize, cities) {
  var answer = 0;

  const cache = [];

  // cacheSzie가 0인 경우 다 cache miss이므로, cities.length*5를 해준다.

  if (cacheSize === 0) return cities.length * 5;
  cities.forEach((city) => {
    // 대소문자를 구분하지 않기 때문에 대문자 또는 소문자로 통일 시켜준다.
    city = city.toUpperCase();

    // 만약 캐시에 포함되어있다면, 캐시에 있는 값을 제거해서, 캐시의 가장 마지막에 추가해주고, 실행시간을 1 추가한다.
    if (cache.includes(city)) {
      cache.splice(cache.indexOf(city), 1);
      cache.push(city);
      answer++;
    }
    // 만약 캐시에 포함되어 있는 경우, 캐시의 길이가 캐시 사이즈와 같은경우에 제일 오래된캐시 삭제후, 가장 마지막에 값을 추가하고, 실행시간 5를 추가한다.
    else {
      if (cache.length === cacheSize) {
        cache.shift();
      }
      cache.push(city);
      answer += 5;
    }
  });
  return answer;
}

// solution(3, [
//   'Jeju',
//   'Pangyo',
//   'Seoul',
//   'NewYork',
//   'LA',
//   'Jeju',
//   'Pangyo',
//   'Seoul',
//   'NewYork',
//   'LA',
// ]); // 50

// solution(3, ['Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul']); // 21

// solution(2, [
//   'Jeju',
//   'Pangyo',
//   'Seoul',
//   'NewYork',
//   'LA',
//   'SanFrancisco',
//   'Seoul',
//   'Rome',
//   'Paris',
//   'Jeju',
//   'NewYork',
//   'Rome',
// ]); // 60

// solution(5, [
//   'Jeju',
//   'Pangyo',
//   'Seoul',
//   'NewYork',
//   'LA',
//   'SanFrancisco',
//   'Seoul',
//   'Rome',
//   'Paris',
//   'Jeju',
//   'NewYork',
//   'Rome',
// ]); // 52

solution(2, ['Jeju', 'Pangyo', 'NewYork', 'newyork']); // 16

// solution(0, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA']); // 25

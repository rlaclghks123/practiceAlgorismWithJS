// 1. cacheSize가 0인 경우 cities의 길이 * cacheMiss(5)를 출력합니다.

// 2. cacheSize가 0이 아닌 경우 cities를 순회하면서 캐시크기에 따른 실행 시간을 구합니다.
// 2-1. 대소문자 구분을 하지 않기 때문에 모든 city를 대문자로 바꿉니다.
// 2-2. 현재 City가 cache에 존재하는 경우
// 2-2-1. city의 index값을 찾아줍니다.
// 2-2-2. (찾은 city의 index값)을 통해 cache에서 해당 city를 제거합니다.
// 2-2-3. city를 cache에서 push해줍니다.(가장 마지막으로 담음)
// 2-2-4. 총 시간에 cacheHit(1)만큼 더해줍니다.

// 2-3. 현재 City가 cache에 존재하지 않는 경우
// 2-3-1. cacheSize와 cache의 길이가 같다면 shift해줍니다.(가장 최근값 제거)
// 2-3-2. cache에 city를 push해줍니다.(가장 마지막으로 담음)
// 2-3-3. 총 시간에 cacheMiss(5)만큼 더해줍니다.

function solution(cacheSize, cities) {
  let cache = [];
  let ans = 0;
  const [cacheHit, cacheMiss] = [1, 5];

  if (cacheSize === 0) return cities.length * cacheMiss;

  cities.forEach((city) => {
    city = city.toUpperCase();

    if (cache.includes(city)) {
      const targetIdx = cache.indexOf(city);
      cache.splice(targetIdx, 1);
      cache.push(city);
      ans += cacheHit;
    }

    if (!cache.includes(city)) {
      if (cacheSize === cache.length) cache.shift();

      cache.push(city);
      ans += cacheMiss;
    }
  });
  return ans;
}

const solution = (number) => {
  const uniques = new Set();
  if (number === 3) return 0;
  if (number === 5) return 3;
  let threes = number % 3 === 0 ? (number / 3) - 1: Math.floor((number) / 3);
  let fives = number % 5 === 0 ? (number / 5) - 1 : Math.floor((number) / 5);
  if (threes < 1 && fives < 1) { return 0; }
  for (let i = 1; i <= threes; i++) {
    uniques.add(3 * i);
  }
  for ( let j = 1; j <= fives; j++) {
    if (!uniques.has(j * 5)) {
      uniques.add(5 * j);
    }
  }
  let num = 0;
  for (let ele of uniques.values()) {
    num += ele;
  }
  return num;
}

solution(10);
solution(-1);
solution(4);
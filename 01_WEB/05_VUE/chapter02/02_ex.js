let sumAll = (...numbers) => {
  let sum = 0;
  for (let n of numbers) {
    sum += n;
  }
  return sum;
};

console.log(sumAll(1, 2, 3, 4, 5));

const product = { name: '아이패드', price: 200000, color: 'Space Gray' };
const { name, price } = product;

console.log(`${name}의 가격은 ${price}원입니다. `);

// const는 참조 주소 변경 불가한데 (2)은 새로운 주소를 할당하려고 하여 에러 발생

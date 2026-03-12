const orderCoffee = (menu) => {
  return new Promise((resolve, reject) => {
    console.log(`${menu} 주문이 들어왔습니다.`);
    setTimeout(() => {
      resolve(menu);
    }, 1000);
  });
};

const makeCoffee = (menu) => {
  return new Promise((resolve, reject) => {
    console.log(`${menu}를 정성껏 만드는 중 ~~`);
    setTimeout(() => {
      resolve(`${menu} 완성!`);
    }, 1000);
  });
};

const pickUp = (result) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`🔔 ${result} 손님, 카운터로 와주세요!`);
    }, 1000);
  });
};

orderCoffee("아메리카노")
  .then((menu) => makeCoffee(menu))

  .then((info) => pickUp(info))
  .then((finish) => {
    console.log(finish);
  })
  .catch((error) => {
    console.log("주문 오류: ", error);
  });

//   orderCoffee("아메리카노")
//   .then(makeCoffee)  // menu를 받아서 그대로 makeCoffee에 넣어준다는 뜻
//   .then(pickUp)      // info를 받아서 그대로 pickUp에 넣어준다는 뜻
//   .then(console.log) // 최종 결과를 그대로 출력
//   .catch(console.error);

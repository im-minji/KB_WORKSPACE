const order = (coffee, callback) => {
  console.log(`${coffee} 주문접수!`);

  setTimeout(() => {
    callback(`${coffee} 완성!`);
  }, 3000);
};

order("아메리카노", (result) => {
  console.log(result);
});

console.log("다음 손님 주문 받기");

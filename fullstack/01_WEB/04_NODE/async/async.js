let showTime = (msg) => {
  let dt = new Date();
  console.log(
    `${msg} 현재시간 : ${dt.getHours()}시 ${dt.getMinutes()}분 ${dt.getSeconds()}초`,
  );
};

showTime("시작");

setTimeout(() => {
  showTime("3초후");
}, 3000);

setTimeout(() => {
  showTime("5초후");
}, 5000);

setTimeout(() => {
  showTime("1초후");
}, 1000);

showTime("종료");

let showTime = (msg) => {
  let dt = new Date();
  console.log(
    `${msg} 현재시간 : ${dt.getHours()}시 ${dt.getMinutes()}분 ${dt.getSeconds()}초`,
  );
};

let cnt = 0;

const delay = (ms) => {
  return new Promise((resolve, reject) => {
    ms < 0
      ? reject("시간은 음수일 수 없습니다")
      : setTimeout(() => {
          resolve(`${++cnt} : ${ms / 1000}초 후`);
        }, ms);
  });
};

async function run() {
  try {
    showTime("시작");
    const msg1 = await delay(3000);
    showTime(msg1);

    const msg2 = await delay(5000);
    showTime(msg2);

    const msg3 = await delay(1000);
    showTime(msg3);

    const msg4 = await delay(-5000);
    showTime(msg4);
  } catch (rejectedMsg) {
    console.log(rejectedMsg);
  } finally {
    console.log("종료");
  }
}

run();

// const startTimer = async () => {
//   console.log("카운트다운 시작!");

//   await delay(3000);
//   await delay(5000);
//   await delay(-1000);

//   console.log("끝!");
// };

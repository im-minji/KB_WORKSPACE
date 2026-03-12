const waitOneSecond = (msg) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, 1000);
  });
};

const startTimer = async () => {
  console.log("카운트다운 시작!");

  await waitOneSecond("3..");
  await waitOneSecond("2..");
  await waitOneSecond("1..");

  console.log("발사~!");
};

// const startTimer = async () => {
//   try {
//     console.log("카운트다운 시작!");
//     await waitOneSecond("3...");
//     // 만약 여기서 에러가 난다면? 바로 catch로 점프!
//   } catch (error) {
//     console.error("앗, 타이머 고장!", error);
//   }
// };

startTimer();

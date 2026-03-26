const express = require('express');
const app = express();
const port = 3000;
/*
app.use(express.static('public', {
  setHeaders: (res, path) => {
    if (path.endsWith('.css')) {
      res.set('Content-Type', 'text/css');
    }
  }
}));
*/
//---CORS용 모듈 설치하세요---
const cors = require('cors');
app.use(cors());

// let corsOptions = {
//     origin: 'https://www.domain.com',
//     credentials: true
// }
// app.use(cors(corsOptions));
app.get('/', (req, res) => {
  res.send('WELCOME');
});

const fs = require('fs');
app.get('/product', (req, res) => {
  console.log('상품목록 요청함');
  res.setHeader('Access-Control-Allow-origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.status(200);

  // const data = fs.readFileSync('./products.txt', 'utf-8'); // 인코딩 지정
  // //   console.log(data);
  // console.log(JSON.parse(data));
  // res.json(JSON.parse(data));
  let responseObj = [
    {
      prodNo: 'C0001',
      prodName: '아메리카노',
      prodPrice: 1500,
      img: 'C0001.jpg',
    },
    {
      prodNo: 'C0002',
      prodName: '아이스아메리카노',
      prodPrice: 1500,
      img: 'C0002.jpg',
    },
    { prodNo: 'C0003', prodName: '라테', prodPrice: 2000, img: 'C0003.jpg' },
    {
      prodNo: 'C0004',
      prodName: '아이스라테',
      prodPrice: 2000,
      img: 'C0004.jpg',
    },
    {
      prodNo: 'C0005',
      prodName: '콜드브루몰트',
      prodPrice: 2500,
      img: 'C0005.jpg',
    },
    {
      prodNo: 'C0006',
      prodName: '카페브레베',
      prodPrice: 3500,
      img: 'C0006.jpg',
    },
    {
      prodNo: 'C0007',
      prodName: '바닐라라떼',
      prodPrice: 3500,
      img: 'C0007.jpg',
    },
  ];
  res.json(responseObj);
});

app.get('/product/:prodNo', (req, res) => {
  let responseObj;
  if (req.params.prodNo == 'C0001') {
    responseObj = {
      prodNo: 'C0001',
      prodName: '아메리카노',
      prodPrice: 1500,
      img: 'C0001.jpg',
    };
  } else if (req.params.prodNo == 'C0002') {
    responseObj = {
      prodNo: 'C0002',
      prodName: '아이스아메리카노',
      prodPrice: 1500,
      img: 'C0002.jpg',
    };
  } else if (req.params.prodNo == 'C0003') {
    responseObj = {
      prodNo: 'C0003',
      prodName: '라테',
      prodPrice: 2000,
      img: 'C0003.jpg',
    };
  } else if (req.params.prodNo == 'C0004') {
    responseObj = {
      prodNo: 'C0004',
      prodName: '아이스라테',
      prodPrice: 2000,
      img: 'C0004.jpg',
    };
  } else if (req.params.prodNo == 'C0005') {
    responseObj = {
      prodNo: 'C0005',
      prodName: '콜드브루몰트',
      prodPrice: 2500,
      img: 'C0005.jpg',
    };
  } else if (req.params.prodNo == 'C0006') {
    responseObj = {
      prodNo: 'C0006',
      prodName: '카페브레베',
      prodPrice: 3500,
      img: 'C0006.jpg',
    };
  } else if (req.params.prodNo == 'C0007') {
    responseObj = {
      prodNo: 'C0007',
      prodName: '바닐라라떼',
      prodPrice: 3500,
      img: 'C0007.jpg',
    };
  } else {
    responseObj = {};
  }
  res.json(responseObj);
});

/*
상품명으로 검색
*/
app.get('/product/search/:word', (req, res) => {
  let responseObj;
  if (req.params.word == '아') {
    responseObj = [
      { prodNo: 'C0001', prodName: '아메리카노', img: 'C0001.jpg' },
      {
        prodNo: 'C0002',
        prodName: '아이스아메리카노',
        img: 'C0002.jpg',
      },

      { prodNo: 'C0004', prodName: '아이스라테', img: 'C0004.jpg' },
    ];
  } else if (req.params.word == '라') {
    responseObj = [
      { prodNo: 'C0003', prodName: '라테', img: 'C0003.jpg' },
      { prodNo: 'C0004', prodName: '아이스라테', img: 'C0004.jpg' },
      { prodNo: 'C0007', prodName: '바닐라라떼', img: 'C0007.jpg' },
    ];
  } else {
    responseObj = [];
  }
  res.json(responseObj);
});

/*요청ContentType이 x-www-form-urlencoded인 경우 
요청의 body사용하고 싶다면 아래 함수를 사용하세요*/
app.use(express.urlencoded({ extended: true }));

/*요청ContentType이 application/json인 경우 
요청의 body사용하고 싶다면 아래 함수를 사용하세요*/
app.use(express.json());

let customers = [{ id: 'id99', pwd: 'pwd99' }]; //고객저장소
function findById(id) {
  return customers.find((element) => element.id === id);
}
//http://localhost:3000/login
app.post('/login', (req, res) => {
  // if (!req.body.id || req.body.id == 'admin') {
  console.log(req.body.id, req.body.pwd);
  const c = findById(req.body.id);
  if (!req.body.id || !c || c.pwd !== req.body.pwd) {
    res.status(400);
    res.send('로그인 실패');
  } else {
    res.status(200);
    res.send('로그인 성공');
  }
});

app.post('/signup', (req, res) => {
  //req.body가 {id: , pwd:   ,name: }객체가 되도록 front를 완성하세요
  //id프로퍼티값은 사용자가 입력한 아이디값으로,
  //pwd프로퍼티값은 사용자가 입력한 비밀번호값으로,
  //name프로퍼티값은 사용자가 입력한 이름값으로 전달되어야합니다
  // console.log(req.body)
  const c = req.body;
  //고객저장소의 고객의 아이디값과 요청된 정보아이디값이 같은 경우에는
  //"이미 저장된 아이디입니다"실패메시지 응답
  //고객저장소의 고객의 아이디값과 요청된 정보아이디값이 다른경우에는
  //고객저장소에 요청된 정보 추가
  //'가입 성공'성공메시지 응답

  if (customers.find((element) => element.id === c.id)) {
    res.status(400);
    res.send('이미 저장된 아이디입니다.');
  } else {
    customers.push(c);
    console.log('추가된 고객저장소', customers);
    res.status(200);
    res.send('가입 성공');
  }
});

//요청URL예) http://localhost:3000/iddupchk?id=1
// app.get('/iddupchk', (req, res) => {
//     //아이디가 고객저장소에 존재하면 이미 존재하는 아이디입니다 실패메시지응답(status: 400)
//     //                    존재안하면 사용 가능한 아이디입니다 성공메시지응답(status: 200)
//     // if (customers.find((element) => element.id === req.query.id)) {
//     if(findById(req.query.id)){
//         res.status(400);
//         res.send('이미 존재하는 아이디입니다.');
//     } else {
//         res.status(200)
//         res.send('사용 가능한 아이디입니다')
//     }
// })

//요청URL예) http://localhost:3000/iddupchk/1
app.get('/iddupchk/:id', (req, res) => {
  //아이디가 고객저장소에 존재하면 이미 존재하는 아이디입니다 실패메시지응답(status: 400)
  //                    존재안하면 사용 가능한 아이디입니다 성공메시지응답(status: 200)
  console.log(req.params.id);
  if (findById(req.params.id)) {
    res.status(400);
    res.send('이미 존재하는 아이디입니다.');
  } else {
    res.status(200);
    res.send('사용 가능한 아이디입니다');
  }
});

app.post('/cart', (req, res) => {
  const { prodNo, quantity } = req.body;
  console.log(`장바구니 요청 들어옴: 상품번호 ${prodNo}, 수량 ${quantity}`);

  // 2. 성공 메시지 응답하기
  res.status(200).send(`${prodNo} 상품 ${quantity}개가 장바구니에 담겼습니다!`);
});

app.listen(port, () => {
  console.log('3000번 포트에서 서버실행 중');
});

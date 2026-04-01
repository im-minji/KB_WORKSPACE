const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors');
app.use(cors());

app.get('/', (req, resp) => {
  resp.send('WELCOME');
});
/*요청ContentType이 x-www-form-urlencoded인 경우 
요청의 body사용하고 싶다면 아래 함수를 사용하세요*/
app.use(express.urlencoded({ extended: true }));

//요청URL예) http://localhost:3000/iddupchk?id=1
// app.get('/iddupchk', (req, resp) => {
//   console.log(req.query.id);
//   if (req.query.id === 'admin') {
//     // resp.sendStatus(400);
//     resp.status(400);
//     resp.send('');
//   } else {
//     resp.sendStatus(200);
//   }
// });
// app.post('/signup', (req, resp) => {
//   console.log(req.body);
//   resp.send('가입성공');
// });

let customers = [{ id: 'admin', pwd: 'admin', email: 'admin@kbstar.com' }]; //고객저장소
//요청URL예) http://localhost:3000/iddupchk/1
app.get('/iddupchk/:id', (req, resp) => {
  console.log(req.params.id); //1
  if (customers.find((element) => element.id === req.params.id)) {
    // resp.sendStatus(400);
    resp.status(400);
    resp.send('');
  } else {
    resp.sendStatus(200);
  }
});

/*요청ContentType이 application/json인 경우 
요청의 body사용하고 싶다면 아래 함수를 사용하세요*/
app.use(express.json());

app.post('/signup', (req, resp) => {
  console.log(req.body);
  const person = req.body;
  if (customers.find((element) => element.id === person.id)) {
    resp.sendStatus(400);
  } else {
    customers.push(person);
    resp.sendStatus(200);
  }
  console.log(customers);
});

app.listen(port, () => {
  console.log('3000번 포트에서 백엔드 서버 실행 중');
});

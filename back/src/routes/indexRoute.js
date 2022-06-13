module.exports = function (app) {
  const index = require("../controllers/indexController");
  const jwtMiddleware = require("../../config/jwtMiddleware");

  // 라우터 정의
  // app.HTTP메서드(uri, 컨트롤러 콜백함수)
  // app.get("/dummy", index.example);

  // 테스트
  // app.get("/dummy", function (req, res) {
  //   res.send("get dummy 요청 성공");
  // });

  app.get("/students/:studentIdx", index.readStudents);
};

const { pool } = require("../../config/database");

exports.insertStudents = async function (
  connection,
  studentName,
  major,
  birth,
  address
) {
  const Query = `insert into Students(studentName, major, birth, address) values (?,?,?,?)`;
  const Params = [studentName, major, birth, address];

  const rows = await connection.query(Query, Params);

  return rows;
};

exports.selectStudents = async function (connection, studentIdx) {
  const Query = `SELECT * FROM Students where studentIdx = ?;`;
  // const selectAllStudentsQuery = `SELECT * FROM Students;`;
  // const selectStudentByNameQuery = `SELECT * FROM Students where studentName = ?;`;
  const Params = [studentIdx];

  // let Query = studentName ? selectStudentByNameQuery : selectAllStudentsQuery;

  // if (!studentName) {
  //   Query = selectAllStudentsQuery;
  // } else {
  //   Query = selectStudentByNameQuery;
  // }

  const rows = await connection.query(Query, Params);

  return rows;
};

exports.exampleDao = async function (connection, params) {
  const Query = `SELECT * FROM Students;`;
  const Params = [];

  const rows = await connection.query(Query, Params);

  return rows;
};

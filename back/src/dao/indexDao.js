const { pool } = require("../../config/database");

exports.selectRestaurants = async function (connection, category) {
  const selectAllRestaurantsQuery = `SELECT title, address, category, videoUrl FROM Restaurants where status = 'A';`;
  const selectRestaurantsByCategoryQuery = `SELECT title, address, category, videoUrl FROM Restaurants where status = 'A' and category = ?;`;
  const Params = [category];

  let Query = category
    ? selectRestaurantsByCategoryQuery
    : selectAllRestaurantsQuery;

  const rows = await connection.query(Query, Params);

  return rows;
};

// exports.deleteStudents = async function (connection, studentIdx) {
//   const Query = `update into Students set status = "D" where studentIdx = ?;`;
//   const Params = [studentIdx];

//   const rows = await connection.query(Query, Params);

//   return rows;
// };

// exports.updateStudent = async function (
//   connection,
//   studentIdx,
//   studentName,
//   major,
//   birth,
//   address
// ) {
//   const Query = `update into Students set studentName = ifnull(?, studentName), major = ifnull(?, major), birth = ifnull(?, birth), address = ifnull(?, address) where studentIdx = ?;`;
//   const Params = [studentName, major, birth, address, studentIdx];

//   const rows = await connection.query(Query, Params);

//   return rows;
// };

// exports.isValidStudentIdx = async function (connection, studentIdx) {
//   const Query = `SELECT * FROM Students where studentIdx = ? and status = "A";`;
//   const Params = [studentIdx];

//   const rows = await connection.query(Query, Params);

//   if (rows < 1) {
//     return false;
//   }

//   return true;
// };

// exports.insertStudents = async function (
//   connection,
//   studentName,
//   major,
//   birth,
//   address
// ) {
//   const Query = `insert into Students(studentName, major, birth, address) values (?,?,?,?)`;
//   const Params = [studentName, major, birth, address];

//   const rows = await connection.query(Query, Params);

//   return rows;
// };

// exports.selectStudents = async function (connection, studentIdx) {
//   const Query = `SELECT * FROM Students where studentIdx = ?;`;
//   // const selectAllStudentsQuery = `SELECT * FROM Students;`;
//   // const selectStudentByNameQuery = `SELECT * FROM Students where studentName = ?;`;
//   const Params = [studentIdx];

//   // let Query = studentName ? selectStudentByNameQuery : selectAllStudentsQuery;

//   // if (!studentName) {
//   //   Query = selectAllStudentsQuery;
//   // } else {
//   //   Query = selectStudentByNameQuery;
//   // }

//   const rows = await connection.query(Query, Params);

//   return rows;
// };

// exports.exampleDao = async function (connection, params) {
//   const Query = `SELECT * FROM Students;`;
//   const Params = [];

//   const rows = await connection.query(Query, Params);

//   return rows;
// };

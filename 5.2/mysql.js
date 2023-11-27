const mysql = require("mysql2");

async function main() {
  try {
    let connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "Codenotch1232",
      database: "5.1",
    });
    console.log("Conexión exitosa a la base de datos");

    //RETO 1
    // Calcular la nota media de los alumnos de la asignatura 1.

    // let params = [1]

    // let sql = "SELECT AVG(mark) FROM marks WHERE subject_id = ?";

    //Calcular el número total de alumnos que hay en la base de datos.

    // let params = ["*"];

    // let sql = "SELECT COUNT(?) FROM students";

    // Listar todos los campos de la tabla “groups”.

    // let params = ["*"];
    // let sql = "SELECT ? FROM grupos";

    // Elimina todas las notas de la base de datos que estén por encima de 5 y que sean del año pasado (no utilices BETWEEN).

    // let params = ["5", "2022-01-01"];
    // let sql = "DELETE FROM marks WHERE mark > ? AND fecha < ?";

    // Obtén los datos de todos los estudiantes que estén en el bootcamp este año. Para ello la tabla de estudiantes debe tener un campo que sea el año de ingreso.

    // Para agregar el campo year a la tabla students lo hice con WORKBENCH y para ajustar el año de ingreso de los estudiantes  lo hice con el siguiente código: UPDATE students SET year_ingreso = 2023 WHERE student_id = 10;

    // let params = ["*", "2021-01-01"];

    // let sql = "SELECT ? FROM students WHERE year_ingreso = ?";

    // Calcular el número de profesores que hay por cada asignatura.

    // let params = ["*"];
    // let sql = SELECT COUNT(?) FROM subject_teacher GROUP BY subject_id;

    //RETO 2

    // Obtén el id y la nota de los alumnos que tengan un id entre 1 y 20, o que tenga una nota mayor de 8 y la nota tenga fecha del año pasado.

    // let params = ["1", "20", "8", "2022-01-01]

    // let sql = "SELECT student_id, mark FROM marks WHERE student_id BETWEEN ? AND ? OR mark > ? AND fecha < ?";

    // Obtén la media de las notas que se han dado en el último año por asignatura

    // let params = ["2022-01-01"];

    // let sql = "SELECT AVG(mark) FROM marks WHERE fecha > ? GROUP BY subject_id";

    // Obtén la media aritmética de las notas que se han dado en el último año por alumno

    // let params = ["2022-01-01"];

    // let sql = "SELECT AVG(mark) FROM marks WHERE fecha > ? GROUP BY student_id";

    // RETO 3

    // Obtén los nombres y apellidos de los alumnos y los nombres de las asignaturas en las que están apuntados

    // let sql = "SELECT first_name, last_name, title FROM students s JOIN subject_teacher st ON st.group_id = s.group_id  JOIN subjects sub ON sub.subject_id = st.subject_id";

    // RETO 4

    // Obtén todos los nombres y apellidos de los profesores y los nombres de las asignaturas que imparten.
    // let sql = "SELECT t.first_name, t.last_name, sub.title FROM teachers t JOIN subject_teacher st ON st.teacher_id = t.teacher_id JOIN subjects sub ON sub.subject_id = st.subject_id";

    // RETO 5

    // Obtén el número total de alumnos por asignatura, el nombre de la asignatura y el nombre y apellidos del profesor que la imparte

    connection.query(sql, params, function (err, result) {
      if (err) throw err;
      else {
        console.log("Query ejecutada correctamente");
        console.log(result);
      }
    });
  } catch (error) {
    console.log(error);
    await connection.end();
  }
}

main();

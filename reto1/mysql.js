const mysql = require("mysql2/promise");

async function main() {
  try {
    let connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "OctavianNBA2004",
      database: "5.1",
    });
    console.log("Conexión exitosa a la base de datos");

    //RETO 1

    // Modificar direccion para agregar columna
    // let sql = "ALTER TABLE direccion ADD COLUMN numero INT(10)";

    // Modificar direccion para eliminar columna
    // let sql = "ALTER TABLE direccion DROP COLUMN numero";

    // Eliminar tabla direccion
    // let sql = "DROP TABLE direccion";

    //Modificar todas las marks de los alumnos a 0 en tabla marks
    // let sql = "UPDATE marks SET mark = 0";

    // Obtener el nombre y el primer apellido de todos los estudiantes
    // let sql = "SELECT first_name, last_name FROM students";

    //Obtener todos los datos de los profesores
    // let sql = "SELECT * FROM teachers";

    //RETO 2

    // Eliminar de la base de datos todas las marks cuya fecha tenga más de 10 años
    // let sql = "DELETE FROM marks WHERE fecha < '2011-01-01'";

    // Para todos los alumnos cuya nota sea inferior a 5 se les ajustará a 5
    // let sql = "UPDATE marks SET mark = 5 WHERE mark < 5";

    let [result] = await connection.query(sql);

    console.log("Tabla modificada");
    console.log(result);
  } catch (error) {
    console.log(error);
    await connection.end();
  }
}

main();

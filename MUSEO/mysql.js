const mysql = require("mysql2");

async function main() {
  try {
    let connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "Codenotch1232",
      database: "Museo",
    });
    console.log("Conexión exitosa a la base de datos");

    // - Obtener un listado de todos los objetos que el museo tiene en préstamo, su localización dentro de la exposición, la fecha de expiración de este, la información básica (nombre, apellidos y email) de la persona que los ha prestado.

    // let sql =
    //   "SELECT p.pieza_id, p.nombre AS nombre_pieza, p.exposicion, COALESCE(pt.fecha_devolucion, pa.fecha_devolucion) AS fecha_expiracion, d.nombre AS nombre_dueño, d.apellido AS apellido_dueño, d.email FROM piezas p LEFT JOIN presto_de_otro_museo pt ON p.pieza_id = pt.pieza_id LEFT JOIN prestada_a_otro_museo pa ON p.pieza_id = pa.pieza_id LEFT JOIN dueños d ON pt.dueño_id = d.dueño_id OR pa.dueño_id = d.dueño_id WHERE pt.dueño_id IS NOT NULL OR pa.dueño_id IS NOT NULL";

    //Obtener de forma ordenada de mayor a menor, el número total de objetos o piezas agrupados por su situación dentro de la organización, esto es, cuántos hay expuestos, cuántos en itinerancia y cuántos almacenados.

    // let params = ["*"];

    // let sql =
    //   "SELECT exposicion, COUNT(?) AS total_piezas FROM Piezas GROUP BY exposicion ORDER BY total_piezas DESC";

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

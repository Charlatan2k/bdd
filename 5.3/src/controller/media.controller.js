const pool = require("../database");

const getMedia = async (req, res) => {
  try {
    const { id } = req.params;
    const [media] = await pool.query(
      "SELECT AVG(mark) FROM marks WHERE student_id = ?",
      [id]
    );
    res.send({ message: "La nota media es", media });
    console.log("La media es de", media);
  } catch (error) {
    console.log(" Error getting media ", error);
    res.status(500).send("Error getting media");
  }
};

const getApuntadasyAsignatura = async (req, res) => {
  try {
    const { id } = req.params;
    const [apuntadas] = await pool.query(
      "SELECT s.first_name, s.last_name, GROUP_CONCAT(sub.title) AS subjects FROM marks m JOIN students s ON m.student_id = s.student_id JOIN subjects sub ON m.subject_id = sub.subject_id WHERE s.student_id = ? GROUP BY s.first_name, s.last_name;",
      [id]
    );
    res.send({
      message: "Las asignaturas a las que el alumno está apuntado son",
      apuntadas,
    });
    console.log(
      "Las asignaturas a las que el alumno está apuntado son",
      apuntadas
    );
  } catch (error) {
    console.log(" Error getting apuntadas ", error);
    res.status(500).send("Error getting apuntadas");
  }
};

const getApuntadas = async (req, res) => {
  try {
    const [apuntadas] = await pool.query(
      "SELECT s.first_name, s.last_name, GROUP_CONCAT(sub.title) AS subjects FROM marks m JOIN students s ON m.student_id = s.student_id JOIN subjects sub ON m.subject_id = sub.subject_id WHERE s.student_id = ? first_name, s.last_name"
    );
    res.send({
      message: "Las asignaturas a las que el alumno está apuntado son",
      apuntadas,
    });
    console.log(
      "Las asignaturas a las que el alumno está apuntado son",
      apuntadas
    );
  } catch (error) {
    console.log(" Error getting apuntadas ", error);
    res.status(500).send("Error getting apuntadas");
  }
};

const getImpartidas = async (req, res) => {
  try {
    const { id } = req.params;
    const [impartidas] = await pool.query(
      "SELECT sub.title AS asignaturas , first_name AS nombre FROM subjects sub JOIN subject_teacher s ON s.subject_id = sub.subject_id JOIN teachers t ON t.teacher_id = s.teacher_id WHERE s.teacher_id = ? GROUP BY title, first_name",
      [id]
    );
    res.send({
      message: "Las asignaturas que el profesor imparte son",
      impartidas,
    });
    console.log("Las asignaturas que el profesor imparte son", impartidas);
  } catch (error) {
    console.log(" Error getting impartidas ", error);
    res.status(500).send("Error getting impartidas");
  }
};

const getImpartidasTodos = async (req, res) => {
  try {
    const [impartidas] = await pool.query(
      "SELECT sub.title AS asignaturas, first_name AS nombre, last_name AS apellido FROM teachers t  JOIN subject_teacher subt ON subt.teacher_id = t.teacher_id JOIN subjects sub ON sub.subject_id = subt.subject_id GROUP BY first_name, last_name, title"
    );
    res.send({
      message: "Las asignaturas que el profesor imparte son",
      impartidas,
    });
    console.log("Las asignaturas que el profesor imparte son", impartidas);
  } catch (error) {
    console.log(" Error getting impartidas ", error);
    res.status(500).send("Error getting impartidas");
  }
};

module.exports = {
  getMedia,
  getApuntadasyAsignatura,
  getApuntadas,
  getImpartidas,
  getImpartidasTodos,
};

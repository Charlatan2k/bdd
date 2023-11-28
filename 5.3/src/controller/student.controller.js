const pool = require("../database");

const welcome = (req, res) => {
  res.json({
    message: "Welcome to my API",
  });
};

const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const [student] = await pool.query(
      "SELECT * FROM students WHERE student_id = ?",
      [id]
    );
    res.send(student);
    console.log(student);
  } catch (error) {
    console.log(" Error getting student ", error);
    res.status(500).send("Error getting student");
  }
};

const getStudents = async (req, res) => {
  try {
    const [students] = await pool.query("SELECT * FROM students");
    res.send(students);
  } catch (error) {
    console.log("Students not found", error);
    res.status(500).send("Error getting students");
  }
};

const createStudent = async (req, res) => {
  const { first_name, last_name, group_id, year_ingreso } = req.body;
  try {
    await pool.query(
      "INSERT INTO students (first_name, last_name, group_id, year_ingreso) VALUES (?, ?, ?, ?)",
      [first_name, last_name, group_id, year_ingreso]
    );
    res.send("Student created");
  } catch (error) {
    console.log("Error creating student", error);
    res.status(500).send("Error creating student");
  }
};

const updateStudent = async (req, res) => {
  const { student_id, first_name, last_name, group_id, year_ingreso } =
    req.body;
  try {
    await pool.query(
      "UPDATE students SET first_name = ?, last_name = ?, group_id = ?, year_ingreso = ? WHERE student_id = ?",
      [first_name, last_name, group_id, year_ingreso, student_id]
    );
    res.send("Student updated");
  } catch (error) {
    console.log("Error updating student", error);
    res.status(500).send("Error updating student");
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM students WHERE student_id = ?", [id]);
    res.send("Student deleted");
  } catch (error) {
    console.log("Error deleting student", error);
    res.status(500).send("Error deleting student");
  }
};

module.exports = {
  getStudentById,
  welcome,
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
};

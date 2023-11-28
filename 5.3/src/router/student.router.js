const { Router } = require("express");
const router = Router();
const stCtrl = require("../controller/student.controller");

router.get("/", stCtrl.welcome);

router.get("/students/:id", stCtrl.getStudentById);

router.get("/students", stCtrl.getStudents);

router.post("/students", stCtrl.createStudent);

router.put("/students", stCtrl.updateStudent);

router.delete("/students/:id", stCtrl.deleteStudent);

module.exports = router;

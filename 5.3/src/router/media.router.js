const { Router } = require("express");
const router = Router();
const mediaCtrl = require("../controller/media.controller");

router.get("/media/:id", mediaCtrl.getMedia);

router.get("/apuntadas/:id", mediaCtrl.getApuntadasyAsignatura);

router.get("/apuntadas", mediaCtrl.getApuntadas);

router.get("/impartidas/:id", mediaCtrl.getImpartidas);

router.get("/impartidas", mediaCtrl.getImpartidasTodos);

module.exports = router;

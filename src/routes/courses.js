const express = require("express");
const router = express.Router();

const courseController = require("../app/controllers/CourseControllers");

router.use("/:slug", courseController.show);


module.exports = router;

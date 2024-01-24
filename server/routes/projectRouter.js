const express = require("express");
const {
  AddProject,
  GetAllProjects,
} = require("../controller/projectController");
const router = express.Router();

router.post("/add-project", AddProject);
router.get("/get-projects", GetAllProjects);

module.exports = router;

require("../model/db/projectSchema");
require("../model/db/userSchema");
const mongoose = require("mongoose");
const Projects = mongoose.model("Projects");
const User = mongoose.model("Users");

module.exports.AddProject = async (req, res) => {
  try {
    const { owner, project_title, description, project_url } = req.body;
    const user = await User.findOne({ email: owner });
    await Projects.create({
      owner,
      project_title,
      description,
      project_url,
    });
    res.status(201).send({ status: "Project Added Successfully" });
  } catch (error) {
    res.status(400).send({ status: "Something went wrong" });
  }
};

module.exports.GetAllProjects = async (req, res) => {
  try {
    const projects = await Projects.find({});
    res.status(201).send({ status: "Successfull", data: projects });
  } catch (error) {
    res.status(400).send({ status: "Error", data: error });
  }
};

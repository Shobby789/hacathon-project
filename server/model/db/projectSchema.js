const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    owner: { type: String },
    project_title: { type: String },
    description: { type: String },
    project_url: { type: String },
  },
  {
    collection: "Projects",
  }
);

mongoose.model("Projects", projectSchema);

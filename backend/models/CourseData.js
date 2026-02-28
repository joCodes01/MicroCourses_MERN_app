const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    longDescription: String,
    modules: [{ title: String }],
    duration: String,
    image: String,
    instructor: String,
    category: String,
  },
  { collection: "courses" },
);

module.exports = mongoose.model("Courses", courseSchema);

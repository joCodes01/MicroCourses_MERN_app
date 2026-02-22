const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseTitle: String,
  id: String,
  shortDescription: String,
  longDescription: String,
  modules: [{ title: String }],
  hours: String,
  image: String,
  instructor: String,
  category: String,
});

module.exports = mongoose.model("CourseData", courseSchema);

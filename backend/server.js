const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const port = 5999;

//Middleware
app.use(cors());
app.use(express.json());
app.use("/images", express.static("images"));

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("MongoDB is connected"))
  .catch((error) => console.error(error));

const CourseData = require("./models/CourseData");

//Route to get all courses
app.get("/courses", async (req, res) => {
  try {
    const courses = await CourseData.find().sort({ courseTitle: 1 });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: "Couldn't fetch courses" });
  }
});

//UPDATE FROM THIS SECTION

//get courses by id

app.get("/courses/:id", async (req, res) => {
  try {
    const course = await CourseData.findById(req.params.id);

    if (course) {
      console.log("Course data found.");
      res.json(course);
    } else {
      console.log("Error, course data not found.");
      res.status(404).json({ message: "Course not found." });
    }
  } catch (err) {
    console.log("Error, course data not found.");
    res.status(500).json({ error: "Error fetching data." });
  }
});

//Add new course
app.post("/courses", async (req, res) => {
  try {
    const newCourse = new CourseData(req.body);
    await newCourse.save();
    console.log("New course created.");
    res.status(201).json(newCourse);
  } catch (err) {
    console.log("Error, failed to create new course.");
    res.status(500).json({ error: "Error, failed to create new course." });
  }
});

//update a course

app.put("/courses/:id", async (req, res) => {
  try {
    const course = await CourseData.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true },
    );
    if (course) {
      res.json(course);
    } else {
      res.status(404).json({ message: "Course not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to update the course" });
  }
});

//Delete a course

app.delete("/courses/:id", async (req, res) => {
  try {
    await CourseData.findOneAndDelete({ id: req.params.id });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "Faied to delete course" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost: ${port}`);
});

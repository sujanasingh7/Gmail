import express from "express";
import { createCourse } from "../controller/courseController.js";

const courseRouter = express.Router();

// POST - Create Course
courseRouter.post("/create", createCourse);

// (Optional) GET all courses
// courseRouter.get("/", getCourses);

// (Optional) UPDATE course
// courseRouter.put("/:id", updateCourse);

// (Optional) DELETE course
// courseRouter.delete("/:id", deleteCourse);

export default courseRouter;
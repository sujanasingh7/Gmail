import Course from "../models/courseModel.js";

export const createCourse = async (req, res) => {
    try {
        const {
            courseName,
            courseCode,
            instructorName,
            credits,
            duration,
            enrolledStudents,
            description
        } = req.body;

        const course = await Course.create({
            courseName,
            courseCode,
            instructorName,
            credits,
            duration,
            enrolledStudents,
            description
        });

        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
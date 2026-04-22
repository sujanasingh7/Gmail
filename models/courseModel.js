import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true,
        trim: true,
    },
    courseCode: {
        type: String,
        required: true,
        unique: true,
    },
    instructorName: {
        type: String,
        required: true,
    },
    credits: {
        type: Number,
        required: true,
        min: 1,
    },
    duration: {
        type: String, // e.g., "3 months", "1 semester"
        required: true,
    },
    enrolledStudents: {
        type: Number,
        default: 0,
        min: 0,
    },
    description: {
        type: String,
    }
}, { timestamps: true });

const Course = mongoose.model("Course", courseSchema);

export default Course;
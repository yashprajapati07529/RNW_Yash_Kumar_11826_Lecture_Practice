import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    course: String
})

const Student = mongoose.model("Student", studentSchema)

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("MongoDB Connected Successfully.");

    const student = new Student({
        name: "Vikas",
        age: 17,
        email: "vikas@gmail.com",
        course: "Full Stack Development",
    })

    return student.save()
}).then(() => {
    console.log("Student Added Successfully.");
}).catch((err) => {
    console.log("MongoDB connection failed.");
    console.log(err);
})

app.get("/", (req, res) => {
    res.send("Welcome to Node.js Application.")
})


app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`);
})

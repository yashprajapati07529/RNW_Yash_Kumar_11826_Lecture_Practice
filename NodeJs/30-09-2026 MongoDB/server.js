import express from 'express'
import mongoose from 'mongoose'

const app = express()
const PORT = 3000

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    course: String
})

const Student = mongoose.model("Student", studentSchema)

mongoose.connect("mongodb+srv://yash_users:yash878000@cluster0.jsohss5.mongodb.net/").then(() => {
    console.log("MongoDB Connected Successfully.");
 
    const student = new Student({
        name: "Vikas",
        email: "vikas@gmail.com",
        course: "Full Stack Development",
        dob: "12-02-2007"
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
    console.log("Server start on port 3000");
})

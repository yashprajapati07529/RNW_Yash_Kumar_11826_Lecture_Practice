import Employee from '../models/employee.models.js'
import bcrypt from 'bcrypt'

const makeHobbyArray = hobby => {
    if(Array.isArray(hobby)) return hobby
    return hobby ? hobby.split(",").map((item) => item.trim()) : [];
}

// create employee with hasing password

export const createEmployee = async(req , res , next) => {
    try{
        const {name , email , password , gender , city} = req.body;
        const hobby = makeHobbyArray(req.body.hobby)

        const hashedPassword = await bcrypt.hash(password , 10)

        const employee = await Employee.create({
            name,
            email,
            password:hashedPassword,
            gender,
            hobby,
            city,
            file:req.file ? req.file.filename : null
        })

        const result = employee.toObject()

        res.status(201).json({
            success:true,
            message:"Employee created Successfully.",
            data:result
        })

    }catch(err){
        next(err)
    }
}
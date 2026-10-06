import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title:{type:string, required:true, trim:true},
    author:{type:string, required:true, trim:true},
    category:{type:string, required:true, trim:true},
    price:{type:number, required:true, min:0},
    quantity:{type:number, required:true, min:1},
    PublishYear:{type:number},
}, {timestamps:true});

export default mongoose.model("Book", bookSchema);
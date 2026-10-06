import Book from '../models/book.models.js'


// Book Insert

export const createBook = async(req , res , next) => {
    try{
        const book = await Book.create(req.body)

        res.status(201).json({
            success:true,
            message:"Book Created Successfully!",
            data:book
        });

    }catch(err){
        next(err)
    }
}


// View All Book + Search + Sort + Pagination

export const getBooks = async(req , res , next) => {
    try{

        const {search="" , sortBy="createdAt" , order="desc" , page=1 , limit=5} = req.body

        const allowedSort = ["title" , "author" , "price" , "category" , "createdAt"];

        const field = allowedSort.includes(sortBy) ? sortBy : "createdAt"

        const direction = order === "asc" ? 1 : -1;

        const pageNumber = Math.max(Number(page) , 1)

        const limitNumber = Math.min(Math.max(Number(limit) , 1) , 50)

        const filter = search ? {
            $or:[
                {title :{$regex:search , $option:"i"}},
                {author:{$regex:search , $option:"i"}},
                {category:{$regex:search , $option:"i"}}
            ]
        } : {};

        const skip = (pageNumber - 1) * limitNumber

        const [books , total] = await Promise.all([
            Book.find(filter).sort({[field]:direction}).skip(skip).limit(limitNumber) , 
            Book.countDocuments(filter)
        ])

        res.json({
            sucess:true,
            total,
            page:pageNumber,
            totalPages:Math.ceil(total / limitNumber),
            data:books
        })

    }catch(err){
        next(err)
    }
}
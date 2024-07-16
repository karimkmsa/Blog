import blogModel from "../../../../database/models/blog.model.js";
import catchAsyncError from "../../../../utils/middleware/catchAsyncError.js";
import AppError from "../../../../utils/services/AppError.js"





export const  createBlog = catchAsyncError(async (req,res,next)=>{

let data = req.body

let result = new blogModel(data)
await result.save()

res.status(201).json({message:"blog added" , result})


})

export const updateBlog = catchAsyncError(async(req,res,next)=>{

let {id} = req.params;
let{title ,content}=req.body;
let results = await blogModel.findByIdAndUpdate(id ,{title:title,content:content})
!results && next(new AppError("blog not found" , 404));
results && res.json({message:"Done", results});






})





export const  deleteBlog = catchAsyncError(async (req,res,next)=>{

let {id} = req.params;

let result = await  blogModel.findById(id);

!results && next(new AppError(`post not found`, 404));
results && res.json({ message: "Done", results });

})


export const getAllBlogs = catchAsyncError(async(req,res,next)=>{

let result = await blogModel.find()
res.json({message:"data" , result})

})



export const getById = catchAsyncError(async(req,res,next)=>{
let {id} = req.params

let result = await blogModel.find(id)
res.json({message:"blogs" , result })






})





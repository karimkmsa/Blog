import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title:   String,
    contect: String,
    author:  String 
  },
  {
    timestamps: true,
  }
);

const blogModel = mongoose.model("Blog", blogSchema);

export default blogModel;

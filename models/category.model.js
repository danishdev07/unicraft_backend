const { Schema, model } = require("mongoose")

const categorySchema = new Schema({
    // _id : { type : String },
    categoryId : { type : Number }
},{
    timestamps : true,
    toJSON : { virtuals: true },
    toObject : { virtuals: true },
})

const categoryModel = model("category",categorySchema)
module.exports = categoryModel
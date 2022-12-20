import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        description: {type: String, required: true},
        img: {type: String, required: true},
        categories: {type: Array, required: true},
        size: {type: String},
        color: {type: String},
        price: {type: Number, required: true},
    },
    {
        timestamps: true,
    }
)

const Product = mongoose.model("Product", ProductSchema)
export default Product
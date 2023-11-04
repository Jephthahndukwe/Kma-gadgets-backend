import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please enter product name"],
        trim: true,
        maxLength: [30, "Product name cannot exceed 15 characters"],
    },
    
    description: {
        type: String,
        required: [ true , "Please add a brief description of the Product"],
    },
    
    category:{
        type: String,
        required:[true, "Please select category for this product"],
    
    enum:{
        values:[
            "Phone",
            "Laptop",
            "Tablet",
            "Earbuds",
            "Smart watch"
        ]
    }},
    
    brand:{
     type:String,
     required:[true, "Please select brand for this product"],
    
     enum:{
        values:[
            "Xiaomi",
            "Apple",
            "Samsung",
            "Vivo",
            "Tecno",
            "Itel",
            "Infinix",
            "Oppo",
            "Huawei",
            "Gionee",
            "Redimi",
            "Oneplus"
        ]
     }},
    
    costPrice: {
        type:Number,
        required: [true, "Please enter product price"],
        maxLength: [20, "Product name cannot exceed 5 characters"],
        default: 0.0,
    },

    sellingPrice:{
        type:Number,
        required: [true, "Please enter product price"],
        maxLength: [20, "Product name cannot exceed 5 characters"],
        default: 0.0,
    },
    
    ratings:{
        type:Number,
        default:0
    },
    
    numOfReviews:{
        type:Number,
        default:0,
    },
    
    reviews: [
    {
    user:{
        type: mongoose.Schema.ObjectId,
        ref:"user",
        required:true,
    },
    fullname:{
        type:String,
        required:true,
    },
    
    rating:{
        type:Number,
        required:true,
    },
    comment:{
        type:String,
        required:true,
    }
    }],
    
    images: [
        {
          public_id: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true,
          },
        },
      ],
    
    qtyInStock:{
        type: Number,
        required: [true, "Please enter product stock"],
        maxLength: [5, "cannot exceed 3 characters"],
        default: 0,
    },
    color: {
        type: String
    },
    ram: {
        type: String
    },
    storage: {
        type: String
    },
    price: {
        type: String
    },
    categories: {
        type: String
    },
    popularity: { 
        type: String,
        enum: {
            values: [
                "Sort by Popularity",
                "Sort by low to high price",
                "Sort by high to low price",
                "Sort by latest",
                "Sort by average rating",
            ]
        },
    },

    user:{
        type: mongoose.Schema.ObjectId,
        ref: "user",
    },

}, {timestamps: true} )


export default mongoose.model('product', productSchema)
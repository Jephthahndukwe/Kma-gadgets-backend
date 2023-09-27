import mongoose from "mongoose"




const appleSchema = mongoose.Schema({

    name:{
        type:String,
        required:[true, "Please enter product name"],
        trim:true,
        maxLength:[30, "Product name cannot exceed 15 characters"],
    },
    
    category:{
        type: String,
    required:[true, "Please select catergory for this product"],
    
    enum:{
        values:[
            "Phone",
            "Laptop",
            "Tablet",
            "Earbuds",
            "Smart watch"
    ], 
    }
    },
    
    brand:{
     type:String,
     required:[true, "Please select brand for this product"],
    
     enum:{
    
        values:[
     "Apple",
        ]
     }
    
    },
    
    
    
    
    costPrice: {
        type:String,
        required: [true, "Please enter product price"],
        maxLength: [20, "Product name cannot exceed 5 characters"],
        default: 0.0,
    },
    
    
    
    sellingPrice:{
        type:String,
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
    
    
    
    reviews:[
    {
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"user",
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
    
    },
    
    ],
    
    
    
    
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
        type:Number,
        required:[true, "Please enter product stock"],
        maxLength:[10, "cannot exceed 3 characters"],
        default:0,
    },
    
    variationType:[
        {
            color:{type:String},
            ram:{type:String},
            storage:{type:String},
            price:{type:Number},
            category:{type:String},
            popularity:{type:String}
        }
    ],
    
    createdAt:{
    type:Date,
    default:Date.now,
    }
     




})




const Apple = mongoose.model ("Apple", appleSchema)

export default Apple
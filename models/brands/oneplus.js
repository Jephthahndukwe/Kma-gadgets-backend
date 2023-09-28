import mongoose from "mongoose"




const oneplusSchema = mongoose.Schema({

    name:{
        type:String,
        required:[true, "Please enter product name"],
        trim:true,
        maxLength:[15, "Product name cannot exceed 15 characters"],
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
     "Oneplus"
        ]
     }
    
    },
    
    
    
    
    costPrice: {
        type:Number,
        required: [true, "Please enter product price"],
        maxLength: [5, "Product name cannot exceed 5 characters"],
        default: 0.0,
    },
    
    
    
    sellingPrice:{
        type:Number,
        required: [true, "Please enter product price"],
        maxLength: [5, "Product name cannot exceed 5 characters"],
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
        ref:"User",
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
        maxLength:[5, "cannot exceed 3 characters"],
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
    
    
    

},{timestamps:true})




const Oneplus = mongoose.model ("Oneplus", oneplusSchema)

export default Oneplus
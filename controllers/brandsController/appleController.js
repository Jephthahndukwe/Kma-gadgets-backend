
import Apple from "../../models/brands/apple.js"




//Create new appleProduct =>
export const create_apple_product = async(req,res)=>{
    const appleProduct = await Apple.create(req.body)
    
    req.body.user = req.user._id

        if(appleProduct){
            res.json({
                status:"Ok",
                message:"Product created successfully",
                appleProduct
            })
        }else {
            res.json({
                error:"Invalid data inputed"
            })
        }
   
   
}



//Get all product =>
export const get_apple_products = async(req,res)=>{
const appleProducts = await Apple.find({})
if(appleProducts){
    setTimeout(() => {
    res.json({
        status:"Ok",
        message:"All Apple products retrieved",
        appleProducts
    })
}, 5000)


}   else{
    res.json({
        error:"User does not exist or no items"
    })
}

}




// Get single product details => using the id
 export const get_single_apple_product = async(req, res)=>{
    const getAppleProduct = await Apple.findOne({_id: req.params.id})

    if(getAppleProduct){
        res.json({
            status:"Ok",
            message:"Single product gotten successfully",
            getAppleProduct
        })
    
    } else {
        res.json({
            error:"Product not available"
        })
    }
 }


 //Update Product =>
export const update_apple_products = async(req,res)=>{
    const updateAppleProducts = await Apple.findById(req.params.id)
   
    

    try {
        updateAppleProducts = await Apple.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        })
    
        res.status(200).json({
            success: true,
            message: "Apple Product updated successfully",
            updateAppleProducts
        });


    } catch (error) {
        console.log(error)
        if (!updateAppleProducts) {
            console.log(error)
            res.status(404).send({
                success: false,
                message: 'Product not found',
                error
            })
        }
    }

}




// Delete Single Product => 
export const delete_single_apple_product = async(req,res)=>{
    const deleted_apple_product = await Apple.findByIdAndDelete({_id: req.params.id})
    if( deleted_apple_product){
        res.status(201).json({
            status:"Ok",
            message:"Product deleted successfully"
        })
    }else{
        res.json({
            error:"Product not found"
        })
    }
}

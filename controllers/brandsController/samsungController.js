
import Samsung from "../../models/brands/samsung.js";




//Create new product =>
export const create_samsung_product = async(req,res)=>{
    const samsungProduct = await Samsung.create(req.body)
    
    req.body.user = req.user.id

        if(samsungProduct){
            res.json({
                status:"Ok",
                message:"Oppo Product created successfully",
                data:samsungProduct
            })
        }else {
            res.json({
                error:"Invalid data inputed"
            })
        }
   
   
     

}



//Get all product =>
export const get_samsung_products = async(req,res)=>{
const samsungProducts = await Samsung.find({})
if(samsungProducts){
    setTimeout(() => {
    res.json({
        status:"Ok",
        message:"All Oppo products retrieved",
        data: samsungProducts
    })
}, 5000)


}   else{
    res.json({
        error:"User does not exist or no items"
    })
}

}



// Get single product details => using the id
 export const get_single_samsung_product = async(req, res)=>{
    const getSingleSamsungProduct = await Samsung.findOne({_id: req.params.id})

    if(getSingleSamsungProduct){
        res.json({
            status:"Ok",
            message:"Single Oppo product gotten successfully",
            data:getSingleSamsungProduct
        })
    
    } else {
        res.json({
            error:"Product not available"
        })
    }
 }


 //Update Product =>
 export const update_samsung_products = async(req,res)=>{
    const updateSamsungProducts = await Samsung.findById(req.params.id)
   
    

    try {
        updateSamsungProducts = await Samsung.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        })
    
        res.status(200).json({
            success: true,
            message: "Gionee Product updated successfully",
            data:updateSamsungProducts
        });


    } catch (error) {
        console.log(error)
        if (!updateSamsungProducts) {
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
export const delete_single_samsung_product = async(req,res)=>{
    const deleted_samsung_product = await Samsung.findByIdAndDelete({_id:req.params.id})
    if( deleted_samsung_product){
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


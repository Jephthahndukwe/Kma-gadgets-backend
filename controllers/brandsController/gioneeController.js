
import Gionee from "../../models/brands/gionee.js"





//Create new product =>
export const create_gionee_product = async(req,res)=>{
    const gioneeProduct = await Gionee.create(req.body)
    
    req.body.user = req.user._id

        if(gioneeProduct){
            res.json({
                status:"Ok",
                message:"Product created successfully",
                gioneeProduct
            })
        }else {
            res.json({
                error:"Invalid data inputed"
            })
        }
   
   
     

}



//Get all product =>
export const get_gionee_products = async(req,res)=>{
const gioneeProducts = await Gionee.find({})
if(gioneeProducts){
    setTimeout(() => {
    res.json({
        status:"Ok",
        message:"All products retrieved",
        gioneeProducts
    })
}, 5000)


}   else{
    res.json({
        error:"User does not exist or no items"
    })
}

}




// Get single product details => using the id
 export const get_single_gionee_product = async(req, res)=>{
    const gioneeProduct = await Gionee.findOne({_id: req.params.id})

    if(gioneeProduct){
        res.json({
            status:"Ok",
            message:"Single product gotten successfully",
            gioneeProduct
        })
    
    } else {
        res.json({
            error:"Product not available"
        })
    }
 }


 //Update Product =>
 export const update_gionee_products = async(req,res)=>{
    const updateGioneeProducts = await Gionee.findById(req.params.id)
   
    

    try {
        updateGioneeProducts = await Gionee.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        })
    
        res.status(200).json({
            success: true,
            message: "Gionee Product updated successfully",
            updateGioneeProducts
        });


    } catch (error) {
        console.log(error)
        if (!updateGioneeProducts) {
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
export const delete_single_gionee_product = async(req,res)=>{
    const deleted_gionee_product = await Gionee.findByIdAndDelete({_id: req.params.id})
    if( deleted_gionee_product){
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

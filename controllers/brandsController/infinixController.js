
import Infinix from "../../models/brands/infinix.js";




//Create new product =>
export const create_infinix_product = async(req,res)=>{
    const infinixProduct = await Infinix.create(req.body)
    
    req.body.user = req.user._id

        if(infinixProduct){
            res.json({
                status:"Ok",
                message:"Infinix Product created successfully",
                infinixProduct
            })
        }else {
            res.json({
                error:"Invalid data inputed"
            })
        }
   
   
     

}



//Get all product =>
export const get_infinix_products = async(req,res)=>{
const infinixProducts = await Infinix.find({})
if(infinixProducts){
    setTimeout(() => {
    res.json({
        status:"Ok",
        message:"All Infinix products retrieved",
        infinixProducts
    })
}, 5000)


}   else{
    res.json({
        error:"User does not exist or no items"
    })
}

}




// Get single product details => using the id
 export const get_single_infinix_product = async(req, res)=>{
    const getSingleInfinixProduct = await Infinix.findOne({_id: req.params.id})

    if(getSingleInfinixProduct){
        res.json({
            status:"Ok",
            message:"Single Infinix product gotten successfully",
            getSingleInfinixProduct
        })
    
    } else {
        res.json({
            error:"Product not available"
        })
    }
 }


 //Update Product =>
 export const update_infinix_products = async(req,res)=>{
    const updateInfinixProducts = await Infinix.findById(req.params.id)
   
    

    try {
        updateInfinixProducts = await Infinix.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        })
    
        res.status(200).json({
            success: true,
            message: "Infinix Product updated successfully",
            updateInfinixProducts
        });


    } catch (error) {
        console.log(error)
        if (!updateInfinixProducts) {
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
export const delete_single_infinix_product = async(req,res)=>{
    const deleted_infinix_product = await Infinix.findByIdAndDelete({_id: req.params.id})
    if( deleted_infinix_product){
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

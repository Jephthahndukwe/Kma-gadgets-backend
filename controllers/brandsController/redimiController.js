
import Redimi from "../../models/brands/redimi.js";




//Create new product =>
export const create_redimi_product = async(req,res)=>{
    const redimiProduct = await Redimi.create(req.body)
    
    req.body.user = req.user.id

        if(redimiProduct){
            res.json({
                status:"Ok",
                message:"Oppo Product created successfully",
                data:redimiProduct
            })
        }else {
            res.json({
                error:"Invalid data inputed"
            })
        }
   
   
     

}



//Get all product =>
export const get_redimi_products = async(req,res)=>{
const redimiProducts = await Redimi.find({})
if(redimiProducts){
    setTimeout(() => {
    res.json({
        status:"Ok",
        message:"All Redimi products retrieved",
        data: redimiProducts
    })
}, 5000)


}   else{
    res.json({
        error:"User does not exist or no items"
    })
}

}




// Get single product details => using the id
 export const get_single_redimi_product = async(req, res)=>{
    const getSingleRedimiProduct = await Redimi.findOne({_id: req.params.id})

    if(getSingleRedimiProduct){
        res.json({
            status:"Ok",
            message:"Single Oppo product gotten successfully",
            data:getSingleRedimiProduct
        })
    
    } else {
        res.json({
            error:"Product not available"
        })
    }
 }


 //Update Product =>
 export const update_redimi_products = async(req,res)=>{
    const updateRedimiProducts = await Redimi.findById(req.params.id)
   
    

    try {
        updateRedimiProducts = await Redimi.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        })
    
        res.status(200).json({
            success: true,
            message: "Gionee Product updated successfully",
            data:updateRedimiProducts
        });


    } catch (error) {
        console.log(error)
        if (!updateRedimiProducts) {
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
export const delete_single_redimi_product = async(req,res)=>{
    const deleted_redimi_product = await Redimi.findByIdAndDelete({_id:req.params.id})
    if( deleted_redimi_product){
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


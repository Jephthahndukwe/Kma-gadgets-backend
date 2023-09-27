
import Oppo from "../../models/brands/oppo.js";




//Create new product =>
export const create_oppo_product = async(req,res)=>{
    const oppoProduct = await Oppo.create(req.body)
    
    req.body.user = req.user.id

        if(oppoProduct){
            res.json({
                status:"Ok",
                message:"Oppo Product created successfully",
                data:oppoProduct
            })
        }else {
            res.json({
                error:"Invalid data inputed"
            })
        }
   
   
     

}



//Get all product =>
export const get_oppo_products = async(req,res)=>{
const oppoProducts = await Oppo.find({})
if(oppoProducts){
    setTimeout(() => {
    res.json({
        status:"Ok",
        message:"All Oppo products retrieved",
        data: oppoProducts
    })
}, 5000)


}   else{
    res.json({
        error:"User does not exist or no items"
    })
}

}




// Get single product details => using the id
 export const get_single_oppo_product = async(req, res)=>{
    const getSingleOppoProduct = await Oppo.findOne({_id: req.params.id})

    if(getSingleOppoProduct){
        res.json({
            status:"Ok",
            message:"Single Oppo product gotten successfully",
            data:getSingleOppoProduct
        })
    
    } else {
        res.json({
            error:"Product not available"
        })
    }
 }


 //Update Product =>
 export const update_oppo_products = async(req,res)=>{
    const updateOppoProducts = await Oppo.findById(req.params.id)
   
    

    try {
        updateOppoProducts = await Oppo.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        })
    
        res.status(200).json({
            success: true,
            message: "Gionee Product updated successfully",
            data:updateOppoProducts
        });


    } catch (error) {
        console.log(error)
        if (!updateOppoProducts) {
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
export const delete_single_oppo_product = async(req,res)=>{
    const deleted_oppo_product = await Oppo.findByIdAndDelete({_id:req.params.id})
    if( deleted_oppo_product){
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


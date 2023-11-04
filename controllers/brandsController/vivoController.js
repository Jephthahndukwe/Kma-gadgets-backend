
import Vivo from "../../models/brands/vivo.js";




//Create new product =>
export const create_vivo_product = async(req,res)=>{
    const vivoProduct = await Vivo.create(req.body)
    
    req.body.user = req.user.id

        if(vivoProduct){
            res.json({
                status:"Ok",
                message:"Vivo Product created successfully",
                data:vivoProduct
            })
        }else {
            res.json({
                error:"Invalid data inputed"
            })
        }
   
   
     

}



//Get all product =>
export const get_vivo_products = async(req,res)=>{
const vivoProducts = await Vivo.find({})
if(vivoProducts){
    setTimeout(() => {
    res.json({
        status:"Ok",
        message:"All Oppo products retrieved",
        data: vivoProducts
    })
}, 5000)


}   else{
    res.json({
        error:"User does not exist or no items"
    })
}

}




// Get single product details => using the id
 export const get_single_vivo_product = async (req, res)=>{
    const getSingleVivoProduct = await Vivo.findOne({_id: req.params.id})

    if(getSingleVivoProduct){
        res.json({
            status:"Ok",
            message:"Single Techno product gotten successfully",
            data:getSingleVivoProduct
        })
    
    } else {
        res.json({
            error:"Product not available"
        })
    }
 }


 //Update Product =>
 export const update_vivo_products = async (req,res)=>{
    const updateVivoProducts = await Vivo.findById(req.params.id)
   
    

    try {
        updateVivoProducts = await Vivo.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        })
    
        res.status(200).json({
            success: true,
            message: "Gionee Product updated successfully",
            data:updateVivoProducts
        });


    } catch (error) {
        console.log(error)
        if (!updateVivoProducts) {
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
export const delete_single_vivo_product = async (req,res)=>{
    const deleted_vivo_product = await Vivo.findByIdAndDelete({_id:req.params.id})
    if( deleted_vivo_product){
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


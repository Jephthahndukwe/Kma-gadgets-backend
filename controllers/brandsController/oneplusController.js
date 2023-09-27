
import Oneplus from "../../models/brands/oneplus.js";




//Create new product =>
export const create_oneplus_product = async(req,res)=>{
    const oneplusProduct = await Oneplus.create(req.body)
    
    req.body.user = req.user.id

        if(oneplusProduct){
            res.json({
                status:"Ok",
                message:"Oneplus Product created successfully",
                data:oneplusProduct
            })
        }else {
            res.json({
                error:"Invalid data inputed"
            })
        }
   
   
     

}



//Get all product =>
export const get_oneplus_products = async(req,res)=>{
const onePlusProducts = await Oneplus.find({})
if(onePlusProducts){
    setTimeout(() => {
    res.json({
        status:"Ok",
        message:"All products retrieved",
        data: onePlusProducts
    })
}, 5000)


}   else{
    res.json({
        error:"User does not exist or no items"
    })
}

}




// Get single product details => using the id
 export const get_single_oneplus_product = async(req, res)=>{
    const getSingleOneplusProduct = await Oneplus.findOne({_id: req.params.id})

    if(getSingleOneplusProduct){
        res.json({
            status:"Ok",
            message:"Single Oneplus product gotten successfully",
            data:getSingleOneplusProduct
        })
    
    } else {
        res.json({
            error:"Product not available"
        })
    }
 }


 //Update Product =>
 export const update_oneplus_products = async(req,res)=>{
    const updateOnePlusProducts = await Oneplus.findById(req.params.id)
   
    

    try {
        updateOnePlusProducts = await Oneplus.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        })
    
        res.status(200).json({
            success: true,
            message: "Itel Product updated successfully",
            data:updateOnePlusProducts
        });


    } catch (error) {
        console.log(error)
        if (!updateOnePlusProducts) {
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
export const delete_single_oneplus_product = async(req,res)=>{
    const deleted_oneplus_product = await Oneplus.findByIdAndDelete({_id:req.params.id})
    if( deleted_oneplus_product){
        res.status(201).json({
            status:"Ok",
            message:"Itel Product deleted successfully"
        })
    }else{
        res.json({
            error:"Product not found"
        })
    }
}

import Huawei from "../../models/brands/huawei.js"




//Create new product =>
export const create_huawei_product = async(req,res)=>{
    const huaweiProduct = await Huawei.create(req.body)
    
    req.body.user = req.user._id

        if(huaweiProduct){
            res.json({
                status:"Ok",
                message:"Product created successfully",
                huaweiProduct
            })
        }else {
            res.json({
                error:"Invalid data inputed"
            })
        }
   
   
     

}



//Get all product =>
export const get_huawei_products = async(req,res)=>{
const huaweiProducts = await Huawei.find({})
if(huaweiProducts){
    setTimeout(() => {
    res.json({
        status:"Ok",
        message:"All products retrieved",
        huaweiProducts
    })
}, 5000)


}   else{
    res.json({
        error:"User does not exist or no items"
    })
}

}




// Get single product details => using the id
 export const get_single_huawei_product = async(req, res)=>{
    const getSingleHuaweiProduct = await Huawei.findOne({_id: req.params.id})

    if(getSingleHuaweiProduct){
        res.json({
            status:"Ok",
            message:"Single Huawei product gotten successfully",
            getSingleHuaweiProduct
        })
    
    } else {
        res.json({
            error:"Product not available"
        })
    }
 }


 export const update_huawei_products = async(req,res)=>{
    const updateHuaweiProducts = await Huawei.findById(req.params.id)
   
    

    try {
        updateHuaweiProducts = await Huawei.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        })
    
        res.status(200).json({
            success: true,
            message: "Huawei Product updated successfully",
           updateHuaweiProducts
        });


    } catch (error) {
        console.log(error)
        if (!updateHuaweiProducts) {
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
export const delete_single_huawei_product = async(req,res)=>{
    const deleted_huawei_product = await Huawei.findByIdAndDelete({_id: req.params.id})
    if( deleted_huawei_product){
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

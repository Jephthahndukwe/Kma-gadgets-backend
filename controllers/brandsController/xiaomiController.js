import Xiaomi from "../../models/brands/xiaomi.js";




//Create new product =>
export const create_xiaomi_product = async(req,res)=>{
    const xiaomiProduct = await Xiaomi.create(req.body)
    
    req.body.user = req.user.id

        if(xiaomiProduct){
            res.json({
                status:"Ok",
                message:"Xiaomi Product created successfully",
                data:xiaomiProduct
            })
        }else {
            res.json({
                error:"Invalid data inputed"
            })
        }  
}



//Get all product =>
export const get_xiaomi_products = async(req,res)=>{
const xiaomiProducts = await Xiaomi.find({})
if (xiaomiProducts){
    setTimeout(() => {
    res.json({
        status:"Ok",
        message:"All Oppo products retrieved",
        data: xiaomiProducts
    })
}, 5000)


}   else{
    res.json({
        error:"User does not exist or no items"
    })
}

}




// Get single product details => using the id
 export const get_single_xiaomi_product = async(req, res)=>{
    const getSingleXiaomiProduct = await Xiaomi.findOne({_id: req.params.id})

    if(getSingleXiaomiProduct){
        res.json({
            status:"Ok",
            message:"Single Techno product gotten successfully",
            data:getSingleXiaomiProduct
        })
    
    } else {
        res.json({
            error:"Product not available"
        })
    }
 }


 //Update Product =>
 export const update_xiaomi_products = async(req,res)=>{
    const updateXiaomiProducts = await Xiaomi.findById(req.params.id)
   
    

    try {
        updateXiaomiProducts = await Xiaomi.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        })
    
        res.status(200).json({
            success: true,
            message: "Gionee Product updated successfully",
            data:updateXiaomiProducts
        });


    } catch (error) {
        console.log(error)
        if (!updateXiaomiProducts) {
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
export const delete_single_xiaomi_product = async(req,res)=>{
    const deleted_xiaomi_product = await Xiaomi.findByIdAndDelete({_id:req.params.id})
    if( deleted_xiaomi_product){
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



import Itel from "../../models/brands/itel.js"




//Create new product =>
export const create_itel_product = async(req,res)=>{
    const itelProduct = await Itel.create(req.body)
    
    req.body.user = req.user.id

        if(itelProduct){
            res.json({
                status:"Ok",
                message:"Itel Product created successfully",
                data:itelProduct
            })
        }else {
            res.json({
                error:"Invalid data inputed"
            })
        }
   
   
     

}



//Get all product =>
export const get_itel_products = async(req,res)=>{
const itelProducts = await Product.find({})
if(itelProducts){
    setTimeout(() => {
    res.json({
        status:"Ok",
        message:"All Itel  products retrieved",
        data: itelProducts
    })
}, 5000)


}   else{
    res.json({
        error:"User does not exist or no items"
    })
}

}




// Get single product details => using the id
 export const get_single_itel_product = async(req, res)=>{
    const getSingleItelProduct = await Product.findOne({_id: req.params.id})

    if(getSingleItelProduct){
        res.json({
            status:"Ok",
            message:"Single Itel product gotten successfully",
            data:getSingleItelProduct
        })
    
    } else {
        res.json({
            error:"Product not available"
        })
    }
 }


 //Update Product =>
 export const update_itel_products = async(req,res)=>{
    const updateItelProducts = await Itel.findById(req.params.id)
   
    

    try {
        updateItelProducts = await Itel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        })
    
        res.status(200).json({
            success: true,
            message: "Itel Product updated successfully",
            data:updateItelProducts
        });


    } catch (error) {
        console.log(error)
        if (!updateItelProducts) {
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
export const delete_single_itel_product = async(req,res)=>{
    const deleted_itel_product = await Itel.findByIdAndDelete({_id:req.params.id})
    if( deleted_itel_product){
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

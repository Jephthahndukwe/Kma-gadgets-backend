
import Techno from "../../models/brands/techno.js";




//Create new product =>
export const create_techno_product = async(req,res)=>{
    const technoProduct = await Techno.create(req.body)
    
    req.body.user = req.user.id

        if(technoProduct){
            res.json({
                status:"Ok",
                message:"Oppo Product created successfully",
                data:technoProduct
            })
        }else {
            res.json({
                error:"Invalid data inputed"
            })
        }
   
   
     

}



//Get all product =>
export const get_techno_products = async(req,res)=>{
const technoProducts = await Techno.find({})
if(technoProducts){
    setTimeout(() => {
    res.json({
        status:"Ok",
        message:"All Oppo products retrieved",
        data: technoProducts
    })
}, 5000)


}   else{
    res.json({
        error:"User does not exist or no items"
    })
}

}




// Get single product details => using the id
 export const get_single_techno_product = async(req, res)=>{
    const getSingleTechnoProduct = await Techno.findOne({_id: req.params.id})

    if(getSingleTechnoProduct){
        res.json({
            status:"Ok",
            message:"Single Techno product gotten successfully",
            data:getSingleTechnoProduct
        })
    
    } else {
        res.json({
            error:"Product not available"
        })
    }
 }


 //Update Product =>
 export const update_techno_products = async(req,res)=>{
    const updateTechnoProducts = await Techno.findById(req.params.id)
   
    

    try {
        updateTechnoProducts = await Techno.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        })
    
        res.status(200).json({
            success: true,
            message: "Gionee Product updated successfully",
            data:updateTechnoProducts
        });


    } catch (error) {
        console.log(error)
        if (!updateTechnoProducts) {
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
export const delete_single_techno_product = async(req,res)=>{
    const deleted_techno_product = await Techno.findByIdAndDelete({_id:req.params.id})
    if( deleted_techno_product){
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


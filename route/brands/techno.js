import express from 'express'
import { create_techno_product, get_techno_products,get_single_techno_product, update_techno_products, delete_single_techno_product } from 
'../../controllers/brandsController/technoController.js'



// router object
const techno_router = express.Router()


techno_router.post('/admin/oneplusproduct/new', create_techno_product)
techno_router.get('/oneplusproducts',get_techno_products)
techno_router.get('/product/:id', get_single_techno_product);
techno_router.put('/admin/product/:id',  update_techno_products);
techno_router.delete('/admin/product/:id',  delete_single_techno_product);



export default techno_router
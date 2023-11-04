import express from 'express'
import { create_redimi_product, get_redimi_products,get_single_redimi_product, update_redimi_products, delete_single_redimi_product } from 
'../../controllers/brandsController/redimiController.js'



// router object
const redimi_router = express.Router()


redimi_router.post('/admin/oneplusproduct/new', create_redimi_product)
redimi_router.get('/oneplusproducts',get_redimi_products)
redimi_router.get('/product/:id', get_single_redimi_product);
redimi_router.put('/admin/product/:id',  update_redimi_products);
redimi_router.delete('/admin/product/:id',  delete_single_redimi_product);



export default redimi_router
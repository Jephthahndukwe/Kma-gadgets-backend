import express from 'express'
import { create_infinix_product, get_infinix_products,get_single_infinix_product, update_infinix_products, delete_single_infinix_product } from 
'../../controllers/brandsController/infinixController.js'



// router object
const infinix_router = express.Router()


infinix_router.post('/admin/oneplusproduct/new', create_infinix_product)
infinix_router.get('/oneplusproducts',get_infinix_products)
infinix_router.get('/product/:id', get_single_infinix_product);
infinix_router.put('/admin/product/:id',  update_infinix_products);
infinix_router.delete('/admin/product/:id',  delete_single_infinix_product);



export default infinix_router
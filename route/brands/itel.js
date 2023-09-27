import express from 'express'
import { create_itel_product, get_itel_products,get_single_itel_product, update_itel_products, delete_single_itel_product } from '../../controllers/brandsController/itelController.js'



// router object
const itel_router = express.Router()


itel_router.post('/admin/itelproduct/new', create_itel_product)
itel_router.get('/oneplusproducts',get_itel_products)
itel_router.get('/product/:id', get_single_itel_product);
itel_router.put('/admin/product/:id',  update_itel_products);
itel_router.delete('/admin/product/:id',  delete_single_itel_product);



export default itel_router
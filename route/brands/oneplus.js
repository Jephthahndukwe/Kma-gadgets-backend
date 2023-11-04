import express from 'express'
import { create_oneplus_product, get_oneplus_products,get_single_oneplus_product, update_oneplus_products, delete_single_oneplus_product } 
from '../../controllers/brandsController/oneplusController.js'



// router object
const oneplus_router = express.Router()


oneplus_router.post('/admin/oneplusproduct/new', create_oneplus_product)
oneplus_router.get('/oneplusproducts',get_oneplus_products)
oneplus_router.get('/product/:id', get_single_oneplus_product);
oneplus_router.put('/admin/product/:id',  update_oneplus_products);
oneplus_router.delete('/admin/product/:id',  delete_single_oneplus_product);



export default oneplus_router
import express from 'express'
import { create_huawei_product, get_huawei_products,get_single_huawei_product, update_huawei_products, delete_single_huawei_product } from 
'../../controllers/brandsController/huaweiController.js'



// router object
const huawei_router = express.Router()


huawei_router.post('/admin/oneplusproduct/new', create_huawei_product)
huawei_router.get('/oneplusproducts',get_huawei_products)
huawei_router.get('/product/:id', get_single_huawei_product);
huawei_router.put('/admin/product/:id',  update_huawei_products);
huawei_router.delete('/admin/product/:id',  delete_single_huawei_product);



export default huawei_router
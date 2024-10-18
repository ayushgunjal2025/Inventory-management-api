const express = require('express');
const router = express.Router();

//imports the controllers
const {createProduct,getProduct,updateProduct,deleteProduct}=require('../controllers/productController');
const {createBilling,updateBilling,getBilling,deleteBilling}=require('../controllers/billingController');
const {createCustomer,getCustomer}=require('../controllers/customerController');


//map the controllers
router.post("/createProduct",createProduct);
router.get("/getProduct",getProduct);
router.put("/product/:id",updateProduct);
router.delete("/product/:id",deleteProduct);


router.post("/createBilling",createBilling);
router.get("/getBilling",getBilling);
router.put("/Billing/:id",updateBilling);
router.delete("/Billing/:id",deleteBilling);

router.post("/createCustomer",createCustomer);
router.get("/getCustomer",getCustomer);


module.exports=router;
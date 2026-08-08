const express = require("express");

const router = express.Router();

const Product = require("../models/productModels");


// GET ALL PRODUCTS

router.get("", async (req, res) => {

    try {

        const products = await Product.find();

        res.status(200).json(products);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});


// POST CREATE PRODUCT

router.post("", async (req,res)=>{

    try{

        const product = new Product({

            title:req.body.title,
            price:req.body.price,
            image:req.body.image,
            rating:req.body.rating

        });


        const savedProduct = await product.save();


        res.status(201).json(savedProduct);


    }
    catch(error){

        res.status(400).json({
            message:error.message
        });

    }


});


// PUT UPDATE PRODUCT

router.put("/:id", async(req,res)=>{


    try{


        const updatedProduct = await Product.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new:true
            }

        );


        res.status(200).json(updatedProduct);


    }
    catch(error){


        res.status(400).json({
            message:error.message
        });


    }


});



// DELETE PRODUCT

router.delete("/:id", async(req,res)=>{


    try{


        const deletedProduct = await Product.findByIdAndDelete(
            req.params.id
        );


        res.status(200).json({

            message:"Product Deleted Successfully"

        });


    }
    catch(error){


        res.status(400).json({
            message:error.message
        });


    }


});


module.exports = router;
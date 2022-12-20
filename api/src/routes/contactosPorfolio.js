//asi una forma
// const express = require("express")

// const router = express.Router()

// asi otra forma
const { Router } = require("express")
const router = Router()

const contactSchema = require("../models/contact")

    //create contact
router.post("/contact", (req,res)=> {
    const contact = contactSchema(req.body);
    contact.save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}))
})

router.get("/contact", async(req,res)=> {
  
    try {
        const contactos= await contactSchema.find()
        res.status(200).json(contactos)
    } catch (error) {
        res.status(500).send(error)
    }
})


module.exports = router;
const express = require ("express");
const router = express.Router();


const { getContact, getContacts,createContact, updateContact, deleteContact }=require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete( deleteContact );

// router.route("/:id").get((req,res)=>{
//     res.status(200).json({message: "Get All Contacts"})
// });

// router.route("/:id").put((req,res)=>{
//     res.status(200).json({message: "Get All Contacts"})
// });

module.exports=router;


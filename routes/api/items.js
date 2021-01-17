const express = require('express');
const router = express.Router()

//Item Models
const Item = require('../../models/Item')

// route GET api/items
//@desc Get all items 

router.get('/',  (req,res)=>{
   Item.find().sort({date : -1}).then(items => res.json(items))
})

// DELETE api/items/:id
router.delete('/:id',  (req,res)=>{
   Item.findById(req.params.id).then(item => item.remove().then(()=>res.json({success:true}))
).catch(err =>res.status(404).json({success:false}))})







//post

router.post('/',  (req,res)=>{
  const newItem = new Item({name:req.body.name})
  newItem.save().then((item)=>res.json(item))
 })
 


module.exports = router ; 
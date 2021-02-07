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





router.put('/:id', async (req,res)=>{
 Item.findByIdAndUpdate(req.body._id,req.body,function(err, result) {
   if (err) {
     res.send(err);
   } else {
     res.send(result);
   }
 })
   
 })




//post

router.post('/',  (req,res)=>{
  const newItem = new Item({ville:req.body.ville,stock:req.body.stock,
   orange: req.body.orange,
   banane:req.body.banane,
   pomme: req.body.pomme,
   fraise:req.body.fraise,
   cerise:req.body.cerise



})
  newItem.save().then((item)=>res.json(item))
 })
 


module.exports = router ; 
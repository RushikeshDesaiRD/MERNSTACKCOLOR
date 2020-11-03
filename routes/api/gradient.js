const express=require("express");
const router=express.Router();
const nodeHtmlToImage = require("node-html-to-image")
// const bodyParser = require('body-parser')
// const jsonParser = bodyParser.json()
// const urlencodedParser = bodyParser.urlencoded({ extended: false })
//----------------------import schema---
const Gradient=require("../../models/Gradient")

//------------------------------
router.get("/",async(req, res) => {
    try {
        const gradients=await Gradient.find();
        res.send(gradients)

    } catch (error) {
        res.send(error.message)
        return res.status(500)
    }
});
router.put("/:id",async (req, res) => {
 try {
       
          const gradient=await Gradient.findByIdAndUpdate(req.params.id,req.body,{
       new:true,
   });
    } catch (error) {
        res.send(error.message)
        return res.status(500)
    }
     res.send(gradient)
});

router.post("/", async (req, res) => {
     try {
         let new_graident=new Gradient(req.body)
         await new_graident.save();
     
      res.send(new_graident)
     } catch (error) {
         res.send(error.message)
         return res.status(500)
     }
    
})
router.delete("/:id", async (req, res) => {
            try {
               await Gradient.findByIdAndDelete(req.params.id);
               
            } catch (error) {
                res.send(error.message)
                return res.sendStatus(200)  
            }
})
router.get("/download/:themeName", async (req, res)=>{
     const gradient=await Gradient.findOne({ name:req.params.themeName});
     await nodeHtmlToImage({
         output:"./public/images/image.png",
         html:`<div style="width:100%;height:100%;background-image:linear-gradient(
             ${gradient.colors.direction},${gradient.colors.start},${gradient.colors.end})">
         )"
         </div>`
         
     })
     gradient.downloads=gradient.downloads+1;
     await gradient.save();
     res.download("./public/images/image.png")

})
module.exports=router
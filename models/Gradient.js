const mongoose=require("mongoose")
 const Schema = mongoose.Schema;
//  const GradientSchema=new Schema({
//     name: {
//         type:String,
//         default:"unamed",
//     },
//     downloads: {
//         type:Number,
//         default:0,
//     },
//     colors: {
//         start:String,
//         end:String,
//        direction: {
//             type:String,
//            default:"To BoTTOm",
//         },
//    },
//  });
//  module.exports=mongoose.model("graidents",GradientSchema);

const GradientSchema=new Schema({
   name: {
       type:String,
       default:"Unmaed",
   },
   downloads: {
       type:Number,
       default:0,
   },
     colors:{
         start:{
           type:String,
           default:"Red"
         },
         end:{
              type:String,
              default:"yellow"
         },
         direction:{
             type:String,
             default:"To Bottom"
         },
     },
   
});
 module.exports=mongoose.model("graidents",GradientSchema);


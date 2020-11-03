const mongoose=require("mongoose")
const db="mongodb://localhost/mern_grident";

const connectDB= async () =>{
    try {
        await mongoose.connect(db,{
            useNewUrlParser:true,
            useCreateIndex:true,
            useFindAndModify:false,
            useUnifiedTopology:true
        });
        console.log("connected....");
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
};
module.exports=connectDB;
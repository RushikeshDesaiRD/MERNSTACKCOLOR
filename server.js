const express=require("express");
const app=express();
//---------------DB---------
const connectDB=require("./config/database");
//----------import schema---------


//------------------access api----------

app.use(require("./routes/api/gradient"))


//------------------
connectDB()
const port=8000;
app.use(express.json())
app.use("/gradients",require("./routes/api/gradient"))
app.listen(port, ()=>{
    console.log(`Running At http://localhost:${port}`)
})

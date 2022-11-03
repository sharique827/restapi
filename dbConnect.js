const mongoose=require("mongoose")
mongoose.connect(process.env.DBKEY)
.then(()=>{
    console.log("Database is Connected Successfully")
}).catch((e)=>{
    console.log("Something Went Wrong While Connecting")
})
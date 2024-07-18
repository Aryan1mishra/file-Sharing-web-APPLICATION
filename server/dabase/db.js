import mongoose from "mongoose";


const DBconnection=async()=>{
    const MONGODB_URL=`mongodb+srv://fileShare:1234@cluster0.zragmhx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`; 
    try{
       await mongoose.connect(MONGODB_URL,{useNewUrlParser:true});
       console.log("Database connected");

    }
    catch(error){
        console.error("Error will connecting to data base",error.message);
    }
}
export default DBconnection;
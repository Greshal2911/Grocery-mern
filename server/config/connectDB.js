import mongoose  from "mongoose";
export const connectDB = async()=>{
    console.log("Mongo UrI:",process.env.MONGO_URI);
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb connected");
    }catch(error){
       console.error("Error connecting to MongoDB:",error.message);
       process.exit(1);
    }
};
export default connectDB;
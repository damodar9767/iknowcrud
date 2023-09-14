import mongoose from "mongoose";



const connectDb = async() => {
    
try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to Mongobaby");
    
    
} catch (error) {
    console.log(error);
}
}

export default connectDb
import mongoose from "mongoose";

const connectDB = async (uri) => {
    await mongoose.connect(uri)
        .then(() => console.log("DB connected..")) 
        .catch((er) => console.log(er.message))
}

export default connectDB
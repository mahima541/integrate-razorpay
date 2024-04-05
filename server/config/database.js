import mongoose from "mongoose";

// export const connectDB = async () => {
//   const { connection } = await mongoose.connect("mongodb://localhost:27017/razorpay");
//   console.log(`Mongodb is connected with ${connection.host}`);
// };

const connectDB = async () => {
  try {
      const connectionInstance = await mongoose.connect(`mongodb://localhost:27017/razorpay`)
      console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
      console.log("MONGODB connection FAILED ", error);
      process.exit(1)
  }
}

export default connectDB
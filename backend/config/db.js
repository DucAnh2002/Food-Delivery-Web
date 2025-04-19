import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://haducanh02012002:225692349Anh%40@cluster0.j0di4r6.mongodb.net/food-delivery"
    )
    .then(() => console.log("DB Connected"));
};

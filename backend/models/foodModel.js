import mongose from "mongoose";

const foodSchema = new mongose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const foodModel = mongose.models.food || mongose.model("Food", foodSchema);

export default foodModel;

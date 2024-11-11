import { Schema, model } from "mongoose";

const orderHistorySchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true
  },
  products: [
    {
      product_id: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
      sub_total: {
        type: Number,
        require: true
      }
    },
  ],
  total_price: {
    type: Number,
    required: true,
  }
}, 
{ timestamps: true }
);


  // date: {
  //   type: Date,
  //   default: Date.now,
  // },
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
  // carts: [
  //   {
  //     cart: {
  //       type: Schema.Types.ObjectId,
  //       ref: "Cart",
  //       required: true,
  //     },
  //   },
  // ],
// });

const OrderHistory = model("OrderHistory", orderHistorySchema);

export default OrderHistory;

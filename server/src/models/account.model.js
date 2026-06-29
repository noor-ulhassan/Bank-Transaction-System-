import mongoose from "mongoose";

const accountSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      index: true,
    },
    status: {
      enum: {
        values: ["ACTIVE", "FROZEN", "CLOSED"],
        message: "Status cam either be ACTIVE, FROZEN or CLOSED",
      },
    },

    currency: {
      type: String,
      required: [true, "Currency is Required for creating an Account"],
      default: "PKR",
    },
  },
  {
    timestamps: true,
  },
);

accountSchema.index({ user: 1, status: 1 });

export const Account = mongoose.model("Account", accountSchema);

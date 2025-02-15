import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    profilePic: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      enum: ["Doctor", "Patient"],
      required: true,
    },

    // Fields specific to Doctors
    experience: {
      type: Number,
      required: function () {
        return this.role === "Doctor";
      },
    },

    degree: {
      type: String,
      required: function () {
        return this.role === "Doctor";
      },
    },

    rating: {
      type: Number,
      default: 0,
      required: function () {
        return this.role === "Doctor";
      },
    },

    discipline: {
      type: String,
      required: function () {
        return this.role === "Doctor";
      },
    },

    // Fields specific to Patients
    age: {
      type: Number,
      required: function () {
        return this.role === "Patient";
      },
    },

    phoneNumber: {
      type: String,
      required: function () {
        return this.role === "Patient";
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

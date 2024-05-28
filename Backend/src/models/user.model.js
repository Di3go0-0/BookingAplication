import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String, // debe ser un string
      required: true,   // es obligatorio
      trim: true,   // quita los espacios en blanco al principio y al final
      unique: true, // no puede haber dos emails iguales
    },
    pass: {
      type: String,     // debe ser un string
      required: true,   // es obligatorio
      trim: true,   // quita los espacios en blanco al principio y al final
      minlength: 4, // longitud mínima de 6 caracteres
    
    },
  },
  {
    timestamps: true,       // añade fecha de creación y fecha de actualización
    versionKey: false,      // ignora el campo __v
  }
);

export default mongoose.model("User", UserSchema);
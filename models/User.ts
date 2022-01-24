import mongoose from 'mongoose';


export interface IUser extends mongoose.Document {
    email: String,
    fullName: String,
    password: String,
    token?: String,
    createdAt: Date,
    updatedAt: Date,
}

const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },

    fullName: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    nationalId: {
        type: String,
        required: true,
        unique:true,
        length:16,
    },
    id:{
       type:String,
       required:true,
       unique:true,
       length:2,
     },
    gender: {
        type: String,
        required: true,
        enum:{
            values:["male","female"],
            message:"gender must be either male or female"
        }
    }
}, {

    timestamps: true
});

const StudentModel = mongoose.model('Student', studentSchema);
export default StudentModel

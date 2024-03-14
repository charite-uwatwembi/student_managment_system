import dotenv from "dotenv"
dotenv.config();
import express  from "express";
import mongoose from "mongoose";
import StudentModel from "./models/student.model.js";
import FacilitatorModel from "./models/facilitator.model.js";
const app = express();
const port = process.env.PORT || 3001;    
const db_connection_string = process.env.MONGODB_URI;  

app.use(express.json());


//students methods
app.post("/student/create", async(req, res) =>{
    try{
    const addedStudent = await StudentModel.create(req.body);
    res.status(201).json({
        message:"student added successfully",
        student:addedStudent
    });


}catch(error){
    console.log(error.message)
    res.status(500).json({
        message:"error adding student"
    });

    }
});


app.get('/student/findOne', async (req, res) => {
    try {
      const student = await StudentModel.findOne({ "email": "hello@gmail.com" });
      res.status(200).json(student);
    } catch (error) {
      res.status(500).json({ message: 'Error finding student' });
    }
});
app.get('/student/findOne/:id', async (req, res) => {
    try {
      const student = await StudentModel.findOne({ "id": "1" });
      res.status(200).json(student);
    } catch (error) {
      res.status(500).json({ message: 'Error finding student' });
    }
});

app.put('/student/update/:id', async (req, res) => {
    try {
      const updatedStudent = await StudentModel.findOneAndUpdate({ "id":"1" }, req.body, { new: true });
      if (!updatedStudent) {
        return res.status(404).json({ message: 'Student not found' });
      }
      res.status(200).json({ message: 'Student updated successfully', student: updatedStudent });
    } catch (error) {
      res.status(500).json({ message: 'Error updating student' });
    }
});

app.delete('/student/delete/:_id', async (req, res) => {
    try {
      const deletedStudent = await StudentModel.findOneAndDelete({ "_id":
      "65f1f1aabbb278483342e751" }, { new: true });
      if (!deletedStudent) {
        return res.status(404).json({ message: 'Student not found' });
      }
      res.status(200).json({ message: 'Student deleted successfully', student: deletedStudent });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting student' });
    }
});


//facilitator model

app.post("/facilitator/create", async(req, res) =>{
    try{
    const addedFacilitator = await FacilitatorModel.create(req.body);
    res.status(201).json({
        message:"facilitator added successfully",
        facilitator:addedFacilitator
    });


}catch(error){
    console.log(error.message)
    res.status(500).json({
        message:"error adding student"
    });

    }
});

app.get('/facilitator/findOne/:_id', async (req, res) => {
    try {
      const facilitator = await FacilitatorModel.findOne({ "_id": "65f2bdd6de75bcc7b0c63d77" });
      res.status(200).json(facilitator);
    } catch (error) {
      res.status(500).json({ message: 'Error finding facilitator' });
    }
});

app.put('/facilitator/update/:_id', async (req, res) => {
    try {
      const updatedFacilitator = await FacilitatorModel.findOneAndUpdate({ "_id":"65f2bf9d8e2b2f3040b93988" }, req.body, { new: true });
      if (!updatedFacilitator) {
        return res.status(404).json({ message: 'Facilitator not found' });
      }
      res.status(200).json({ message: 'Facilitator updated successfully', facilitator: updatedFacilitator });
    } catch (error) {
      res.status(500).json({ message: 'Error updating facilitator' });
    }
});

app.delete('/facilitator/delete/:_id', async (req, res) => {
    try {
      const deletedFacilitator = await FacilitatorModel.findOneAndDelete({ "_id":
      "65f2bf458e2b2f3040b93986" }, { new: true });
      if (!deletedFacilitator) {
        return res.status(404).json({ message: 'Facilitator not found' });
      }
      res.status(200).json({ message: 'Facilitator deleted successfully', student: deletedFacilitator });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting Facilitator' });
    }
});


mongoose.connect(db_connection_string)

.then(() => {
    console.log("database connected...");
    app.listen(port, () => {
        console.log(`server running on port ${port}`);
    })

})
.catch((err)=>console.error(err));



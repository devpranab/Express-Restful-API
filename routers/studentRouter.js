const express = require("express");
const {Student} = require('../models/students');
const router = express.Router();

//Read
const studentList = async (req, res) => {
   const students = await Student.find()
   .sort({name: 1});
   res.send(students);
};

//Post req handle
const newStudent = async (req, res) => {
    const student = new Student(req.body);
    try{
        const result = await student.save();
        res.send(result);
    }catch(err){
        const errMsgs = [];
        for(field in err.errors){
            errMsgs.push(err.errors[field].message);
        }
        return res.status(404).send(errMsgs);
    }
}

const studentDetail = async (req, res) => {
    const id = req.params.id;
    try{
        const student = await Student.findById(id);
        if(!student) return res.status(404).send("Id not found!");
        res.send(student);
    }catch(err){
        return res.status(404).send("Id not found!");
    }
  
}

const studentUpdate = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedData = req.body; 
   
};

const studentDelete =  (req, res) => {
    const id = parseInt(req.params.id); 
}

//Route
router.route('/')
   .get(studentList)
   .post(newStudent);

router.route('/:id')
   .get(studentDetail)
   .put(studentUpdate)
   .delete(studentDelete);

module.exports = router;   
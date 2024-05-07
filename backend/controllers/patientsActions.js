const Patient=require("../models/patients");

//Get all Patients Details.
module.exports.getPatients=async function(req,res){
    try{
        const patientDetails=await Patient.find();
        res.json(200,{
            message:patientDetails
        })
    }catch(err){
        console.log("error in getting patient detials");
        res.json(500,{
            message:"Internal Server Error"
        })
    }
};
//Add New Patient.
module.exports.addPatient=async function(req,res){
    try{
        const newPatient=await Patient.create(req.body);
        res.json(200,{
            message:newPatient
        })
    }catch(err){
        console.log("error in getting patient detials");
        res.json(500,{
            message:"Internal Server Error"
        })
    }
}
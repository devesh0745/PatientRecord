const express=require('express');
const router=express.Router();

const patientController=require("../../controllers/patientsActions");

router.get('/gePatient',patientController.getPatients);
router.post('/postPatient',patientController.addPatient);

module.exports=router;
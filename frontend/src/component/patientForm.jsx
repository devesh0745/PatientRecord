import PatientList from "./patientList";
import {useState,useEffect} from "react";
import { useDispatch} from "react-redux";
import { getInitialStateAsync } from "../redux/reducers/patientReducer";

function PatientForm(){

    const [formData,setFormData]=useSate({
        name:" ",
        age:" ",
        gender:" "
    })
    const dispatch=useDispatch();
    useEffect({
        dispatch(getInitialStateAsync)
    },[])

    return(
        <>
            <h1>Patient Form</h1>
            <PatientList />
        </>
    )
}
export default PatientForm;
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

const initialState={
    patientRecord:[]
}

//get all the patient details.
export const getInitialStateAsync=createAsyncThunk(
    'patient/getInitialState',
    (arg,thunkAPI)=>{
        axios.get('http://localhost:8000/api/getPatient')
            .then((res)=>{
                thunkAPI.dispatch(patientActions.setInitialState(res.data))
            })
    }
);

export const addPatientAsync=createAsyncThunk(
    'patient/addPatient',
    async(payload)=>{
        const response=await fetch("http://localhost/api/postPatient",{
            method:'post',
            headers:{
                "Content/type":"application/json"
            },
            body:JSON.stringify(payload)
        });
        return response.json;
    }
)

const patientSlice=createSlice({
    name:'patient',
    initialState:initialState,
    reducers:{
        setInitialState:(state,action)=>{
            state.patientRecord;[...action.payload.message]
        },
        
    },
    extraReducers:(builder)=>{
        builder.addCase(addPatientAsync.fulfilled,(state,action)=>{
            state.patientRecord=[...action.payload.data.message]
        })
    }
})
export const patientReducer=patientSlice.reducer;
export const patientAction=patientSlice.actions;
export const patientSelector=(state)=state.patientReducer.patientRecord;
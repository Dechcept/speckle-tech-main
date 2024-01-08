import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   jobDetails:[]
}

const JobDetailSlice = createSlice({
  name: "JobDetailpage",
  initialState,
  reducers: {
       getjobData:(state,actions)=>{
           state.jobDetails = actions.payload;
       }
  }
});

export const {getjobData} = JobDetailSlice.actions

export default JobDetailSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  UserData: [],
  ContactDetails: [],
};

const jobDetailFormSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    getUserData: (state, actions) => {
      state.UserData.push(actions.payload);
      window.localStorage.setItem("userdata", JSON.stringify(state.UserData));
    },
    getContactDetails: (state, actions) => {
      state.ContactDetails.push(actions.payload);
      window.localStorage.setItem(
        "contactDetails",
        JSON.stringify(state.ContactDetails)
      );
    },
  },
});

export const { getUserData, getContactDetails } = jobDetailFormSlice.actions;

export default jobDetailFormSlice.reducer;

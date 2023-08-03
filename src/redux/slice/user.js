import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = process.env.REACT_APP_URL;

const initialValues = {
  token: "",
  userProfile: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: initialValues,
  },
  reducers: {
    setToken: (state, action) => {
      state.value.token = action.payload.token;
    },
    setUserProfile: (state, action) => {
      state.value.userProfile = action.payload.userProfile;
    },
  },
});

export const userLogin = async (data, toast, navigate) => {
  try {
    const res = await axios.post(`${url}login`, {
      number: data?.number,
      password: data?.password,
    });
    if (res.data.message === "Login Successfully..") {
      localStorage.setItem("token", res.data.data[0].token);
      // navigate("/dashboard");
      checkInformation(navigate);
    }
    toast(res.data.message);
  } catch (error) {
    if (error.response.data.message) {
      // alert(error.response.data.message);
      toast.error(error.response.data.message);
    }
  }
};
export const getUserProfile = async (dispatch) => {
  try {
    const res = await axios.get(`${url}user`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    dispatch(userSlice.actions.setUserProfile({ userProfile: res.data.data }));
  } catch (error) {
    console.log(error);
  }
};
export const checkInformation = async (navigate) => {
  try {
    const res = await axios.get(`${url}checkInformation`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (res?.data?.data?.document === null) {
      navigate("/documents");
    }
    if (res?.data?.data?.address === null) {
      navigate("/documents");
    }
  } catch (error) {
    console.log(error);
  }
};

export const uploadDocumnets = async (dispatch, formValue) => {
  try {
    console.log(formValue.images[0].name, "formValue");

    const data = await axios.post(
      `${url}documents`,
      { images: formValue.images[0].names },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    console.log(data, "RES UPLOAD");
  } catch (error) {
    console.log(error);
  }
};

export default userSlice.reducer;

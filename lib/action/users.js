import AsyncStorage from "@react-native-async-storage/async-storage";
import { api, setAuthToken } from "./api";

const login = async (password, email) => {
  try {
    const response = await api.post("/users/login", {
      password: password,
      email: email,
    });

    const token = response?.data?.token;
    await AsyncStorage.setItem("token", token);
    setAuthToken();
    return response;
  } catch (error) {
    return error?.response?.data;
  }
};

const register = async (data) => {
  try {
    const response = await api.post("/users/register", data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const registerAccount = async (data) => {
  try {
    const formData = new FormData();
    formData.append("UserName", data.UserName);
    formData.append("Email", data.Email);
    formData.append("Password", data.Password);
    formData.append("Phone", data.Phone);
    console.log("data-here", data);
    console.log("formDate-here", formData);
    const response = await api.post("/users/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const changePassword = async (value, otp, password) => {
  console.log("changePassword", value, otp, password);
  try {
    const response = await api.post(`/auth/validate-otp`, {
      email: value,
      otp: otp,
      password: password,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const logout = async () => {
  await AsyncStorage.removeItem("token");
  setAuthToken();
};

export { login, register, logout, changePassword, registerAccount };

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

const register = async (name, email, password, phone) => {
  console.log("register", name, email, password, phone);
  try {
    const response = await api.post("/users/register", {
      userName: name,
      email: email,
      password: password,
      phone: phone,
      image: "",
      address: "",
      doB: "2024-01-01T15:11:14.515Z",
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      // Handle the error appropriately
      console.error(error);
    }
  }
};

const changePassword = async (id, password, newPassword) => {
  try {
    const response = await api.put(`/users/${id}/change-password`, {
      password,
      newPassword,
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

export { login, register, logout };

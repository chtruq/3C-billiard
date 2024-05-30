const validateOTP = async (otp) => {
  try {
    const response = await api.post("/auth/validate-otp", {
      otp,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const forgotPassword = async (email) => {
  try {
    const response = await api.post("/auth/forgot-password", {
      email,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export { validateOTP };

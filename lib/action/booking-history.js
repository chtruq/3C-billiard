import { api } from "./api";

const bookingHistory = async (userId) => {
  console.log("userId", userId);
  try {
    const response = await api.get(
      `/bookings/search?userId=${userId}&pageIndex=1&pageSize=10`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { bookingHistory };

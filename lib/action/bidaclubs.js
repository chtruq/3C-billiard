import { api } from "./api";

const getAllBidaClubs = async () => {
  try {
    const response = await api.get("/bidaclubs/search");
    return response.data;
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
};

const getBidaClubsByID = async (id) => {
  try {
    const response = await api.get(`/bidaclubs/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllBidaClubs, getBidaClubsByID };

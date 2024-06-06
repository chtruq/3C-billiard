import { api } from "./api";

const getBidaTableById = async (id) => {
  try {
    const response = await api.get(`/bidatables/search?bidaClubId=${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getBidaTableById };

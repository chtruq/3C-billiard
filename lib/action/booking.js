import { api } from "./api";

const bookingBidaSlot = async (userid, bookingDate, bookingTableSlotId) => {
  try {
    console.log(userid, bookingDate, bookingTableSlotId);
    const response = await api.post(
      `/bookings/booking?userId=${userid}&bookingDate=${bookingDate}`,

      bookingTableSlotId
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { bookingBidaSlot };

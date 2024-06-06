import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/GlobalProvider";
import { bookingHistory } from "../../lib/action/booking-history";

const BookingHistory = () => {
  const { user } = useGlobalContext();

  const [bookingHistory, setBookingHistory] = useState([]);
  const bookingHistoryByUserId = async () => {
    try {
      const response = await bookingHistory(user.userId);
      const data = await response.json();
      console.log(data);
      setBookingHistory(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    bookingHistoryByUserId();
  }, []);

  console.log(bookingHistory);

  return (
    <View>
      <Text>BookingHistory</Text>
    </View>
  );
};

export default BookingHistory;

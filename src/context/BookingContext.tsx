import React, { createContext, useState } from "react";

export interface BookingContextData {
  nights: number;
  guests: number;
  totalPrice: number;
  updateNights: (nights: number) => void;
  updateGuests: (guests: number) => void;
}

export const BookingContext = createContext<BookingContextData>({
  nights: 1,
  guests: 1,
  totalPrice: 100,
  updateNights: () => {},
  updateGuests: () => {},
});

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [nights, setNights] = useState(1);
  const [guests, setGuests] = useState(1);
  const [totalPrice, setTotalPrice] = useState(100);
  const basePrice = 100;
  const extraFee = 80; //fixed the extrafe value from 20 to 80 because the original value was wrong

  // added : a new function "calculateTotal' that correctly calculates the total price
  const calculateTotal = (nights: number, guests: number) => {
    return nights * basePrice + (guests - 1) * extraFee * nights;
  };

  const updateNights = (newNights: number) => {
    setNights(newNights);
    // fixed :now multiplying extra fee by nights to get the correct total price
    setTotalPrice(calculateTotal(newNights, guests));
  };

  const updateGuests = (newGuests: number) => {
    setGuests(newGuests);
    // fixed : now multiplying extra fee by nights to get the correct total price
    setTotalPrice(calculateTotal(nights, newGuests));
  };

  return (
    <BookingContext.Provider
      value={{ nights, guests, totalPrice, updateNights, updateGuests }}
    >
      {children}
    </BookingContext.Provider>
  );
};

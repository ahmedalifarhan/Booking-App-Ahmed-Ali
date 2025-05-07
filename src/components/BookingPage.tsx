import React, { useContext } from "react";
import { BookingContext } from "../context/BookingContext";

const BookingPage: React.FC = () => {
  const { nights, guests, totalPrice, updateNights, updateGuests } =
    useContext(BookingContext);

  return (
    <div className="container mx-auto p-4">
      {/* fixed the BUG: "container" misspelled as "contianer" */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* fixed the BUG: "grid grid-col-2" should be "grid-cols-2" to correctly define two columns */}
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-bold">Booking Form</h2>
          <label className="block mt-4">
            Nights:
            <input
              type="number"
              min={1}
              value={nights}
              onChange={(e) => updateNights(Number(e.target.value))}
              className="border px-2 py-1 mt-1"
            />
          </label>
          <label className="block mt-4">
            Guests:
            <input
              type="number"
              min={1}
              value={guests}
              onChange={(e) => updateGuests(Number(e.target.value))}
              className="border px-2 py-1 mt-1"
            />
          </label>
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
            {/* fixed button color class issue by ensuring (bg-blue-500) is valid in tailwind */}
            Submit Booking
          </button>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-bold text-center">Booking Summary</h2>
          {/* fixed text-centre corrected to text-center */}
          <p>Nights: {nights}</p>
          <p>Guests: {guests}</p>
          <p>Total: ${totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;

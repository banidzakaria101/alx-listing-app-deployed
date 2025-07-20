import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  // Calculate nights
  const getNights = () => {
    if (!checkIn || !checkOut) return 0;
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);
    const diff = (outDate.getTime() - inDate.getTime()) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  };

  const nights = getNights();
  const total = price * nights;
  const isValid = nights > 0;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold">${price}/night</h3>
      <div className="mt-4">
        <label htmlFor="check-in">Check-in</label>
        <input
          id="check-in"
          type="date"
          className="border p-2 w-full mt-2"
          value={checkIn}
          onChange={e => setCheckIn(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <label htmlFor="check-out">Check-out</label>
        <input
          id="check-out"
          type="date"
          className="border p-2 w-full mt-2"
          value={checkOut}
          min={checkIn}
          onChange={e => setCheckOut(e.target.value)}
        />
      </div>

      {/* Total payment */}
      <div className="mt-4">
        <p>
          Total payment: <strong>${total}</strong>
        </p>
      </div>

      {/* Reserve button */}
      <button
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md"
        disabled={!isValid}
      >
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
import { useState } from "react";
import { useRouter } from "next/router";
import { PropertyProps } from "@/interfaces";

const BookingSection: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const router = useRouter();

  // Calculate nights
  const getNights = () => {
    if (!checkIn || !checkOut) return 0;
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);
    const diff = (outDate.getTime() - inDate.getTime()) / (1000 * 60 * 60 * 24);
    return diff > 0 ? diff : 0;
  };

  const nights = getNights();
  const total = property.price * nights;
  const isValid = nights > 0;

  const handleReserve = () => {
    if (!isValid) return;
    router.push({
      pathname: "/booking",
      query: {
        price: property.price,
        checkIn,
        checkOut,
        nights,
        total,
        propertyName: property.name,
        imageUrl: property.image,
        reviews: property.reviews ? JSON.stringify(property.reviews) : undefined,
        address: property.address?.city, // add more fields if needed
      },
    });
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold">${property.price}/night</h3>
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
        onClick={handleReserve}
      >
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
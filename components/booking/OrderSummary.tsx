import Image from "next/image";
import { useRouter } from "next/router";

interface BookingDetails {
  imageUrl?: string;
  propertyName: string;
  reviews: number;
  startDate: string;
  totalNights: number;
  price: number;
  bookingFee: number;
}

const OrderSummary: React.FC<{ bookingDetails: BookingDetails }> = ({ bookingDetails }) => {
  const router = useRouter();

  const handleBooking = () => {
    const { price, startDate, totalNights, bookingFee, propertyName, imageUrl, reviews } = bookingDetails;
    router.push({
      pathname: "/booking",
      query: {
        price,
        checkIn: startDate,
        checkOut: totalNights,
        nights: totalNights,
        total: price + bookingFee,
        propertyName,
        imageUrl,
        reviews,
      },
    });
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white p-8 shadow-xl rounded-2xl max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Review Order Details</h2>
      <div className="flex items-center gap-6 mb-6">
        <div className="flex-shrink-0">
          <Image
            src={bookingDetails.imageUrl || "/assets/images/default.jpg"}
            alt={bookingDetails.propertyName}
            width={128}
            height={128}
            className="rounded-xl border border-gray-200 shadow-sm"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{bookingDetails.propertyName}</h3>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-500 text-lg">★</span>
            <span className="text-gray-700 font-medium">{bookingDetails.reviews} reviews</span>
          </div>
          <p className="text-gray-500 mt-2">
            <span className="font-medium">{bookingDetails.startDate}</span>
            <span className="mx-2">•</span>
            <span>{bookingDetails.totalNights} nights</span>
          </p>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="bg-white rounded-lg p-6 shadow-inner">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600">Subtotal</span>
          <span className="text-gray-800 font-semibold">${bookingDetails.price}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600">Booking Fee</span>
          <span className="text-gray-800 font-semibold">${bookingDetails.bookingFee}</span>
        </div>
        <div className="flex justify-between items-center border-t pt-4 font-bold text-lg">
          <span className="text-blue-700">Grand Total</span>
          <span className="text-blue-700">${bookingDetails.bookingFee + bookingDetails.price}</span>
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={handleBooking}
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
        >
          Proceed to Booking
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
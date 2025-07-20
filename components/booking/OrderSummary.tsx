import Image from "next/image";

interface BookingDetails {
  imageUrl?: string;
  propertyName: string;
  reviews: number;
  startDate: string;
  totalNights: number;
  price: number;
  bookingFee: number;
}

const OrderSummary: React.FC<{ bookingDetails: BookingDetails }> = ({ bookingDetails }) => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold">Review Order Details</h2>
    <div className="flex items-center mt-4">
      <Image
        src={bookingDetails.imageUrl || "/assets/images/default.jpg"}
        alt="property"
        width={128}
        height={128}
        className="w-32 h-32 object-cover rounded-md"
      />
      <div className="ml-4">
        <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
        <p className="text-sm text-gray-500">4.76 ({bookingDetails.reviews} reviews)</p>
        <p className="text-sm text-gray-500">{bookingDetails.startDate} • {bookingDetails.totalNights}</p>
      </div>
    </div>

    {/* Price Breakdown */}
    <div className="mt-6">
      <div className="flex justify-between mt-2">
        <p>Subtotal</p>
        <p>${bookingDetails.price}</p>
      </div>
      <div className="flex justify-between mt-2 font-semibold">
        <p>Grand Total</p>
        <p>${bookingDetails.bookingFee + bookingDetails.price}</p>
      </div>
    </div>
  </div>
);

export default OrderSummary;
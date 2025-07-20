import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";

export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Some Property",
    price: 100,
    bookingFee: 20,
    totalNights: 2,
    startDate: "2025-07-20",
    reviews: 0, // <-- Add this line (set to a number)
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <BookingForm />
          <CancellationPolicy />
        </div>
        <OrderSummary bookingDetails={bookingDetails} />
      </div>
    </div>
  );
}

import { useRouter } from "next/router";
import BookingForm from "@/components/booking/BookingForm";
import CancellationPolicy from "@/components/booking/CancellationPolicy";
import OrderSummary from "@/components/booking/OrderSummary";

const BookingPage = () => {
  const router = useRouter();
  const {
    price,
    checkIn,
    checkOut,
    nights,
    total,
    propertyName,
    imageUrl,
    reviews,
    address,
  } = router.query;

  const bookingDetails = {
    propertyName: propertyName as string || "Selected Property",
    imageUrl: imageUrl as string || "/assets/images/default.jpg",
    reviews: Number(reviews) || 0,
    address: address as string || "",
    startDate: checkIn as string,
    totalNights: Number(nights) || 0,
    price: Number(price) || 0,
    bookingFee: 20,
  };

  return (
    <div className="container mx-auto p-6 grid lg:grid-cols-2 gap-8">
      <div>
        <BookingForm />
        <CancellationPolicy />
      </div>
      <div>
        <OrderSummary bookingDetails={bookingDetails} />
      </div>
    </div>
  );
};

export default BookingPage;

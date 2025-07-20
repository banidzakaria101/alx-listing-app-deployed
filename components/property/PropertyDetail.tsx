import { PropertyProps } from "@/interfaces";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="container mx-auto p-6 grid lg:grid-cols-3 gap-6">
      {/* Left Column */}
      <div className="lg:col-span-2 space-y-6">
        <h1 className="text-4xl font-bold">{property.name}</h1>
        <div className="flex items-center space-x-2 text-gray-600">
          <span className="text-yellow-500 font-semibold">{property.rating}</span>
          <span>
            {property.address?.city || "Unknown City"}, {property.address?.country || "Unknown Country"}
          </span>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <img
            src={property.image || "/assets/images/default.jpg"}
            alt={property.name}
            className="w-full h-96 object-cover rounded-lg col-span-2"
          />
          {/* Add more static or dynamic images here if available */}
        </div>

        {/* Description */}
        <div className="mt-4">
          <h2 className="text-2xl font-semibold">Description</h2>
          <p className="text-gray-700 mt-2">{property.description}</p>
        </div>

        {/* Amenities */}
        <div className="mt-4">
          <h2 className="text-2xl font-semibold">What this place offers</h2>
          <ul className="flex flex-wrap gap-2 mt-2">
            {Array.isArray(property.category) &&
              property.category.map((amenity, index) => (
                <li key={index} className="bg-gray-200 px-3 py-1 rounded-md text-sm text-gray-700">
                  {amenity}
                </li>
              ))}
          </ul>
        </div>

        {/* Reviews */}
        {property.id && <ReviewSection propertyId={property.id} />}
      </div>

      {/* Right Column (Booking Sidebar) */}
      <div className="lg:sticky lg:top-8 h-fit mt-28">
        <BookingSection property={property} />
      </div>
    </div>
  );
};

export default PropertyDetail;

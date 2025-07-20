import React, { useState } from "react";
import axios from "axios";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    streetAddress: "",
    city: "",
    state: "",
    country: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await axios.post("/api/bookings", formData);
      setSuccess("Booking confirmed!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        streetAddress: "",
        city: "",
        state: "",
        country: "",
      });
    } catch (err) {
      console.error(err);
      setError("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Contact Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>First Name</label>
            <input
              name="firstName"
              type="text"
              className="border p-2 w-full mt-2"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              name="lastName"
              type="text"
              className="border p-2 w-full mt-2"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <label>Email</label>
          <input
            name="email"
            type="email"
            className="border p-2 w-full mt-2"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <h2 className="text-xl font-semibold mt-6">Pay With</h2>
        <div className="mt-4">
          <label>Card Number</label>
          <input
            name="cardNumber"
            type="text"
            className="border p-2 w-full mt-2"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Expiration Date</label>
            <input
              name="expirationDate"
              type="text"
              className="border p-2 w-full mt-2"
              value={formData.expirationDate}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>CVV</label>
            <input
              name="cvv"
              type="text"
              className="border p-2 w-full mt-2"
              value={formData.cvv}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
        <div className="mt-4">
          <label>Street Address</label>
          <input
            name="streetAddress"
            type="text"
            className="border p-2 w-full mt-2"
            value={formData.streetAddress}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="city">City</label>
            <input
              id="city"
              name="city"
              type="text"
              className="border p-2 w-full mt-2"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="state">State</label>
            <input
              id="state"
              name="state"
              type="text"
              className="border p-2 w-full mt-2"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="country">Country</label>
          <input
            id="country"
            name="country"
            type="text"
            className="border p-2 w-full mt-2"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full"
          disabled={loading}
        >
          {loading ? "Processing..." : "Confirm & Pay"}
        </button>

        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && <p className="text-green-600 mt-2">{success}</p>}
      </form>
    </div>
  );
};

export default BookingForm;

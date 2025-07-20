import React, { useState } from "react";
import PropertyCard from "@/components/PropertyCard";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "@/components/Pills";

const filters = ["Top Villa", "Self Checkin", "Pet Friendly", "Beachfront"];

const HomePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProperties = activeFilter
    ? PROPERTYLISTINGSAMPLE.filter((property) =>
        property.category.includes(activeFilter)
      )
    : PROPERTYLISTINGSAMPLE;

  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-96 flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/assets/images/hero.png')" }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded">
          <h1 className="text-4xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              onClick={() =>
                setActiveFilter((prev) => (prev === filter ? null : filter))
              }
              isActive={activeFilter === filter}
            />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProperties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;

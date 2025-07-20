import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="bg-cover bg-center h-96 flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/assets/images/hero.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded">
        <h1 className="text-4xl font-bold mb-4">Find your favorite place here!</h1>
        <p className="text-lg">
          The best prices for over 2 million properties worldwide.
        </p>
      </div>
    </section>
  );
};

export default Hero;

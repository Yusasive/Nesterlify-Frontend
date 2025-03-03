import React from "react";
import ServiceCard from "@/components/cards/ServiceCard";
import { services } from "@/data/Service";

const Services: React.FC = () => {
  return (
    <section className="py-16 px-6 lg:px-0 md:w-[90%] mx-auto">
      <div className="w-30 lg:w-42 h-1 bg-[#F05A1B] mx-auto mb-2"></div>
      <h2 className="text-xl lg:text-[44px] text-[#2C2C2C] font-medium text-center mb-8">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;

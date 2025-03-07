"use client";

import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

import { carRentalServices, whyChooseUs } from "@/data/carRental";

const CarRentalSec = () => {
  return (
    <section className="bg-[#FAFAFA] pb-[5rem]">
      {/* Hero Banner */}
      <div className="sec-banner crt w-full h-[400px]"></div>

      <div className="flex flex-col w-[90%] mx-auto gap-2 py-10">
        <h3 className="font-Satoshi text-[27px] md:text-[44px] text-[#2C2C2C] text-left font-medium">
          Enjoy your ride with Nesterlify Car services
        </h3>

        <p className="font-Satoshi text-[16px] text-[#626262] text-left font-regular mt-4">
          Welcome to Nesterlify car rentals and transfer service, your premier
          destination for seamless car rental experiences. With a commitment to
          excellence, we offer a diverse fleet of meticulously maintained
          vehicles for every journey.
          <br />
          <br />
          From city escapes to cross-country adventures, our hassle-free booking
          process and dedicated support ensure a smooth experience. Discover the
          freedom to explore and the joy of discovery with Nesterlify Car
          Rentals. Start your journey today.
        </p>

        {/* Services Section */}
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 bg-[#E7E7E7] p-4 rounded-[24px] mt-10">
          <Image
            src="https://res.cloudinary.com/ddxssowqb/image/upload/v1741236460/Rectangle_19384_pucrxj.png"
            alt="Car Rental Service"
            width={500}
            height={300}
            className="rounded-lg"
          />
          <div className="flex flex-col gap-2">
            <div className="w-30 lg:w-42 h-1 bg-[#F05A1B] mt-2"></div>
            <h5 className="font-Satoshi text-[24px] md:text-[44px] text-[#2C2C2C] text-left font-regular">
              Our Services
            </h5>
            <p className="font-Satoshi text-[16px] text-[#7F7F7F] text-left font-regular">
              We offer a wide selection of vehicles and convenient booking
              options.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
              {carRentalServices.map((service, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircleIcon className="w-6 h-6 text-gray-500" />
                  <small className="font-Satoshi text-[16px] text-[#7F7F7F]">
                    {service}
                  </small>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="flex flex-col-reverse lg:flex-row gap-3 lg:gap-5 mt-10">
          <div className="flex flex-col gap-2">
            <div className="w-30 lg:w-42 h-1 bg-[#F05A1B] mt-2"></div>
            <h5 className="font-Satoshi text-[24px] md:text-[44px] text-[#2C2C2C] text-left font-regular">
              Why Choose Us
            </h5>
            <p className="font-Satoshi text-[16px] text-[#7F7F7F] text-left font-regular mt-4">
              Choose us for our extensive fleet, affordable rates, exceptional
              customer service, and seamless booking experience tailored to your
              needs.
              <br />
              <br />
              Experience luxury and efficiency with our fleet of over 500
              meticulously maintained vehicles, including sedans, SUVs, and
              premium brands like Range Rover, Hummer, Mercedes Benz, Ferrari,
              and Rolls Royce.
              <br />
              <br />
              Enjoy a seamless booking process and dedicated support, ensuring
              your journey is a cherished memory.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircleIcon className="w-6 h-6 text-gray-500" />
                  <small className="font-Satoshi text-[16px] text-[#7F7F7F]">
                    {reason}
                  </small>
                </div>
              ))}
            </div>
          </div>
          <Image
            src="https://res.cloudinary.com/ddxssowqb/image/upload/v1741236720/Group_1321314636_devdiy.png"
            alt="Why Choose Us"
            width={570}
            height={300}
            className="rounded-lg"
          />
        </div>

        {/* Cancellation & Modification Section */}
        <div className="flex flex-col gap-2 mt-4 md:mt-0">
          <div className="w-30 lg:w-42 h-1 bg-[#F05A1B] mt-2"></div>
          <h5 className="font-Satoshi text-[24px] md:text-[44px] text-[#2C2C2C] text-left font-regular">
            Cancellation and Modification
          </h5>
          <p className="font-Satoshi text-[16px] text-[#7F7F7F] text-left font-regular mt-4">
            If your booking is refundable, you can cancel it within the
            cancellation window directly on our website.
            <br />
            <br />
            For modifications, contact our customer support at{" "}
            <a
              href="mailto:support@nesterlify.com"
              className="text-[#F05A1B] no-underline"
            >
              support@nesterlify.com
            </a>
            , and we will liaise with our suppliers to accommodate your request.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CarRentalSec;

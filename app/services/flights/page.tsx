import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Flights: React.FC = () => {
  return (
    <section className="bg-[#FAFAFA] pb-[5rem]">
      <div className="sec-banner w-full h-[400px]"></div>

      <div className="flex flex-col w-[90%] mx-auto gap-2 py-10">
        <div className="w-30 lg:w-42 h-1 bg-[#F05A1B] mx-auto mb-2"></div>

        <h3 className="font-Satoshi text-[27px] md:text-[44px] text-[#2C2C2C] text-center font-medium">
          Available Flights from 700+ Airlines
        </h3>
        <p className="font-Satoshi text-[16px] text-[#626262] text-left font-regular mt-4">
          At Nesterlify, we connect travelers with more than 700 commercial
          airlines worldwide, giving you access to virtually every airline in
          existence on our platform.
          <br />
          <br /> With a comprehensive network that includes both commercial
          airlines and private jets, we cater to business owners and leisure
          travelers alike, ensuring a smooth, stress-free booking experience.
          Plus, we’re committed to offering the most competitive prices in the
          market.
        </p>

        <div className="flex flex-col gap-2 mt-4">
          <h5 className="font-Satoshi text-[20px] md:text-[24px] text-[#2C2C2C] text-left font-medium">
            Why Choose Nesterlify?
          </h5>
          <p className="font-Satoshi text-[16px] text-[#626262] text-left font-regular">
            A global network with:
          </p>

          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5 mt-2">
            {[
              "More than 700 airlines",
              "Thousands of routes worldwide",
              "Market-leading prices",
              "Real-time availability",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircleIcon className="w-6 h-6 text-gray-500" />
                <small className="font-Satoshi text-[16px] text-[#626262] text-left font-regular">
                  {item}
                </small>
              </div>
            ))}
          </div>
        </div>

        {[
          {
            title: "New Distribution Capabilities (NDC) Policy",
            content:
              "Through the NDC policy, Nesterlify has the authorization to sell flights to its users for all commercial airlines globally. We also provide a flexible 24-hour refund policy, allowing travelers to secure a full refund if they decide to change or cancel their trip within the first day after booking.",
          },
          {
            title: "Real-Time Flight Tracking",
            content:
              "With our real-time flight tracking feature, you can easily check the status of any flight, from departure and arrival times to potential delays and cancellations. This ensures you’re always informed about your journey with accuracy.\n\nOur extensive network guarantees that users can always find and book flights with their preferred airlines, across all classes, to match their travel style and budget.",
          },
          {
            title: "Book Your Dream Vacations with Nesterlify",
            content:
              "From start to finish, we handle the booking and logistics, allowing you to focus on the journey ahead. Rest assured that all prices are displayed upfront before payment—no hidden fees, only transparent pricing.\n\nIf you happen to find an airline missing on Nesterlify, simply email us at support@nesterlify.com, and we’ll work to add it to our roster.",
          },
          {
            title: "Search, Compare, and Book with Ease",
            content:
              "Visit our website: www.nesterlify.com, or reach out to our support team to plan your next journey! Start booking your next trip.\n\nNesterlify - Satisfying the World",
          },
        ].map((section, index) => (
          <div key={index} className="flex flex-col gap-2 mt-4">
            <h5 className="font-Satoshi text-[20px] md:text-[24px] text-[#2C2C2C] text-left font-medium">
              {section.title}
            </h5>
            <p className="font-Satoshi text-[16px] text-[#626262] text-left font-regular">
              {section.content.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Flights;

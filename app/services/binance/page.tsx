import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Binance = () => {
  const benefits = [
    "Accepting cryptocurrency payments for travel bookings through Binance Pay",
    "Facilitating the sending and receiving of digital assets",
    "Enabling cash transactions.",
    "We provide multilingual customer support.",
    "Ensure users meet Binance KYC requirements.",
    "All users must adhere to our AML Policy guidelines",
  ];

  return (
    <section className="bg-[#FAFAFA] pb-[5rem]">
      <div className="sec-banner w-full h-[400px]"></div>

      <div className="flex flex-col w-[90%] mx-auto gap-2 py-10">
        <div className="w-30 lg:w-42 h-1 bg-[#F05A1B] mx-auto mb-2"></div>

        <h3 className="font-Satoshi text-[27px] md:text-[44px] text-[#2C2C2C] text-center font-medium">
          Binance and Nesterlify Partner to Revolutionize Travel Booking with
          Blockchain Technology
        </h3>

        <p className="font-Satoshi text-[16px] text-[#626262] text-left font-regular mt-4">
          Binance, the worlds leading cryptocurrency exchange, has announced a
          strategic partnership with Nesterlify, a Binance-backed innovative
          blockchain-based Online Travel Agency (OTA). Through this
          collaboration, travelers can now book their dream vacations on
          Nesterlify using Binance Pay — a secure, contactless, and borderless
          cryptocurrency payment system.
          <br />
          <br />
          This collaboration aims to revolutionize the travel booking experience
          by leveraging the power of cryptocurrency and blockchain technology.
        </p>

        <div className="flex flex-col gap-2 mt-4">
          <h5 className="font-Satoshi text-[20px] md:text-[24px] text-[#2C2C2C] text-left font-medium">
            Nesterlify Becomes Binance Institutional VIP Partner
          </h5>
          <p className="font-Satoshi text-[16px] text-[#626262] text-left font-regular">
            As a Binance Institutional VIP partner, Nesterlify is authorized to
            provide a range of financial services, including:
          </p>

          {/* Benefits List */}
          <div className="flex flex-col md:flex-row md:flex-wrap gap-3 mt-2">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircleIcon className="w-6 h-6 text-gray-500" />
                <small className="font-Satoshi text-[16px] text-[#626262]">
                  {benefit}
                </small>
              </div>
            ))}
          </div>
        </div>

        {[
          {
            title: "Binance Empowers Nesterlify for Global Leadership",
            content:
              "Through this partnership, Binance is providing Nesterlify with comprehensive support, resources, and operational guidance. This will empower Nesterlify to enhance its booking experience and payment services, positioning it as a global leader in the travel industry.",
          },
          {
            title: "Unlocking Modern Tourism with Cryptocurrency",
            content:
              "By combining Binance's financial capabilities with Nesterlify's travel offerings, users can now access over 3 million travel products, including flights, hotels, activities, and private properties, while paying seamlessly with Binance Pay.",
          },
          {
            title: "Driving Mass Adoption of Blockchain Technology",
            content:
              "A key goal of this partnership is to promote blockchain education and adoption in the travel sector, helping users understand and utilize cryptocurrency for their travel needs.",
          },
          {
            title: "Significant Social Impact",
            content:
              "Beyond travel, this partnership fosters financial inclusion and community development through crypto-based financial services and education initiatives.",
          },
          {
            title: "KYC Verification for User Protection",
            content:
              "To ensure security and compliance, all users must complete KYC verification before utilizing Nesterlify’s services. This helps detect fraud and protect users from unauthorized access.",
          },
        ].map((section, index) => (
          <div key={index} className="flex flex-col gap-2 mt-4">
            <h5 className="font-Satoshi text-[20px] md:text-[24px] text-[#2C2C2C] text-left font-medium">
              {section.title}
            </h5>
            <p className="font-Satoshi text-[16px] text-[#626262] text-left font-regular">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Binance;

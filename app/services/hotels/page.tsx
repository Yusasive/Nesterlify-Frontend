const Hotels = () => {
  const sections = [
    {
      title: "Discover a World of Travel Possibilities Bookings",
      content:
        "Nesterlify offers a comprehensive range of travel products, ensuring a seamless booking experience. From flights to hotels, activities, villas, resorts, cars, tours, and events, we have everything you need to plan your dream Vacations. Our extensive offerings enable you to connect with people from diverse cultures and beliefs, enriching your travel experience.",
    },
    {
      title: "Luxurious Accommodations Bookings",
      content:
        "Indulge in comfort and style with our wide selection of hotels, apartments, resorts, and villas worldwide. With over 3 million accommodations available, you're sure to find the perfect stay to suit your preferences and budget. Whether you're seeking a private villa or an executive suite, we have options to cater to your needs.",
    },
    {
      title: "Unforgettable Experiences",
      content:
        "Explore new destinations and create lasting memories with our exciting tours and events. Available in over 200 countries globally, our offerings provide the freedom to book your desired experiences at your convenience.",
    },
    {
      title: "Boost Your Visa Chances with Nesterlify",
      content:
        "Our activities, tours, and events aren't just fun; they're visa-friendly. When you book through Nesterlify, you're not just securing an unforgettable experience but also strengthening your visa application.",
    },
    {
      title: "Boost Your Visa Chances with Nesterlify",
      content:
        "When a user successfully books an event or activity in another country, Nesterlify sends the information to the event organizers, and they will issue a receipt confirming the user has booked a spot to attend or participate in the upcoming event or activity. This confirmation receipt can support the visa application process.",
    },
  ];

  const steps = [
    {
      number: 1,
      text: "Book with Confidence: Choose from our exciting tours and events.",
    },
    {
      number: 2,
      text: "Receive Confirmation: Nesterlify sends your booking details directly to the event organizers.",
    },
    {
      number: 3,
      text: "Get Your Proof: The organizers will issue a confirmation receipt, proving your genuine interest in the destination.",
    },
  ];

  return (
    <section className="bg-[#FAFAFA] pb-[5rem]">
      <div className="sec-banner hte w-full h-[400px]"></div>

      <div className="flex flex-col w-[90%] mx-auto gap-1 py-10">
        <div className="w-30 lg:w-42 h-1 bg-[#F05A1B] mx-auto mt-2"></div>
        <h3 className="text-center text-[#2C2C2C] font-Satoshi font-medium text-[27px] md:text-[44px]">
          Hotels, Tours and Events
        </h3>

        {sections.map(({ title, content }, index) => (
          <div key={index} className="flex flex-col gap-2 mt-4">
            <h5 className="text-left text-[#2C2C2C] font-Satoshi font-medium text-[20px] md:text-[24px]">
              {title}
            </h5>
            <p className="text-left text-[#626262] font-Satoshi font-regular text-[16px]">
              {content}
            </p>
          </div>
        ))}

        <div className="w-30 lg:w-42 h-1 bg-[#F05A1B] mx-auto mt-2"></div>
        <h3 className="text-center text-[#2C2C2C] font-Satoshi font-medium text-[27px] md:text-[44px] mb-4">
          How it works
        </h3>

        <div className="flex flex-col">
          {steps.map(({ number, text }, index) => (
            <div key={index} className="flex gap-3 space-y-7">
              <p className="rounded-full bg-[#2EBF49] px-4 py-2 text-sm font-medium">
                {number}
              </p>
              <p className="text-left text-[#626262] font-Satoshi font-regular text-[16px]">
                {text}
              </p>
            </div>
          ))}
        </div>
        <div className="w-30 lg:w-42 h-1 bg-[#F05A1B] mx-auto mb-2"></div>
        <h3 className="text-center text-[#2C2C2C] font-Satoshi font-medium text-[27px] md:text-[44px] mb-4">
          Why it Matters
        </h3>

        <p className="text-left text-[#626262] font-Satoshi font-regular text-[16px]">
          This confirmation receipt is powerful evidence that supports your visa
          application. It shows that you have a legitimate reason to visit and
          increases your chances of approval. Simplify your visa journey with
          Nesterlify.
        </p>

        <div className="flex flex-col gap-2 mt-4">
          <h5 className="text-left text-[#2C2C2C] font-Satoshi font-medium text-[20px] md:text-[24px]">
            Expanding Our Horizons
          </h5>
          <p className="text-left text-[#626262] font-Satoshi font-regular text-[16px]">
            We&apos;re constantly working to expand our offerings to provide an
            even more exceptional travel experience. Our goal is to exceed your
            expectations and ensure your complete satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hotels;

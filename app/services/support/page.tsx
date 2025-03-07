import Image from "next/image";

const GlobalTourismSec = () => {
  return (
    <section className="bg-[#FAFAFA] pb-[5rem]">
      <div className="sec-banner gt w-full h-[400px]"></div>

      <div className="flex flex-col w-[90%] mx-auto gap-1 py-10">
        <div className="w-30 lg:w-42 h-1 mx-auto bg-[#F05A1B] mt-2"></div>

        <h3 className="font-Satoshi text-[27px] md:text-[44px] text-[#2C2C2C] text-center font-medium">
          Global Tourism with Nesterlify
        </h3>

        <p className="font-Satoshi text-[16px] text-[#626262] text-left mt-4">
          Embark on a journey to every corner of the globe with Nesterlify,
          where we offer an exceptional array of travel experiences tailored to
          the modern traveler. Whether you’re drawn to breathtaking landscapes,
          bustling cityscapes, or serene escapes, Nesterlify ensures you’re
          covered with premium travel deals and unbeatable access to luxury
          destinations in over 200 countries.
        </p>

        {/* Section: Exclusive Bookings */}
        <div className="mt-4">
          <h5 className="font-Satoshi text-[20px] md:text-[24px] text-[#2C2C2C] font-medium">
            Explore with Exclusive, World-Class Bookings
          </h5>
          <p className="font-Satoshi text-[16px] text-[#626262]">
            Our curated selection spans flights on all major airlines, stays in
            3 million luxurious hotels, access to 400,000 global events and
            activities, and exclusive rentals of over 3,000 high-end vehicles
            for corporate or private use.
          </p>
        </div>

        <div className="w-30 lg:w-42 h-1 mx-auto bg-[#F05A1B] mt-2"></div>
        <h3 className="font-Satoshi text-[27px] md:text-[44px] text-[#2C2C2C] text-center font-medium mb-4">
          Global Tourism, Redefined by Nesterlify
        </h3>

        {/* Section: Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3">
          {[
            {
              img: "https://res.cloudinary.com/ddxssowqb/image/upload/v1741270270/Pixabay-6867678_1_eo2np3.png",
              label: "Properties, Hotels, and Resorts",
              desc: "Imagine staying at any corner of the globe, from five-star resorts to charming boutique hotels. Nesterlify gives you access to 3 million premium properties worldwide, ensuring your stay is memorable. We streamline the booking process, handling all payments and conversions, making your dream getaway just a click away.",
              desc2: "",
            },
            {
              img: "https://res.cloudinary.com/ddxssowqb/image/upload/v1741270273/Pixabay-6867678_2_egcqqc.png",
              label: "Air travels",
              desc: "Nesterlify bridges the world for you with flights from all leading commercial airlines. Bookings are seamless, with options to pay using BinancePay and over 100+ cryptocurrencies. We handle all the details, from processing payments to delivering e-tickets, so you can focus on planning your adventure. Just book, pay, and receive your tickets within minutes!",
              desc2: "",
            },
            {
              img: "https://res.cloudinary.com/ddxssowqb/image/upload/v1741270275/Pixabay-6867678_3_ahixmh.png",
              label: "Vacations, Tours, and Events",
              desc: "Step into a new era of travel experiences! From curated group tours to exclusive private excursions, we open the door to 400,000 unique activities and events across 200 countries. Whether you're looking to immerse yourself in cultural festivals, embark on a guided nature trek, or attend world-class events, weve got you covered. Our bookings also serve as valid travel purpose documentation for visa applications, making global travel even more accessible.",
              desc2:
                "Each activity is designed to offer a truly immersive experience—ranging from short day trips to extended adventures of 30 to 45 days. We display all necessary details upfront, helping you tailor each experience to suit your timeline and preferences.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 rounded-[17.45px] overflow-hidden shadow-md pb-2"
            >
              <Image
                src={item.img}
                alt={item.label}
                className="w-full"
                width={394.67}
                height={260}
              />
              <div className="flex  items-center gap-2 w-fit  mt-2 ml-3">
                <span className="font-Satoshi text-[16px] bg-[#E3FFE0] p-2  rounded-full  text-[#2EBF49]">
                  • {item.label}
                </span>
              </div>
              <div className="p-3 space-y-5">
                <p className="font-Satoshi text-[16px] text-[#626262]">
                  {item.desc}
                </p>
                <p className="font-Satoshi text-[16px] text-[#626262]">
                  {item.desc2}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <h5 className="font-Satoshi text-[20px] md:text-[24px] text-[#2C2C2C] font-medium">
            Unmatched Cultural Experiences
          </h5>
          <p className="font-Satoshi text-[16px] text-[#626262]">
            Discover new cultures, explore iconic landmarks, and connect with
            traditions from every corner of the world. With Nesterlify, each
            journey promises something extraordinary.
          </p>
        </div>

        <div className="mt-4">
          <h5 className="font-Satoshi text-[20px] md:text-[24px] text-[#2C2C2C] font-medium">
            Constantly Expanding Horizons
          </h5>
          <p className="font-Satoshi text-[16px] text-[#626262]">
            We are committed to continuously enhancing our offerings, catering
            to both seasoned travelers and first-time adventurers. Join us as we
            transform travel into an unforgettable experience—one that brings
            the world closer and opens doors to infinite possibilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobalTourismSec;

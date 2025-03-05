"use client";

import Image from "next/image";
import { paymentOptions } from "@/data/paymentOptions";
import { FaTasks } from "react-icons/fa";

const Payment = () => {
  return (
    <section className="bg-[#FAFAFA] pb-[5rem]">
      <div className="sec-banner po w-full h-[400px]"></div>

      <div className="flex flex-col w-[90%] mx-auto gap-1 py-10">
        <div className="w-30 lg:w-42 h-1 bg-[#F05A1B] mx-auto mb-2"></div>
        <h3 className="font-Satoshi text-[27px] md:text-[44px] text-[#2C2C2C] text-center font-medium">
          Making Payments on Nesterlify
        </h3>
        <div className="w-30 lg:w-42 h-1 bg-[#F05A1B] mx-auto mb-2"></div>
        <h3 className="font-Satoshi text-[27px] md:text-[40px] text-[#2C2C2C] text-center font-medium">
          Diverse Payment Methods
        </h3>

        <div className="flex flex-col gap-2 mt-5">
          <p className="font-Satoshi text-[16px] text-[#626262] text-gileft font-regular mb-2">
            We accept payments through a wide range of methods, including:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {paymentOptions.map((option, index) => (
              <div
                key={index}
                className="flex gap-3 rounded-lg border-2 border-[#E7E7E7] p-3"
              >
               <FaTasks />
                <div className="text-left">
                  <b className="font-Satoshi text-[20px] md:text-[24px] text-[#2C2C2C] text-center font-medium">
                    {option.title}
                  </b>
                  <p className="font-Satoshi text-[16px] text-[#626262] text-left font-regular mt-2">
                    {option.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <h5 className="font-Satoshi text-[20px] md:text-[24px] text-[#2C2C2C] text-left font-medium">
            Processing Payments
          </h5>
          <p className="font-Satoshi text-[16px] text-[#626262] text-left font-regular">
            Once your payment is confirmed, we promptly transfer the funds to
            the airline, hotel, or event organizer. For cryptocurrency payments,
            we convert the digital assets into the required currency before
            making the payment on your behalf.
          </p>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <h5 className="font-Satoshi text-[20px] md:text-[24px] text-[#2C2C2C] text-left font-medium">
            Payment Errors and Support
          </h5>
          <p className="font-Satoshi text-[16px] text-[#626262] text-left font-regular">
            We are committed to resolving any payment errors that may occur. If
            your payment is declined or a transaction fails, our dedicated
            support team is available to assist you in resolving the issue
            promptly.
          </p>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <h5 className="font-Satoshi text-[20px] md:text-[24px] text-[#2C2C2C] text-left font-medium">
            Payment Confirmation
          </h5>
          <p className="font-Satoshi text-[16px] text-[#626262] text-left font-regular">
            Upon successful payment processing, you will receive email and text
            message confirmations, notifying you of the payment receipt.
            Additionally, you will receive separate emails containing your
            flight tickets, hotel bookings, or activity receipts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Payment;

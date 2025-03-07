import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaTiktok,
  FaMediumM,
} from "react-icons/fa";
import { SiBinance } from "react-icons/si";
import logo from "@/public/images/footer/logo.png";
import visa from "@/public/images/footer/visa.png";
import mastercard from "@/public/images/footer/mastercard.png";
import stripe from "@/public/images/footer/stripe.png";
import binancePay from "@/public/images/footer/binancepay.png";
import wechatPay from "@/public/images/footer/wechat.png";
import discover from "@/public/images/footer/discover.png";
import sepa from "@/public/images/footer/sepa.png";
import gatePay from "@/public/images/footer/gatepay.png";
import { FaEnvelopeCircleCheck } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#2C2C2C] text-white py-10 px-5 md:px-20">
      {/* Top Section: Logo & Payment Methods */}
      <section className="grid grid-cols-5 justify-between gap-10">
        <div className="flex flex-col items-center gap-6 ">
          <Image src={logo} alt="Nesterlify Logo" width={180} height={50} />

          <div className="grid grid-cols-4 gap-3 justify-center">
            {[
              binancePay,
              gatePay,
              visa,
              mastercard,
              discover,
              wechatPay,
              sepa,
              stripe,
            ].map((img, index) => (
              <Image
                key={index}
                src={img}
                alt="Payment Method"
                width={50}
                height={30}
              />
            ))}
          </div>
        </div>

        {/* Middle Section: Links */}

        <div className="ml-4">
          <h3 className="text-lg font-bold">Company</h3>
          <ul className="mt-2 space-y-2 text-base">
            {["About Us", "Security", "Careers", "Partner Program"].map(
              (item, index) => (
                <li key={index}>
                  <Link href="#" className="hover:text-[#F05A1B]">
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold">Legal</h3>
          <ul className="mt-2 space-y-2 text-base">
            {[
              "Disclaimer",
              "Privacy Policy",
              "AML/KYC Policy",
              "Terms and Conditions",
            ].map((item, index) => (
              <li key={index}>
                <Link href="#" className="hover:text-[#F05A1B]">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold">Resources</h3>
          <ul className="mt-2 space-y-2 text-base">
            {[
              "Coin Listing",
              "Investors",
              "Refer and Earn",
              "Nesterlify Charity",
            ].map((item, index) => (
              <li key={index}>
                <Link href="#" className="hover:text-[#F05A1B]">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold">Support</h3>
          <ul className="mt-2 space-y-2 text-base">
            {["Contact Us", "FAQ", "Disputes", "Blog"].map((item, index) => (
              <li key={index}>
                <Link href="#" className="hover:text-[#F05A1B]">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Info & Newsletter */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-6">
        <div className="text-center md:text-left space-y-4">
          <h3 className="font-medium text-2xl">Office Address</h3>
          <p className="text-base">
            169 Madison Avenue, Suite 11530 New York, <br /> NY 10016, United
            States of America.
          </p>
        </div>
        <div className="flex flex-row items-center space-x-6">
          <FaEnvelopeCircleCheck className="text-gray-100 text-3xl" />
          <div>
            <p className="text-base">Got Questions ? Emaill Us 24/7!</p>

            <Link
              href="mailto:support@nesterlify.com"
              className="text-base font-medium hover:underline"
            >
              support@nesterlify.com
            </Link>
          </div>
        </div>
        <div className="text-sm text-center md:text-left">
          <h3 className="font-semibold">Newsletter</h3>
          <p>Sign up to get the latest updates and offers</p>
          <div className="flex mt-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-2 rounded-l bg-gray-700 text-white w-64 focus:outline-none"
            />
            <button className="bg-[#F05A1B] px-4 py-2 rounded-r">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex flex-row justify-between">
        {" "}
        <div className="flex justify-center gap-6 mt-10 text-lg">
          <SiBinance className="hover:text-orange-500 cursor-pointer" />
          <FaFacebookF className="hover:text-orange-500 cursor-pointer" />
          <FaTwitter className="hover:text-orange-500 cursor-pointer" />
          <FaLinkedinIn className="hover:text-orange-500 cursor-pointer" />
          <FaTiktok className="hover:text-orange-500 cursor-pointer" />
          <FaMediumM className="hover:text-orange-500 cursor-pointer" />
        </div>
        <div className="items-center">
          {" "}
          <button className="bg-[#F05A1B] px-6 py-2 rounded-full">
            Support
          </button>
        </div>
      </div>

      <div className="flex mx-auto items-center mt-10 space-x-6 bg-[#F05A1B] px-6 py-3 rounded">
        <button className="flex items-center gap-2">🌐 English</button>
        <button className="flex items-center gap-2">💲 USD</button>
        <button className="flex items-center gap-2">🌙 Theme</button>
      </div>

      <div className="flex  items-center mt-6">
        <p className="text-lg text-center">
          © 2024 NESTERLY TECHNOLOGIES INC | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

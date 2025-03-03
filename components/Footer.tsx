"use client";

import Link from "next/link";
import { JSX, useState } from "react";
import axios from "axios";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaMediumM,
} from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import { FiSend } from "react-icons/fi";

export default function Footer() {
  const [email, setEmail] = useState<string>("");
  const [, setMsg] = useState<string>("");

  const showSuccessMessage = () => {
    document.getElementById("newsletter")!.style.display = "inherit";
    document.getElementById("repass")!.style.display = "none";
  };

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    interface NewsletterResponse {
      msg: string;
    }
    try {
      const res = await axios.post<NewsletterResponse>(
        "/api/v1/newsletter/subscribe",
        { email }
      );

      setMsg(res.data.msg);
    } catch (error: unknown) {
      const err = error as { response?: { data?: { message?: string } } };
      setMsg(
        err.response?.data?.message ||
          "Network problem, please try again later!"
      );
    }

    showSuccessMessage();
  };

  return (
    <footer className="w-full bg-[#2C2C2C]">
      <div className="w-full md:w-[90%] m-auto flex flex-col py-10 gap-5">
        {/* Logo Section */}
        <div className="flex flex-col md:flex-row items-center w-full justify-between">
          <div className="w-full md:w-auto flex flex-col gap-2">
            <div className="flex items-center gap-2 pl-3 md:pl-0 md:mb-2 mr-[5rem] md:mr-0 mb-4">
              <Link
                href="/"
                className="text-white hover:text-white font-Satoshi font-semibold text-[30px] md:text-[40px]"
              >
                NESTERLIFY
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 items-start gap-4 md:gap-0 justify-between w-full">
            <NavSection
              title="Company"
              links={[
                { name: "About Us", path: "/about-us" },
                { name: "Security", path: "/security" },
                {
                  name: "Careers",
                  path: "https://jobs.talenthr.io/nesterlify",
                  external: true,
                },
                { name: "Partner Program", path: "/partner-program" },
              ]}
            />

            <NavSection
              title="Legal"
              links={[
                { name: "Disclaimer", path: "/disclaimer" },
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "AML/KYC Policy", path: "/aml-kyc-policy" },
                { name: "Terms and Conditions", path: "/terms-and-conditions" },
              ]}
            />

            <NavSection
              title="Support"
              links={[
                { name: "Contact Us", path: "/contact-us" },
                { name: "FAQ", path: "/faq" },
                { name: "Disputes", path: "/dispute" },
                { name: "Blog", path: "/blog" },
              ]}
            />

            <NavSection
              title="Resources"
              links={[
                { name: "Coin Listing", path: "/coin-listing" },
                { name: "Investors", path: "/investors" },
                { name: "Refer and Earn", path: "/referral-program" },
                { name: "Nesterlify Charity", path: "/charity" },
              ]}
            />
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="flex flex-col md:flex-row gap-4 w-full justify-between">
          <div className="md:ml-3 m-auto w-[90%] md:w-full">
            <p className="font-Satoshi text-[24px] font-medium text-white">
              Office Address
            </p>
            <p className="font-Satoshi text-[15px] md:text-[16px] text-gray-300 md:w-[83%] mt-1">
              169 Madison Avenue, Suite 11530 New York, NY 10016, United States
              of America
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex items-center gap-2 m-auto w-[90%] md:w-full">
            <TbMail className="text-2xl text-gray-200" />
            <div>
              <p className="text-[16px] font-Satoshi text-gray-200">
                Got Questions? Email Us 24/7!
              </p>
              <span className="text-[16px] font-Satoshi text-white">
                support@nesterlify.com
              </span>
            </div>
          </div>

          {/* Newsletter Subscription Form */}
          <div className="flex flex-col gap-2 m-auto w-[90%] md:w-full">
            <p className="text-[22px] md:text-[24px] font-Satoshi text-white font-medium">
              Newsletter
            </p>
            <p className="text-[16px] font-Satoshi text-gray-300">
              Sign up to get the latest updates and offers
            </p>

            <form className="flex items-center gap-2" onSubmit={subscribe}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="placeholder:text-[#7F7F7F] text-white w-full border border-[#C2C2C2] p-2 rounded-md bg-transparent"
                required
              />
              <button
                type="submit"
                className="bg-[#F05A1B] text-white p-2 rounded-md"
              >
                <FiSend />
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center w-full">
          <p className="text-[#7F7F7F] font-Satoshi font-medium text-[20px] md:text-[24px]">
            Stay Connected!
          </p>
          <div className="flex gap-3 mt-3">
            <SocialIcon
              icon={<FaFacebookF />}
              url="https://www.facebook.com/profile.php?id=61568445872071"
            />
            <SocialIcon icon={<FaTwitter />} url="https://x.com/nesterlify" />
            <SocialIcon
              icon={<FaInstagram />}
              url="https://www.instagram.com/nesterlify/"
            />
            <SocialIcon
              icon={<FaLinkedinIn />}
              url="https://www.linkedin.com/company/nesterlify"
            />
            <SocialIcon
              icon={<FaTiktok />}
              url="https://tiktok.com/@nesterlify/"
            />
            <SocialIcon
              icon={<FaMediumM />}
              url="https://medium.com/@nesterlify"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

const NavSection = ({
  title,
  links,
}: {
  title: string;
  links: { name: string; path: string; external?: boolean }[];
}) => (
  <div className="flex flex-col items-start gap-3">
    <h1 className="text-lg text-white font-medium">{title}</h1>
    <ul className="flex flex-col gap-3">
      {links.map(({ name, path, external }) => (
        <li key={name}>
          <Link
            href={path}
            target={external ? "_blank" : "_self"}
            className="text-gray-300 hover:text-[#F05A1B]"
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const SocialIcon = ({ icon, url }: { icon: JSX.Element; url: string }) => (
  <Link
    href={url}
    target="_blank"
    className="text-white text-xl hover:text-[#F05A1B]"
  >
    {icon}
  </Link>
);

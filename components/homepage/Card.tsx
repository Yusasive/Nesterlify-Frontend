import Image from "next/image";

interface CardProps {
  title: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, imageSrc }) => {
  return (
    <div className="bg-[#F05A1B] text-white rounded-2xl p-6 flex justify-between shadow-lg flex-row sm:items-center sm:p-8">
      <div className="">
        <h3 className="text-[22px] lg:text-[44px] font-bold mb-4  whitespace-pre-line">
          {title}
        </h3>
        <button className="bg-white text-[#2C2C2C] px-2 lg:px-4 py-2 rounded-lg font-medium">
          Learn more
        </button>
      </div>
      <div className="mt-4 sm:mt-0">
        <Image src={imageSrc} alt={title} width={250} height={157} />
      </div>
    </div>
  );
};

export default Card;

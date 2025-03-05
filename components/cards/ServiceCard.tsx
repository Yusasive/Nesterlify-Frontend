import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  category: string;
  color: string;
  image: string;
  slug: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  category,
  color,
  image,
  slug,
}) => {
  return (
    <Link href={`/services/${slug}`} className="block">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300">
        <div className="relative w-full">
          <Image
            src={image}
            alt={title}
            className="object-cover"
            width={394.5}
            height={260}
          />
        </div>
        <div className="p-4 space-y-4">
          <span
            className={`px-3 py-1 text-sm lg:text-base font-medium rounded-lg ${color}`}
          >
            • {category}
          </span>
          <h3 className="mt-3 text-lg lg:text-xl text-[#0B0B0B] font-bold">
            {title}
          </h3>
          <p className="text-[#7F7F7F] text-sm lg:text-base mt-1 pb-6">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;

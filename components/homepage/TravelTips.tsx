import Button from "../resuable/Button";

export default function TravelTips() {
  return (
    <div className="relative w-full px-2 md:px-32  mt-4 text-white">
      <div className="bg-travel flex flex-col items-center rounded-4xl justify-center h-[743px]">
        <h1 className="text-[36px] lg:text-7xl font-bold text-[#FFFFFF] text-center">
          Travel Tips
        </h1>
        <p className="text-lg lg:text-[44px] px-32 text-center font-medium text-[#FFFFFF] mt-6">
          Nesterlify safety tourism guidelines Stay informed, stay safe!
        </p>
        <div className="flex items-center gap-6 mt-8 space-x-8 lg:space-x-14">
          <Button variant="primary" size="lg">Read More</Button>
        </div>
      </div>
    </div>
  );
}

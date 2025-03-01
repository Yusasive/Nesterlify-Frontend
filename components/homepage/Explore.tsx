import Card from "@/components/homepage/Card";


export default function Explore() {
  return (
    <div className="bg-[#FFFFFF] py-20">
      <div className="mx-3 lg:mx-20 p-6 bg-[#FFFFFF]">
        <div className="text-center mb-6">
          <div className="w-30 lg:w-42 h-1 bg-[#F05A1B] mx-auto mb-2"></div>
          <h2 className="text-xl lg:text-[44px] text-[#2C2C2C]  font-medium">
            Explore
            <br /> Worldwide Destinations
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 pb-10">
          <Card title={"Global\nTourism"} imageSrc="/images/word.png" />
          <Card title={"Tours\n&\nEvents"} imageSrc={"/images/wordbook.png"} />
        </div>
      </div>
    </div>
  );
}

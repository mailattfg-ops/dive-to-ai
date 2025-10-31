import Marquee from "react-fast-marquee";

const expertiseData = [
  {
    title: "AI for Productivity",
    image: "/ai-productivity.jpg",
    color: "bg-[#FF3B3BB2]",
    icon: "/productivity.svg",
  },
  {
    title: "AI for Data Analytics",
    image: "/ai-data.jpg",
    color: "bg-[#0059FFB2]",
    icon: "/graphUp.svg",
  },
  {
    title: "AI for Product Design",
    image: "/ai-design.jpg",
    color: "bg-[#FFF94BB2]",
    icon: "/target.svg",
  },
  {
    title: "AI for Marketing",
    image: "/ai-marketing.jpg",
    color: "bg-[#AB4BFFB2]",
    icon: "/pencilEdit.svg",
  },
];

// Logo data
const logos = [
  { name: "Techlify", icon: "T" },
  { name: "Apply", icon: "A" },
  { name: "Software", icon: "S" },
  { name: "Startup", icon: "🚀" },
  { name: "Camera", icon: "📷" },
  { name: "Cloudly", icon: "☁️" },
  { name: "Techlify", icon: "T" },
  { name: "Apply", icon: "A" },
];

const ExpertiseSection = () => {
  return (
    <section className="bg-white py-16 md:py-18 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-cal text-sm font-semibold text-black tracking-wider">
            LIMITED TIME OFFER
          </p>
          <h2 className="font-cal text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Our Expertise
          </h2>
          <p className="mt-4 text-lg text-gray-600 md:mb-12">
            We specialize in AI implementation across multiple business areas:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 max-w-6xl mx-auto border border-gray-300 rounded-3xl overflow-hidden">
          {expertiseData.map((item, i) => (
            <div
              key={i}
              className="relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-84 object-cover"
              />

              <div
                className={`${item.color} absolute bottom-5 left-5 text-white px-4 py-2 rounded-xl flex flex-col items-center gap-2 backdrop-blur-md bg-opacity-90`}
              >
                <p className="font-semibold text-sm md:text-base">
                  {item.title}
                </p>
                <span className="text-lg text-white">
                  <img src={item.icon} className="w-full h-16 object-cover" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 md:mt-24">
        <Marquee autoFill={true} pauseOnHover={false} speed={50}>
          <div className="flex items-center mx-8">
            <img
              src="/marquee.png"
              alt="My Logo"
              className="h-16 w-auto object-contain transition-transform duration-300"
            />
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default ExpertiseSection;

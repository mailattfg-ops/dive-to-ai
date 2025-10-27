
import Marquee from "react-fast-marquee";

const expertiseData = [
  {
    title: "AI for Productivity",
    image: "/ai-productivity.jpg",
    color: "bg-[#FF6B6B]",
    icon: "⚙️",
  },
  {
    title: "AI for Data Analytics",
    image: "/ai-data.jpg",
    color: "bg-[#2563EB]",
    icon: "📊",
  },
  {
    title: "AI for Product Design",
    image: "/ai-design.jpg",
    color: "bg-[#FACC15]",
    icon: "🎨",
  },
  {
    title: "AI for Marketing",
    image: "/ai-marketing.jpg",
    color: "bg-[#8B5CF6]",
    icon: "✏️",
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
    // 1. Removed px-4, kept overflow-hidden for the marquee
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      
      {/* 2. Added px-4 here to constrain the text and carousel */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        
        {/* 1. Title Content */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-cal text-sm font-semibold text-purple-600 tracking-wider">
            LIMITED TIME OFFER
          </p>
          <h2 className="font-cal text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Our Expertise
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We specialize in AI implementation across multiple business areas:
          </p>
        </div>

        {/* 2. Scrolling Cards using Shadcn Carousel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-4">
        {expertiseData.map((item, i) => (
          <div
            key={i}
            className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover"
            />

            {/* Overlay Box */}
            <div
              className={`${item.color} absolute bottom-5 left-5 text-white px-4 py-2 rounded-xl flex items-center gap-2 backdrop-blur-md bg-opacity-90`}
            >
              <span className="text-lg">{item.icon}</span>
              <p className="font-semibold text-sm md:text-base">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
      
      {/* 3. Marquee is moved OUTSIDE the max-w-7xl div */}
      <div className="mt-16 md:mt-24">
        <Marquee 
          autoFill={true}
          pauseOnHover={true}
          speed={50}
        >
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center gap-2 mx-8">
              <span className="text-2xl font-bold text-gray-800">{logo.icon}</span>
              <span className="font-cal text-lg font-semibold text-gray-700">{logo.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ExpertiseSection;
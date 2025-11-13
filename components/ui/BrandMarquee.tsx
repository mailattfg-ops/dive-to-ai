import Marquee from "react-fast-marquee";

export default function BrandMarquee() {
  return (
    <div className="my-6 md:my-10">
      <Marquee autoFill={true} pauseOnHover={false} speed={50}>
        <div className="flex items-center mx-8">
          <img
            src="/marquee.png"
            alt="brand-strip"
            className="h-6 w-auto object-contain"
          />
        </div>
      </Marquee>
    </div>
  );
}

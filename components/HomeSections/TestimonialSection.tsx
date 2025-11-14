import { testimonials } from "@/data/homePageData";
import TestimonialsGrid from "../TestimonialsGrid";

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-white px-4 lg:px-8 pt-8">
      <TestimonialsGrid testimonials={testimonials} />
    </section>
  );
}
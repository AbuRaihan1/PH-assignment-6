import testimonial1 from "../../assets/testimonial1.jpg";
import testimonial2 from "../../assets/testimonial2.jpg";
import testimonial3 from "../../assets/testimonial3.jpg";
import TestimonialCard from "./TestimonialCard";
const Testimonial = () => {
  const testimonial = [
    {
      image: testimonial1,
      name: "John D",
      description: `“I can’t thank [Your Organization Name] enough for their tireless efforts. Their commitment to feeding the hungry is truly inspiring. As a volunteer, I’ve seen firsthand the impact of their work. Together, we’re making a difference!”`,
      designation: "CEO at Softpre",
    },
    {
      image: testimonial2,

      name: "Sarah M",
      description: `“When times were tough, [Your Organization Name] was there for me. Their warm meals brought comfort and hope. Now, I’m proud to support their cause. They’re not just feeding bodies; they’re nourishing souls.”`,
      designation: "DGM at Interstoff",
    },
    {
      image: testimonial3,

      name: "David L",
      description: `“From the moment I connected with [Your Organization Name], I knew I was part of something special. Their transparency, dedication, and compassion set them apart. Let’s continue to fight hunger together!”`,
      designation: "Co Founder at Nonsri",
    },
  ];
  return (
    <>
      <div>
        <div className="text-center text-2xl md:text-3xl font-bold">
          <h2>Testimonial</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12">
          {testimonial.map((item, idx) => (
            <TestimonialCard item={item} key={idx} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonial;

import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      content:
        "Digifabrix transformed our manufacturing operations. Their OEE solution helped us identify bottlenecks we didn't know existed, resulting in a 27% increase in productivity.",
      author: "Michael Johnson",
      position: "Operations Director, TechManufacturing Inc.",
      initials: "MJ",
    },
    {
      content:
        "The traceability system has been a game-changer for our quality control. We can now track every component from receipt to final product, reducing defects by 35%.",
      author: "Uno Minda",
      position: "Auto Parts manufacturing",
      initials: "UM",
    },
    {
      content:
        "Implementing Digifabrix's smart factory solution has reduced our downtime by 40% and improved our OEE from 65% to 89% in just six months.",
      author: "David Kim",
      position: "Plant Manager, AutoParts Global",
      initials: "DK",
    },
  ];

  return (
    <section id="client" className="bg-white pb-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Success stories from industry leaders
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-10 h-10 text-blue-600 opacity-30" />
              </div>

              {/* Testimonial Content */}
              <div className="mb-6">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  {testimonial.content}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-base md:text-lg">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-base md:text-lg">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

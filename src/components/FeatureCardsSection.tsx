import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Globe, Smartphone, Settings, ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";

const FeatureCardsSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    {
      icon: <Globe className="w-12 h-12 text-white" />,
      title: "Local Focus",
      subtitle: "Built for hill region youth",
      description: "Understanding your background, knowing your dreams",
      imgSrc: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      gradient: "from-blue-600/60 via-green-500/40 to-blue-700/60",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-white" />,
      title: "Learn from Phone",
      subtitle: "Start with just your phone",
      description: "Begin your coding journey with just a smartphone",
      imgSrc: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      gradient: "from-purple-600/60 via-pink-500/40 to-purple-700/60",
    },
    {
      icon: <Settings className="w-12 h-12 text-white" />,
      title: "Job-Ready Skills",
      subtitle: "Python, Web, AI & more",
      description: "Industry-ready skills that actually get you jobs",
      imgSrc: "https://images.unsplash.com/photo-1657727534676-cac1bb160d64?q=80&w=404&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gradient: "from-orange-600/60 via-red-500/40 to-orange-700/60",
    },
    {
      icon: <Settings className="w-12 h-12 text-white" />,
      title: "Extra Skill",
      subtitle: "Cloud & DevOps",
      description: "Learn tools that power the tech industry",
      imgSrc: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
      gradient: "from-teal-600/60 via-blue-500/40 to-teal-700/60",
    },
  ];

const nextSlide = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
};

const prevSlide = () => {
  setCurrentIndex((prevIndex) =>
    (prevIndex - 1 + features.length) % features.length
  );
};



  return (
    <section
      ref={sectionRef}
      className="relative py-16 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto px-6">
        {/* Section Title */}
      <motion.div 
          className="text-center mb-16"
          // variants={claardVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🚀 Your Journey Starts Here
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Supporting you every step of the way, turning every dream into reality
          </p>
        </motion.div>
        {/* Cards Container */}
        <div className="relative flex items-center">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 z-20 bg-white shadow-lg rounded-full p-2 hover:scale-105 transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Cards */}
          <div className="overflow-hidden w-full">
           <motion.div
  className="flex gap-6 transition-transform duration-500"
  style={{
    transform: `translateX(-${currentIndex * 50}%)`, // Move in 50% steps
  }}
>
  {features.map((feature, index) => (
   <motion.div
  key={index}
  whileHover={{}} // no scale here so text doesn't grow
  transition={{ duration: 0.4 }}
  className="relative w-1/3 h-[80vh] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg group"
>
  {/* Background Image */}
  <div className="absolute rounded-2xl inset-0">
    <img
      src={feature.imgSrc}
      alt={feature.title}
      className="w-full rounded-2xl h-[80vh] object-cover transition-transform duration-500 group-hover:scale-110"
    />
    {/* Gradient Overlay (Top to Bottom) */}
    <div
      className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
    />
  </div>

  {/* Content */}
  <div className="relative z-10 p-6 text-white flex flex-col justify-end h-full">
    <div className="mb-4">{feature.icon}</div>
    <h3 className="text-5xl font-bold">{feature.title}</h3>
    <p className="text-2xl opacity-90">{feature.subtitle}</p>
    <p className="text-xl opacity-80 mt-2">{feature.description}</p>
  </div>
</motion.div>

  ))}
</motion.div>

          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute -right-4 z-20 bg-white shadow-lg rounded-full p-2 hover:scale-105 transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureCardsSection;

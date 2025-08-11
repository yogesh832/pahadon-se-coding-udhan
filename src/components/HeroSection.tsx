import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-coding-mountains.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Student coding in mountains" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="block">From Mountains to IT World</span>
              <span className="block text-3xl md:text-4xl mt-2 text-white/90">
                Learn Coding. Get a Job. From Bageshwar to the World.
              </span>
            </h1>
            <p className="text-xl md:text-xl text-white/90 mb-8 max-w-2xl">
              Start your tech journey with expert guidance in simple language. 
              No prior experience needed. Small beginnings, big achievements.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
           
           <a href="#courses"> <Button variant="hero" size="lg" className="text-xl px-8 py-4">
              🚀 Explore Courses
            </Button>
            </a>
            <Button variant="outline" size="lg" className="text-xl px-8 py-4 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
              🎯 Join Free Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <span className="text-3xl">👥</span>
              <span  className="text-3xl">1500+ Students</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl">🏆</span>
              <span className="text-3xl">300+ Job Offers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl">🌍</span>
              <span className="text-3xl">10+ Districts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import successImage from "@/assets/success-story.jpg";

const SuccessStoriesSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const storyVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8
      }
    },
  };

  const stories = [
    {
      name: "Rohit Joshi",
      location: "Bageshwar",
      course: "Full Stack Developer",
      job: "Web Developer at Dehradun Startup",
      story: "I'm from Bageshwar. VOTS helped me reach an IT job. Never thought I could do coding before.",
      rating: 5,
      salary: "₹25,000/month"
    },
    {
      name: "Meena Rawat",
      location: "Almora",
      course: "Python Programming",
      job: "Freelance Developer",
      story: "Started with typing and MS Office. Now I'm building websites. I work from home now.",
      rating: 5,
      salary: "₹30,000/month"
    },
    {
      name: "Sandeep Bisht",
      location: "Pithoragarh",
      course: "PreBasic to Advance",
      job: "Software Engineer Intern",
      story: "After 12th, I took PreBasic course, then went till Advanced. Now doing internship in Bangalore.",
      rating: 5,
      salary: "₹20,000/month"
    }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      id="success" 
      className="py-20 bg-gradient-to-b from-background to-muted/30"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          variants={storyVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🌟 Student Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories of our students. Where they are today and how they reached there.
          </p>
        </motion.div>

        {/* Featured Success Story */}
        <motion.div 
          className="mb-16"
          variants={storyVariants}
        >
          <Card className="overflow-hidden shadow-xl bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-xl font-medium text-foreground mb-6">
                    "You can get IT jobs even without B.Tech. VOTS made this possible. 
                    Dreams from small places can come true."
                  </blockquote>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg text-foreground">Ravi Negi</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Bageshwar → Dehradun</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        <span>Web Developer</span>
                      </div>
                    </div>
                    <p className="text-cta font-semibold">Now Earning: ₹35,000/month</p>
                  </div>
                </div>
                <div className="p-8">
                  <img 
                    src={successImage} 
                    alt="Success story" 
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* More Success Stories */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
        >
          {stories.map((story, index) => (
            <motion.div key={index} variants={storyVariants}>
              <Card className="group hover:shadow-lg transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-foreground mb-4 text-sm leading-relaxed">
                  "{story.story}"
                </blockquote>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">{story.name}</h4>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{story.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-3 h-3" />
                      <span>{story.job}</span>
                    </div>
                  </div>
                  <p className="text-cta font-semibold text-sm">{story.salary}</p>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">1500+</div>
            <div className="text-muted-foreground">Students Trained</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">300+</div>
            <div className="text-muted-foreground">Job Offers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-muted-foreground">Districts Covered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">₹25L+</div>
            <div className="text-muted-foreground">Income Generated</div>
          </div>
        </motion.div>

        {/* Video Testimonials CTA */}
        <motion.div 
          className="text-center bg-card/50 backdrop-blur-sm p-8 rounded-2xl"
          variants={storyVariants}
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Want to hear more success stories? 🎥
          </h3>
          <p className="text-muted-foreground mb-6">
            Watch video testimonials of our students and learn about their complete journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              🎬 Watch Video Stories
            </Button>
            <Button variant="outline" size="lg">
              📝 Share Your Story
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SuccessStoriesSection;
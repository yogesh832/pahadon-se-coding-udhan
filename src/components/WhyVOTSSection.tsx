import { Card, CardContent } from "@/components/ui/card";
import { Check, Users, BookOpen, DollarSign, TrendingUp, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WhyVOTSSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    },
  };

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Local + Industry Experts",
      description: "स्थानीय समझ के साथ इंडस्ट्री एक्सपर्ट्स से सीखें",
      detail: "Learn from trainers who understand your background"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Placement Assistance",
      description: "Job की गारंटी के साथ Interview preparation",
      detail: "Complete job support from resume to interview"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Hindi + English",
      description: "आसान भाषा में coding सीखें",
      detail: "Learn in the language you're comfortable with"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Affordable Fees",
      description: "हर student के budget में courses",
      detail: "EMI options available for all courses"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Step-by-step Learning",
      description: "बिना pressure के धीरे-धीरे सीखें",
      detail: "No rush, learn at your own comfortable pace"
    },
    {
      icon: <Check className="w-8 h-8" />,
      title: "Zero to Hero",
      description: "Computer basics से Software Engineer तक",
      detail: "Complete transformation journey"
    }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-muted/30 to-background"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🌟 Why Choose VOTS?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            क्यों VOTS आपके लिए सबसे बेहतर choice है? देखिए क्या खास है हमारे पास
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-card/50 backdrop-blur-sm h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-primary font-medium mb-2">
                        {feature.description}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {feature.detail}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to start your coding journey? आज ही शुरू करें!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold">
              🎯 Book Free Counseling
            </button>
            <button className="border border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/10 transition-colors font-semibold">
              📞 Call Now: +91-XXXXXXXXXX
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyVOTSSection;
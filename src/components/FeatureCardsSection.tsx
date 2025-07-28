import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Globe, Smartphone, Settings } from "lucide-react";

const FeatureCardsSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    },
  };

  const features = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Local Focus",
      subtitle: "Built for pahadi youth",
      description: "समझते हैं आपकी परेशानी, जानते हैं आपके सपने",
      videoSrc: "https://cdn.pixabay.com/vimeo/452333/mountain-47837.mp4?width=1280&hash=b0d619fe51d8bb2b78c5fb2e5b65ca35c3a86e6b",
      gradient: "from-blue-500/20 via-green-500/20 to-blue-600/20"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Learn from Phone",
      subtitle: "Start with just your phone",
      description: "बस एक phone से शुरू करें अपना coding journey",
      videoSrc: "https://cdn.pixabay.com/vimeo/334886/smartphone-8474.mp4?width=1280&hash=7c8b5392ab8e6c6f3be5b6f13b3ea52cbf6b94bb",
      gradient: "from-purple-500/20 via-pink-500/20 to-purple-600/20"
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Job-Ready Skills",
      subtitle: "Python, Web, AI & more",
      description: "Industry-ready skills जो सच में job दिलाते हैं",
      videoSrc: "https://cdn.pixabay.com/vimeo/205059/coding-4141.mp4?width=1280&hash=86ba71fcc56e0f93cf8ba3d2d69a77c23b8fa863",
      gradient: "from-orange-500/20 via-red-500/20 to-orange-600/20"
    }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-background to-muted/30 overflow-hidden"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          variants={cardVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🚀 Your Journey Starts Here
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            हर कदम पर आपके साथ, हर सपने को हकीकत बनाने के लिए
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl bg-card border border-border/50 backdrop-blur-sm">
                {/* Background Video */}
                <div className="absolute inset-0 z-0">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                  >
                    <source src={feature.videoSrc} type="video/mp4" />
                  </video>
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient}`} />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 text-center">
                  <motion.div 
                    className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <motion.h3 
                    className="text-2xl font-bold text-foreground mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {feature.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-sm font-medium text-muted-foreground mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {feature.subtitle}
                  </motion.p>
                  
                  <motion.p 
                    className="text-sm text-foreground/80 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {feature.description}
                  </motion.p>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300" />
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-5" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeatureCardsSection;
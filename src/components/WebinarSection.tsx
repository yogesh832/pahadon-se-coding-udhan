import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Video } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WebinarSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    },
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-primary/10 via-background to-accent/10"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={itemVariants}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-cta text-cta-foreground">Free Webinar 🔥</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              📅 Upcoming Free Webinar
            </h2>
            <p className="text-lg text-muted-foreground">
              Career guidance session - absolutely free! Clear all your doubts.
            </p>
          </div>

          {/* Webinar Card */}
          <Card className="shadow-2xl border-0 overflow-hidden bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Content Side */}
                <div className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        "Career in IT without Engineering Degree"
                      </h3>
                      <p className="text-muted-foreground">
                        How to build a career in IT without an engineering degree? Learn everything in detail.
                      </p>
                    </div>

                    {/* Event Details */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="font-semibold text-foreground">16 July 2024</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="font-semibold text-foreground">5:00 PM - 6:30 PM</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Video className="w-5 h-5 text-primary" />
                        <span className="font-semibold text-foreground">Live on Zoom</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-primary" />
                        <span className="font-semibold text-foreground">Limited Seats (250)</span>
                      </div>
                    </div>

                    {/* What You'll Learn */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">What you'll learn in this session:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          What opportunities exist in the IT field
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          Which course would be better for you
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          Current job market situation
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          Salary expectations and growth path
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          Free resources and learning tips
                        </li>
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                      <Button variant="cta" size="lg" className="w-full mb-4">
                        🎯 Register Now - FREE
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        Registration link will be sent to your WhatsApp
                      </p>
                    </div>
                  </div>
                </div>

                {/* Visual Side */}
                <div className="p-8 bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="text-6xl mb-4">🎓</div>
                    <div className="space-y-3">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                        <div className="text-sm text-muted-foreground">Already Registered</div>
                        <div className="text-2xl font-bold text-primary">1,247</div>
                        <div className="text-sm text-muted-foreground">Students</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                        <div className="text-sm text-muted-foreground">Seats Left</div>
                        <div className="text-2xl font-bold text-cta">753</div>
                        <div className="text-sm text-muted-foreground">Only</div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-cta/20 text-cta">
                      ⏰ Hurry! Limited Time
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Can't attend live? Don't worry! Recording will also be available to registered students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline">
                📞 Call for Questions
              </Button>
              <Button variant="outline">
                💬 WhatsApp Reminder
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WebinarSection;
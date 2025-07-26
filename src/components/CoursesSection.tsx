import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, DollarSign, Award } from "lucide-react";

const CoursesSection = () => {
  const courses = [
    {
      icon: "📘",
      title: "PreBasic Course",
      subtitle: "Computer Basics & Typing",
      description: "Computer चलाना सीखें, Typing speed बढ़ाएं",
      duration: "2 Months",
      fee: "₹3,000",
      mode: "Offline/Online",
      level: "Beginner",
      skills: ["Computer Basics", "MS Office", "Typing Speed", "Internet"],
      popular: false
    },
    {
      icon: "🔷",
      title: "Basic Programming",
      subtitle: "C, HTML, Python Foundation",
      description: "Programming की शुरुआत आसान भाषा में",
      duration: "4 Months",
      fee: "₹8,000",
      mode: "Offline/Online",
      level: "Beginner",
      skills: ["C Programming", "HTML/CSS", "Python Basics", "Logic Building"],
      popular: false
    },
    {
      icon: "🚀",
      title: "Advance with Job",
      subtitle: "Full Stack Developer Course",
      description: "Complete web development with job guarantee",
      duration: "6 Months",
      fee: "₹22,000",
      mode: "Offline/Online",
      level: "Advanced",
      skills: ["React", "Node.js", "MongoDB", "AWS", "Job Support"],
      popular: true
    },
    {
      icon: "🐍",
      title: "Python Programming",
      subtitle: "Data Science & AI Basics",
      description: "Python से AI/ML की दुनिया में कदम रखें",
      duration: "5 Months",
      fee: "₹15,000",
      mode: "Offline/Online",
      level: "Intermediate",
      skills: ["Python Advanced", "Data Analysis", "AI Basics", "Libraries"],
      popular: false
    },
    {
      icon: "☁️",
      title: "AWS Cloud Computing",
      subtitle: "Cloud Technology Course",
      description: "Future technology में career बनाएं",
      duration: "3 Months",
      fee: "₹18,000",
      mode: "Online",
      level: "Intermediate",
      skills: ["AWS Services", "Cloud Deployment", "DevOps", "Certification"],
      popular: false
    }
  ];

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            💡 Our Popular Courses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Basic से Advanced तक, हर level का course है। आपके लिए कौन सा perfect है?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className={`relative group hover:shadow-xl transition-all duration-300 ${course.popular ? 'ring-2 ring-cta/20 shadow-lg' : ''}`}>
              {course.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-cta text-cta-foreground">
                  Most Popular 🔥
                </Badge>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{course.icon}</span>
                  <div>
                    <CardTitle className="text-xl text-foreground">{course.title}</CardTitle>
                    <p className="text-sm text-primary font-medium">{course.subtitle}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{course.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Course Details */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-cta">{course.fee}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{course.mode}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span>{course.level}</span>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">What you'll learn:</p>
                  <div className="flex flex-wrap gap-1">
                    {course.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2 pt-4">
                  <Button 
                    variant={course.popular ? "cta" : "default"} 
                    className="w-full"
                  >
                    Learn More
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    Download Syllabus
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Confused about which course to choose? 🤔
          </h3>
          <p className="text-muted-foreground mb-6">
            Free career counseling session book करें। हमारे experts आपको सही course choose करने में help करेंगे।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              📞 Book Free Counseling
            </Button>
            <Button variant="outline" size="lg">
              💬 WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Local + Industry Experts",
    description: "Learn from trainers who understand your background.",
    detail: "Expert instructors with local understanding and industry experience.",
    icon: "https://images.unsplash.com/photo-1585695531976-6e6e5341a646?q=80&w=1398&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Placement Assistance",
    description: "Job guarantee with complete interview preparation.",
    detail: "Complete job support from resume building to interview cracking.",
    icon: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Simple Language",
    description: "Learn coding in easy, understandable language.",
    detail: "Learn in the language you're most comfortable with.",
    icon: "https://images.unsplash.com/photo-1699470397651-b0d0c4421ccb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGpvYiUyMHJlYWR5JTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D"
  },
  {
    title: "Affordable Fees",
    description: "Courses that fit every student's budget.",
    detail: "EMI options available for all courses with flexible payment.",
    icon: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Hands-on Projects",
    description: "Real projects to build your portfolio.",
    detail: "Work on real client-based projects to gain experience.",
    icon: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Beginner Friendly",
    description: "No prior coding experience needed.",
    detail: "Courses designed for complete beginners.",
    icon: "https://images.unsplash.com/photo-1647086981666-c736e3c44914?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGpvYiUyMHJlYWR5JTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D"
  },
  {
    title: "Flexible Timings",
    description: "Learn at your own pace.",
    detail: "Morning, evening, and weekend batches available.",
    icon: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Certification",
    description: "Get certified after completion.",
    detail: "Industry-recognized certificates to boost your resume.",
    icon: "https://images.unsplash.com/photo-1615076754255-351148b9d194?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpvYiUyMHJlYWR5JTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D"
  }
];

const WhyVOTSSticky = () => {
  const rightRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.to(".sticky-left", {
      scrollTrigger: {
        trigger: rightRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true
      },
      scale: 0.95,
      transformOrigin: "top center"
    });

    cardRefs.current.forEach((card) => {
      gsap.fromTo(
        card,
        { autoAlpha: 0, y: 80 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <div className="flex w-full min-h-[80vh]">
      {/* Sticky Left */}
      <div className="sticky-left w-1/2 sticky top-0 h-screen bg-gradient-to-b from-indigo-900 to-indigo-700 text-white p-10 flex flex-col justify-center items-center">
        <h2 className="text-5xl font-bold mb-6 text-center">🌟 Why Choose VOTS?</h2>
        <p className="text-lg text-center text-white/80 max-w-md">
          Discover why VOTS is the best choice for your learning journey.
          Learn, grow, and secure your dream job with us.
        </p>
      </div>

      {/* Scrollable Cards */}
      <div ref={rightRef} className="w-1/2 bg-white flex flex-col gap-12 py-12">
        {features.map((feature, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="relative mx-auto w-[85%] h-72 mb-20 rounded-2xl overflow-hidden border border-gray-200 shadow-lg group cursor-pointer"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 p-6 w-full text-white z-10">
              <h3 className="text-2xl font-bold">{feature.title}</h3>
              <p className="text-lg font-medium">{feature.description}</p>
              <p className="text-sm mt-2 opacity-90">{feature.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyVOTSSticky;

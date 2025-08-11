import { Download, Clock } from "lucide-react";

const courses = [
  {
    provider: "SkillEdge",
    title: "Web Development for Beginners",
    highlight: "Learn HTML, CSS & JavaScript basics",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    badge: "Popular",
    info: [
      { icon: "certificate", label: "Certification" },
      { icon: "clock", label: "3 Months" },
    ],
  },
  {
    provider: "SkillEdge",
    title: "Basic Computer Skills",
    highlight: "Master MS Office, Email & Internet",
    image: "https://images.unsplash.com/photo-1581090700227-4c4f50b1d1d3?w=800&q=80",
    badge: "Bestseller",
    info: [
      { icon: "certificate", label: "Certification" },
      { icon: "clock", label: "1 Month" },
    ],
  },
  {
    provider: "SkillEdge",
    title: "Python Programming Basics",
    highlight: "Start coding with Python 3",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    info: [
      { icon: "certificate", label: "Certification" },
      { icon: "clock", label: "2 Months" },
    ],
  },
  {
    provider: "SkillEdge",
    title: "Digital Marketing Fundamentals",
    highlight: "SEO, Social Media & Google Ads",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&q=80",
    info: [
      { icon: "certificate", label: "Certification" },
      { icon: "clock", label: "1.5 Months" },
    ],
  },
  {
    provider: "SkillEdge",
    title: "Graphic Design with Canva",
    highlight: "Create stunning designs easily",
    image: "https://images.unsplash.com/photo-1504691342899-8d2d2d04b23d?w=800&q=80",
    badge: "New",
    info: [
      { icon: "certificate", label: "Certification" },
      { icon: "clock", label: "3 Weeks" },
    ],
  },
  {
    provider: "SkillEdge",
    title: "Java Basics for Beginners",
    highlight: "Learn OOP concepts in Java",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&q=80",
    info: [
      { icon: "certificate", label: "Certification" },
      { icon: "clock", label: "2 Months" },
    ],
  },
  {
    provider: "SkillEdge",
    title: "Cybersecurity Basics",
    highlight: "Stay safe online & protect data",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    info: [
      { icon: "certificate", label: "Certification" },
      { icon: "clock", label: "1 Month" },
    ],
  },
  {
    provider: "SkillEdge",
    title: "Mobile App Development Basics",
    highlight: "Build simple Android apps",
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=800&q=80",
    badge: "Hot",
    info: [
      { icon: "certificate", label: "Certification" },
      { icon: "clock", label: "2.5 Months" },
    ],
  },
];

export default function CoursesSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col border border-gray-100"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              {course.badge && (
                <span className="absolute top-4 right-4 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {course.badge}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 p-6 flex flex-col">
              <span className="text-sm text-gray-500 font-medium">{course.provider}</span>
              <h3 className="text-lg font-semibold text-gray-900 mt-1 leading-snug">
                {course.title}
              </h3>
              {course.highlight && (
                <span className="inline-block bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded mt-3">
                  {course.highlight}
                </span>
              )}

              {/* Info */}
              <div className="flex items-center gap-6 mt-5 text-gray-600 text-sm">
                {course.info.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    {item.icon === "certificate" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-3-3v6m8-6a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ) : (
                      <Clock size={16} className="text-blue-500" />
                    )}
                    {item.label}
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-6">
                <button className="flex-1 border border-gray-800 rounded-lg py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition">
                  View Program
                </button>
                <button className="flex-1 bg-red-600 text-white rounded-lg py-2 text-sm font-medium hover:bg-red-700 flex items-center justify-center gap-1 transition">
                  <Download size={14} />
                  Syllabus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

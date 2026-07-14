import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Users, Lightbulb, Target } from "lucide-react";
import SipsterSection from "./sipster-section";
import ContactSection from "./contact-section";
import { MinimalFooter } from "@/components/ui/minimal-footer";
import { SplitText } from "@/components/ui/split-text";

const features = [
  {
    icon: Users,
    title: "User-Focused",
    description: "We build apps that address real problems and user needs.",
  },
  {
    icon: Target,
    title: "Practical Solutions",
    description: "Tools that actually make life easier and more efficient.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Creative approaches to everyday challenges and problems.",
  },
  {
    icon: Smartphone,
    title: "Quality Apps",
    description: "Thoroughly tested and reliable mobile applications.",
  },
];

const DemoOne = () => {
  return (
    <>
      <div className="min-h-svh w-full bg-white text-gray-900 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/80 via-white to-rose-50/60 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="w-full max-w-6xl space-y-12 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <Badge className="bg-pink-100 text-pink-700 border border-pink-200 hover:bg-pink-100 px-4 py-2 rounded-full">
              📱 Apps That Actually Help You
            </Badge>

            <div className="space-y-6 flex items-center justify-center flex-col">
              <SplitText
                text="Mobile Apps That Solve Real Problems"
                className="text-3xl md:text-6xl font-semibold tracking-tight max-w-4xl text-gray-900"
                delay={50}
                animationFrom={{ opacity: 0, transform: "translate3d(0, 30px, 0)" }}
                animationTo={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
                threshold={0.2}
                textAlign="center"
              />
              <p className="text-lg text-gray-600 max-w-3xl">
                We build innovative mobile applications that solve real-world problems and genuinely improve people's lives. Our focus is on creating tools that are practical, helpful, and designed with your actual needs in mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button
                  className="text-sm px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 text-white border-0 shadow-lg shadow-pink-200 hover:from-pink-600 hover:to-rose-700"
                  onClick={() => document.getElementById("sipster")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Explore Our Apps
                </Button>
                <Button
                  className="text-sm px-8 py-3 rounded-full bg-white text-gray-700 border border-gray-200 shadow-sm hover:bg-gray-50"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white border border-pink-100 rounded-2xl p-4 md:p-6 h-40 md:h-48 flex flex-col justify-start items-start space-y-2 md:space-y-3 shadow-sm hover:shadow-md hover:border-pink-200 transition-all"
              >
                <feature.icon size={18} className="text-pink-500 md:w-5 md:h-5" />
                <h3 className="text-sm md:text-base font-medium text-gray-900">{feature.title}</h3>
                <p className="text-xs md:text-sm text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SipsterSection />
      <ContactSection />
      <MinimalFooter />
    </>
  );
};

export { DemoOne };

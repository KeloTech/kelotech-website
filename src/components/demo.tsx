import { Scene } from "@/components/ui/hero-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Users, Lightbulb, Target } from "lucide-react";
import ArtAppSection from "./art-app-section";
import ChadAISection from "./chad-ai-section";
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
      {/* Hero Section */}
      <div className="min-h-svh w-full bg-gradient-to-br from-black to-gray-900 text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="w-full max-w-6xl space-y-12 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <Badge variant="secondary" className="backdrop-blur-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 px-4 py-2 rounded-full">
              📱 Apps That Actually Help You
            </Badge>
            
             <div className="space-y-6 flex items-center justify-center flex-col ">
               <SplitText
                 text="Mobile Apps That Solve Real Problems"
                 className="text-3xl md:text-6xl font-semibold tracking-tight max-w-4xl text-white"
                 delay={50}
                 animationFrom={{ opacity: 0, transform: 'translate3d(0, 30px, 0)' }}
                 animationTo={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
                 threshold={0.2}
                 textAlign="center"
               />
              <p className="text-lg text-gray-300 max-w-3xl">
                We build innovative mobile applications that solve real-world problems and genuinely improve people's lives. Our focus is on creating tools that are practical, helpful, and designed with your actual needs in mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button className="text-sm px-8 py-3 rounded-xl bg-white text-black border border-white/10 shadow-none hover:bg-white/90 transition-none">
                  Explore Our Apps
                </Button>
                <Button className="text-sm px-8 py-3 rounded-xl bg-transparent text-white border border-white/20 shadow-none hover:bg-white/10 transition-none">
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 h-40 md:h-48 flex flex-col justify-start items-start space-y-2 md:space-y-3"
              >
                <feature.icon size={18} className="text-white/80 md:w-5 md:h-5" />
                <h3 className="text-sm md:text-base font-medium">{feature.title}</h3>
                <p className="text-xs md:text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='absolute inset-0'>
          <Scene />
        </div>
      </div>

      {/* Art App Section */}
      <ArtAppSection />

      {/* Chad.AI Section */}
      <ChadAISection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <MinimalFooter />
    </>
  );
};

export { DemoOne };

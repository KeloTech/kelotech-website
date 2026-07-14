import IPhoneMockup from "@/components/ui/iphone-mockup";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Palette, Brush, Sparkles, Download } from "lucide-react";
import { SplitText } from "@/components/ui/split-text";

const ArtAppSection = () => {
  return (
    <section className="w-full bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <IPhoneMockup model="15-pro" color="silver" scale={0.7} screenBg="#f9fafb">
              <div className="w-full h-full bg-gradient-to-br from-gray-100 via-white to-gray-50 flex flex-col items-center justify-center p-6">
                <div className="text-center space-y-4">
                  <Palette className="w-16 h-16 text-pink-400 mx-auto mb-4" />
                  <h3 className="text-gray-900 text-xl font-bold">Art App</h3>
                  <p className="text-gray-500 text-sm">Create stunning digital art</p>
                  <div className="grid grid-cols-3 gap-2 mt-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-lg bg-pink-50 border border-pink-100" />
                    ))}
                  </div>
                  <div className="flex space-x-2 mt-4 justify-center">
                    <div className="w-8 h-8 rounded-full bg-pink-200" />
                    <div className="w-8 h-8 rounded-full bg-pink-300" />
                    <div className="w-8 h-8 rounded-full bg-pink-400" />
                    <div className="w-8 h-8 rounded-full bg-rose-500" />
                  </div>
                </div>
              </div>
            </IPhoneMockup>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <Badge className="bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-100 px-3 py-1 rounded-full mx-auto lg:mx-0 w-fit">
                  <Sparkles className="w-4 h-4 mr-2 inline" />
                  Coming Soon
                </Badge>
              </div>

              <SplitText
                text="Art App"
                className="text-4xl md:text-5xl font-bold leading-tight text-gray-900"
                delay={80}
                animationFrom={{ opacity: 0, transform: "translate3d(0, 40px, 0)" }}
                animationTo={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
                threshold={0.3}
                textAlign="center"
              />

              <p className="text-xl text-gray-600 leading-relaxed text-center lg:text-left">
                A global marketplace connecting amateur painters with art lovers worldwide. Discover unique, authentic artwork from talented emerging artists and make buying and selling art simple and accessible for everyone.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h3>
              <div className="grid gap-3">
                <div className="flex items-center space-x-3">
                  <Palette className="w-5 h-5 text-pink-400" />
                  <span className="text-gray-600">Global marketplace for amateur painters</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-5 h-5 text-pink-400" />
                  <span className="text-gray-600">Easy listing and selling tools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Brush className="w-5 h-5 text-pink-400" />
                  <span className="text-gray-600">Discover unique artwork from emerging artists</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Download className="w-5 h-5 text-pink-400" />
                  <span className="text-gray-600">Secure payments and worldwide shipping</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Button className="text-sm px-8 py-3 rounded-full bg-gray-200 text-gray-500 border-0 shadow-none cursor-not-allowed opacity-75" disabled>
                <Download className="w-4 h-4 mr-2" />
                Coming Soon
              </Button>
              <Button className="text-sm px-8 py-3 rounded-full bg-white text-gray-700 border border-gray-200 shadow-sm hover:bg-gray-50">
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtAppSection;

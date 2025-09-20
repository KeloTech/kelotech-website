import IPhoneMockup from "@/components/ui/iphone-mockup";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Palette, Brush, Sparkles, Download } from "lucide-react";
import { SplitText } from "@/components/ui/split-text";

const ArtAppSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left side - iPhone Mockup */}
          <div className="flex justify-center lg:justify-start">
            <IPhoneMockup 
              model="15-pro" 
              color="silver" 
              scale={0.7}
              screenBg="#000"
            >
              {/* Placeholder for Art App UI - will be replaced with actual image */}
              <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center p-6">
                <div className="text-center space-y-4">
                  <Palette className="w-16 h-16 text-white mx-auto mb-4" />
                  <h3 className="text-white text-xl font-bold">Art App</h3>
                  <p className="text-white/70 text-sm">Create stunning digital art</p>
                  
                  {/* Mock UI elements */}
                  <div className="grid grid-cols-3 gap-2 mt-6">
                    {[1,2,3,4,5,6].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"></div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2 mt-4">
                    <div className="w-8 h-8 rounded-full bg-gray-400"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-500"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-600"></div>
                    <div className="w-8 h-8 rounded-full bg-white"></div>
                  </div>
                </div>
              </div>
            </IPhoneMockup>
          </div>

           {/* Right side - Content */}
           <div className="space-y-8 text-white">
             <div className="space-y-6">
               <div className="text-center">
                 <Badge variant="secondary" className="backdrop-blur-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 px-3 py-1 rounded-full mx-auto w-fit">
                   <Sparkles className="w-4 h-4 mr-2" />
                   Featured App
                 </Badge>
               </div>
               
               <SplitText
                 text="Art App"
                 className="text-4xl md:text-5xl font-bold leading-tight text-white"
                 delay={80}
                 animationFrom={{ opacity: 0, transform: 'translate3d(0, 40px, 0)' }}
                 animationTo={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
                 threshold={0.3}
                 textAlign="center"
               />
               
               <p className="text-xl text-neutral-300 leading-relaxed">
                 A global marketplace connecting amateur painters with art lovers worldwide. Discover unique, authentic artwork from talented emerging artists and make buying and selling art simple and accessible for everyone.
               </p>
             </div>

             {/* Features */}
             <div className="space-y-4">
               <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
               <div className="grid gap-3">
                 <div className="flex items-center space-x-3">
                   <Palette className="w-5 h-5 text-gray-400" />
                   <span className="text-gray-300">Global marketplace for amateur painters</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <Sparkles className="w-5 h-5 text-gray-400" />
                   <span className="text-gray-300">Easy listing and selling tools</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <Brush className="w-5 h-5 text-gray-400" />
                   <span className="text-gray-300">Discover unique artwork from emerging artists</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <Download className="w-5 h-5 text-gray-400" />
                   <span className="text-gray-300">Secure payments and worldwide shipping</span>
                 </div>
               </div>
             </div>

             {/* CTA Buttons */}
             <div className="flex flex-col sm:flex-row gap-4 pt-4">
               <Button className="text-sm px-8 py-3 rounded-xl bg-gray-600 text-white border border-gray-500 shadow-none cursor-not-allowed opacity-75" disabled>
                 <Download className="w-4 h-4 mr-2" />
                 Coming Soon
               </Button>
               <Button className="text-sm px-8 py-3 rounded-xl bg-transparent text-white border border-white/20 shadow-none hover:bg-white/10 transition-none">
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

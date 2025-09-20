import IPhoneMockup from "@/components/ui/iphone-mockup";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Heart, Zap, Download, Sparkles, Users } from "lucide-react";
import { SplitText } from "@/components/ui/split-text";

const ChadAISection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-black to-gray-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
           {/* Left side - Content */}
           <div className="space-y-8 text-white order-2 lg:order-1">
             <div className="space-y-6">
               <div className="text-center">
                 <Badge variant="secondary" className="backdrop-blur-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 px-3 py-1 rounded-full mx-auto w-fit">
                   <Heart className="w-4 h-4 mr-2" />
                   AI Dating Assistant
                 </Badge>
               </div>
               
               <SplitText
                 text="Chad.AI"
                 className="text-4xl md:text-5xl font-bold leading-tight text-white"
                 delay={120}
                 animationFrom={{ opacity: 0, transform: 'translate3d(0, 40px, 0)' }}
                 animationTo={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
                 threshold={0.3}
                 textAlign="center"
               />
               
               <p className="text-xl text-neutral-300 leading-relaxed">
                 Your personal AI wingman that crafts smooth, confident replies in an instant. Simply upload a screenshot of your conversation, and Chad.AI analyzes tone and context to deliver the perfect response tailored to you.
               </p>
             </div>

             {/* Features */}
             <div className="space-y-4">
               <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
               <div className="grid gap-3">
                 <div className="flex items-center space-x-3">
                   <Zap className="w-5 h-5 text-gray-400" />
                   <span className="text-gray-300">Instant AI replies in seconds</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <Sparkles className="w-5 h-5 text-gray-400" />
                   <span className="text-gray-300">Context-aware responses that match your style</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <Users className="w-5 h-5 text-gray-400" />
                   <span className="text-gray-300">Works with Tinder, Hinge, Wizz, iMessage</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <MessageCircle className="w-5 h-5 text-gray-400" />
                   <span className="text-gray-300">Turn awkward pauses into witty comebacks</span>
                 </div>
               </div>
             </div>

             {/* CTA Buttons */}
             <div className="flex flex-col sm:flex-row gap-4 pt-4">
               <Button 
                 className="text-sm px-8 py-3 rounded-xl bg-white text-black border-0 shadow-none hover:bg-gray-200 transition-all"
                 onClick={() => window.open('https://apps.apple.com/fi/app/chad-ai/id6749139996', '_blank')}
               >
                 <Download className="w-4 h-4 mr-2" />
                 Download from App Store
               </Button>
               <Button className="text-sm px-8 py-3 rounded-xl bg-transparent text-white border border-white/20 shadow-none hover:bg-white/10 transition-none">
                 See How It Works
               </Button>
             </div>
          </div>

          {/* Right side - iPhone Mockup */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <IPhoneMockup 
              model="15-pro" 
              color="space-black" 
              scale={0.7}
              screenBg="#000"
            >
              {/* Placeholder for Chad.AI UI */}
              <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col p-4">
                
                {/* Mock Chat Interface */}
                <div className="flex-1 space-y-4 mt-8">
                  {/* Chat bubbles */}
                  <div className="space-y-3">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl rounded-br-md p-3 ml-8 border border-white/20">
                      <p className="text-white text-sm">Hey! How's your day going?</p>
                    </div>
                    
                    <div className="bg-gray-600/80 rounded-2xl rounded-bl-md p-3 mr-8">
                      <p className="text-white text-sm">Pretty good! Just finished work</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl rounded-br-md p-3 ml-8 border border-white/20">
                      <p className="text-white text-sm">What do you do for work?</p>
                    </div>
                  </div>
                  
                  {/* AI Suggestion Box */}
                  <div className="bg-gradient-to-r from-gray-700/20 to-gray-600/20 backdrop-blur-sm rounded-xl p-4 border border-gray-500/30 mx-2">
                    <div className="flex items-center space-x-2 mb-2">
                      <Sparkles className="w-4 h-4 text-gray-300" />
                      <span className="text-gray-300 text-xs font-medium">Chad.AI Suggests</span>
                    </div>
                    <p className="text-white text-sm leading-relaxed">
                      "I'm a software engineer! I love building apps that help people connect. What about you - what keeps you busy?"
                    </p>
                    <div className="flex space-x-2 mt-3">
                      <div className="bg-gray-600/30 rounded-full px-3 py-1">
                        <span className="text-white text-xs">Use This</span>
                      </div>
                      <div className="bg-white/10 rounded-full px-3 py-1">
                        <span className="text-white text-xs">More Options</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom app branding */}
                <div className="text-center py-2">
                  <div className="flex items-center justify-center space-x-2">
                    <Heart className="w-4 h-4 text-gray-400" />
                    <span className="text-white text-sm font-semibold">Chad.AI</span>
                  </div>
                </div>
              </div>
            </IPhoneMockup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChadAISection;

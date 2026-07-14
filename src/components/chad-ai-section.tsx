import IPhoneMockup from "@/components/ui/iphone-mockup";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Heart, Zap, Download, Sparkles, Users } from "lucide-react";
import { SplitText } from "@/components/ui/split-text";

const ChadAISection = () => {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <Badge className="bg-pink-100 text-pink-700 border border-pink-200 hover:bg-pink-100 px-3 py-1 rounded-full mx-auto lg:mx-0 w-fit">
                  <Heart className="w-4 h-4 mr-2 inline" />
                  AI Dating Assistant
                </Badge>
              </div>

              <SplitText
                text="Chad.AI"
                className="text-4xl md:text-5xl font-bold leading-tight text-gray-900"
                delay={120}
                animationFrom={{ opacity: 0, transform: "translate3d(0, 40px, 0)" }}
                animationTo={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
                threshold={0.3}
                textAlign="center"
              />

              <p className="text-xl text-gray-600 leading-relaxed text-center lg:text-left">
                Your personal AI wingman that crafts smooth, confident replies in an instant. Simply upload a screenshot of your conversation, and Chad.AI analyzes tone and context to deliver the perfect response tailored to you.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h3>
              <div className="grid gap-3">
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-pink-400" />
                  <span className="text-gray-600">Instant AI replies in seconds</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-5 h-5 text-pink-400" />
                  <span className="text-gray-600">Context-aware responses that match your style</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-pink-400" />
                  <span className="text-gray-600">Works with Tinder, Hinge, Wizz, iMessage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-pink-400" />
                  <span className="text-gray-600">Turn awkward pauses into witty comebacks</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Button
                className="text-sm px-8 py-3 rounded-full bg-gray-900 text-white border-0 shadow-lg hover:bg-gray-800"
                onClick={() => window.open("https://apps.apple.com/fi/app/chad-ai/id6749139996", "_blank")}
              >
                <Download className="w-4 h-4 mr-2" />
                Download from App Store
              </Button>
              <Button className="text-sm px-8 py-3 rounded-full bg-white text-gray-700 border border-gray-200 shadow-sm hover:bg-gray-50">
                See How It Works
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <IPhoneMockup model="15-pro" color="space-black" scale={0.7} screenBg="#111">
              <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col p-4">
                <div className="flex-1 space-y-4 mt-8">
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
                  <div className="bg-gradient-to-r from-pink-500/20 to-rose-500/20 backdrop-blur-sm rounded-xl p-4 border border-pink-400/30 mx-2">
                    <div className="flex items-center space-x-2 mb-2">
                      <Sparkles className="w-4 h-4 text-pink-300" />
                      <span className="text-pink-200 text-xs font-medium">Chad.AI Suggests</span>
                    </div>
                    <p className="text-white text-sm leading-relaxed">
                      "I'm a software engineer! I love building apps that help people connect. What about you - what keeps you busy?"
                    </p>
                  </div>
                </div>
                <div className="text-center py-2">
                  <div className="flex items-center justify-center space-x-2">
                    <Heart className="w-4 h-4 text-pink-400" />
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

import IPhoneMockup from "@/components/ui/iphone-mockup";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Sparkles, Users, Gamepad2 } from "lucide-react";
import { SplitText } from "@/components/ui/split-text";

const SipsterSection = () => {
  return (
    <section id="sipster" className="w-full bg-gradient-to-br from-pink-50 via-white to-rose-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-y border-pink-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <IPhoneMockup model="15-pro" color="silver" scale={0.7} screenBg="#fff5f8">
              <img
                src="/assets/sipster/showcase.png"
                alt="Sipster party game app on iPhone showing five game modes: Sipster cards, Party Mode, 18+ Spin the Bottle, Girls Night and Guys Night"
                className="w-full h-full object-cover object-top"
              />
            </IPhoneMockup>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <Badge className="bg-pink-100 text-pink-700 border border-pink-200 hover:bg-pink-100 px-3 py-1 rounded-full mx-auto lg:mx-0 w-fit">
                  <Sparkles className="w-4 h-4 mr-2 inline" />
                  Featured App · Ages 17+
                </Badge>
              </div>

              <SplitText
                text="Sipster"
                className="text-4xl md:text-5xl font-bold leading-tight text-gray-900"
                delay={80}
                animationFrom={{ opacity: 0, transform: "translate3d(0, 40px, 0)" }}
                animationTo={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
                threshold={0.3}
                textAlign="center"
              />

              <p className="text-xl text-gray-600 leading-relaxed text-center lg:text-left">
                The party game app for adults. Truth or dare, 18+ spin the bottle, never have I ever and drinking games for groups — all on one phone. No cards, no setup, up to 20 players.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Five game modes in one app:</h3>
              <div className="grid gap-3">
                <div className="flex items-center space-x-3">
                  <Gamepad2 className="w-5 h-5 text-pink-500 shrink-0" />
                  <span className="text-gray-600">Sipster cards, Party Mode &amp; 18+ Spin the Bottle</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-pink-500 shrink-0" />
                  <span className="text-gray-600">Girls Night &amp; Guys Night — up to 20 players</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Download className="w-5 h-5 text-pink-500 shrink-0" />
                  <span className="text-gray-600">Free download · play with or without alcohol</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Button
                className="text-sm px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 text-white border-0 shadow-lg shadow-pink-200 hover:from-pink-600 hover:to-rose-700"
                onClick={() => window.open("https://apps.apple.com/app/party-games-sipster/id6756325849", "_blank")}
              >
                <Download className="w-4 h-4 mr-2" />
                Download on App Store
              </Button>
              <Button
                asChild
                className="text-sm px-8 py-3 rounded-full bg-white text-pink-700 border border-pink-200 shadow-sm hover:bg-pink-50"
              >
                <a href="/apps/sipster/index.html">Explore Sipster</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SipsterSection;

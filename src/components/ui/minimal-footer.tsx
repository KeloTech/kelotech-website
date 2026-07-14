import { Smartphone } from "lucide-react";

export function MinimalFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-50 border-t border-pink-100">
      <div className="mx-auto max-w-6xl">
        <div className="grid max-w-6xl grid-cols-1 md:grid-cols-3 gap-6 p-8">
          <div className="col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Smartphone className="h-6 w-6 text-pink-500" />
              <span className="text-gray-900 text-xl font-semibold">KeloTech</span>
            </div>
            <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
              Building innovative mobile applications that solve real-world problems and genuinely improve people's lives.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-gray-900 font-medium mb-3">Contact</h3>
            <div className="flex flex-col gap-2 text-sm text-gray-500">
              <p>kelotechfi@gmail.com</p>
              <p>Espoo, Finland</p>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-gray-900 font-medium mb-3">Our Apps</h3>
            <div className="flex flex-col gap-2 text-sm text-gray-500">
              <a href="/apps/sipster/index.html" className="hover:text-pink-600 transition-colors">
                Sipster – Party Games
              </a>
              <a href="/apps/sipster/party-game-app.html" className="hover:text-pink-600 transition-colors">
                Sipster – Party Game App Guide
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-pink-100 w-full" />
        <div className="flex max-w-6xl justify-center py-6">
          <p className="text-gray-400 text-sm">© {year} KeloTech Group Oy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

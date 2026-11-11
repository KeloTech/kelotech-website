import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SplitText } from "@/components/ui/split-text";
import { Check, CheckCircle, AlertCircle, MailIcon, MapPinIcon, Globe, Menu, X } from "lucide-react";
import { FaApple, FaGooglePlay, FaAndroid, FaAppStoreIos } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/config/emailjs";
import { translations, type Lang, type Translation } from "@/i18n";

const CONTACT_EMAIL = "info@kelotech.dev";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Nav({ lang, setLang, t }: { lang: Lang; setLang: (l: Lang) => void; t: Translation }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (id: string) => {
    setMenuOpen(false);
    scrollTo(id);
  };

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 h-14">
        <a
          href="#"
          className="flex items-center gap-2"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src="/assets/kelotech/icon.png" alt="" className="h-7 w-7" width={28} height={28} />
          <span className="text-slate-900 font-semibold tracking-tight">Kelotech</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <button onClick={() => scrollTo("palvelut")} className="hover:text-slate-900 transition-colors">{t.nav.services}</button>
          <button onClick={() => scrollTo("prosessi")} className="hover:text-slate-900 transition-colors">{t.nav.process}</button>
          <button onClick={() => scrollTo("contact")} className="hover:text-slate-900 transition-colors">{t.nav.contact}</button>
        </nav>
        <div className="flex items-center gap-1 text-sm">
          <Globe className="h-4 w-4 text-slate-400 mr-1" />
          <button
            onClick={() => setLang("fi")}
            className={`px-2 py-1 rounded-md transition-colors ${lang === "fi" ? "bg-slate-900 text-white" : "text-slate-500 hover:text-slate-900"}`}
            aria-label="Suomeksi"
          >
            FI
          </button>
          <button
            onClick={() => setLang("en")}
            className={`px-2 py-1 rounded-md transition-colors ${lang === "en" ? "bg-slate-900 text-white" : "text-slate-500 hover:text-slate-900"}`}
            aria-label="In English"
          >
            EN
          </button>
          <button
            type="button"
            className="md:hidden ml-2 p-2 rounded-md text-slate-700 hover:bg-slate-100"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col gap-1 text-base text-slate-700">
            <button
              onClick={() => goTo("palvelut")}
              className="text-left px-3 py-3 rounded-lg hover:bg-slate-50"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => goTo("prosessi")}
              className="text-left px-3 py-3 rounded-lg hover:bg-slate-50"
            >
              {t.nav.process}
            </button>
            <button
              onClick={() => goTo("contact")}
              className="text-left px-3 py-3 rounded-lg hover:bg-slate-50"
            >
              {t.nav.contact}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero({ t }: { t: Translation }) {
  return (
    <section className="relative w-full bg-white text-slate-900 flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50/80 via-white to-slate-50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-100/60 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="w-full max-w-6xl relative z-10 flex flex-col items-center text-center space-y-8">
        <Badge className="bg-sky-50 text-sky-800 border border-sky-200 hover:bg-sky-50 px-4 py-2 rounded-full">
          {t.hero.badge}
        </Badge>

        <SplitText
          key={t.hero.title}
          text={t.hero.title}
          className="text-3xl md:text-6xl font-semibold tracking-tight max-w-4xl text-slate-900"
          delay={40}
          animationFrom={{ opacity: 0, transform: "translate3d(0, 30px, 0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
          threshold={0.2}
          textAlign="center"
        />
        <p className="text-lg text-slate-600 max-w-3xl">{t.hero.subtitle}</p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Button
            className="text-sm px-8 py-3 rounded-full bg-slate-900 text-white border-0 shadow-lg hover:bg-slate-800"
            onClick={() => scrollTo("contact")}
          >
            {t.hero.ctaPrimary}
          </Button>
          <Button
            className="text-sm px-8 py-3 rounded-full bg-white text-slate-700 border border-slate-200 shadow-sm hover:bg-slate-50"
            onClick={() => scrollTo("palvelut")}
          >
            {t.hero.ctaSecondary}
          </Button>
        </div>

        <div className="pt-10 flex flex-col items-center gap-4">
          <p className="text-xs uppercase tracking-widest text-slate-400">{t.hero.trustLine}</p>
          <div className="flex items-center gap-10 text-slate-500">
            <div className="flex flex-col items-center gap-2">
              <FaApple className="h-10 w-10 md:h-12 md:w-12" aria-hidden />
              <span className="text-xs">App Store</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FaGooglePlay className="h-9 w-9 md:h-11 md:w-11" aria-hidden />
              <span className="text-xs">Google Play</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FaAndroid className="h-10 w-10 md:h-12 md:w-12" aria-hidden />
              <span className="text-xs">Android</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm">
            <FaAppStoreIos className="h-4 w-4 text-sky-700" aria-hidden />
            {t.hero.appsOnStore}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  name, price, priceNote, description, features, highlighted,
}: {
  name: string; price: string; priceNote: string; description: string; features: string[]; highlighted?: boolean;
}) {
  return (
    <div className={`flex flex-col text-left rounded-2xl p-6 md:p-8 border shadow-sm transition-all hover:shadow-md ${highlighted ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-900 border-slate-200"}`}>
      <h3 className={`text-lg font-medium ${highlighted ? "text-white" : "text-slate-900"}`}>{name}</h3>
      <div className="mt-4 flex items-baseline gap-2">
        <span className={`font-semibold tracking-tight ${price.length > 12 ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl"}`}>{price}</span>
      </div>
      <p className={`mt-1 text-xs ${highlighted ? "text-slate-300" : "text-slate-500"}`}>{priceNote}</p>
      <p className={`mt-4 text-sm ${highlighted ? "text-slate-300" : "text-slate-600"}`}>{description}</p>
      <ul className="mt-6 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <Check className={`h-4 w-4 mt-0.5 shrink-0 ${highlighted ? "text-sky-400" : "text-sky-700"}`} aria-hidden />
            <span className={highlighted ? "text-slate-200" : "text-slate-600"}>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Services({ t }: { t: Translation }) {
  const s = t.services;
  return (
    <section id="palvelut" className="w-full bg-slate-50 border-t border-slate-200 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-slate-900">{s.title}</h2>
          <p className="mt-3 text-slate-600">{s.subtitle}</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard {...s.website} highlighted />
          <ServiceCard {...s.maintenance} />
          <ServiceCard {...s.apps} />
        </div>
      </div>
    </section>
  );
}

function Process({ t }: { t: Translation }) {
  return (
    <section id="prosessi" className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-slate-900 text-center">{t.process.title}</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.process.steps.map((step, i) => (
            <div key={step.title} className="relative bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-sky-50 border border-sky-200 text-sky-800 font-semibold">
                {i + 1}
              </div>
              <h3 className="mt-4 font-medium text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trust({ t }: { t: Translation }) {
  return (
    <section className="w-full bg-slate-50 border-t border-slate-200 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-slate-900 text-center">{t.trust.title}</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.trust.items.map((item) => (
            <div key={item.title} className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <h3 className="font-medium text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ t }: { t: Translation }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("idle");
    try {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: EMAILJS_CONFIG.TO_EMAIL,
      });
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  const c = t.contact;
  return (
    <section id="contact" className="w-full bg-white border-t border-slate-200 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div>
          <img
            src="/assets/kelotech/icon.png"
            alt="Kelotech"
            className="h-14 w-14 mb-5"
            width={56}
            height={56}
          />
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-slate-900">{c.title}</h2>
          <p className="mt-4 text-slate-600">{c.description}</p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center">
                <MailIcon className="h-4 w-4 text-sky-800" aria-hidden />
              </div>
              <div>
                <p className="text-xs text-slate-400">{c.emailLabel}</p>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-slate-900 hover:underline">{CONTACT_EMAIL}</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center">
                <MapPinIcon className="h-4 w-4 text-sky-800" aria-hidden />
              </div>
              <div>
                <p className="text-xs text-slate-400">{c.locationLabel}</p>
                <p className="text-slate-900">{c.location}</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="w-full space-y-4 bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
          <div className="flex flex-col gap-2">
            <Label className="text-slate-700">{c.name}</Label>
            <Input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder={c.namePlaceholder} className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400" required />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-slate-700">{c.email}</Label>
            <Input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder={c.emailPlaceholder} className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400" required />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-slate-700">{c.message}</Label>
            <Textarea name="message" value={formData.message} onChange={handleInputChange} placeholder={c.messagePlaceholder} className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 min-h-[120px]" required />
          </div>

          {status === "success" && (
            <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-md">
              <CheckCircle className="w-5 h-5 text-green-600" aria-hidden />
              <span className="text-green-800 text-sm">{c.success}</span>
            </div>
          )}
          {status === "error" && (
            <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-md">
              <AlertCircle className="w-5 h-5 text-red-600" aria-hidden />
              <span className="text-red-800 text-sm">{c.error}</span>
            </div>
          )}

          <Button className="w-full bg-slate-900 text-white hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded-full" type="submit" disabled={isLoading}>
            {isLoading ? c.sending : c.send}
          </Button>
        </form>
      </div>
    </section>
  );
}

function Footer({ t }: { t: Translation }) {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img src="/assets/kelotech/icon.png" alt="" className="h-7 w-7" width={28} height={28} aria-hidden />
              <span className="text-slate-900 text-xl font-semibold">Kelotech</span>
            </div>
            <p className="text-slate-500 max-w-sm text-sm leading-relaxed">{t.footer.tagline}</p>
          </div>
          <div>
            <h3 className="text-slate-900 font-medium mb-3">{t.footer.contactTitle}</h3>
            <div className="flex flex-col gap-2 text-sm text-slate-500">
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-slate-900 transition-colors">{CONTACT_EMAIL}</a>
              <p>{t.footer.companyLines[2]}</p>
            </div>
          </div>
          <div>
            <h3 className="text-slate-900 font-medium mb-3">{t.footer.companyTitle}</h3>
            <div className="flex flex-col gap-2 text-sm text-slate-500">
              {t.footer.companyLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 w-full" />
        <div className="flex max-w-6xl justify-center py-6">
          <p className="text-slate-400 text-sm">© {year} KeloTech Group Oy. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}

export default function Site() {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem("kelotech-lang");
      if (saved === "fi" || saved === "en") return saved;
    } catch { /* ignore */ }
    return "fi";
  });
  const t = translations[lang];

  useEffect(() => {
    try { localStorage.setItem("kelotech-lang", lang); } catch { /* ignore */ }
    document.documentElement.lang = lang;
    document.title = t.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t.metaDescription);
  }, [lang, t]);

  return (
    <>
      <Nav lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <Services t={t} />
      <Process t={t} />
      <Trust t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </>
  );
}

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('header')) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-primary shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <Image 
                src="/logo.png" 
                alt="Deen Remittance Logo" 
                width={32} 
                height={32}
                className="rounded-md"
              />
            </div>
            <div className="text-xl font-semibold text-white">দ্বীন রেমিট্যান্স</div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-[15px] text-white">
            <a href="#home" className="text-white hover:text-white/80 transition-colors duration-200 font-medium">হোম</a>
            <a href="#faq" className="text-white hover:text-white/80 transition-colors duration-200 font-medium">জিজ্ঞাসা</a>
            <a href="#about" className="text-white hover:text-white/80 transition-colors duration-200 font-medium">আমাদের সম্পর্কে</a>
            <a href="#contact" className="text-white hover:text-white/80 transition-colors duration-200 font-medium">যোগাযোগ</a>
            <a href="/app.apk" download="দ্বীন-রেমিট্যান্স.apk" className="inline-flex items-center gap-2 rounded-md bg-white text-primary px-4 py-2 font-medium transition-all duration-300 hover:bg-white/90">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={16} 
                height={16}
                className="rounded-sm bg-white p-1"
              />
              ডাউনলোড
            </a>
          </nav>
          <button 
            className="md:hidden p-2 text-white hover:text-white/80 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-primary/20 backdrop-blur-sm border-t border-white/20">
            <nav className="px-4 py-4 space-y-3">
              <a 
                href="#home" 
                className="block text-white hover:text-white/80 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                হোম
              </a>
              <a 
                href="#faq" 
                className="block text-white hover:text-white/80 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                জিজ্ঞাসা
              </a>
              <a 
                href="#about" 
                className="block text-white hover:text-white/80 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                আমাদের সম্পর্কে
              </a>
              <a 
                href="#contact" 
                className="block text-white hover:text-white/80 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                যোগাযোগ
              </a>
              <a 
                href="/app.apk" 
                download="দ্বীন-রেমিট্যান্স.apk"
                className="inline-flex items-center gap-2 rounded-md bg-white text-primary px-4 py-2 font-medium transition-all duration-300 hover:bg-white/90 mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Image 
                  src="/logo.png" 
                  alt="Logo" 
                  width={16} 
                  height={16}
                  className="rounded-sm bg-white p-1"
                />
                ডাউনলোড
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main id="home" className="flex-1">
        {/* Hero */}
        <section className="bg-white relative overflow-hidden" style={{
          backgroundImage: 'url(/logo.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}>
          <div className="absolute inset-0 bg-white/80"></div>
          
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
            <div className="order-1 md:order-2">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight text-primary">
                টাকা পাঠান বাংলাদেশে সেকেন্ডে
              </h1>
              <p className="mt-4 text-slate-600 text-lg">
                দ্রুত, নিরাপদ এবং সাশ্রয়ী আন্তর্জাতিক রেমিট্যান্স সেবা। কয়েকটি ক্লিকেই বিশ্বের যেকোনো প্রান্ত থেকে বাংলাদেশে আপনার প্রিয়জনদের কাছে টাকা পাঠান।
              </p>
              <div className="mt-8 flex items-center gap-4" id="download">
                <a
                  href="/app.apk"
                  download="দ্বীন-রেমিট্যান্স.apk"
                  className="inline-flex items-center gap-2 rounded-md bg-primary text-white px-6 py-3 font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  <Image 
                    src="/logo.png" 
                    alt="Logo" 
                    width={20} 
                    height={20}
                    className="rounded-sm bg-white p-1"
                  />
                  ডাউনলোড করুন
                </a>
                <span className="text-slate-600">দ্বীন রেমিট্যান্স অ্যাপ</span>
              </div>
            </div>
            <div className="block order-2 md:order-1">
              <div className="relative overflow-hidden rounded-2xl">
                <Image 
                  src="/mockuper.png" 
                  alt="Deen Remittance App Mockup" 
                  width={600} 
                  height={500}
                  className="w-full h-auto object-contain max-h-80 md:max-h-none"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="bg-gradient-to-br from-slate-50 to-slate-100 border-t border-b border-slate-200 relative overflow-hidden">
          
          <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 relative z-10">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-4">
              কেন আমাদের বেছে নেবেন
            </h2>
            <p className="text-center mt-2 text-slate-600">রেমিট্যান্স প্রেরণে সেরা অ্যাপ</p>
            <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-primary p-6 hover:bg-primary/80 transition-all duration-300" style={{backgroundColor: '#1E3C48'}}>
                <div className="text-3xl text-white">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.18V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
                  </svg>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-white">বেশি এক্সচেঞ্জ রেট</h3>
                <p className="mt-2 text-white/80">
                  প্রতিযোগিতামূলক এবং স্বচ্ছ রেট, কোনো গোপন ফি নেই
                </p>
              </div>
              <div className="rounded-xl border border-primary p-6 hover:bg-primary/80 transition-all duration-300" style={{backgroundColor: '#1E3C48'}}>
                <div className="text-3xl text-white">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-white">অটো সার্ভার</h3>
                <p className="mt-2 text-white/80">
                  ঘন্টার পর ঘন্টা নয়, সেকেন্ডেই টাকা পৌঁছে যায়
                </p>
              </div>
              <div className="rounded-xl border border-primary p-6 hover:bg-primary/80 transition-all duration-300" style={{backgroundColor: '#1E3C48'}}>
                <div className="text-3xl text-white">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,16.6 15.6,17 15,17H9C8.4,17 8,16.6 8,16V13C8,12.4 8.4,11.5 9,11.5V10C9,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.2,9.2 10.2,10V11.5H13.8V10C13.8,9.2 12.8,8.2 12,8.2Z"/>
                  </svg>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-white">নিরাপদ ও নির্ভরযোগ্য</h3>
                <p className="mt-2 text-white/80">
                  সেলফিন রেমিট আপনার লেনদেন কে নিরাপদ ও রাখতে সর্বদা সচেষ্ট
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reseller steps */}
        <section className="bg-gradient-to-br from-white to-slate-50 relative overflow-hidden" id="about">
          
          <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 relative z-10">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-4">
              কিভাবে রিসেলার হবেন
            </h2>
            <p className="text-center mt-2 text-slate-600">তিনটি সহজ ধাপে রিসেলার হোন</p>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-primary p-6 hover:bg-primary/80 transition-all duration-300" style={{backgroundColor: '#1E3C48'}}>
                <div className="text-2xl font-bold text-white">১</div>
                <h3 className="mt-3 text-xl font-semibold text-white">অ্যাকাউন্ট খুলুন</h3>
                <p className="mt-2 text-white/80">
                  মাত্র কয়েক মিনিটে আপনার ফোন নাম্বার দিয়ে সাইন আপ করুন
                </p>
              </div>
              <div className="rounded-xl border border-primary p-6 hover:bg-primary/80 transition-all duration-300" style={{backgroundColor: '#1E3C48'}}>
                <div className="text-2xl font-bold text-white">২</div>
                <h3 className="mt-3 text-xl font-semibold text-white">তথ্য ভেরিফাই করুন</h3>
                <p className="mt-2 text-white/80">
                  আপনার দেওয়া তথ্য ও ছবি ভেরিফাই করুন
                </p>
              </div>
              <div className="rounded-xl border border-primary p-6 hover:bg-primary/80 transition-all duration-300" style={{backgroundColor: '#1E3C48'}}>
                <div className="text-2xl font-bold text-white">৩</div>
                <h3 className="mt-3 text-xl font-semibold text-white">রেমিট্যান্স এক্সচেঞ্জ করুন</h3>
                <p className="mt-2 text-white/80">
                  পেমেন্ট পদ্ধতি বেছে নিয়ে ডিপোজিট করুন
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-slate-50 to-slate-100 border-t border-b border-slate-200 relative overflow-hidden" id="contact">
          
          <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">শুরু করতে প্রস্তুত?</h2>
            <p className="mt-2 text-slate-600">হাজারো সন্তুষ্ট রিসেলারের সাথে যোগ দিন</p>
            <a
              href="/app.apk"
              download="দ্বীন-রেমিট্যান্স.apk"
              className="inline-flex items-center gap-2 rounded-md bg-primary text-white px-6 py-3 font-semibold mt-6 transition-all duration-300 hover:shadow-lg"
            >
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={20} 
                height={20}
                className="rounded-sm bg-white p-1"
              />
              ডাউনলোড করুন
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <Image 
                  src="/logo.png" 
                  alt="Deen Remittance Logo" 
                  width={28} 
                  height={28}
                  className="rounded-md"
                />
              </div>
              <div className="text-lg font-semibold text-slate-900">দ্বীন রেমিট্যান্স</div>
            </div>
            <p className="mt-3 text-slate-600">দ্রুত এবং নিরাপদ রেমিট্যান্স এক্সচেঞ্জ সার্ভিস।</p>
          </div>
          <div>
            <div className="font-semibold text-slate-900">মেনু</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="#home" className="hover:text-primary transition-colors duration-200">হোম</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors duration-200">জিজ্ঞাসা</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors duration-200">আমাদের সম্পর্কে</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900">যোগাযোগ</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="#contact" className="hover:text-primary transition-colors duration-200">যোগাযোগ করুন</a></li>
              <li><a href="#download" className="hover:text-primary transition-colors duration-200">ডাউনলোড</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900">আইনি</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="#privacy" className="hover:text-primary transition-colors duration-200">গোপনীয়তা নীতি</a></li>
              <li><a href="#terms" className="hover:text-primary transition-colors duration-200">সেবার শর্তাবলী</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-600">© 2025 দ্বীন রেমিট্যান্স। সকল অধিকার সংরক্ষিত।</div>
        </div>
      </footer>
    </div>
  );
}

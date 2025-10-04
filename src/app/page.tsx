'use client';

import { UseCaseChannels } from '@/components/UseCaseChannels';
import { IndustriesSection } from '@/components/IndustriesSection';
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { useScrollFadeIn } from '@/lib/useScrollFadeIn';

export default function Home() {
  const heroRef = useScrollFadeIn({ threshold: 0.2 });
  const useCaseRef = useScrollFadeIn({ threshold: 0.1 });
  const industriesRef = useScrollFadeIn({ threshold: 0.1 });

  return (
    <>
      {/* Hero Section */}
      <section 
        ref={heroRef.ref}
        className={`bg-neutral-100/70 py-8 transition-all duration-1500 ease-out ${
          heroRef.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl md:text-5xl font-bold text-neutral-900 mb-6">
              Your <span className="font-extrabold">Success</span>, Our   <PointerHighlight
           
            containerClassName="inline-block mx-1"
          >  <span className="font-extrabold">Promise</span></PointerHighlight>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Strategic tech partnership for C-level executives who envision transformative solutions. 
              We turn your data and AI ambitions into execution excellence.
            </p>
          </div>
        </div>
        <div 
          ref={useCaseRef.ref}
          className={`min-h-full py-12 transition-all duration-1500 ease-out delay-500 ${
            useCaseRef.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-16'
          }`}
        >
          <UseCaseChannels />
        </div>
      </section>

      <div 
        ref={industriesRef.ref}
        className={`pb-16 bg-indigo-50/30 transition-all duration-1500 ease-out delay-700 ${
          industriesRef.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-16'
        }`}
      >
        <IndustriesSection />
      </div>
    </>
  );
}
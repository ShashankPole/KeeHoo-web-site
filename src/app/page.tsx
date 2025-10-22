"use client";

import { UseCaseChannels } from "@/components/UseCaseChannels";
import { IndustriesSection } from "@/components/IndustriesSection";
import { StatisticsSection } from "@/components/StatisticsSection";
import { CallToActionSection } from "@/components/CallToActionSection";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { useScrollFadeIn } from "@/lib/useScrollFadeIn";
import { InteractiveChat } from "@/components/interactive-chat";

export default function Home() {
  const heroRef = useScrollFadeIn({ threshold: 0.2 });
  const useCaseRef = useScrollFadeIn({ threshold: 0.1 });
  const industriesRef = useScrollFadeIn({ threshold: 0.1 });
  const ctaRef = useScrollFadeIn({ threshold: 0.1 });

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef.ref}
        className={`bg-gradient-to-b from-[#ffffff] to-[#F3F2F1] py-12 transition-all duration-1500 ease-out ${
          heroRef.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-16"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl md:text-6xl font-extrabold text-neutral-900 mb-6">
              <span className="font-extrabold bg-gradient-to-r from-primary-700 to-blue-600  bg-clip-text text-transparent">
                Your Success, Our
              </span>{" "}
              <PointerHighlight containerClassName="inline-block mx-1">
                {" "}
                <span className="font-extrabold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  Promise.
                </span>
              </PointerHighlight>
            </h1>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              We revolutionize business performance by harnessing enterprise
              data, deploying intelligent automation, and scaling AI
              capabilities — creating unstoppable competitive momentum
            </p>
          </div>
        </div>
        <div
          ref={useCaseRef.ref}
          className={`min-h-full pt-12 transition-all duration-1500 ease-out delay-500 ${
            useCaseRef.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-16"
          }`}
        >
          <InteractiveChat />
        </div>
      </section>

      <div
        className={` transition-all duration-1500 ease-out delay-700 
          `}
      >
        <IndustriesSection />
      </div>
      <div
        className={` bg-indigo-50/30 transition-all duration-1500 ease-out delay-700 
       `}
      >
        <StatisticsSection />
      </div>
    </>
  );
}

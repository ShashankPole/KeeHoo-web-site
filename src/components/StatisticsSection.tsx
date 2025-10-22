"use client"

import React from "react"
import { useScrollFadeIn } from "@/lib/useScrollFadeIn"

type StatCardStat = {
  id: string
  type: "stat"
  value: string
  label: string
  variant: "blue" | "dark-blue" | "gray"
}

type StatCardTestimonial = {
  id: string
  type: "testimonial"
  quote: string
  author: {
    name: string
    position: string
  }
  variant: "blue" | "dark-blue" | "gray"
}

type StatCard = StatCardStat | StatCardTestimonial

const statCards: StatCard[] = [
  {
    id: "stat-1",
    type: "stat",
    value: "85%",
    label: "Risk reduction",
    variant: "blue"
  },
  {
    id: "testimonial-1",
    type: "testimonial",
    quote: "Continuous streaming analytics converts live events into actionable signals—powering alerts, adaptive routing, and instant business decisions.",
    author: {
      name: "John Doe",
      position: "CEO, Company"
    },
    variant: "dark-blue"
  },
  {
    id: "stat-2",
    type: "stat",
    value: "72%",
    label: "Automation maturity",
    variant: "gray"
  },
  {
    id: "stat-3",
    type: "stat",
    value: "94%",
    label: "Orchestration accuracy",
    variant: "gray"
  },
  {
    id: "testimonial-2",
    type: "testimonial",
    quote: "Unified orchestration layer automates data flow across systems, ensuring clean, consistent, and timely delivery from source to insight—without manual handoffs.",
    author: {
      name: "Jane Smith",
      position: "CTO, Company"
    },
    variant: "blue"
  },
  {
    id: "testimonial-3",
    type: "testimonial",
    quote: "Autonomous agents orchestrate end-to-end workflows—triggering actions, resolving exceptions, and closing loops—so human teams only handle edge cases.",
    author: {
      name: "Mike Johnson",
      position: "VP Engineering, Company"
    },
    variant: "gray"
  }
]

export function StatisticsSection() {
  const fadeRef = useScrollFadeIn({ threshold: 0.1 })

  const getCardStyles = (variant: string) => {
    switch (variant) {
      case "blue":
        return "bg-blue-500 text-white"
      case "dark-blue":
        return "bg-primary-600 text-white"
      case "gray":
        return "bg-gray-100 text-gray-900"
      default:
        return "bg-gray-100 text-gray-900"
    }
  }

  return (
    <section 
      ref={fadeRef.ref}
      className={`py-16 bg-white transition-all duration-1500 ease-out ${
        fadeRef.isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-16'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-12 w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Successful companies use Keehoo solutions and products.
          </h2>
        </div>

        {/* Cards Grid with exact percentage widths from screenshot */}
        <div className="max-w-5xl mx-auto">
          {/* Row 1 */}
          <div className="flex gap-5 mb-5">
            <div
              className="rounded-xl p-6 transition-all duration-500 h-60 bg-blue-500 text-white"
              style={{ 
                width: '33%',
                transitionDelay: '0ms',
                opacity: fadeRef.isVisible ? 1 : 0,
                transform: fadeRef.isVisible ? 'translateY(0)' : 'translateY(32px)'
              }}
            >
              <div className="text-center h-full flex flex-col justify-center">
                <div className="text-4xl md:text-7xl font-bold mb-2">85%</div>
                <div className="text-sm md:text-base font-medium opacity-90">Risk reduction</div>
              </div>
            </div>
            
            <div
              className="rounded-xl p-6 transition-all duration-500 h-60 bg-primary-600 text-white"
              style={{ 
                width: '45%',
                transitionDelay: '100ms',
                opacity: fadeRef.isVisible ? 1 : 0,
                transform: fadeRef.isVisible ? 'translateY(0)' : 'translateY(32px)'
              }}
            >
              <div className="space-y-4 p-6">
                <blockquote className="text-sm md:text-base leading-relaxed  ">
                  &ldquo;Continuous streaming analytics converts live events into actionable signals—powering alerts, adaptive routing, and instant business decisions.&rdquo;
                </blockquote>
                <div className="flex items-center space-x-3 ">
                  <div className="w-8 h-8 rounded-full bg-white/80"></div>
                  <div className="flex-1 ">
                    <div className="h-2.5 w-36 mb-2 rounded-2xl bg-primary-900"></div>
                    <div className="h-1.5 w-20 rounded-2xl bg-white/20"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div
              className="rounded-xl p-6 transition-all duration-500 h-60 bg-[#DAE8F4] text-neutral-700"
              style={{ 
                width: '25%',
                transitionDelay: '200ms',
                opacity: fadeRef.isVisible ? 1 : 0,
                transform: fadeRef.isVisible ? 'translateY(0)' : 'translateY(32px)'
              }}
            >
              <div className="text-center h-full flex flex-col justify-center">
                <div className="text-4xl md:text-7xl font-bold mb-2">72%</div>
                <div className="text-sm md:text-base font-medium opacity-90">Automation maturity</div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex gap-5">
            <div
              className="rounded-xl p-6 transition-all duration-500 h-60 bg-[#DAE8F4] text-neutral-700"
              style={{ 
                width: '25%',
                transitionDelay: '300ms',
                opacity: fadeRef.isVisible ? 1 : 0,
                transform: fadeRef.isVisible ? 'translateY(0)' : 'translateY(32px)'
              }}
            >
              <div className="text-center h-full flex flex-col justify-center">
                <div className="text-4xl md:text-7xl font-bold mb-2">94%</div>
                <div className="text-sm md:text-base font-medium opacity-90">Orchestration accuracy</div>
              </div>
            </div>
            
            <div
              className="rounded-xl p-6 transition-all duration-500 h-60 bg-blue-500 text-white"
              style={{ 
                width: '40%',
                transitionDelay: '400ms',
                opacity: fadeRef.isVisible ? 1 : 0,
                transform: fadeRef.isVisible ? 'translateY(0)' : 'translateY(32px)'
              }}
            >
              <div className="space-y-4">
                <blockquote className="text-sm md:text-base leading-relaxed">
                  &ldquo;Unified orchestration layer automates data flow across systems, ensuring clean, consistent, and timely delivery from source to insight—without manual handoffs.&rdquo;
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-white/70"></div>
                  <div className="flex-1 ">
                    <div className="h-2.5 w-36 mb-2 rounded-2xl bg-amber-950/60"></div>
                    <div className="h-1.5 w-20 rounded-2xl bg-amber-950/40"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div
              className="rounded-xl p-6 transition-all duration-500 h-60 bg-gray-100 text-gray-900"
              style={{ 
                width: '50%',
                transitionDelay: '500ms',
                opacity: fadeRef.isVisible ? 1 : 0,
                transform: fadeRef.isVisible ? 'translateY(0)' : 'translateY(32px)'
              }}
            >
              <div className="space-y-4 px-4">
                <blockquote className="text-sm md:text-base leading-relaxed">
                  &ldquo;Autonomous agents orchestrate end-to-end workflows—triggering actions, resolving exceptions, and closing loops—so human teams only handle edge cases.&rdquo;
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gray-600/70"></div>
                  <div className="flex-1 ">
                    <div className="h-2.5 w-36 mb-2 rounded-2xl bg-gray-600/70"></div>
                    <div className="h-1.5 w-20 rounded-2xl bg-gray-600/40"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatisticsSection

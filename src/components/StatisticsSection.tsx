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
    value: "60%",
    label: "Lorem Ipsem Dolor",
    variant: "blue"
  },
  {
    id: "testimonial-1",
    type: "testimonial",
    quote: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.",
    author: {
      name: "John Doe",
      position: "CEO, Company"
    },
    variant: "dark-blue"
  },
  {
    id: "stat-2",
    type: "stat",
    value: "45%",
    label: "Lorem Ipsem Dolor",
    variant: "gray"
  },
  {
    id: "stat-3",
    type: "stat",
    value: "35%",
    label: "Lorem Ipsem Dolor",
    variant: "gray"
  },
  {
    id: "stat-4",
    type: "stat",
    value: "$23M+",
    label: "Lorem Ipsem Dolor",
    variant: "blue"
  },
  {
    id: "testimonial-2",
    type: "testimonial",
    quote: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.",
    author: {
      name: "Jane Smith",
      position: "CTO, Company"
    },
    variant: "gray"
  }
]

export function StatisticsSection() {
  const fadeRef = useScrollFadeIn({ threshold: 0.1 })

  const getCardStyles = (variant: string) => {
    switch (variant) {
      case "blue":
        return "bg-primary-600 text-white"
      case "dark-blue":
        return "bg-primary-800 text-white"
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Successful companies use{" "}
            <span className="text-gray-900 font-black">Keehoo</span>{" "}
            solutions and{" "}
            <span className="text-gray-900 font-black">products</span>.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {statCards.map((card, index) => (
            <div
              key={card.id}
              className={`rounded-xl p-6 transition-all duration-500 ${
                fadeRef.isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              } ${getCardStyles(card.variant)}`}
              style={{ 
                transitionDelay: `${index * 100}ms` 
              }}
            >
              {card.type === "stat" ? (
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {card.value}
                  </div>
                  <div className="text-sm md:text-base font-medium opacity-90">
                    {card.label}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <blockquote className="text-sm md:text-base leading-relaxed">
                    "{card.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full ${
                      card.variant === "gray" ? "bg-gray-300" : "bg-white/20"
                    }`}></div>
                    <div className="flex-1">
                      <div className={`h-2 w-16 mb-1 ${
                        card.variant === "gray" ? "bg-gray-300" : "bg-white/20"
                      }`}></div>
                      <div className={`h-1 w-12 ${
                        card.variant === "gray" ? "bg-gray-300" : "bg-white/20"
                      }`}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatisticsSection

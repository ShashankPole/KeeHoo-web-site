"use client"

import React, { useState } from "react"
import { Building2, Heart, ShoppingCart, Laptop, Factory, Tv } from "lucide-react"

type Industry = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  bgColor: string
  stats?: string
}

const industries: Industry[] = [
  {
    id: "finance",
    title: "Finance: Transform Banking Operations",
    description: "AI-powered analytics, risk management, and automated compliance solutions for banking and fintech. Real-time fraud detection with 99.7% accuracy.",
    icon: <Building2 className="h-8 w-8" />,
    bgColor: "bg-purple-600",
    stats: "99.7% accuracy"
  },
  {
    id: "healthcare",
    title: "Healthcare: Revolutionize Patient Care",
    description: "Intelligent data platforms, predictive diagnostics, and streamlined workflows. Enable faster diagnosis and personalized treatment plans.",
    icon: <Heart className="h-8 w-8" />,
    bgColor: "bg-gradient-to-r from-teal-500 to-blue-600",
    stats: "Faster diagnosis"
  },
  {
    id: "retail",
    title: "Retail: Optimize Customer Experience",
    description: "Demand forecasting, personalized experiences, and real-time inventory management. Increase sales by 34% with predictive analytics.",
    icon: <ShoppingCart className="h-8 w-8" />,
    bgColor: "bg-gradient-to-r from-pink-500 to-purple-600",
    stats: "34% sales increase"
  },
  {
    id: "technology",
    title: "Technology: Accelerate Innovation",
    description: "Scalable data infrastructure, ML platforms, and enterprise-grade AI solutions. Deploy faster with cloud-native architecture.",
    icon: <Laptop className="h-8 w-8" />,
    bgColor: "bg-green-600",
    stats: "Cloud-native"
  },
  {
    id: "manufacturing",
    title: "Manufacturing: Drive Excellence",
    description: "IoT integration, predictive maintenance, and smart factory automation. Reduce downtime by 45% with intelligent monitoring.",
    icon: <Factory className="h-8 w-8" />,
    bgColor: "bg-gradient-to-r from-orange-500 to-red-600",
    stats: "45% downtime reduction"
  },
  {
    id: "media",
    title: "Media: Enhance Content Delivery",
    description: "Recommendation engines, audience analytics, and automated content management. Boost engagement by 58% with personalization.",
    icon: <Tv className="h-8 w-8" />,
    bgColor: "bg-gradient-to-r from-blue-500 to-purple-600",
    stats: "58% engagement boost"
  }
]

export function IndustriesSection() {
  const [activeTab, setActiveTab] = useState("industries")

  const tabs = [
    { id: "industries", label: "Industries" },
    { id: "solutions", label: "Solutions" },
    { id: "products", label: "Products & Services" }
  ]

  return (
    <section className="py-4  border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex space-x-8 mb-12 ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-lg font-medium pb-2 border-b-2 tracking-wider transition-colors ${
                activeTab === tab.id
                  ? "text-secondary-600 border-secondary-600"
                  : "text-gray-500 border-transparent hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content based on active tab */}
        {activeTab === "industries" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 py-2">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="bg-white rounded-2xl border border-neutral-200 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                  {/* Header with image */}
                  <div className="relative p-6 m-2 rounded-2xl h-36 overflow-hidden">
                    <img
                      src={`/images/${industry.id}-bg.png`}
                      alt={industry.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    
                  </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-wider">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {industry.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    Learn more
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "solutions" && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Solutions Coming Soon</h3>
            <p className="text-gray-600">We're working on comprehensive solutions for your business needs.</p>
          </div>
        )}

        {activeTab === "products" && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Products & Services Coming Soon</h3>
            <p className="text-gray-600">Explore our full range of products and services.</p>
          </div>
        )}
      </div>
    </section>
  )
}

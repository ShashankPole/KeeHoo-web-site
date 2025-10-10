"use client"

import React from "react"
import { ChevronRight } from "lucide-react"

type Industry = {
  id: string
  title: string
  description: string
  imageSrc: string
  buttonText: string
}

const industries: Industry[] = [
  {
    id: "retail",
    title: "Retail",
    description:
      "Transform your retail operations with AI-powered inventory management, personalized customer experiences, and omnichannel solutions that drive sales and customer loyalty",
    imageSrc: "/images/retail-bg.png",
    buttonText: "Explore Retail",
  },
  {
    id: "ecommerce",
    title: "Ecommerce",
    description:
      "Scale your online business with advanced analytics, automated marketing campaigns, and seamless payment integrations that boost conversion rates.",
    imageSrc: "/images/media-bg.png",
    buttonText: "Explore",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description:
      "Transform your retail operations with AI-powered inventory management, personalized customer experiences, and omnichannel solutions that drive sales and customer loyalty",
    imageSrc: "/images/manufacturing-bg.png",
    buttonText: "Explore",
  },
]

export function IndustriesPanel() {
  return (
    <section id="industries" className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        <div className="text-start mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Discover what's happening on Azure
          </h2>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full p-3 ">
                <img
                  src={industry.imageSrc}
                  alt={industry.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {industry.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {industry.description}
                </p>
                <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                  {industry.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

      
        <div className="mt-12 flex items-center text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">
           <div className="w-7 h-7 mr-4 bg-gray-800 rounded-2xl flex items-center justify-center">
           <ChevronRight className="w-5 h-5 text-white" />
           </div>
          <span className="font-medium text-neutral-700">See all sectors..</span>
        </div>
        
      </div>
    </section>
  )
}

export default IndustriesPanel
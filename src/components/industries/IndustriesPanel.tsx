"use client"

import React from "react"
import { ChevronRight } from "lucide-react"
import { useScrollFadeIn } from "@/lib/useScrollFadeIn"

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
    buttonText: "Know More",
  },
  {
    id: "ecommerce",
    title: "Ecommerce",
    description:
      "Scale your online business with advanced analytics, automated marketing campaigns, and seamless payment integrations that boost conversion rates.",
    imageSrc: "/images/ecommerce-bg.png",
    buttonText: "Know More ",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description:
      "Transform your retail operations with AI-powered inventory management, personalized customer experiences, and omnichannel solutions that drive sales and customer loyalty",
    imageSrc: "/images/manufacturing-bg.png",
    buttonText: "Know More ",
  },
]

export function IndustriesPanel() {
  const fadeRef = useScrollFadeIn({ threshold: 0.1 })
  return (
    <section ref={fadeRef.ref} id="industries" className={`py-10 ${
      fadeRef.isVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-16'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
        <div className=" mb-12 text-center ">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 w-2xl text-center mx-auto">
          Discover what&apos;s happening on Azure
          </h2>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              className={`bg-white rounded-xl shadow-md overflow-hidden border-2 border-gray-100 hover:shadow-xl transition-all duration-500 ${
                fadeRef.isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms` 
              }}
            >
              <div className="relative h-48 w-full p-3">
                <img
                  src={industry.imageSrc}
                  alt={industry.title}
                  className="w-full h-full object-cover object-center rounded-lg"
                />
              </div>
              <div className="p-4 flex flex-col gap-2 items-start justify-between h-56">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {industry.title}
                </h3>
                <p className="text-gray-800 text-sm mb-6 leading-relaxed">
                  {industry.description}
                </p>
                <button className="text-black transition-colors text-sm font-semibold hover:text-primary-600">
                  {industry.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

      <div className=" flex justify-center">
        <div className="mt-12 px-3 py-2 bg-primary-700 w-24 text-center rounded-xl  cursor-pointer">
          
          <span className="font-normal text-white ">See More</span>
        </div>
        </div>
      </div>
    </section>
  )
}

export default IndustriesPanel
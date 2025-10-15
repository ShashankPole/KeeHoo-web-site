"use client"

import React, { useState } from "react"
import { useScrollFadeIn } from "@/lib/useScrollFadeIn"
import { ProductsPanel } from "@/components/industries/ProductsPanel"
import { IndustriesPanel } from "@/components/industries/IndustriesPanel"
import { SolutionsPanel } from "@/components/industries/SolutionsPanel"

export function IndustriesSection() {
  const [activeTab, setActiveTab] = useState("industries")
  const fadeRef = useScrollFadeIn({ threshold: 0.1 })

  const tabs = [
    { id: "industries", label: "Industries" },
    { id: "products", label: "Products" },
    { id: "solutions", label: "Solutions" }
  ]

  const filters = [
    { id: "industries", label: "Industries" },
    { id: "solutions", label: "Solutions" },
    { id: "products", label: "Products" }
  ]

  return (
    <section 
      ref={fadeRef.ref}
      className={` bg-[#F9FAFB] transition-all duration-1500 ease-out ${
        fadeRef.isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-16'
      }`}
    >
      <div className="border-b border-gray-200 bg-white  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center  h-12 ">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id)
                  const el = document.getElementById(tab.id)
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className={`text-lg font-semibold pb-2 h-12 border-b-2 transition-colors ${
                  activeTab === tab.id ? "text-gray-900 border-gray-900 font-bold" : "text-gray-500 border-transparent hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <button className="bg-gray-900 text-sm text-white px-3 py-1.5 rounded-lg font-medium hover:bg-gray-800 transition-colors">Request Demo</button>
        </div>
      </div>


      
      <div className="max-w-7xl mx-auto">
        <div id="industries" className="scroll-mt-24">
          <IndustriesPanel />
        </div>
      </div>
      


      {/* Products section */}
      <div className="max-w-7xl mx-auto ">
        <div id="products" className="scroll-mt-24">
          <ProductsPanel />
        </div>
      </div>

      {/* Full-width white band for Solutions */}
      <div className="bg-white py-2 my-8">
        <div className="max-w-7xl mx-auto">
          {/* SolutionsPanel already contains id="solutions" for scrolling */}
          <SolutionsPanel />
        </div>
      </div>

    </section>
  )
}
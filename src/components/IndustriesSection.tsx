"use client"

import React, { useState } from "react"
import { useScrollFadeIn } from "@/lib/useScrollFadeIn"
import { ProductsPanel } from "@/components/industries/ProductsPanel"
import { IndustriesPanel } from "@/components/industries/IndustriesPanel"
import { SolutionsPanel } from "@/components/industries/SolutionsPanel"
import { ArrowRight } from "lucide-react"
export function IndustriesSection() {
  const [activeTab, setActiveTab] = useState("industries")
  const fadeRef = useScrollFadeIn({ threshold: 0.1 })

  const tabs = [
    { id: "industries", label: "Industries" },
    { id: "solutions", label: "Solutions" },
    { id: "products", label: "Products" },
  ]

  const filters = [
    { id: "industries", label: "Industries" },
    { id: "products", label: "Products" },
    { id: "solutions", label: "Solutions" },
  ]

  return (
    <section 
      ref={fadeRef.ref}
      className={` bg-white transition-all duration-1500 ease-out ${
        fadeRef.isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-16'
      }`}
    >
      <div className="border-b border-gray-200    ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center  h-16 ">
          <div className="flex space-x-8 ">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id)
                  const el = document.getElementById(tab.id)
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className={`text-lg font-medium pb-2 h-16 border-b-2 transition-colors ${
                  activeTab === tab.id ? "text-primary-500 border-primary-500  font-bold" : "text-primary-500 border-transparent hover:text-primary-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <button className="bg-primary-700 text-xs text-center text-white px-3 py-2.5 rounded-lg  font-medium hover:bg-primary-800 transition-colors flex items-center gap-2">Request Demo <ArrowRight className="w-4 h-4 -rotate-40" /></button>
        </div>
      </div>


      
      <div className="bg-[linear-gradient(to_right,_#F4FAFF,_#F4FAFF,_#F4FAFF,_#F3F8FE)]">
        <div id="industries" className="scroll-mt-24 max-w-7xl mx-auto">
          <IndustriesPanel />
        </div>
      </div>
      


    

      {/* Full-width white band for Solutions */}
      <div className="bg-[linear-gradient(to_right,_#F3F9FE,_#F4FAFF,_#EFF1FA,_#DEEDF8)] py-2  ">
        <div id="solutions" className="max-w-7xl mx-auto">
          <SolutionsPanel />
        </div>
      </div>


        {/* Products section */}
      <div className=" bg-[linear-gradient(to_right,_#FFFFFF,_#F3FAFE,_#F3FAFE] py-2   ">
        <div id="products" className="scroll-mt-24 max-w-7xl mx-auto">
          <ProductsPanel />
        </div>
      </div>

    </section>
  )
}